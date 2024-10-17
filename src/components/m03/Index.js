import React, { useState } from 'react'

const listItems = [
    {id: 1, username: 'bret', quantity: 0},
    {id: 2, username: 'samatha', quantity: 0},
    {id: 2, username: 'samatha', quantity: 0},
    {id: 2, username: 'samatha2', quantity: 0},
    {id: 3, username: 'elvis', quantity: 0},
    {id: 3, username: 'elvis1', quantity: 0},
    {id: 3, username: 'elvis2', quantity: 0},
    ]
    const products = [
      {id: 1, username: 'Shirt', quantity: 0},
      {id: 2, username: 'Pant', quantity: 0},
      {id: 3, username: 'Ball', quantity: 0},
      ]

const M03 = () => {
    const [data, setData] = useState(listItems)
    const [cartData, setCartData] = useState([])
    const handleDelete = (val) => {
        console.log('val: ', val)
        const updateddata = data.filter((o, i) => i !== val)
        console.log('updateddata: ', updateddata)
        setData(updateddata)
    }
    const handleCount = (obj) => {
    console.log('obj: ', obj, 'Quantity: ', obj.quantity += 1)
    const added = cartData.find(p => p.id === obj.id);
    if (!added) {
        cartData.push({...obj});
      } else {
        added.quantity++;
      }
      console.log(cartData);
      setCartData(cartData)
    }
  return (
    <div>
      <h1>Delete selected Button</h1>
      {data.map((o,i)=> <div key={i}>{o.username} <button onClick={() => handleDelete(i)}>Del</button></div>)}
      <hr />
      {products.map((o,i)=> <div key={i}>{o.username} <button onClick={() => handleCount(o)}>Count {o.quantity}</button></div>)}
      <hr />
      <ul>{cartData.map((x, i) =><li key={i}>{x.i}</li>)}</ul>
    </div>
  )
}

export default M03
