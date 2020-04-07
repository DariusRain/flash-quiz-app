import React from 'react';
import './App.css';

const stringExpression = "string";

const functionExpression = object => {
  return `${object.firstName} ${object.lastName}`;
};

const jsxFunctionExpression = object => {
  if (object.newUser) {
    return (
      <div>
        <h3>
          Hello {object.firstName}, first time?{" "}
          <a href="#"> get started here.</a>
        </h3>
      </div>
    );
  }
};

const jsxElement = (
  <div>
    <h1>Hello World!</h1>
    <p>
      stringExample: {stringExpression}, functionExpression:{" "}
      {functionExpression({ firstName: "Jane", lastName: "Doe" })}
      {jsxFunctionExpression({ newUser: true, firstName: "Jane" })}
    </p>
  </div>
);

// React & ReactDom would be imported at the top of this document for this method to work.



function App() {
  return (
    <div className="App">
      <header>
      {jsxElement}
      </header>
    </div>
  );
}

export default App;
// Branch: 1-about-react
  // Deleted uneccessary default code from the npx installation.