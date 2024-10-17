import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// https://www.youtube.com/watch?v=szXMBGKGTdE
//https://jsonplaceholder.typicode.com/todos

const pagesList = [10, 15, 20]

const M02 = () => {
  const [todos, setTodos] = useState([])
  const [todosPerPage, setTodosPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err))
  }, [])

  const numOfTotalPages = Math.ceil(todos.length / todosPerPage)
  // const pages = [...Array(numOfTotalPages + 1).keys()].slice(1)
  const pages = Array.from(Array(numOfTotalPages).keys()).slice(1)
  console.log(pages)

  const indexOfLastTodo = currentPage * todosPerPage
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage

  const visibleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo)

  const prevPageHandler = () => { if (currentPage !== 1) setCurrentPage(currentPage - 1) }
  const nextPageHandler = () => { if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1) }


  return (
    <div className='p10'>
      <h5>Pagination - <Link to='/m02p1'>M02 Page1</Link></h5>
      <div className='p10'>
        Select Per page:
        <select onChange={(e) => setTodosPerPage(e.target.value)}>
          {pagesList.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      {visibleTodos.map((o, i) => <p key={i}>{o.title}</p>)}
      <ul className="pagination">
        <li onClick={prevPageHandler}>&laquo;</li>
        {pages.map(o => <li key={o} className={`${currentPage === o ? 'active' : ''}`} onClick={() => setCurrentPage(o)}>{o}</li>)}
        <li onClick={nextPageHandler}>&raquo;</li>
      </ul>
    </div>
  )
}

export default M02
