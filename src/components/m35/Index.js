import React from 'react'
import DynamicComponent from './DynamicComponent'

const M35 = () => {
    const componentData = [
        { id: 1, content: 'FiUser' },
        { id: 2, content: 'RxCaretDown' }
    ]
    return (
        <div>
            <h1>M35 - Dynamic Component</h1>
            {componentData.map((o, i) => <DynamicComponent key={i} {...o} />)}
        </div>
    )
}

export default M35