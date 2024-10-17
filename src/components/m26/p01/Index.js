import React from 'react'
import useFade from './useFade';

const M26P01 = () => {
    const [isVisible, setVisible, fadeProps] = useFade();
    const btn = {border: '2px solid #fff', borderRadius: '6px', padding: '0.5em 2em', color: '#fff', 
        fontSize: '1em', background: '#222', cursor: 'pointer'}
  return (
    <div>
        <h1>M26P01 - Fade In/Out</h1>
        <h2>Toggle a single component</h2>
        <button className={btn} onClick={() => setVisible(!isVisible)}> Toggle visibility </button>
        {isVisible && <h3 {...fadeProps}>Now you see me...</h3>}
    </div>
  )
}

export default M26P01