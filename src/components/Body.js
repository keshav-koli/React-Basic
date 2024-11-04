import ResturantContainer from "./ResturantContainer";
import { resList } from "../utils/MockData";
import { useEffect, useState } from "react";

const Body = () => {
  let [listRestaurantCard, setlistRestaurantcard] = useState(resList);
  useEffect(() => {
    fetch_data();
  }, []);
  const fetch_data = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistRestaurantcard(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
      restaurants
      );
  };

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
