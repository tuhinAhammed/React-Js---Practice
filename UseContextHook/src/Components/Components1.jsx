import React,{useState} from 'react'
import Components2 from './Components2';
import {UserContext} from "./UserContext"
const Components1 = () => {

    const [user , setUser] = useState({
        name : "Tuhin" ,
        id : 12
    })
    const [text , setText] = useState("I am Usibg useContext Hook")
  return (
    <div>
        <UserContext.Provider value = {{user , text}}>
        <Components2 />
        </UserContext.Provider>
    </div>
  )
}

export default Components1