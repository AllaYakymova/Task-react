import React from 'react'
import CheckBox from '../Checkbox/CheckBox'
import Proptypes, { object } from 'prop-types'

const UserCard = ({ list }) => {
  const letterUsersList = list.map((user) => {
    return (
      <li key={user.id} className="letter-list">
        <strong>
          {user.lastName} {user.firstName}
        </strong>
        <CheckBox
          id={user.id}
          lastName={user.lastName}
          firstName={user.firstName}
        />
      </li>
    )
  })
  return <>{letterUsersList}</>
}

UserCard.propTypes = {
  list: Proptypes.arrayOf(object),
}

export default UserCard
