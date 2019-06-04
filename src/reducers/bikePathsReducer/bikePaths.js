export const bikePaths = (state = [], action) => {
  switch (action.type) {
    case "ADD_BIKE_PATHS":
      return [...action.bikePaths];
    case "TOGGLE_FAVORITE":
      state.filter(path => {
        if (path.id === action.id) {
          return (path.favorited = true);
        }
      });
      return [...state];
    default:
      return state;
  }
};

export default bikePaths;
