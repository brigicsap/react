const api = 'https://jsonplaceholder.typicode.com';

// Generate a unique token for storing your data on the backend server.
let token = localStorage.token;
if (!token)
  {token = localStorage.token = Math.random().toString(36).substr(-8);};

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const get = (userId) =>
  fetch(`${api}/users/${userId}`, { headers })
    .then(res => res.json())
    .then(data => data.post);

export const getAll = () =>
  fetch(`${api}/users/`, { headers })
    .then(res => res.json())
    .then(data => data);
