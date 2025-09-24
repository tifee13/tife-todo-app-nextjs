"use client";

import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import SearchFilter from './SearchFilter';
import Pagination from './Pagination';
import useCachedTodos from '../hooks/useCachedTodos';

const TodoPage = ({ topic = "Todos", sourceKey, url }) => {
  const [refresh, setRefresh] = useState(0);
  const { data: todos, isPending, error } = useCachedTodos(sourceKey, url, refresh);

  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredTodos = todos?.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all'
      ? true
      : String(todo.completed).toLowerCase() === filterStatus.toLowerCase();
    
    const matchesPriority = sourceKey === 'priority_todos' ? todo.priority === true : true;

    return matchesSearch && matchesStatus && matchesPriority;
  })?.sort((a, b) => b.id - a.id);
  
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos?.slice(indexOfFirstTodo, indexOfLastTodo);
  
  const totalPages = Math.ceil((filteredTodos?.length || 0) / todosPerPage);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);
  
  return (
    <div className="todo-page">
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {currentTodos && <TodoList todos={currentTodos} topic={topic} />}
      {filteredTodos && filteredTodos.length > todosPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default TodoPage;