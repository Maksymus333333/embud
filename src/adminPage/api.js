// api.js

import axios from 'axios';

export const fetchProjects = async () => {
  try {
    const response = await axios.get('http://localhost:5001/api/projects');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch projects');
  }
};