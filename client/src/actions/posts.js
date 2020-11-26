import { CREATE, UPDATE,DELETE ,FETCH_ALL} from '../constants/actionTypes';
import * as api from '../api';

// Action creators - functions that return actions, where actions are objs that always have at least a type prop
// redux thunk allows for asynchronous functions
export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPosts(); // object destruction always get response that has data object
    dispatch({type:FETCH_ALL,payload:data});
    console.log(data[0].likeCount);
  } catch (error) {
    console.log(error);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPosts(post);
    dispatch({type:CREATE,payload:data});
  } catch (error) {
    console.log(error.message);
  }
}

export const updatePost = (id,post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id,post);
    dispatch({type:UPDATE,payload:data});
  } catch (error) {
    console.log(error);
  }
}
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({type:DELETE,payload:id})
  } catch (error) {
    console.log(error);
  }
}
export const likePost = (id) => async (dispatch) => {
  try {
    const data = await api.likePost(id);
    dispatch({type:UPDATE, payload:data});
  } catch (error) {
    console.log(error);
  }
}