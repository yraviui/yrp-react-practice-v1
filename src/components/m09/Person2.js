import React from 'react'
import UpdatedComponent from './HOC'

const Person2 = ({handleIncrease, money}) => {
  return (
    <div>
      <h1>Person 2: John is offering: ${money} <button onClick={handleIncrease}>Increase Money</button></h1>
      
    </div>
  )
}

export default UpdatedComponent(Person2)
