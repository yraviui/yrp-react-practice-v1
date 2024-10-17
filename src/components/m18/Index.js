import axios from 'axios'
import React, { useEffect, useState } from 'react'

const M18 = () => {
  const [todos, setTodos] = useState([])
  const [photos, setPhotos] = useState([])


  const fetchData = () => {

    const todosAPI = 'https://jsonplaceholder.typicode.com/todos'
    const photosAPI = 'https://jsonplaceholder.typicode.com/photos'

    const getTodosAPI = axios.get(todosAPI)
    const getPhotosAPI = axios.get(photosAPI)

    axios.all([getTodosAPI, getPhotosAPI]).then(
      axios.spread((...allData) => {
        const allDataTodos = allData[0]
        const allDataPhotos = allData[1]
        console.log('allDataTodos: ', allDataTodos)
        console.log('allDataPhotos: ', allDataPhotos)
      })
    )

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Multiple API Call</h1>
    </div>
  )
}

export default M18
