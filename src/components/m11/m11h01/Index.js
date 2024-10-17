import React, { useRef, useState } from 'react'

const M11H01 = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Ravi')
  const [isVisible] = useState(false)
  const nameRef = useRef()
  const handleChange = (e) => setName(nameRef.current.value)
  const handleName = () => console.log('name: ', name)
  
  return (
    <div>
      <h1>Hooks: useState, useRef</h1>
      <div><button onClick={()=>setCount(count - 1)} disabled={count === 0 ? !isVisible : isVisible}>-</button>{count} <button onClick={()=>setCount(count+1)}>+</button></div>
      <div>Name: {name} <input ref={nameRef} type='text' value={name} onChange={handleChange} /><button onClick={handleName}>Name Change by useRef</button></div>
    </div>
  )
}

export default M11H01
