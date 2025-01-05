import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu_food_api } from "../utils/constant";

const ResturantMenu = () => {
  let [menuData, setmenuData] = useState(null);
  useEffect(() => {
    fetch_menu_data();
  }, []);

  const { resid } = useParams();
  // console.log("rendered");
  console.log(resid)
  const fetch_menu_data = async () => {
    const data = await fetch(menu_food_api + resid);
    const json = await data.json();
    // console.log(json);
    setmenuData(json.data);
    // console.log(json.data);
    console.log(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
        .categories[0].itemCards
    );

    // console.log(json.data.cards[2].card.card.info);

    // console.log(menuData?.cards[2]?.card?.card?.info?.name);
  };
  if (!menuData) {
    return <h2>Loading.......</h2>;
    // return <Shimer />;
  }
  //   const { name } = menuData?.cards[2]?.card?.card?.info; wrong way to access the data
  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.categories[0];
  const { name, cuisines, costForTwoMessage } =
    menuData.cards[2].card.card.info;

  if (!itemCards) {
    menuData.map((resinfo) => {
      resinfo.data.card[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.categories[0].itemCards.map(
        (item) => {
          console.log(item.card.info.name);
        }
      );
    });
  }
  const menu_food_img_id =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  return (
    <div className="resturant-menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{itemCards[0].card.info.category}</h3>
      <div className="menu-data">
        {itemCards.map((item) => (
          <div key={item.card.info.id}>
            <h4>
              {item.card.info.name}
              {" - Rs "}
              {item.card.info.finalPrice / 100 ||
                item.card.info.price / 100 ||
                item.card.info.defaultPrice / 100}
            </h4>
            <img
              className="menu-data-image"
              src={menu_food_img_id.concat(item?.card?.info?.imageId)}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
