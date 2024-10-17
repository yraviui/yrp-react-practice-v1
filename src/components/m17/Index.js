import React, { useEffect, useState } from 'react'
import { getTodos } from './APIService'

const M17 = () => {
    const [todosServiceData, setTodosServiceData] = useState([])
    useEffect(() => {
        getTodos().then( (res) => setTodosServiceData(res.data) ).catch(err => console.log('Error Test: ',err))
    },[])
  return (
    <div>
      <h1>M17 - Service Call</h1>
      <ul>
      {todosServiceData.map((o, i) => {
        return <li key={i}>{o.title}</li>
      })}
      </ul>
    </div>
  )
}

export default M17
