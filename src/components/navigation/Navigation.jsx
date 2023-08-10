import React from "react";
import styles from './Navigation.module.css'

import Language_button from "../language_button/Language_button";

const Navigation = () => {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.image_box}`}>
        <img src="/images/Netflix_Logo_PMS.png" alt="" />
      </div>
      <div className={`${styles.buttons}`}>
        <Language_button/>
        <button className={`${styles.signin_button}`}>Sign In</button>
      </div>
    </div>
  );
};

export default Navigation;
