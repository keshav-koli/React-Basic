import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantList from "./RestaurantList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);

  const clearCartDispatch = useDispatch();
  const handleClearCart = () => {
    clearCartDispatch(clearItem());
  };

  // Debugging: Check if prices exist
  //  console.log("Cart Items:", cartItems);
  //  cartItems.forEach((item) => {
  //    console.log(
  //      "Item Name:", item.card.info.name,
  //      "| Final Price:", item.card.info.finalPrice,
  //      "| Price:", item.card.info.price,
  //      "| Default Price:", item.card.info.defaultPrice
  //    );
  //  });

  // ✅ Fix: Prevents NaN issue
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(
      (item.card.info.finalPrice ??
        item.card.info.price ??
        item.card.info.defaultPrice ??
        0) / 100
    );
    return acc + price * (item.quantity ?? 1);
  }, 0);
  // const totalPrice = cartItems.reduce((acc, item) => {
  //   const price = parseFloat(
  //     (item.card.info.finalPrice ?? item.card.info.price ?? item.card.info.defaultPrice ?? 0) / 100
  //   ) || 0;
  //   return acc + price * (item.quantity ?? 1);
  // }, 0);

  return (
    <div className="flex flex-col items-center min-h-[520px] p-6">
      <h1 className="text-center text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-gray-500 text-lg">
          Your cart is empty. Add some delicious food! 🍔
        </div>
      ) : (
        <>
          <button
            onClick={handleClearCart}
            className="border bg-amber-500 text-white rounded-2xl p-2 cursor-pointer"
          >
            Clear cart
          </button>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <RestaurantList items={cartItems} />
            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-700">
                Total Items: {cartItems.length}
              </span>
            </div>
            {/* ✅ Fixed Total Price */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-700">
                Total: Rs {totalPrice.toFixed(2)}
              </span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
