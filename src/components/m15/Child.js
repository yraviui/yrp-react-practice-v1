import React from 'react'
import HOC from './HOC'

const Child = ({money, handleDecrease, handleIncrease}) => {
  return (
    <div>
      <button onClick={() => handleDecrease()}>Decrease 5: </button> {money} <button onClick={() => handleIncrease()}>Increase 5: </button>
    </div>
  )
}

export default HOC(Child)
