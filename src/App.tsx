import React from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import { ClickNotificationChallenge } from "./components/ClickNotificationChallenge/ClickNotificationChallenge";
import { FizzBuzzChallenge } from "./components/FizzBuzzChallenge/FizzBuzzChallenge";
import { FlagsChallenge } from "./components/FlagsChallenge/FlagsChallenge";
import { PalindromeChallenge } from "./components/PalindromeChallenge/PalindromeChallenge";

import { Home } from "./components/Home/Home";
import { DataTransformationChallenge } from "./components/DataTransformationChallenge/DataTransformationChallenge";
import { CodingChallenges } from "./components/CodingChallenges/CodingChallenges";
import { PastaApp } from "./components/Pasta/PastaApp";

function App() {
  return (
    <div className={styles.App}>
      <h1>React App Playground</h1>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/palindrome">JS: Palindrome</Link>
          <Link to="/data-transformation">JS: Data Transformation</Link>
          <Link to="/react-click-notification">React: Notification</Link>
          <Link to="/react-fizzbuzz">React: FizzBuzz</Link>
          <Link to="/flags">CSS: Flags</Link>
          <Link to="/coding-challenges">Coding Challenges</Link>
          <Link to="/pasta">Pasta</Link>
        </nav>
        <div className="router-outlet">
          <Routes>
            <Route path="/palindrome" element={<PalindromeChallenge />} />
            <Route path="/flags" element={<FlagsChallenge />} />
            <Route
              path="/react-click-notification"
              element={<ClickNotificationChallenge />}
            />
            <Route path="/react-fizzbuzz" element={<FizzBuzzChallenge />} />
            <Route
              path="/data-transformation"
              element={<DataTransformationChallenge />}
            />
            <Route path="/coding-challenges" element={<CodingChallenges />} />
            <Route path="/pasta/*" element={<PastaApp />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
