export const hasErrored = (state = "", action) => {
  switch (action.type) {
    case "HAS_ERRORED":
      return action.string;
    default:
      return state;
  }
};

export default hasErrored;
