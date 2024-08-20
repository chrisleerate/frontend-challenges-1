/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import clsx from "clsx";
import styles from "./FlagsChallenge.module.scss";
import flagEnglandImg from "./flag-england.png";
import flagUAEImg from "./flag-uae.png";
import flagJapanImg from "./flag-japan.png";

export const FlagOfJapan = () => {
  return (
    <div className={clsx(styles.FlagOfJapan, "")}>TODO: Flag of Japan</div>
  );
};

export const FlagOfEngland = () => {
  return (
    <div className={clsx(styles.FlagOfEngland, "")}>TODO: Flag of England</div>
  );
};

export const FlagOfUAE = () => {
  return <div className={clsx(styles.FlagOfUAE, "")}>TODO: Flag of UAE</div>;
};

export const FlagsChallenge = () => {
  return (
    <div className={styles.FlagsChallenge}>
      <h2>Flags Challenge</h2>
      <div>
        This challenge exercises your CSS skills.
        <ul>
          <li>Implement the specified flags.</li>
          <li>Use modern and clean CSS layout methods where possible.</li>
          <li>
            You may either use <span className="font-bold">Tailwind</span> or{" "}
            <span className={styles.cssModules}>CSS modules</span>.
          </li>
          <li>
            The colors or exact proportions of each flag can be approximated -
            no need to make them perfect.
          </li>
        </ul>
      </div>
      <h3>Reference Images of Flags</h3>
      <img className={styles.flagExample} src={flagJapanImg} />
      <img className={styles.flagExample} src={flagEnglandImg} />
      <img className={styles.flagExample} src={flagUAEImg} />
      <h3>Implementation</h3>
      <div className={styles.flagContainer1}>
        <FlagOfJapan></FlagOfJapan>
      </div>
      <div className={styles.flagContainer1}>
        <FlagOfEngland></FlagOfEngland>
      </div>
      <div className={styles.flagContainer1}>
        <FlagOfUAE></FlagOfUAE>
      </div>
    </div>
  );
};
