import { SET_CHECKED_USER, DELETE_CHECKED_USER } from "../../constants";


const toggleCheckedUser = (checkedUsersId, id ) => {
    return (dispatch) => {
        if (!checkedUsersId.includes(id)) {
            const addUser= (id) => ({type: SET_CHECKED_USER, payload: [...checkedUsersId, id]});
            dispatch(addUser(id));
        } else {
            let newCheckedUsersId = checkedUsersId.filter(el => el !== id);
            const clearUser = (newCheckedUsersId) => ({type: DELETE_CHECKED_USER, payload: [...newCheckedUsersId]});
            dispatch(clearUser(newCheckedUsersId));
        }
    }
};
export default toggleCheckedUser;