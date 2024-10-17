import React, { useCallback, useMemo, useState } from 'react'

const M11H08 = () => {
  const [dep] = useState(8);
  const fn = () => 42 + dep; // assuming expensive calculation here
  const memoCallFn = useCallback(fn, [dep]); // (1)
  const memoFnReturn = useMemo(fn, [dep]); // (2)

  return (
    <div>
      <h1>M11H08 - UseMemo and UseCallback</h1>
      <p>useCallback: {memoCallFn()}</p>
      <p>useMemo: {memoFnReturn}</p>
    </div>
  )
}

export default M11H08
