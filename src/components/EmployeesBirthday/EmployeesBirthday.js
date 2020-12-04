import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";


const EmployeesBirthday = ({ usersList }) => {
    const checkedUsersId = useSelector(store => store.actionsWithCheckedUsers.checkedUsersId);
    const [ monthsNum, setMonthsNum ] = useState([]);
    const [ dobUsers, setBdUsers] = useState({});

    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    useEffect(() => {
        let users = [];
        let dobs = [];
        let map = new Map();
         checkedUsersId.forEach(id => {
             let user = usersList.find(el => el.id === id);
             users = [...users, user];
             dobs = [...dobs, user.dob];
         });
         let monthNumber = dobs.map(date => new Date(date).getMonth());
         let result = monthNumber.filter((item, index) => monthNumber.indexOf(item) === index).sort();

         result.forEach(el => {
             let x = [];
             users.forEach(user => {
                 if (new Date(user.dob).getMonth() === el) {
                     x = [...x, user];
                     map.set(el, x);
                 }
             })
         });
        setMonthsNum(result);
        setBdUsers(map);
        localStorage.setItem('checkedUsersId', JSON.stringify(checkedUsersId));
    }, [checkedUsersId, usersList]);

    const formatDate = (date) => {
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
        return `${day} ${monthNames[monthIndex]}, ${year} year`;
    };

    const implementLists = monthsNum.map(el => {
        let users = dobUsers.get(el);
        let dobList = [];
        users.map(user => {
            let birthday = formatDate(new Date(user.dob));
            return (
                dobList = [...dobList, <li key={user.id} style={{listStyleType:"circle"
                }}><strong>{user.lastName} {user.firstName}</strong> - {birthday}</li>]
            )
        });
        return (
            <div key={el}>
                <h3>{monthNames[el]}</h3>
                <ul>
                    {dobList}
                </ul>
            </div>
        )
    });

    const dobList = checkedUsersId.length === 0 ?
        <h3>No selected employees</h3> :
        <div className="birthday-wrap">{ implementLists }</div>;

    return (
        <div className="dob__wrap">
            <h2> Employees Birthdays</h2>
            {dobList}
        </div>
    )

};

export default EmployeesBirthday;