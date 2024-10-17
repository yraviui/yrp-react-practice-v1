import React, { useState } from 'react'

const HOC = (OriginalComponent) => {
    const NewComponent = () => {
        const [money, setMoney] = useState(15)
        const handleDecrease = () => setMoney(money - 5)
        const handleIncrease = () => setMoney(money + 5)
        return <OriginalComponent money={money} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
    }
  return NewComponent
}

export default HOC
