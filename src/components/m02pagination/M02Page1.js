import axios from 'axios'
import React, { useEffect, useState } from 'react'

const pagesList = [15, 20, 25]

const M02Page1 = () => { // https://jsonplaceholder.typicode.com/todos
    const [todos, setTodos] = useState([])
    const [todosPerPage, setTodosPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then( o => setTodos(o.data))
        .catch( err => console.log(err))
    },[])
    /* ---------------- Pagination ---------------- */
    const noOfPages = Math.ceil(todos.length/todosPerPage); console.log(noOfPages)
    const pages = [...Array(noOfPages+1).keys()].slice(1); console.log(pages)
    const indexOfLastTodo = currentPage * todosPerPage
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage
    const visibleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo)
    const prevPage = () => { if(currentPage !== 1) setCurrentPage(currentPage - 1)}
    const nextPage = () => { if(currentPage !== noOfPages) setCurrentPage(currentPage + 1)}
    /* ---------------- Pagination //-------------- */
  return (
    <div>
      <h1>M02Page1 <select onChange={(e) => setTodosPerPage(e.target.value)}>{pagesList.map((o, i) => <option key={i}>{o}</option>)}</select></h1>
      <ul>
        {visibleTodos.map( (o, i) => <li key={i}>{o.title}</li>)}
      </ul>
      <ul className="pagination">
        <li onClick={prevPage}>Prev</li>
        {pages.map((o, i) => <li key={i} className={currentPage === o ? 'active' : ''} onClick={() => setCurrentPage(o)}>{o}</li>)}
        <li onClick={nextPage}>Next</li>
      </ul>
    </div>
  )
}

export default M02Page1
