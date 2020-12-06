import { Route, Switch, Redirect } from 'react-router-dom'
import EmployeesPage from '../pages/EmployeesPage/EmployeesPage'
import React from 'react'

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/employees' />
      <Route exact path="/employees" component={EmployeesPage} />
    </Switch>
  )
};

export default AppRoutes
