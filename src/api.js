import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with the actual API URL

export const fetchTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data;
};

export const addTaskToAPI = async (task) => {
  const response = await axios.post(`${API_BASE_URL}/tasks`, { task });
  return response.data;
};
