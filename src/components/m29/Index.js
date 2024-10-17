import axios from 'axios'
import React, { useEffect, useState } from 'react'

const M29 = () => {
    const [search, setSearch] = useState('')
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log('res.data: ', res.data)
                setTodos(res.data)
            }
            )
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>M29 - API Call</h1>
            <div>
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <ul>
                {search && todos.filter(o => o.title.toLowerCase().startsWith(search.toLowerCase()) && o.title !== search.toLowerCase())
                    .map(o => <li key={o.id}>{o.title}</li>)
                }
                {/* {todos.map(o => <li key={o.id}>{o.title}</li>)} */}
            </ul>
        </div>
    )
}

export default M29