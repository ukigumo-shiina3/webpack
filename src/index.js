// import bar from "./bar.js";
// const foo = require("./foo");

// bar();
// foo();

import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return <h1>HELLO!!</h1>;
};

ReactDom.render(<App />, document.getElementById("app"));
