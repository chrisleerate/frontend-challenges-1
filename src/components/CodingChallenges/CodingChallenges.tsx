import React from "react";
import styles from "./CodingChallenges.module.scss";

const runTestCase = (name, fn, args, expected) => {
  let testCaseOutput;
  try {
    if (!fn) {
      testCaseOutput = "ERROR: function is not defined yet!";
    } else {
      testCaseOutput = fn.apply(undefined, args);
    }
  } catch (e) {
    console.error(e);
    testCaseOutput = `ERROR: ` + e.message;
  }
  return `${name}(${args
    .map(JSON.stringify)
    .join(", ")})\nOUTPUT:   ${testCaseOutput}\nEXPECTED: ${expected}`;
};

export const MergeSortedArrays = () => {
  // YOUR CODE HERE
  const mergeSortedArrays = null;

  let mergeSortedArraysOutput1 = runTestCase(
    `mergeSortedArrays`,
    mergeSortedArrays,
    [
      [4, 5, 6],
      [1, 2, 3],
    ],
    "[1, 2, 3, 4, 5, 6]",
  );

  let mergeSortedArraysOutput2 = runTestCase(
    `mergeSortedArrays`,
    mergeSortedArrays,
    [
      [5, 6, 7],
      [4, 5, 9],
    ],
    "[4, 5, 6, 7, 8, 9]",
  );

  let mergeSortedArraysOutput3 = runTestCase(
    `mergeSortedArrays`,
    mergeSortedArrays,
    [
      [1, 1, 1, 9],
      [2, 3, 4, 5, 6, 7],
    ],
    "[1, 1, 1, 2, 3, 4, 5, 6, 7, 9]",
  );

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
          <pre>{mergeSortedArraysOutput1}</pre>
          <pre>{mergeSortedArraysOutput2}</pre>
          <pre>{mergeSortedArraysOutput3}</pre>
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
      {/* <StringScramble /> */}
    </div>
  );
};

// OLD CODE HERE

// export const StringScramble = () => {

//   // YOUR CODE HERE
//   const stringScramble = null;

//     const charMap = { ...origCharMap };

//     const str2Letters = str2.split("");
//     for (const letter of str2Letters) {
//       if (!charMap.hasOwnProperty(letter)) {
//         charMap[letter] = 0;
//       }
//       charMap[letter]--;
//     }

//     const successfullyScrambled = Object.values(charMap).every((it) => it >= 0);

//     // console.log(`str1`, str1, `str2`, str2, `origCharMap`, JSON.stringify(origCharMap, null, 2), `charMap`, JSON.stringify(charMap, null, 2), `successfullyScrambled`, successfullyScrambled);

//     // code goes here
//     return successfullyScrambled;
//   }; // TODO

//   let stringScrambleOutput1 = runTestCase(`stringScramble`, stringScramble, [
//     "balmy",
//     "lamb",
//   ]);

//   let stringScrambleOutput2 = runTestCase(`stringScramble`, stringScramble, [
//     "shore",
//     "horses",
//   ]);

//   let stringScrambleOutput3 = runTestCase(`stringScramble`, stringScramble, [
//     "tacos de pollo",
//     "loco",
//   ]);

//   let stringScrambleOutput4 = runTestCase(`stringScramble`, stringScramble, [
//     "tostada",
//     "toasty",
//   ]);

//   return (
//     <>
//       <div className={styles.largeSpacer}>
//         <h2>String Scramble</h2>
//         <div>
//           Create a function named "stringScramble" which takes 2 strings as
//           arguments.
//           <br />
//           Return a boolean representing whether the first string can be
//           rearranged into the second string.
//         </div>
//         <div className={styles.smallSpacer}>
//           <b>Example:</b>
//           <pre>stringScramble([5,6,7], [4,5,9]) =&gt; [4,5,5,6,7,9]</pre>
//         </div>
//         <div className={styles.smallSpacer}>
//           <b>Your Solution:</b>
//           <pre>{stringScrambleOutput1}</pre>
//           <pre>{stringScrambleOutput2}</pre>
//           <pre>{stringScrambleOutput3}</pre>
//           <pre>{stringScrambleOutput4}</pre>
//         </div>
//       </div>
//     </>
//   );
// };
