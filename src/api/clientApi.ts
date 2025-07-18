import { Client } from '../types'; 

const API_BASE_URL = 'http://localhost:3001';

export const fetchClients = async (): Promise<Client[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/clients`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Client[] = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении данных клиентов:", error);
    throw error;
  }
};