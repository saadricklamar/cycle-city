import * as actions from "../actions";

describe("actions", () => {
  it("should have a type of ADD_BIKE_PATHS", () => {
    const bikePaths = [];
    const expectedAction = {
      type: "ADD_BIKE_PATHS",
      bikePaths: []
    };
    const result = actions.addBikePaths(bikePaths);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type of TOGGLE_FAVORITE", () => {
    const id = "Healthy Rides";
    const expectedAction = {
      type: "TOGGLE_FAVORITE",
      id
    };
    const result = actions.toggleFavorite(id);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type of IS_LOADING", () => {
    const bool = false;
    const expectedAction = {
      type: "IS_LOADING",
      bool
    };
    const result = actions.isLoading(bool);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type of HAS_ERRORED", () => {
    const string = "error";
    const expectedAction = {
      type: "HAS_ERRORED",
      string
    };
    const result = actions.hasErrored(string);
    expect(result).toEqual(expectedAction);
  });
});
