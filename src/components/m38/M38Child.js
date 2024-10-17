import React from 'react'

const M38Child = ({ onChange }) => {
    return (
        <div>
            <h1>M38Child</h1>
            <button onClick={() => onChange("your value here")}>Child Button</button>
        </div>
    )
}

export default M38Child