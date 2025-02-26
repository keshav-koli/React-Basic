import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navbar_logo } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useContext(UserContext);
  var [change, setchange] = useState("Login");
  // ^if no dependency array  is provided, the effect will run after every render
  // ^if dependency array is provided, the effect will run only when the dependency changes
  // ^if dependency array is empty, the effect will run only once after the first render
  useEffect(() => {
    // console.log("Changes in button");
  }, [change]);

  const useCart = useSelector((store) => store.cart.item);
  // console.log(useCart);

  return (
    <div className="header flex justify-between items-center sticky top-0 bg-white p-2.5 shadow-md z-10">
      <div className="logo-container">
        <img className="logo h-18 mr-2.5" src={navbar_logo} />
      </div>
      <div className="Nav-Item flex">
        <ul className="flex ">
          <li className="px-2.5">Status {useOnlineStatus() ? "✅" : "❌"}</li>
          <li className="px-2.5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2.5">
            <Link to="/About">About</Link>
          </li>
          <li className="px-2.5">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-2.5">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="mx-2">{data.loggedUser}</li>
          <li className="px-4">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping text-xl"> </i>
              <span className="text-xs absolute right-21 bg-amber-500 top-6 w-5 text-white pl-1.5 rounded-[50%] mx-1">
                {useCart.length}{" "}
              </span>
            </Link>
          </li>
          <li className="px-3.5 border bg-amber-300 rounded-lg text-white h-7 w-19  transition-transform  duration-100 ease hover:bg-amber-500 hover:translate-y-0.5 active:translate-y-0  ">
            <button
              onClick={() => {
                if (change === "Login") {
                  setchange("Logout");
                } else {
                  setchange("Login");
                }
              }}
              className="login-btn "
            >
              {change}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
