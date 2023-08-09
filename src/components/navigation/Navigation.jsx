import React from "react";
import styles from './Navigation.module.css'
import { MdOutlineLanguage } from "react-icons/Md";
import { MdOutlineArrowDropDown } from "react-icons/Md";

const Navigation = () => {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.image_box}`}>
        <img src="/images/Netflix_Logo_PMS.png" alt="" />
      </div>
      <div className={`${styles.buttons}`}>
        <button className={`${styles.language_button}`}>
          <MdOutlineLanguage fontSize={'23px'}/>
          English
          <MdOutlineArrowDropDown />
        </button>
        <button className={`${styles.signin_button}`}>Sign In</button>
      </div>
    </div>
  );
};

export default Navigation;
