import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard/UsersCard'
import Proptypes, { object } from 'prop-types'

const UsersList = ({ usersList }) => {
  const [structuredList, setStructuredList] = useState([])

  useEffect(() => {
    let list = filterElements(usersList, alphabet(65, 90))
    setStructuredList(list)
  }, [usersList])

  const alphabet = (start, end) => {
    let alphaList = []
    for (let code = start; code <= end; code++) {
      let alpha = String.fromCharCode(code).toUpperCase()
      alphaList = [...alphaList, alpha]
    }
    return alphaList
  }

  const filterElements = (arr, filterArr) => {
    let list = []
    filterArr.forEach((filter) => {
      let letterNameArr = arr.filter((e) =>
        e.lastName.toUpperCase().startsWith(filter)
      )
      list = [...list, letterNameArr]
    })
    return list
  }

  const structuredUsersList = structuredList.map((alphaList, i) => {
    let alpha = String.fromCharCode(i + 65)
    let users =
      alphaList.length === 0 ? (
        <span>-----</span>
      ) : (
        <UserCard list={alphaList} />
      )
    return (
      <div key={alpha} className="letter__employees">
        <h4 className="alpha-title">{alpha}</h4>
        <ul>{users}</ul>
      </div>
    )
  })

  return (
    <div>
      <h2> Employees</h2>
      <div className="employees__wrap">{structuredUsersList}</div>
    </div>
  )
}

UsersList.propTypes = {
  usersList: Proptypes.arrayOf(object),
}

export default UsersList
