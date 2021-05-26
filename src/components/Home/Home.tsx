import React from "react";
import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <div className={styles.Home}>
      <h2>Welcome to the Home Page</h2>
      <p>Please choose a challenge from the menu.</p>
    </div>
  );
};
