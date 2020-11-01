import axios from 'axios';
// its necessary change putting the IP local machine.

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;