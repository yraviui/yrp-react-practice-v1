import React, { useState } from 'react'
import Child from './Child'

const M25 = () => {
    const [active, setActive] = useState(false)
    console.log('active: ', active)
  return (
    <div>
        <h1>M25 - {active}</h1>
        <Child setIsActive={(newActive) => setActive(newActive)} />
    </div>
  )
}

export default M25