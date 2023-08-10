import Language_button from '../language_button/Language_button'
import Table from '../table/Table'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
        <p className={`${styles.num}`}>Questions? Call <a href="#">000-800-919-1694</a></p>
        <div className={`${styles.table}`}>
            <Table text1={"FAQ"} text2={"Media Centre"} text3={"Ways To Watch"} text4={"Cookie Preferences"} text5={"Speed Test"}/>
            <Table text1={"FAQ"} text2={"Media Centre"} text3={"Ways To Watch"} text4={"Cookie Preferences"} text5={"Speed Test"}/>
            <Table text1={"FAQ"} text2={"Media Centre"} text3={"Ways To Watch"} text4={"Cookie Preferences"} text5={"Speed Test"}/>
        </div>
        <div className={`${styles.last_sec}`}>
            <Language_button />
            <p>Netflix India</p>
        </div>
    </div>
  )
}

export default Footer