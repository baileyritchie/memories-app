import * as api from '../api';

// Action creators - functions that return actions, where actions are objs that always have at least a type prop
// redux thunk allows for asynchronous functions
export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPosts(); // object destruction always get response that has data object
    dispatch({type:'FETCH_ALL',payload:data});
  } catch (error) {
    console.log(error.message);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPosts(post);
    dispatch({type:'CREATE',payload:data});
  } catch (error) {
    console.log(error.message);
  }
}
