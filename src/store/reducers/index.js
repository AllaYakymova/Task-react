import {combineReducers} from "redux";
import getUsersReducer from "./getUsersListReducer/getUsersListReducer";


export const rootReducer = combineReducers({
    getUsersList: getUsersReducer,
});