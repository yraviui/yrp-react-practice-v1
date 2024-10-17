import React, { useMemo } from 'react'
import { distence } from './m31memo/M31Memo'

const M31Page01 = () => {
    // const speed = 5, time = 15
    const speed = 50, time = 12
    // const [speed, setSpeed] = useState(0)  // speed is in hours
    // const [time, setTime] = useState(0)    // expected speed is in minits
    const uMemo = useMemo(() => distence(speed, time), [speed, time])

    return (
        <div>
            <h1>M31Page01:</h1>
            <h4>A car is travelling 50 km in 1 hours. How much of a distance will it travel in 12 minutes?</h4>
            <h3>12 minits of speed: {uMemo} </h3>
        </div>
    )
}

export default M31Page01