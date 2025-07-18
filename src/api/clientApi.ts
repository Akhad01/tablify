import type { Status, Task } from "../types";

const API_URL = 'http://localhost:3000';

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.map((task: any) => ({
      ...task,
      registrationDate: task.registrationDate ? new Date(task.registrationDate) : null
    }));
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const fetchStatuses = async (): Promise<Status[]> => {
  try {
    const response = await fetch(`${API_URL}/statuses`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching statuses:', error);
    throw error;
  }
};

export const updateTask = async (taskId: number, updates: Partial<Task>): Promise<Task> => {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};