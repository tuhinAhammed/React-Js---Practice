import React, { useContext } from 'react'
import Components3 from './Components3'
import {UserContext} from "./UserContext"
const Components2 = () => {

    const {text} = useContext(UserContext)
    console.log(text);
  return (

    <div>
        <Components3/>
        <h1>{text}</h1>
    </div>
  )
}

export default Components2