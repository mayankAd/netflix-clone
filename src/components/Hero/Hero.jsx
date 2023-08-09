import styles from './Hero.module.css'
import Navigation from '../navigation/Navigation'
import Hero_center from '../hero_center/Hero_center'



const Hero = () => {
  return (
    <div className={`${styles.hero_section}`}>
        <Navigation/>
        <Hero_center/>
    </div>
  )
}

export default Hero