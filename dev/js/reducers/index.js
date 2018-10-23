import { combineReducers } from "redux";
import UserReducer from "../reducers/reducer-user";
import ActiveUseReducer from "./reducer-active-user";

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUseReducer
})

export default allReducers;