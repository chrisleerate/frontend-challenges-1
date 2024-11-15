import React from "react";
import styles from "./ClickNotificationChallenge.module.scss";

export const Solution = () => {
  return (
    <>
      <button>CLICK ME</button>
      <div>Last Click Time: TODO</div>
    </>
  );
};

export const ClickNotificationChallenge = () => {
  return (
    <div className={styles.ClickNotificationChallenge}>
      <h2>React: Click and Notification</h2>
      <div>
        This challenge exercises your React component development skills.
        <ul>
          <li>
            Clicking the button below should update the div with the time of the
            last click. The time should be represented as{" "}
            <code>Date.now()</code>
          </li>
          <li>
            If the user clicks the button then it should pop up a notification
            saying that the button was clicked.
          </li>
          <li>
            The notification should appear at the bottom of the screen, on the left side.
          </li>
          <li>
            The notification should have a dark green background and white text.
          </li>
          <li>The notification should disappear after 2 seconds.</li>
        </ul>
      </div>
      <h3>Implementation</h3>
      <Solution />
    </div>
  );
};
