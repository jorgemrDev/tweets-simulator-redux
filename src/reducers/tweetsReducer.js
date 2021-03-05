const initialProps = {
  tweets: [],
};

export default function reducer(state = initialProps, action) {
  switch (action.type) {
    case "ADD-TWEET":
      return {
        ...state,
        tweets: [...state.tweets, action.payload],
      };

    case "DELETE-TWEET":
      return {
        ...state,
        tweets: state.tweets.filter((tweet) => tweet.id !== action.payload),
      };

    default:
      return state;
  }
}
