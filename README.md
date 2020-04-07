<a href="https://reactjs.org"><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tuannguyen.tech%2F2019%2F02%2Freact-16-8-captain-hook-is-here%2F&psig=AOvVaw3ySONHpa_BLuBXpI0_jt0T&ust=1585507829898000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCv-YzrvegCFQAAAAAdAAAAABAD"></a>

<p>
Darius Rain
React Course & Project.
Started: 3/29/20
Last Edited: 3/29/20
</p>

## About React

- Created & Maintained by Facebook (Why it is a reliable choice).

- An open source library for building user interfaces (Not a framework like Angular)

- You can create html elements and embed expressions by using a JavaScript exstension called [_JSX_](https://reactjs.org/docs/introducing-jsx.html). It similar to a templating engine but you can write the JSX directly in your JavaScript file when using the React library.

- All elements render to the [_Virtual DOM_](https://reactjs.org/docs/faq-internals.html) instead of the standard DOM (ReactDOM).

- Creates powerful Single-Page-Applications (SPAs)

## Overview on how it works
```javascript
--------------------------------------
// File: App.js
import React from 'react';
import './App.css';

// String expession to embed into HTML elements in JSX
const stringExpression = "string";

// Function expression that returns firstname and last name,
// to going to embed.
const functionExpression = object => {
  return `${object.firstName} ${object.lastName}`;
};

// This returns JSX byitself and can also be embeded
const jsxFunctionExpression = object => {
  if (object.newUser) {
      // Everything inside these perentheses which is pure JSX.
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

// This is where all the expressions above become embeded into a final div element,
// and using the curly braces is what allows you to embed the values from the expressions,
// into the html elements.
const jsxElement = (
  <div>
    <h1>Hello World!</h1>
    <p>
      stringExample: {variableName}, functionExample:{" "}
      {functionExample({ firstName: "Jane", lastName: "Doe" })}
      {jsxFunctionExpression({ newUser: true, firstName: "Jane" })}
    </p>
  </div>
);

// The function 'App returns a component' to be reused in the root aka index.js file.
// This is similar to when you see a class declaration of a component as well.
function App() {

// The div element created above 'jsxElement' will act as a element of this component
  return (
    <div className="App">
      {jsxElement}
    </div>
  );
}

export default App;
// This is similar to exporting the router to the index.js file in expressjs,
// but in react these routers are components which take up a collection of elements.
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
// File: index.js

// This file is where the ReactDOM.render() will render all the imported components which can
// also contain sub-components but it all renders to this file and ReactDom is only used once.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // <-- This is imported from above and will be used as
// a component inside < COMPONENT-NAME /> ~ <App />.

// This renders any components we add in order to the div with the id of root located in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
//------------------------------------------------------------------------------------
```

```html
<!-- file: index.html -->
<!-- This file acts as your template for the react application. -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>React Course</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div> <!-- This is where the ReactDOM renders the components from the index.js file -->
  </body>
</html>
```
## What I will be building to test my knowledge
    - This application will show questions about React with input or multiploice answers.
    - It will give you a score after each test given and wont let you pass to the next level.

