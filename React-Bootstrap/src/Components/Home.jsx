import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Home = ({data , childDataGet }) => {
// state
const [childData , setChildData] = useState()
useEffect(() => {
   async function fetch (){
        const fetchData = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        setChildData(fetchData.data);
   }
   fetch()
})
childDataGet(childData)
  return (
    <div>{data}</div>
  )
}

export default Home