"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const useCachedTodos = (sourceKey, url, refetchTrigger) => { 
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        let { data: todos, error } = await supabase
          .from('todos')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw new Error(error.message);
        }

        setData(todos);
        setIsPending(false);
        setError(null);

      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };

    fetchTodos();
  }, [sourceKey, url, refetchTrigger]);

  return { data, isPending, error };
};

export default useCachedTodos;