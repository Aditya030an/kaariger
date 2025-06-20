import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  console.log("card inside cartPage", cart);

  // Increase quantity
  const increaseQty = (id, price, height, width, artType , media, selectedFrame) => {
    const updated = cart?.map((item) =>
      item.id === id &&
      item?.price === price &&
      item?.height === height &&
      item?.width === width &&
      item?.artType === artType &&
      item?.media === media &&
      item?.selectedFrame === selectedFrame
        ? { ...item, quantity: item?.quantity + 1 }
        : item
    );
    setCart(updated);
  };

  // Decrease quantity
  const decreaseQty = (id, price, height, width, artType, media, selectedFrame) => {
    const updated = cart
      ?.map((item) =>
        item.id === id &&
        item?.price === price &&
        item?.height === height &&
        item?.width === width &&
        item?.artType === artType &&
        item?.media === media &&
        item?.selectedFrame === selectedFrame
          ? { ...item, quantity: item?.quantity - 1 }
          : item
      )
      .filter((item) => item?.quantity > 0);
    setCart(updated);
  };

  // Remove item
  const removeItem = (id , price, height, width, artType, media, selectedFrame) => {
    const updated = cart?.filter(
      (item) =>
        item.id !== id &&
        item?.price !== price &&
        item?.height !== height &&
        item?.width !== width &&
        item?.artType !== artType &&
        item?.media !== media &&
        item?.selectedFrame !== selectedFrame
    );
    setCart(updated);
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart?.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cart?.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-24 h-24 object-contain rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item?.title}</h2>
                    <p className="text-gray-700 text-sm capitalize">
                      Size: {item?.width}" x {item?.height}" | Type:{" "}
                      {item?.artType}
                    </p>
                    <p className="text-gray-700 text-sm capitalize">
                      Media: {item?.media} | Frame: {item?.selectedFrame}
                    </p>

                    <p className="text-sm text-gray-500">
                      Base Price: ₹{item?.basePrice?.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      Final Price: ₹{item?.price?.toLocaleString()}
                    </p>
                    <div className="flex items-center mt-2 gap-2">
                      <button
                        onClick={() =>
                          decreaseQty(
                            item?.id,
                            item?.price,
                            item?.height,
                            item?.width,
                            item?.artType , 
                            item?.media,
                            item?.selectedFrame
                          )
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item?.quantity}</span>
                      <button
                        onClick={() =>
                          increaseQty(
                            item?.id,
                            item?.price,
                            item?.height,
                            item?.width,
                            item?.artType ,
                            item?.media,
                            item?.selectedFrame
                          )
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <p className="mt-2 text-teal-600 font-semibold">
                      Subtotal: ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    removeItem(
                      item.id,
                      item.price,
                      item.height,
                      item.width,
                      item.artType,
                      item.media,
                      item.selectedFrame
                    )
                  }
                  className="mt-4 md:mt-0 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h3 className="text-xl font-semibold">
              Total: ₹
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </h3>
            <button className="mt-3 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
