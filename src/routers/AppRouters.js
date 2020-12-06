import { Route, Switch } from 'react-router-dom'
import EmployeesPage from '../pages/EmployeesPage/EmployeesPage'
import EntrancePage from '../pages/EntrancePage/EntrancePage'
import React from 'react'

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={EntrancePage} />
      <Route exact path="/employees" component={EmployeesPage} />
    </Switch>
  )
}

export default AppRoutes
