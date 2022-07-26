const postReducers = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return action.payload;
    default:
      return state;
  }
};

export default postReducers;
