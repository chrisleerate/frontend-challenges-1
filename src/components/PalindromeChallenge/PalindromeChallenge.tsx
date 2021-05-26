import React from "react";
import styles from "./PalindromeChallenge.module.scss";

export const isPalindrome = (input: string) => {
  // TODO: PLACE YOUR CODE HERE
  return null;
};

export const IsPalindromeCheck = ({ input, shouldBeAPalindrome }) => {
  const isPassing = isPalindrome(input) === shouldBeAPalindrome;
  return (
    <div className={styles.IsPalindromeCheck}>
      <div
        className={
          styles.indicator + " " + (isPassing ? styles.pass : styles.fail)
        }
      ></div>
      <code>
        isPalindrome(&quot;{input}&quot;) should return{" "}
        {shouldBeAPalindrome.toString()}
      </code>
    </div>
  );
};

export const PalindromeChallenge = () => {
  return (
    <div className={styles.PalindromeChallenge}>
      <h2>Palindrome</h2>
      <div>
        This is a general algorithms challenge. Implement the function{" "}
        <code>Palindrome</code>.
        <ul>
          <li>
            Given <code>string</code> input, your function should return a{" "}
            <code>boolean</code> representing whether or not the given input is
            a palindrome.
          </li>
          <li>
            A <b>palindrome</b> is a string that is the same when read backwards
            or forwards. For example, "a", "aa", "pop", "deed" and "racecar" are
            palindromes because they are the same even when reversed.
          </li>
          <li>
            The test cases given will let you know how close your implementation
            is. There is no need to account for spaces or punctuation - the test
            cases have none. Good luck!
          </li>
        </ul>
      </div>
      <h3>Implementation</h3>
      <h4>Palindromes</h4>
      <IsPalindromeCheck input="a" shouldBeAPalindrome={true} />
      <IsPalindromeCheck input="aa" shouldBeAPalindrome={true} />
      <IsPalindromeCheck input="pop" shouldBeAPalindrome={true} />
      <IsPalindromeCheck input="deed" shouldBeAPalindrome={true} />
      <IsPalindromeCheck input="racecar" shouldBeAPalindrome={true} />
      <h4>Non-Palindromes</h4>
      <IsPalindromeCheck input="ab" shouldBeAPalindrome={false} />
      <IsPalindromeCheck input="abc" shouldBeAPalindrome={false} />
      <IsPalindromeCheck input="poodle" shouldBeAPalindrome={false} />
      <IsPalindromeCheck input="rate" shouldBeAPalindrome={false} />
    </div>
  );
};
