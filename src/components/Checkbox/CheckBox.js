import React, { useState } from 'react'
import toggleCheckedUser from '../../store/actions/actionsWithCheckedUsers/actionsWithCheckedUsers'
import { useDispatch, useSelector } from 'react-redux'
import Proptypes from 'prop-types'

const CheckBox = ({ id }) => {
  const checkedUsersId = useSelector(
    (store) => store.actionsWithCheckedUsers.checkedUsersId
  )
  const [checked, setChecked] = useState(checkedUsersId.includes(id))
  const dispatch = useDispatch()

  return (
    <input
      name="checked"
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => {
        setChecked(e.target.checked)
        dispatch(toggleCheckedUser(checkedUsersId, id))
      }}
    />
  )
}

CheckBox.propTypes = {
  id: Proptypes.string,
}

export default CheckBox
