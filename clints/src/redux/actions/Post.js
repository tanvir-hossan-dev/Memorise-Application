export const getPost = (data) => {
  return {
    type: "FETCH_ALL",
    payload: data,
  };
};
