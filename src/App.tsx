import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styles from "./App.module.scss";
import { ClickNotificationChallenge } from "./components/ClickNotificationChallenge/ClickNotificationChallenge";
import { FizzBuzzChallenge } from "./components/FizzBuzzChallenge/FizzBuzzChallenge";
import { FlagsChallenge } from "./components/FlagsChallenge/FlagsChallenge";
import { PalindromeChallenge } from "./components/PalindromeChallenge/PalindromeChallenge";

import { Home } from "./components/Home/Home";
import { DataTransformationChallenge } from "./components/DataTransformationChallenge/DataTransformationChallenge";
import { CodingChallenges } from "./components/CodingChallenges/CodingChallenges";

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
        </nav>
        <div className="router-outlet">
          <Switch>
            <Route path="/palindrome">
              <PalindromeChallenge />
            </Route>
            <Route path="/flags">
              <FlagsChallenge />
            </Route>
            <Route path="/react-click-notification">
              <ClickNotificationChallenge />
            </Route>
            <Route path="/react-fizzbuzz">
              <FizzBuzzChallenge />
            </Route>
            <Route path="/data-transformation">
              <DataTransformationChallenge />
            </Route>
            <Route path="/coding-challenges">
              <CodingChallenges />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
