import axios from 'axios'
import React, { useEffect, useState } from 'react'

const M22D = () => {
    const [val, setVal] = useState('')
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            res => {
                console.log(res.data)
                setTodos(res.data)
            }
        ).catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>M22D</h1>
            <input type='text' onChange={(e) => setVal(e.target.value)} />
            {val &&
                <ul>
                    {todos.filter(o => o.title.toLowerCase().startsWith(val.toLowerCase()) && o.title.toLowerCase() !== val.toLowerCase()).map(obj => <li key={obj.id}>{obj.title}</li>)}
                </ul>
            }
        </div>
    )
}

export default M22D