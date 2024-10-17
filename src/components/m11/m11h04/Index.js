import React, { useRef } from 'react'

const M11H04 = () => {
  const inputRef = useRef(null)
  const handleChangeName = () => console.log(inputRef.current.value)
  return (
    <div>
      <h1>M11H04 Hooks: useRef</h1>
      <input type='text' ref={inputRef} /><button onClick={handleChangeName}>Change Name</button>
    </div>
  )
}

export default M11H04
