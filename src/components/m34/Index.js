import React, { useEffect, useState } from 'react'


const M34 = () => {
    const [val, setVal] = useState(0)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#809980', '#E6FF80', '#1AFF33', '#999933']
    useEffect(() => {
        setVal(4)
    }, [])
    return (
        <ul>
            <>
                {months.splice(0, val).map((o, i) =>
                    <li key={i} style={{ background: colors[val] }}><span className='opacity-5'>{o}</span></li>
                )}
            </>
            <>
                {months.map((o, i) =>
                    <li key={i} style={{ background: '#DDD' }}><span className='opacity-5'>{o}</span></li>
                )}
            </>
        </ul>
    )
}

export default M34