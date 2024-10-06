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

const resList = [
  {
    "info": {
      "id": "38925",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/52cd837b-1d01-4499-a648-bb4f071f523a_38925.jpg",
      "locality": "Netaji Subhash Marg",
      "areaName": "Daryaganj",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "2456",
      "avgRatingString": "4.3",
      "totalRatingsString": "11K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-07 02:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2af841c3-d162-44e4-939f-f828bced1803"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/dominos-pizza-netaji-subhash-marg-daryaganj-rest38925",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "25397",
      "name": "Oven Story Pizza - Standout Toppings",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/1/2dba4ab2-2582-4ddc-8950-2ef04f566aba_25397.jpg",
      "locality": "Minto Road",
      "areaName": "Gandhi Market",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "3534",
      "avgRatingString": "4.3",
      "totalRatingsString": "4.2K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-06 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2af841c3-d162-44e4-939f-f828bced1803"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/oven-story-pizza-standout-toppings-minto-road-gandhi-market-rest25397",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "919707",
      "name": "Domino's Viva Roma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/1c368a36-7ae9-45ab-82cb-b79eef928512_919707.jpg",
      "locality": "Netaji  Subhash  Marg",
      "areaName": "Daryaganj",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "parentId": "525981",
      "avgRatingString": "NEW",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-07 01:55:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2af841c3-d162-44e4-939f-f828bced1803"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/dominos-viva-roma-netaji-subhash-marg-daryaganj-rest919707",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
];
const ResturantContainer = (props) => {
  // Destructuring of the object
  const { resObj } = props;
  return (
    <div className="resCard">
      <img
        className="res-image"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resObj.info.cloudinaryImageId}
      />
      <div className="res-details">
        <h3>{resObj.info.name}</h3>
        <p id="rating">
          <img src={star} alt="rating" className="star-image"></img>{resObj.info.avgRating} • {resObj.info.sla.deliveryTime}
           mins
        </p>
        <p></p>
        <p>{resObj.info.locality}</p>
        <p>{resObj.info.cuisines.join(',')}</p>
        <p>{resObj.info.costForTwo}</p>
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
        <ResturantContainer resObj={resList[0]} />
        <ResturantContainer resObj={resList[1]} />
        <ResturantContainer resObj={resList[2]} />
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
