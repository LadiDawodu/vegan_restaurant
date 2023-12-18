import React from "react";
import { AiFillStar } from "react-icons/ai";

const RestaurantCard = ({
  id,
  name,
  is_closed,
  rating,
  categories,
  price,
  location,
  image_url,
}) => {
  return (
    <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorFour p-3 rounded-[10px]">
      <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md restaurantImage">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
        {name}
      </h1>
      <div className="info mt-5 flex justify-center items-center ">
        <div className="singleInfo border-x-2 grid px-3">
          <AiFillStar className="flex mt-auto justify-center items-center" />
          <span className="font-semibold ">{rating}</span>
        </div>
        <p className="priceRange">{price}</p>
      </div>
      <small className="block text-center text-[#808080] font-medium cuisine">
        {categories.map((category) => category.title).join(", ")}
      </small>

      <div className=" location mt-5 flex justify-center items-center">
        <div className="flex justify-center">
          <p className="text-center block">
            {location.display_address.join(", ")}
          </p>
        </div>
      </div>
      <div className="open">
        <h3>{is_closed ? "Closed" : "Open"}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
