import React/* , { useState } */ from 'react'
import HOCB from './HOCB'

const TestA = ({money, handleDecrease, handleIncrease}) => {
   /*  const [money, setMoney] = useState(15)
    const handleIncrease = () => setMoney(money + 5) */
  return (
    <div>
      <h1>Test A</h1>
      <button onClick={() => handleDecrease()}>Increase 5: </button> {money} <button onClick={() => handleIncrease()}>Increase 5: </button>
    </div>
  )
}

export default HOCB(TestA)
