import React, { useState } from "react";
import { menu_food_img_id } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

// Placeholder image if no image is available
const placeholderImage = "https://via.placeholder.com/150?text=No+Image";

const RestaurantList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.item);

  // Function to check quantity of an item in the cart
  const getItemQuantity = (id) => {
    const item = cartItems.find((cartItem) => cartItem.card.info.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {items.map((item) => {
        const [showFullDescription, setShowFullDescription] = useState(false);
        const description = item?.card?.info?.description || "No description available";
        const shortDescription =
          description.length > 100 ? `${description.substring(0, 100)}...` : description;

        const quantity = getItemQuantity(item.card.info.id);

        return (
          <div
            key={item?.card?.info?.id}
            className="p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 bg-white flex flex-col items-center"
          >
            {/* Menu Item Image with Fallback */}
            <img
              className="w-40 h-40 object-cover rounded-md mb-2"
              src={item?.card?.info?.imageId ? menu_food_img_id + item.card.info.imageId : placeholderImage}
              alt={item.card.info.name}
            />

            {/* Item Name */}
            <h4 className="text-lg font-semibold">{item.card.info.name}</h4>

            {/* Description with Read More / Read Less Toggle */}
            <p className="text-gray-600 text-sm mt-1">
              {showFullDescription ? description : shortDescription}
              {description.length > 100 && (
                <span
                  className="text-blue-500 cursor-pointer ml-1"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? " Read Less" : " Read More"}
                </span>
              )}
            </p>

            {/* Price & Add/Remove Buttons */}
            <div className="flex justify-between w-full mt-2">
              <span className="text-green-600 font-bold text-lg">
                Rs {item.card.info.finalPrice / 100 || item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </span>

              {/* Add/Remove Buttons */}
              {quantity > 0 ? (
                <div className="flex items-center">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => dispatch(removeItem(item.card.info.id))}
                  >
                    -
                  </button>
                  <span className="mx-3 font-bold">{quantity}</span>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition cursor-pointer"
                    onClick={() => dispatch(addItem(item))}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition cursor-pointer"
                  onClick={() => dispatch(addItem(item))}
                >
                  Add +
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantList;
