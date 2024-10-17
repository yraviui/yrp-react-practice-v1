import React, { useState } from 'react'

const Child = ({obj, addProduct, cartItems, qty}) => {
    
    const [val, setVal] = useState(0)
    
    const handleAdd = () => (setVal(val+1))
    const handleDel = () => (setVal(val-1))
    
  return (
    <div>
      {/* <h1>Child: {val}</h1> */}
      <li>{obj.name} val: {val} qty: {qty}
      <button onClick={()=>handleDel()}>handleDel from Child</button>
      {val}
      <button onClick={()=>handleAdd()}>handleAdd from Child</button>
      <button onClick={() => addProduct(obj, val, cartItems)}>Add Product</button> 
      </li>
    </div>
  )
}

export default Child
