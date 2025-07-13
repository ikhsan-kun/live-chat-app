const BASE_URL = 'http://localhost:3000';

export function saveToken(token) {
  localStorage.setItem('accessToken', token);
}

export function getToken() {
  return localStorage.getItem('accessToken');
}

export function removeToken() {
  localStorage.removeItem('accessToken');
}

export default BASE_URL;
