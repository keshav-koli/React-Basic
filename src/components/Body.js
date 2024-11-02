import ResturantContainer from "./ResturantContainer";
import { resList } from "../utils/MockData";
import { useState } from "react";
const Body = () => {
  let [listRestaurantCard, setlistRestaurantcard] = useState(resList);
  return (
    <div className="Card">
      <div className="filter">
        <button
          onClick={() => {
            {
              let filter_restaurant = listRestaurantCard.filter(
                (resturant) => resturant.info.avgRating > 4.0
              );
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
