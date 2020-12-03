import React, {useState} from "react";
import {useSelector} from "react-redux";

const UserCard = ({ list }) => {
    // const usersList = useSelector(store => {return store.getUsersList.usersList});
    const [ remember, setRemember ] = useState(false);

    const skeleton = list.map(user => {
            return (
                <li key={user.id}>
                    <label>
                        {user.lastName} {user.firstName}
                        <input
                            className="form-select"
                            name="remember"
                            type="checkbox"
                            checked={remember}
                            onChange={({ target : { checked}}) => {
                                setRemember(checked)
                            }}
                        />
                    </label>
                </li>

            )

        });
        // let wrap = document.createElement("div");
        // wrap.setAttribute("id", "alpha-list");
        //
        //     let alpha = String.fromCharCode(code);
        //     return (
        //         <li key={code}>
        //             <h3 className="alpha-title">${alpha.toUpperCase}</h3>
        //         </li>)
        // }


    return (
      <ul id="alpha-list">
          {skeleton}
      </ul>

    );



};

export default UserCard;