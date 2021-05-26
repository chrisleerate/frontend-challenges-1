import React from "react";
import styles from "./FizzBuzzChallenge.module.scss";

export const Solution = () => {
  return (
    <>
      <button>CLICK ME</button>
      <div className={styles.counter}>Counter: TODO</div>
      <div className={styles.fizzBuzzVal}>fizzbuzz TODO</div>
    </>
  );
};

export const FizzBuzzChallenge = () => {
  return (
    <div className={styles.FizzBuzzChallenge}>
      <h2>FizzBuzz</h2>
      <div>
        Test Criteria:
        <ul>
          <li>Clicking the button below should update the counter +1.</li>
          <li>
            If the counter is divisible by 3, the component should also output
            the word "fizz".
          </li>
          <li>
            If the counter is divisible by 5, the component should also output
            the word "buzz".
          </li>
          <li>
            If the counter is divisible by both X and Y, the component should
            output "fizzbuzz" together.
          </li>
          <li>Implement your solution entirely within this file.</li>
        </ul>
      </div>
      <h3>Implementation</h3>
      <Solution />
    </div>
  );
};
