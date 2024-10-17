import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const M31 = () => {
    return (
        <div>
            <ul>
                <li><Link to='/m31'>Page01</Link></li>
                <li><Link to='/m31/page02'>Page02</Link></li>
            </ul>
            <h1>M31 - Caluclations</h1>
            <Outlet />
        </div>
    )
}

export default M31