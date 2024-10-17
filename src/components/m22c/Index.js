import React, { useEffect, useState } from 'react'
import axios from 'axios';

const M22C = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const getTodos = async() => {
        try {
            const todosData = await axios.get('https://jsonplaceholder.typicode.com/todos')
            console.log('todosData.data: ', todosData.data)
            setTodos(todosData.data)
        } catch (error) {
            console.log(error)
        }
    }
    /* const handleSearch = (e) => {
        e.preventDefault()
        console.log('e.target.value: ', e.target.value)
        setValue(e.target.value)
    } */
    useEffect(() => {
        getTodos()
        // eslint-disable-next-line
    },[])
  return (
    <div>
         <h1>M22C - Search Auto Suggestions - by - includes</h1>
         <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}  />
         <hr/>
         <h2>{value && todos.filter( o => o.title.toLowerCase().includes(value.toLowerCase()) && o.title !== value.toLowerCase()).map( o => <div key={o.id} onClick={(e) => setValue(o.title)}>{o.title}</div>)}</h2>
    </div>
  )
}

export default M22C