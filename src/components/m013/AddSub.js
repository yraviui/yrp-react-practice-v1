import React, { useState } from 'react'

const AddSub = ({qty, maxQty}) => {
    const [count, setCount] = useState(qty)
    const [isVisible] = useState(false)
  return (
    <div>
      <div>
        <button onClick={()=>setCount(count - 1)} disabled={count === 1 ? !isVisible : isVisible}>-</button>
        {count} 
        <button onClick={()=>setCount(count+1)} disabled={count === maxQty ? !isVisible : isVisible}>+</button></div>
    </div>
  )
}

export default AddSub
