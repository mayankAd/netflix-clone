import React from 'react'
import styles from './Question_box.module.css'

const Question_box = (props) => {
  return (
    <div className={`${styles.container}`}>
            <p>{props.question}</p>
            <p>+</p>
        </div>
  )
}

export default Question_box