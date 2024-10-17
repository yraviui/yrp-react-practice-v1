import React, { useContext } from 'react'
import { UserContext } from './CreateUseContext';

const TestUser = () => {
    const user = useContext(UserContext);
  return (
    <div>
      <h1>TestUser</h1>
      <h2>TestUser: {`Hello ${user} again!`}</h2>
    </div>
  )
}

export default TestUser
