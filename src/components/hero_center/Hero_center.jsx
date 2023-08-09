import Email_submit from '../email_submit/email_submit'
import styles from './Hero_center.module.css'

const Hero_center = () => {
  return (
    <div className={`${styles.hero_center}`}>
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
        <Email_submit/>
    </div>
  )
}

export default Hero_center