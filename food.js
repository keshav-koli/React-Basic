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

const resObj = {
  info: {
    id: "38925",
    name: "Domino's Pizza",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/52cd837b-1d01-4499-a648-bb4f071f523a_38925.jpg",
    locality: "Netaji Subhash Marg",
    areaName: "Daryaganj",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "11K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 4.7,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "4.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-10-07 02:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
          description: "Delivery!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-2af841c3-d162-44e4-939f-f828bced1803",
  },
  cta: {
    link: "https://www.swiggy.com/city/delhi/dominos-pizza-netaji-subhash-marg-daryaganj-rest38925",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};
const ResturantContainer = (props) => {
  // Destructuring of the object
  const { resObj } = props;
  return (
    <div className="resCard">
      <img
        className="res-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/25/0a676151-c806-4c05-8ce9-28449df7a455_884067%20SS.jpg"
      />
      <div className="res-details">
        <h3>Blue Water Grille</h3>
        <p id="rating">
          <img src={star} alt="rating" className="star-image"></img>4.3 • 35-40
          mins
        </p>
        <p>{resObj.info.name}</p>
        <p>{resObj.info.locality}</p>
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
        <ResturantContainer resObj={resObj} />
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
