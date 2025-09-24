"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

const useCachedTodoById = (id) => {
  const [todo, setTodo] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        if (!id) {
          setIsPending(false);
          return;
        }
        
        let { data, error } = await supabase
          .from('todos')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          throw new Error(error.message);
        }

        setTodo(data);
        setIsPending(false);
        setError(null);

      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };
    fetchTodo();
  }, [id]);

const addTodo = async ({ title, completed, priority }) => {
  try {
    const { data, error } = await supabase
      .from('todos')
      .insert([{ title, completed, priority }])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }
    
    router.push(`/todos/${data.id}`);

  } catch (err) {
    console.error("Failed to add todo:", err);
    setError(err.message);
  }
};

  const updateTodo = async (updatedFields) => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .update(updatedFields)
        .eq('id', id)
        .select()
        .single();
        
      if (error) {
        throw new Error(error.message);
      }

      setTodo(data);
      router.push(`/todos/${id}`);
      
    } catch (err) {
      console.error("Failed to update todo:", err);
      setError(err.message);
    }
  };

  const deleteTodo = async () => {
    try {
      const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);
        
      if (error) {
        throw new Error(error.message);
      }

      setTodo(null);
      router.push(`/`);

    } catch (err) {
      console.error('Failed to delete todo:', err);
      setError(err.message);
    }
  };

  return { 
    todo, 
    isPending, 
    error, 
    updateTodo: id ? updateTodo : () => {},
    deleteTodo: id ? deleteTodo : () => {}, 
    addTodo 
  };
};

export default useCachedTodoById;