import React, { useContext } from 'react'
import { Context } from './Context';

const ChildB = () => {
    const [context] = useContext(Context);
  return (
    <div>ChildB: {context}</div>
  )
}

export default ChildB