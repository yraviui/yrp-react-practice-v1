import React, { useState } from 'react'
import { UserContext } from './CreateUseContext';
import TestUser from './TestUser';

const M11H06 = () => {
  const [user] = useState("Jesse Hall");
  return (
    <div>
      <h1>M11H06</h1>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <TestUser />
      </UserContext.Provider>
    </div>
  )
}

export default M11H06
