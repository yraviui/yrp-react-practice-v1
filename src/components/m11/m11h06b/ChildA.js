import React, { useContext } from 'react'
import { Context } from './Context';

const ChildA = () => {
  const [context, setContext] = useContext(Context);
  console.log('context: ', context)
  return (
    
    <div>
     <h1>ChildA</h1>
      <button onClick={() => setContext("New Value")}>
        Change Context Value
      </button>
    </div>
  )
}

export default ChildA