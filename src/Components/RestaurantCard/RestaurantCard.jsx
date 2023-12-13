import React from "react";
import { AiFillStar } from "react-icons/ai";

const restaurantCard = ({
  id,
  reviewCount,
  categories,
  location,
  open_now,
  image_url,
  price,
}) => {
  return (
    <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorOne p-3 rounded-[10px]">
      <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md restaurantImage">
        <img src={image_url} alt={id} className="w-full h-full object-cover" />
      </div>
      <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
        {id}
      </h1>
      <div className="info mt-5 flex justify-center items-center ">
        <div className="singleInfo border-x-2 grid px-3">
          <AiFillStar className="flex mt-auto justify-center items-center" />
          <span className="font-semibold ">{reviewCount}</span>
        </div>
        <p className="priceRange">{price}</p>
      </div>
      <small className="block text-center text-[#808080] font-medium cuisine">
        {categories}
      </small>

      <div className=" location mt-5 flex justify-center items-center">
        <div className="flex justify-center">
          <p className="text-center block">
            {location.address1}, {location.city}, {location.postal_code}{" "}
          </p>
        </div>
      </div>
      <div className="open">
        <h3>Open</h3>
        <p>{open_now ? "Open now" : "Closed"}</p>
      </div>
    </div>
  );
};

export default restaurantCard;
