import axios from 'axios'
import React, { useEffect, useState } from 'react'

const M30Page01 = () => {
    const [todos, setTodos] = useState([])
    const [photos, setPhotos] = useState([])
    const todosApi = axios.get('https://jsonplaceholder.typicode.com/todos')
    const photosApi = axios.get('https://jsonplaceholder.typicode.com/photos')
    useEffect(() => {
        axios.all([todosApi, photosApi]).then(
            axios.spread((...allData) => {
                setTodos(allData[0].data)
                setPhotos(allData[1].data)
            })
        )
    })
    return (
        <div>
            <h1>M30Page01 - Multiple API Calls</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <ul>
                        <li><h1>Todos</h1></li>
                        {(todos.slice(10, 20)).map(o => <li key={o.id}>{o.title}</li>)}
                    </ul>
                </div>
                <div style={{ flex: 1 }}>
                    <ul>
                        <li><h1>Photos</h1></li>
                        {photos.map(o => <li key={o.id}>{o.title}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default M30Page01