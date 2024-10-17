import React, { useState } from 'react'
import Child from './Child'

const products = [
    { id: 1, name: 'Product 1', quantity: 1, maxQty: 10, des: 'Product 1 Descripton'},
    { id: 2, name: 'Product 2', quantity: 1, maxQty: 10, des: 'Product 2 Descripton'},
    { id: 3, name: 'Product 3', quantity: 1, maxQty: 10, des: 'Product 3 Descripton'},
    { id: 4, name: 'Product 4', quantity: 1, maxQty: 10, des: 'Product 4 Descripton'},
    { id: 5, name: 'Product 5', quantity: 1, maxQty: 10, des: 'Product 5 Descripton'},
]

const M16 = () => {
    const [qty, setqty] = useState(0)
    const [cartItems] = useState([])
    const addProduct = (obj, val, cartItems) =>  {
        /* console.log('obj', obj)
        console.log('val', val)
        console.log('cartItems: ', cartItems) */
        setqty(obj.quantity = val)
        const added = cartItems.find(p => p.id === obj.id);
        if (!added) {
            cartItems.push({...obj});
        } else {
            added.quantity = val;
        }
        console.log(cartItems);
    }
  return (
    <div>
      <h1>M16</h1>
      <ul>
        {products.map((obj, i) => <Child key={i} obj={obj} addProduct1={addProduct} cartItems={cartItems} qty={qty} />)}
      </ul>
    </div>
  )
}

export default M16
