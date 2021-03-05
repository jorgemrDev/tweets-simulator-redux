export const getStateLocalStorage = () => {
  const tweetsStorage = localStorage.getItem("tweets");
  if (tweetsStorage === null) return undefined;
  return JSON.parse(tweetsStorage);
};

export const setLocalStorage = (state) => {
  localStorage.setItem("tweets", JSON.stringify(state));
};
