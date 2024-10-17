import React from 'react'

const Child = ({ setIsActive }) => {
  return (
    <button onClick={() => setIsActive(true)}>Click me Child</button>
  )
}

export default Child