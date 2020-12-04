import {combineReducers} from "redux";
import getUsersReducer from "./getUsersListReducer/getUsersListReducer";
import actionsWithCheckedUsersReducer from "./actionsWithCheckedUsersReducer/actionsWithCheckedUsersReducer";



export const rootReducer = combineReducers({
    getUsersList: getUsersReducer,
    actionsWithCheckedUsers: actionsWithCheckedUsersReducer
});