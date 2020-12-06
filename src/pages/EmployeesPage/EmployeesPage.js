import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UsersList from '../../components/UsersList/UsersList'
import getUsersList from '../../store/actions/getUsersList/getUsersList'
import Loaded from '../../components/Loaded/Loaded'
import EmployeesBirthday from '../../components/EmployeesBirthday/EmployeesBirthday'

const EmployeesPage = () => {
  const usersList = useSelector((store) => {
    return store.getUsersList.usersList
  })
  const isLoaded = useSelector((store) => store.getUsersList.isLoaded)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(getUsersList()), 2000)
  }, [dispatch])

  const mainPage = isLoaded ? (
    <>
      <UsersList usersList={usersList} />
      <EmployeesBirthday usersList={usersList} />
    </>
  ) : (
    <Loaded />
  )

  return <>{mainPage}</>
}

export default EmployeesPage
