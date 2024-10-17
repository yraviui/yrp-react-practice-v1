import React, { useState } from 'react'

const Child = ({obj, addProduct1, cartItems, qty}) => {
    //console.log('child obj: ', obj)

    const [val, setVal] = useState(0)
    const handleAdd = () => (setVal(val+1))
    const handleDel = () => (setVal(val-1))

  return (
    <div>
      <button onClick={()=>handleDel()}>-</button> {val} <button onClick={()=>handleAdd()}>+</button>
      <button onClick={() => addProduct1(obj, val, cartItems)}>Add Product</button> 
    </div>
  )
}

export default Child
