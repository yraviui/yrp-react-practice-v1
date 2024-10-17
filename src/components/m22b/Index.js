import axios from 'axios'
import React, { useEffect, useState } from 'react'

const M22B = () => {
    const [value, setValue] = useState('')
    const [data, setData] = useState([])
    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => setData(res.data))
    }
    useEffect(() => {
        getUsers()
    },[])
  return (
    <div>
        <h1>M22B - Search Auto Suggestions - by - includes</h1>
        <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Type to Search'/>
        <hr/>
        <h2>{value && data.filter( o => o.name.toLowerCase().includes(value.toLowerCase()) && o.name !== value.toLowerCase()).map( o => <div key={o.id} onClick={(e) => setValue(o.name)}>{o.name}</div>)}</h2>
    </div>
  )
}

export default M22B