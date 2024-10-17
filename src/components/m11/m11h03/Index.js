import axios from 'axios'
import React, { useEffect } from 'react'

const M11H03 = () => {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then( res => console.log(res.data))
  },[])
  return (
    <div>
      <h1>M11H03: useEffect</h1>
    </div>
  )
}

export default M11H03
