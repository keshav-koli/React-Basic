import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navbar_logo } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  var [change ,setchange]=useState("Login");
    // ^if no dependency array  is provided, the effect will run after every render
    // ^if dependency array is provided, the effect will run only when the dependency changes
    // ^if dependency array is empty, the effect will run only once after the first render
    useEffect(()=>{
      console.log("Changes in button");
    },[change]);



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
              Status {useOnlineStatus()?"✅":"❌"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact" >Contact</Link>
            </li>
            <li>
              <Link to="/Grocery">Grocery</Link>
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