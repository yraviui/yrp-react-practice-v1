import React, { useState } from 'react'
import AddSub from './AddSub'

const products = [
    { id: 1, name: 'Product 1', quantity: 1, maxQty: 10, des: 'Product 1 Descripton'},
    { id: 2, name: 'Product 2', quantity: 1, maxQty: 10, des: 'Product 2 Descripton'},
    { id: 3, name: 'Product 3', quantity: 1, maxQty: 10, des: 'Product 3 Descripton'},
    { id: 4, name: 'Product 4', quantity: 1, maxQty: 10, des: 'Product 4 Descripton'},
    { id: 5, name: 'Product 5', quantity: 1, maxQty: 10, des: 'Product 5 Descripton'},
]

const M13 = () => {
    const [cartItems, /* setCartItems */] = useState([])
    const [quantity, setQty] = useState(1)
    const addProduct = (obj, qty) =>{
        console.log('obj: ', obj, 'qty: ', qty)
        obj.quantity = qty
        cartItems.push(obj)
        console.log('cartItems: ', cartItems)
        const removedDup = cartItems.filter((item, index) => index === cartItems.findIndex( o => item.id === o.id))
        console.log('Reoved Dup: ', removedDup)
    }
    const increaseQ = () => {
      setQty(quantity+1)
      console.log('quantity', quantity)
    }
    const decreaseQ = () => {
      setQty(quantity-1)
      console.log('quantity', quantity)
    }
  return (
    <div>
      <h1>M13</h1>
      <ul>
        {products.map((o,i) => <li key={o.id}>Name: <span onClick={()=>addProduct(o, quantity)}>{o.name}</span> {quantity}<button onClick={()=>decreaseQ()}>descrease</button>{quantity}<button onClick={()=>increaseQ()}>Increase</button> <AddSub qty={o.quantity} maxQty={o.maxQty} /></li>)}
        {/* , quantity: <button onClick={setQty(quantity - 1)}>-</button>{quantity}<button onClick={setQty(quantity + 1)}>+</button> */}
      </ul>
    </div>
  )
}

export default M13
