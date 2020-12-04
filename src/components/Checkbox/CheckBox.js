import React, {useState} from 'react';
import toggleCheckedUser from "../../store/actions/actionsWithCheckedUsers/actionsWithCheckedUsers";
import {useDispatch, useSelector} from "react-redux";


const CheckBox = ({ id }) => {
    const checkedUsersId = useSelector(store => store.actionsWithCheckedUsers.checkedUsersId);
    const [checked, setChecked] = useState(checkedUsersId.includes(id));
    const dispatch = useDispatch();

    return (
        <input
            className="form-select"
            name="checked"
            type="checkbox"
            id = {id}
            checked={checked}
            onChange={() => {
                dispatch(toggleCheckedUser(checkedUsersId, id));
                checkedUsersId.includes(id) ? setChecked(false) : setChecked(true);
            }}
        />
    )
};

export default CheckBox;