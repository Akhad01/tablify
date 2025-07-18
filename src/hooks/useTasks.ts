import { useState, useEffect } from 'react';
import { fetchTasks, fetchStatuses, updateTask } from '../api/clientApi';
import type { Status, Task } from '../types';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [tasksData, statusesData] = await Promise.all([
          fetchTasks(),
          fetchStatuses()
        ]);
        setTasks(tasksData);
        setStatuses(statusesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleUpdateTask = async (taskId: number, updates: Partial<Task>) => {
    try {
      setLoading(true);
      const updatedTask = await updateTask(taskId, updates);
      setTasks(prev => prev.map(task => 
        task.id === taskId ? updatedTask : task
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  return { tasks, statuses, loading, error, updateTask: handleUpdateTask };
};