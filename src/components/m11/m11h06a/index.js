import React, { useState } from 'react'
import { ModuleContext } from './CreateModuleContext'
import M11Page01 from './M11Page01'

const M11H06A = () => {
    const [module] =useState('Page 01')
  return (
    <div>
      <h1>M11H06A - useContext</h1>
      <ModuleContext.Provider value={module}>
        <M11Page01 />
      </ModuleContext.Provider>
    </div>
  )
}

export default M11H06A
