import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UsersList from "../../components/UsersList/UsersList";
import getUsersList from "../../store/actions/getUsersList/getUsersList";
import Loaded from "../../components/Loaded/Loaded";



const EmployeesPage = () => {
    const usersList = useSelector(store => {return store.getUsersList.usersList});
    const isLoaded = useSelector((store) => store.getUsersList.isLoaded);
    const dispatch = useDispatch();

    useEffect(() => dispatch(getUsersList()), []);


    return (
        isLoaded ? <UsersList usersList={usersList}/> : <Loaded />
        // <UsersList />
    )

};

export default EmployeesPage;