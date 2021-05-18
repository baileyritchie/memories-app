import axios from 'axios';

const API = axios.create({ baseURL:'https://baileyritchie-memories-backend.zeet.app/',withCredentials:true});

// send token to backend via auth headers
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    // if user is signed in (data exists in local storage)
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }
  return req;
});

// post data
export const fetchPosts = () => API.get('/posts');
export const createPosts = (newPost) => API.post('/posts', newPost);
export const updatePost = (id,updatedPost) => API.patch(`/posts/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// authentication
export const signIn = (formData) => API.post('/users/signin',formData);
export const signUp = (formData) => API.post('/users/signup',formData);