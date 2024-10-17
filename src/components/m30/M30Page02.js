import axios from 'axios'
import React, { useEffect, useState } from 'react'

const M30Page02 = () => {
    const [todos, setTodos] = useState([])
    const getTodos = async () => {
        try {
            const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
            console.log('data: ', data)
            setTodos(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            <h1>M30Page01 - API</h1>
            <ul>
                <li><h1>Todos</h1></li>
                {todos.map(o => <li key={o.id}>{o.title}</li>)}
            </ul>
        </div>
    )
}

export default M30Page02