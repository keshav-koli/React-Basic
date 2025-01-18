import React from "react";
import { useParams } from "react-router-dom";
import { menu_food_img_id } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResturantMenu = () => {

  const { resid } = useParams();
  // console.log(resid)

  const menuData=useRestaurantMenu(resid);

  if (!menuData) {
    return <h2 className="loading-nenu-data">Loading.......</h2>;
  }

  //   const { name } = menuData?.cards[2]?.card?.card?.info; wrong way to access the data
  const itemCards = menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.categories?.[0]?.itemCards || menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.itemCards;
  const { name, cuisines } =
    menuData.cards[2].card.card.info;

  // if (!itemCards) {
  //   menuData.map((resinfo) => {
  //     resinfo.data.card[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.categories[0].itemCards.map(
  //       (item) => {
  //         console.log(item.card.info.name);
  //       }
  //     );
  //   });
  // }

  return (
    <div className="resturant-menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{itemCards?.[2]?.card.info.category}</h3>
      <div className="menu-data">
        {itemCards.map((item) => (
          <div key={item.card.info.id} className="menu-data-card">
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
              alt={item.card.info.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default ResturantMenu;
