const reducer = (posts = [] ,action) => { // first arg is state, 2nd are actions beneficial to set state to an init value
  switch(action) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload]; //keep the current posts state but add a new one
    default:
      return posts;
  }
}

export default reducer;