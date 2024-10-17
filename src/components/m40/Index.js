import React, { useState } from 'react'
import StatusUpdate from './StatusUpdate'
import { useTodoStatus } from './StatusContext'

const M40 = () => {
    const cStatus = useTodoStatus()
    const [todos] = useState(todoItems)
    console.log('cStatus: ', cStatus)
    return (
        <div>
            <h1>M40</h1>
            <ul>
                {todos.map((o, i) =>
                    <li key={i}>{o.status}</li>
                )}
            </ul>
            <StatusUpdate />
        </div>
    )
}

export default M40
const todoItems = [
    {
        "description": "About React",
        "todoItem": "Learn React",
        "status": "To Do",
        "id": "ItMtaZmCnzSSdQVaMe05"
    },
    {
        "status": "To Do",
        "description": "About Node",
        "todoItem": "Learn Node",
        "id": "JNqPSbkD9VAzuvNmSItb"
    },
    {
        "description": "About Java",
        "status": "To Do",
        "title": "Learn Java",
        "id": "yaucYoWhN8EgDkruqUum"
    }
]