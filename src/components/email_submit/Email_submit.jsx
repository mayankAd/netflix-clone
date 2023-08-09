import React from 'react'
import styles from './Email_submit.module.css'
import {IoIosArrowForward} from 'react-icons/Io'

const Email_submit = () => {
  return (
    <div className={`${styles.container}`}>
        <input type="text" placeholder='Email address' />
        <button className={`${styles.get_started_button}`}>Get Started <IoIosArrowForward/></button>
    </div>
  )
}

export default Email_submit