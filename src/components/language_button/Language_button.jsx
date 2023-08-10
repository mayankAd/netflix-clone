import styles from "./Language_button.module.css"
import { MdOutlineLanguage } from "react-icons/Md";
import { MdOutlineArrowDropDown } from "react-icons/Md";


const Language_button = () => {
  return (
    <button className={`${styles.language_button}`}>
          <MdOutlineLanguage fontSize={'23px'}/>
          English
          <MdOutlineArrowDropDown />
        </button>
  )
}

export default Language_button