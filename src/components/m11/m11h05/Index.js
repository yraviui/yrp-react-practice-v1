import React, { useEffect, useLayoutEffect } from 'react'

const M11H05 = () => {
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  },[])
  useEffect(() => {
    console.log('useEffect')
  },[])
  return (
    <div>
      <h1>M11H05: Hook: useEffectLayout</h1>
    </div>
  )
}

export default M11H05
