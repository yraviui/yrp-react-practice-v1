import React, { useState } from 'react'

const M41 = () => {
    const [val, setVav] = useState(5);
    return (
        <div>
            <h1>M41</h1>
            <p>Val: {val > 5 ? 'G' : 'L'}</p>
        </div>
    )
}

export default M41