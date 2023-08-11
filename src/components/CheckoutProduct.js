import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ product }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      hasPrime: product.hasPrime,
      rating: product.rating,
    };
    dispatch(addToBasket(productToAdd));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id: product.id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={product.image}
        height={200}
        width={200}
        objectFit="contain"
        alt=""
      />

      <div className="col-span-3 mx-5">
        <p>{product.title}</p>
        <div className="flex">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{product.description}</p>
        <Currency quantity={product.price} currency="GBP" />

        {product.hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://mundoconectado.com.br/uploads/chamadas/logo-amazon-prime-imagem-reproducao-amazon.jpg"
              alt=""
            />

            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
