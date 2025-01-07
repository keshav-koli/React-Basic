import ResturantContainer from "./ResturantContainer";
// import { resList } from "../utils/MockData";//no need of this
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
const Body = () => {
  // whenever state variable updates ,react trigger the reconcilation  (re-render the component)
  let [listRestaurantCard, setlistRestaurantcard] = useState([]);
  let [filterRestaurantCard, setfilterRestaurantcard] = useState([]);
  // * Use UseState at top of the component
  // * don't use UseState hook inside loop or conditional statement or function

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch_data();
  }, []);
  // console.log("rendered");

  const fetch_data = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistRestaurantcard(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurantcard(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json);
  };
  // Conditional rendering
  if (listRestaurantCard.length === 0) {
    return <Shimer />;
  }

  return (
    <div className="Card">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Restaurants"
            className="search-input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={(e) => {
              let filter_restaurant1 = listRestaurantCard.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setfilterRestaurantcard(filter_restaurant1);
            }}
          >
            {" "}
            search
          </button>
        </div>
        <button
          onClick={() => {
            const filter_restaurant = listRestaurantCard.filter(
              (resturant) => resturant.info.avgRating > 4.5
            );
            setfilterRestaurantcard(filter_restaurant);
          }}
          className="filter-btn"
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestaurantCard.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/resturantMenu/" + resturant.info.id}
          >
            <ResturantContainer resObj={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
