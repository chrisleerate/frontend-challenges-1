import React from "react";
import styles from "./CodingChallenges.module.scss";

export const MergeSortedArrays = () => {
  const mergeSortedArrays = null; // TODO

  let mergeSortedArraysOutput: any = undefined;
  try {
    mergeSortedArraysOutput = mergeSortedArrays([5, 6, 7], [4, 5, 9]);
  } catch (e) {
    console.error(e);
    mergeSortedArraysOutput = `ERROR: ` + e.message;
  }

  return (
    <>
      <div className={styles.largeSpacer}>
        <h2>Merge sorted arrays</h2>
        <div>
          Given two sorted arrays, write a function that will merge them
          together. The output array must remain sorted.
        </div>
        <div className={styles.smallSpacer}>
          <b>Example:</b>
          <pre>mergeSortedArrays([5,6,7], [4,5,9]) =&gt; [4,5,5,6,7,9]</pre>
        </div>
        <div className={styles.smallSpacer}>
          <b>Your Solution:</b>
          <pre>{mergeSortedArraysOutput}</pre>
        </div>
      </div>
    </>
  );
};

export const CodingChallenges = () => {
  return (
    <div>
      <h2>Coding Challenges</h2>
      <div>
        The following are more generic coding challenges (non-React-related).
      </div>
      <h3>Implementations</h3>
      <MergeSortedArrays />
    </div>
  );
};
