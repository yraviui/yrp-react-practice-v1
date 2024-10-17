import React, { useContext } from 'react'
import { ModuleContext } from './CreateModuleContext'

const M11Page01 = () => {
    const module = useContext(ModuleContext)
  return (
    <div>
      <h1>M11Page01: {module}</h1>
    </div>
  )
}

export default M11Page01
