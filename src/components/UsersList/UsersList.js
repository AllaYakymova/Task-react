import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loaded from "../Loaded/Loaded";
import getUsersList from "../../store/actions/getUsersList/getUsersList";
import EmployeesBirthday from "../EmployeesBirthday/EmployeesBirthday";
import UserCard from "../UsersCard";

const alphabet = (start, end) => {
    let alphaList = [];
    for (let code = start; code <= end; code++) {
        let alpha = String.fromCharCode(code).toUpperCase();
        alphaList = [...alphaList, alpha];
    }
    return alphaList;
};

const filterElements = (arr) => {
    let alphaList = [];
    let alphaArr = alphabet(65, 90);
    alphaArr.forEach(letter => {
        let letterNameArr = arr.filter(e => e.lastName.toUpperCase().startsWith(letter));
        alphaList = [...alphaList, letterNameArr];
    });
    return alphaList
};

const UsersList = ({ usersList }) => {
    // const usersList = useSelector(store => {return store.getUsersList.usersList});
    // const isLoaded = useSelector((store) => store.getUsersList.isLoaded);
    const dispatch = useDispatch();
    const [structuredList, setStructuredList] = useState([]);
    const [remember, setRemember] = useState(false);


    useEffect(() => {
        let list = filterElements(usersList);
        setStructuredList(list);
    }, []);

    // useEffect(() => dispatch(getUsersList()), []);

    //     let alphaArr = alphabet(65, 90);
    //     for (let code = 65; code <= 90; code++) {
    //         let alpha = String.fromCharCode(code);
    //         let letterNameArr = usersList.filter(e => e.lastName.toUpperCase().startsWith(alpha));
    //         letterNameArr.length === 0 ? letterNameArr.push(alpha) : letterNameArr;
    //         letterNameArr.forEach(item => {
    //         item.map(users => {
    //             return (
    //                 <li key={code}>
    //                     <h3 className="alpha-title">${alpha.toUpperCase}</h3>
    //                 </li>
    //         )
    //     })
    // })
    //     }
    // };
    const structuredUsersList = (structuredList) => {
        let i = 0;
            structuredList.forEach((alphaList) => {
        let alpha = String.fromCharCode(i + 65).toUpperCase();
                console.log(alpha);
        i++;
        return (
            <li key={alpha} className="employees__part">
                <h3 className="alpha-title h3">alpha</h3>
                <ul>
                    <UserCard
                        list={alphaList}
                    />
                </ul>
            </li>)
        });
    };
    // let structuredUsersList = (structuredList) => {
    //     let list = structuredList[0];
    //     console.log(list);
    //     let alpha = String.fromCharCode(65).toUpperCase();
    //     return (
    //         <li key={alpha} className="employees__part">
    //             <h3 className="alpha-title h3">alpha</h3>
    //             <ul>
    //                 <UserCard
    //                     list={list}
    //                 />
    //             </ul>
    //         </li>)
    // };


    // const loadedUsersList = (isLoaded ? structuredUsersList : <Loaded />);
    return (
        <div className="employees__wrap col-9">
            <ul className="employees__part">
                {structuredUsersList(structuredList)}
                {/*{structuredUsersList}*/}
            </ul>
            {/*<EmployeesBirthday />*/}
        </div>

    )

};

export default UsersList;

