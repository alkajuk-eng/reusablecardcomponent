import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Import the main App component.
import App from "./App";

// Find the HTML element with id="root"
// and create a React root inside it.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element.
root.render(
  // StrictMode helps detect potential problems
  // during development.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance measurement.
// This can be used to measure the performance
// of the React application.
reportWebVitals();