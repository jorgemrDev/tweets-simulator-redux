export const addTweetAction = (state) => {
  return {
    type: "ADD-TWEET",
    payload: state,
  };
};

export const deleteTweetAction = (id) => {
  return {
    type: "DELETE-TWEET",
    payload: id,
  };
};
