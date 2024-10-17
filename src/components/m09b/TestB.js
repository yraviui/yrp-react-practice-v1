import React/* , { useState } */ from 'react'
import HOCB from './HOCB'

const TestB = ({money, handleIncrease}) => {
    /* const [money, setMoney] = useState(15)
    const handleIncrease = () => setMoney(money + 5) */
  return (
    <div>
      <h1>Test B</h1>
      <button onClick={() => handleIncrease()}>Increase 5: {money}</button>
    </div>
  )
}

export default HOCB(TestB)
