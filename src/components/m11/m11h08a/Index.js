import React, { useCallback, useMemo, useState } from 'react'
import squareNum from './SquareNum';
import Test from './Test';

const M11H08A = () => {
    const [dep] = useState(8);
    const memoFnReturn = useMemo(() =>Test(dep), [dep]); 
    const callbackFnReturn = useCallback(() =>Test(dep), [dep]); 
    const [number, setNumber] = useState(0)
  // Using useMemo
  const squaredNum = useMemo(()=> {
    return squareNum(number);
  }, [number])
  const [counter, setCounter] = useState(0);
 
 // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  }
   
  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>M11H08A: Use Memo: {memoFnReturn}</h1>
      <h1>M11H08A: Use Callback: {callbackFnReturn()}</h1>
      <input type="number" placeholder="Enter a number"
          value={number} onChange={onChangeHandler}>
      </input>
       
      <div>OUTPUT: {squaredNum}</div>
      <button onClick= {counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  )
}

export default M11H08A

// function to square the value
/* function squareNum(number){
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
  } */
