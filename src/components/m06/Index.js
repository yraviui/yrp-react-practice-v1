import React, { useState } from 'react'

const hobbiesList = ['Play Cricket', 'Play Video Game', 'Reading Books']
// [ ] Play Cricket (x)
const M06 = () => {
  const [selData, setSelData ] = useState(hobbiesList)
  const [checked, setChecked] = useState(false)
  const [cIndex, setCIndex] = useState()
  const handleDelete = (id) => {

    console.log('id: ', id)
    const updateData = selData.filter((o, i) => i !== id )
    console.log(updateData)
    setSelData(updateData)

  }
  const handleChange = (val, i) => {
    console.log('val, i: ', val, i)
    setChecked(val)
    setCIndex(i)
  }
  return (
    <div>
      <h1>List of checkbox and delete button</h1>
      {/* <h2>{selval}</h2> */}
      <ul>
        {selData.map((o, i) => {
          return <li key={i}>
            <input value={o} type='checkbox' onChange={(e) => handleChange(e.target.checked, i)} /> 
            {o} 
            {(checked === true && cIndex === i) &&  (<button onClick={() => handleDelete(i)}>X</button>) }
            </li>
        })}
        
      </ul>
    </div>
  )
}

export default M06
