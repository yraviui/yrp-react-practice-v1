import React/* , { useState } */ from 'react'
import HOCA from './HOCA'

const PersonA = ({money, handleIncrease}) => {
    /* const [money, setMoney] = useState(10)
    const handleIncrease = () => setMoney(money * 2) */
  return (
    <div>
      <button onClick={handleIncrease}>Increase Money: {money}</button>
    </div>
  )
}

export default HOCA(PersonA)