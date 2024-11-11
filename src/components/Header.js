import { useState } from "react";
import { navbar_logo } from "../utils/constant";

const Header = () => {
  var [change ,setchange]=useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={navbar_logo}
          />
        </div>
        <div className="Nav-Item">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Services</a>
              </li>
              <li>
                <button onClick={
                  () => {
                    if(change==="Login"){
                      setchange("Logout")
                    }
                    else{
                      setchange("Login")
                    }
                  }
                }  className="login-btn">{change}</button>
              </li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;