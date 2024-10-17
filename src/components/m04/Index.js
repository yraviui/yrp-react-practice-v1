import React, { useState } from 'react'

const M04 = () => {
  const [obj, setObj] = useState("");
  const [myData, setMyData] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault()
    setMyData([...myData, obj])
  }
  const handleDel = (id) => {
    const updateData = myData.filter((o, i) => i !== id)
    setMyData(updateData)
  }
  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input value={obj} onChange={(e) => setObj(e.target.value)} />
        <h2>My Data</h2>
        {myData.map((o, i) => <div key={i}><input value={o} onChange={(e) => setObj(e.target.value)} /> <button onClick={() => handleDel(i)}>Del</button></div>)}
        <button>Add</button>
      </form>
    </div>
  )
}

export default M04
