import ResturantContainer from "./ResturantContainer";
import { resList } from "../utils/MockData";
import { useState } from "react";
const Body = () => {
  let [listRestaurantCard, setlistRestaurantcard] = useState([
    {
      info: {
        id: "831065",
        name: "Chinese Wok",
        cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
        locality: "Chandni Chowk",
        areaName: "Omaxe mall",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4,
        parentId: "61955",
        avgRatingString: "4.0",
        sla: {
          deliveryTime: 47,
        },
      },
    },
    {
      info: {
        id: "804724",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_804724.JPG",
        locality: "Kaccha Bagh",
        areaName: "Chandni Chowk",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
        avgRating: 4.1,
        parentId: "547",
        avgRatingString: "4.1",
        totalRatingsString: "48",
        sla: {
          deliveryTime: 47,
        },
      },
    },
  ]);
  return (
    <div className="Card">
      <div className="filter">
        <button
          onClick={() => {
            {
              var filter_restaurant = listRestaurantCard.filter(
                (resturant) => resturant.info.avgRating > 4
              );
            }
            {
              setlistRestaurantcard(filter_restaurant);
            }
          }}
          className="filter-btn"
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listRestaurantCard.map((resturant) => (
          <ResturantContainer resObj={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
