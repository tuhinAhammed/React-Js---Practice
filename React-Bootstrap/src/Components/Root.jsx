import React, { useState } from 'react'
import Home from './Home'
import Login from './Login'

const Root = () => {
    const [pageShow , setPageShow] = useState(true)
    const data = "I am from parent element"

    const sentToChild = (data) => {
        console.log(data.title);
    }
    
    if (pageShow) {
        return <Home data = {data} childDataGet ={sentToChild}/>
    }
    else{
        return <Login/>
    }
}

export default Root