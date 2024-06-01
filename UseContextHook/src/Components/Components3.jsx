import React, { useContext } from 'react'
import {UserContext} from "./UserContext"

const Components3 = () => {
    const {user , text} = useContext(UserContext)
console.log(user);

  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.id}</h2>
    </div>
  )
}

export default Components3