import axios from 'axios'
import React, { useEffect, useState } from 'react'

// https://randomuser.me/api

const M05 = () => {
    const [count, setCount] = useState(0)
    const [randomUserDataJson, setRandomUserDataJson] = useState('')
    const fetchData = () =>{
       return axios.get('https:randomuser.me/api')
        .then(({data}) => {
            console.log(data)
            return data
        })
        .catch( err => console.error(err))
    }
    useEffect(() => {
        fetchData().then( randomData =>{
            setRandomUserDataJson(JSON.stringify(randomData, null, 2) || 'no user Data found')
        })
    },[])
  return (
    <div>
      <h1>Heading</h1>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count+1)}>Increment</button>
    <pre>
        {randomUserDataJson}
    </pre>
    </div>
  )
}

export default M05
