import React from 'react'
import styles from './Email_submit.module.css'

const Email_submit = () => {
  return (
    <div className={`${styles.container}`}>
        <input type="text" placeholder='Email address' />
        <button className={`${styles.get_started_button}`}>Get Started </button>
    </div>
  )
}

export default Email_submit