import React, { useState } from 'react'
import { Context } from './Context';
import ChildB from './ChildB';
import ChildA from './ChildA';

const M11h06B = () => {
const [context, setContext] = useState("default context value");
  return (
    <div>
        <h1>M11h06B</h1>
        <Context.Provider value={[context, setContext]}>
            <ChildA />
            <ChildB />
        </Context.Provider>
    </div>
  )
}

export default M11h06B