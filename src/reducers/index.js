import { combineReducers } from "redux";
import { bikePaths } from "../reducers/bikePathsReducer/bikePaths";
import { hasErrored } from "..//reducers/hasErroredReducer/hasErrored";
import { isLoading } from "../reducers/isLoadingReducer/isLoading";

const rootReducer = combineReducers({
  bikePaths,
  hasErrored,
  isLoading
});

export default rootReducer;
