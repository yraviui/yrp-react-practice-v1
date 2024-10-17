import React, { useState } from 'react'
import M38Child from './M38Child'

const M38 = () => {
    const [val, setVal] = useState("initial value")
    return (
        <div>
            <h1>M38 - Child to Parent Message</h1>
            <h1>Child Message: {val}</h1>
            <M38Child onChange={(value) => setVal(value)} />
        </div>
    )
}

export default M38