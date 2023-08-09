import React from "react";
import styles from './Navigation.module.css'
import { GrLanguage } from "react-icons/Gr";
import { MdOutlineArrowDropDown } from "react-icons/Md";

const Navigation = () => {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.image_box}`}>
        <img src="/images/Netflix_Logo_PMS.png" alt="" />
      </div>
      <div className={`${styles.buttons}`}>
        <button className={`${styles.language_button}`}>
          <GrLanguage />
          English
          <MdOutlineArrowDropDown />
        </button>
        <button className={`${styles.signin_button}`}>Sign in</button>
      </div>
    </div>
  );
};

export default Navigation;
