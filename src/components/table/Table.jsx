import styles from "./Table.module.css"



const Table = (props) => {
  return (
    <div className={`${styles.container}`}>
        <a href="#">{props.text1}</a>
        <a href="#">{props.text2}</a>
        <a href="#">{props.text3}</a>
        <a href="#">{props.text4}</a>
        <a href="#">{props.text5}</a>
    </div>
  )
}

export default Table