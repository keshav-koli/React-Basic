import React from "react";
import ReactDOM from "react-dom/client";
import star from "./item/star.png";
/*
*Header
logo
navbar

?Body
search
resturant container
resturant card

!Footer
link
address
copyright

*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/91631e116794391.60698dbc55f96.jpg"
        />
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
};

const ResturantContainer = (props) => {
  // Destructuring of the object
  const {resCard,location}=props
  return (
    <div className="resCard">
        <img className="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/25/0a676151-c806-4c05-8ce9-28449df7a455_884067%20SS.jpg" />
      <div className="res-details">
        <h3>Blue Water Grille</h3>
        <p id="rating"><img src={star} alt="rating" className="star-image"></img>4.3 • 35-40 mins</p>
        <p>{resCard}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="Card">
      <div className="Search">
        <h3>Search</h3>
      </div>
      <div className="res-container">
        <ResturantContainer 
        resCard=' Chinese,North Indian,Continental'
        location='Patel Nagar'/>
        <ResturantContainer 
        resCard=' North Indian,Continental'
        location='Moti Nagar'/>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
