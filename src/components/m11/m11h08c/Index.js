import React, { useCallback, useMemo } from 'react'
import { add, divide, multiply, sub } from './Arithmetic'

const M11H08C = () => {
    const a = 1000, b = 10
    const uMemoAdd = useMemo(() => add(a, b), [a, b])
    const uMemoSub =  useMemo(() => sub(a, b), [a, b])
    const uMemoDivide = useMemo(() => divide(a, b), [a, b])
    const uMemoMultiply = useMemo(() =>multiply(a, b), [a, b])

    const uCallbackAdd = useCallback(() => add(a, b), [a, b])
    const uCallbackSub =  useCallback(() => sub(a, b), [a, b])
    const uCallbackDivide = useCallback(() => divide(a, b), [a, b])
    const uCallbackMultiply = useCallback(() =>multiply(a, b), [a, b])
  return (
    <div>
      <h1>M11H08C - </h1>
      <ul>
        <li>Add: {uMemoAdd}</li>
        <li>Sub: {uMemoSub}</li>
        <li>divide: {uMemoDivide}</li>
        <li>multiply: {uMemoMultiply}</li>
      </ul>
      <ul>
        <li>Add: {uCallbackAdd()}</li>
        <li>Sub: {uCallbackSub()}</li>
        <li>divide: {uCallbackDivide()}</li>
        <li>multiply: {uCallbackMultiply()}</li>
      </ul>
    </div>
  )
}

export default M11H08C
