import React, { useState } from 'react'

const HOCA = (OriginalComponent) => {
    const NewComponent = () => {
        const [money, setMoney] = useState(10)
        const handleIncrease = () => setMoney(money * 2)
        return <OriginalComponent money={money} handleIncrease={handleIncrease} />
    }
  return NewComponent
}

export default HOCA
