import React, { useState } from 'react'
import Child from './Child'
const products = [
    { id: 1, name: 'Product 1', quantity: 1, maxQty: 10, des: 'Product 1 Descripton'},
    { id: 2, name: 'Product 2', quantity: 1, maxQty: 10, des: 'Product 2 Descripton'},
    { id: 3, name: 'Product 3', quantity: 1, maxQty: 10, des: 'Product 3 Descripton'},
    { id: 4, name: 'Product 4', quantity: 1, maxQty: 10, des: 'Product 4 Descripton'},
    { id: 5, name: 'Product 5', quantity: 1, maxQty: 10, des: 'Product 5 Descripton'},
]

const M14 = () => {
    const [cartItems] = useState([])
    const [val, setVav] = useState(0)
    const [qty, setqty] = useState(0)
    const handleDel = () => (setVav(val-1))
    const addProduct = (obj, val, cartItems) =>  {
        console.log('obj', obj)
        console.log('val', val)
        console.log('cartItems: ', cartItems)
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
        <h1>Val: {val}</h1>
        <button onClick={()=>handleDel()}>Button At Parent</button>{val}<button onClick={()=>handleDel()}>Button At Parent</button>
        <ul>
            {products.map((o, i) => <Child key={i} obj={o} addProduct={addProduct} cartItems={cartItems} qty={qty} />)}
            {/* <button onClick={() => addProduct(obj, val, cartItems)}>Add Product</button>  */}
        </ul>
        <h1>Cart</h1>
        {/* <ul>
            {cartItems.map((o, i) => {
                <li key={i}>{o.id}, {o.name}, {o.quantity}, {o.price}, {o.maxQty}, {o.des}</li>
            })}
        </ul> */}
    </div>
  )
}

export default M14
