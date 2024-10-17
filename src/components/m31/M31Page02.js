import React, { useMemo } from 'react'
import { IncreasedDistence } from './m31memo/M31Memo';

const M31Page02 = () => {
    const time = 5, increasedSpeed = 150
    const uMemo = useMemo(() => IncreasedDistence(time, increasedSpeed), [time, increasedSpeed])
    return (
        <div>
            <h1>M31Page01:</h1>
            <h4>A car travelling 300 km in 5 hours. How much of distance will it travel if it increse the 50% of speed?</h4>
            <h3>12 minits of speed: {uMemo} </h3>
        </div>
    )
}

export default M31Page02