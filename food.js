import React from "react";
import ReactDOM from "react-dom/client";

const Header =()=>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/91631e116794391.60698dbc55f96.jpg"/>
      </div>
      <div className="Nav-Item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
} ;
const Body=()=>{
  return(
    <res-container/>
  );
};
const AppLayout =()=> {
  return (
    <Header/>
  )
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout/>);
