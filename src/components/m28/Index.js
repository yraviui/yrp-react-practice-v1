import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './m28.module.css'

const M28 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>Header</div>
        <div className={styles.main}>
            <Outlet />
        </div>
        <div className={styles.footer}>Footer</div>
    </div>
  )
}

export default M28