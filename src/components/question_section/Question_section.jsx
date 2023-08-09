import React from 'react'
import styles from './Question_section.module.css'
import Email_submit from '../email_submit/email_submit'
import Question_box from '../question_box/Question_box'

const Question_section = () => {
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.heading}`}>
            Frequently Asked Questions
        </div>
        <div className={`${styles.box}`}>
            <Question_box question={"What is Netflix?"}/>
            <Question_box question={"How much does Netflix cost?"}/>
            <Question_box question={"Where can I watch?"}/>
            <Question_box question={"What can I watch on Netflix?"}/>
            <Question_box question={"How do I cancel?"}/>
            <Question_box question={"Is Netflix good for kids?"}/>
        </div>
        <div className={`${styles.email_section}`}>
            <p>Ready to watch? Enter your email to create or restart your membership</p>
            <Email_submit/>
        </div>
    </div>
  )
}

export default Question_section