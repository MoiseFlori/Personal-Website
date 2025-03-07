import React from "react";
import { LifeLine } from "react-loading-indicators";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <LifeLine color="#4caf50" size="large" text="Loader" textColor="" />
    </div>
  );
};

export default Loader;
