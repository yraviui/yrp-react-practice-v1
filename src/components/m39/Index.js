import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import M39Page02 from './M39Page02';
import M39Page01 from './M39Page01';

const M39 = () => {
    return (
        <div>
            <h1>M39</h1>
            <Link to="/m39">Page01</Link> |{' '}
            <Link to="/m39/page02">Page02</Link>
            <Routes>
                <Route path="/" index element={<M39Page01 />} />
                <Route path="/page02" element={<M39Page02 />} />
            </Routes>
        </div>
    )
}

export default M39