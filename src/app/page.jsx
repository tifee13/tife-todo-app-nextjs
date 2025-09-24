"use client";

import TodoPage from "@/components/TodoPage";

const Home = () => {
  return <TodoPage topic="All Todos!" sourceKey='cached_todos' url='https://jsonplaceholder.typicode.com/todos' />;
};

export default Home;