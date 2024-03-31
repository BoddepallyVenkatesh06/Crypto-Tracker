export const hasBeenAdded = (id) => {
  const watchlist = localStorage.getItem("watchlist");
  if (watchlist) {
    let arr = JSON.parse(watchlist);
    if (arr.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
