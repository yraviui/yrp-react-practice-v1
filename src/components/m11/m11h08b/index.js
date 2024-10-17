import React, { useCallback, useMemo } from 'react'
import { Add } from './Add'

const M11H08B = () => {
    const a = 5, b = 15
    const uMemo = useMemo(() => Add(a, b), [a, b])
    const ucallback = useCallback(() => Add(a, b), [a, b])
  return (
    <div>
      <h1>M11H08B: useMemo: {uMemo} & useCallback: {ucallback()}</h1>
    </div>
  )
}

export default M11H08B
