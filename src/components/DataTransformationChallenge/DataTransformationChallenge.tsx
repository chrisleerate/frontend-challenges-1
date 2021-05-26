import React from "react";
import styles from "./DataTransformationChallenge.module.scss";

// TIP: this is the data as it is returned from the API Server
export const apiResponseMock = {
  message: "here is your data!",
  success: true,
  data: [
    {
      type: "person",
      name: "Bruce Witherspoon",
      details: {
        ageYears: 32,
        description: "Likes to try out various wines",
      },
    },
    {
      type: "wine",
      name: "Guarate Pinot Noir",
      details: {
        ageYears: 12,
        description: "Grown in the California Central Valley",
      },
    },
    {
      type: "person",
      name: "Mary Lamb",
      details: {
        ageYears: 24,
        description: "Tends to her farm animals",
      },
    },
    {
      type: "person",
      name: "Mickey Miney",
      details: {
        ageYears: 12,
        description: "Just a child",
      },
    },
    {
      type: "person",
      name: "Thor Lancelot",
      details: {
        description: "A mythical figure",
      },
    },
    {
      type: "car",
      name: "Toyota Camry",
      details: {
        description: "Old Faithful",
        ageYears: 20,
      },
    },
  ],
};

// TIP: this is the an array of the data format that the React component needs.
const sampleTransformedData = [
  {
    name: "Test Data 1",
    description: "This is test data",
    age: 1,
    type: "test",
  },
  {
    name: "Test Data 2",
    description: "This is test data",
    age: 2,
    type: "test",
  },
];

export const TestReactComponent = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div>Name: {props.name}</div>
        <div>Type: {props.type}</div>
        <div>Description: {props.description}</div>
        <div>Age: {props.age}</div>
      </div>
    </>
  );
};

const transformData = (apiResponse) => {
  // TODO: delete the following line and provide your own implementation
  return sampleTransformedData;
};

export const DataTransformationChallenge = () => {
  const transformedData = transformData(apiResponseMock);

  const components = transformedData.map((it) => {
    return (
      <TestReactComponent
        name={it.name}
        type={it.type}
        description={it.description}
        age={it.age}
      />
    );
  });

  return (
    <div className={styles.DataTransformationChallenge}>
      <h2>Data Transformation Challenge</h2>
      <div>
        This challenge asks you to slice and dice an API response so that it
        works with the given React component.
        <ul>
          <li>
            Challenge 1: Implement the <code>transformData</code> function to
            return data such that it displays correctly for the React component
            that consumes it.
          </li>
          <li>
            Challenge 2: Modify your <code>transformData</code> function. This
            time it needs to filter for only type "person" older than 20.
          </li>
        </ul>
      </div>
      <h3>Implementation</h3>
      <div className={styles.cards}>{components}</div>
    </div>
  );
};
