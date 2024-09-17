// * Parcel Feature
// ! Created A Server
// ? File Watcher Algorithm -c++
// ! HMR - HOT MODULE REPLACEMENT
// * Bundling
// ! MINIFY
// ? CLEANING OUR CODE
// ! Dev abd Production Build
// * Super fast build algorithm
// * Caching while development
// ? Image Optimization
// * Compression
// ! HTTPS on dev
// ? port Number
// * Zero config
// ?Tree Shaking -Removing un-wanted





import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// React element

// const heading = React.createElement(
//     "h1",
//     {
//         id: "title",
//     },
//     "Namaste React"
// );
// console.log(heading);

// !JSX -: Html like syntax , javascript like syntax
// ? JSX => react.createElement (object)=>ReactElement.js Object => HTMLElement(render)
// * JSX (transpiled before it reaches the JS)

const jsxheading = (
  <h1 className="head" itemID="feel">
    Namaste JSX React{" "}
  </h1>
);

const HeadingComponent = () => {
  return (
    <h1 className="functionalcomponent1">Namaste React functional component</h1>
  );
};
const feel=6789;
const HeadingComponent2 = () => {
  return <div id="container">
    {jsxheading}
    {feel} 
    {console.log("hello world")}
    <HeadingComponent /> 
    {HeadingComponent()}
    <h1 className="functionalcomponent2">
      Namaste React functional component 2
    </h1>
  </div>;
};

// const srcimage=<img className="image" src=""></img>
const root = ReactDOM.createRoot(document.getElementById("root"));
// const soruce=[jsxheading,srcimage]
root.render(<HeadingComponent2 />);
