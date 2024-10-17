import React from 'react'
import UpdatedComponent from './HOC'

const Person1 = ({handleIncrease, money}) => {
  return (
    <div>
      <h1>Person 1: Jimmy is offering: ${money} <button onClick={handleIncrease}>Increase Money</button></h1>
      
    </div>
  )
}

export default UpdatedComponent(Person1)
