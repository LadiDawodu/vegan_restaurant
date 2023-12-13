import React, { useEffect, useState } from "react";
import veganBurger from "../../Assets/veganBurger.svg";
import mohito from "../../Assets/mohito.png";
import veganBrunch from "../../Assets/veganBrunch.png";
import veganPizza from "../../Assets/veganPizza.svg";
import veganBQQ from "../../Assets/veganBBQ.png";
import cafe from "../../Assets/cafe.svg";
import sushi from "../../Assets/sushi.png";
import ethiopian from "../../Assets/ethiopian.png";
import indian from "../../Assets/indian.png";
import mediterranean from "../../Assets/mediterranean.png";
import jerkChicken from "../../Assets/jerkChicken.png";
import { BsPlus } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import veganBurgers from "../../Assets/veganBurgers.jpg";
import { AiFillStar } from "react-icons/ai";
import restaurantcard from "../RestaurantCard/RestaurantCard";

const Body = () => {
  return (
    <div className=" bg-bodyBg w-full p-16 pl-6 ">
      {/* Title Section */}
      <div className="flex items-center justify-between mt-8">
        <div className="title">
          <h1 className="text-[35px] text-titleColor tracking[1px] font-extrabold">
            Find the best Vegan place...
          </h1>
          <p> eeeeee</p>
          <span className="text-[18px] opacity-70">
            <strong>+350 Vegan restaurants,</strong> the choice is yours
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="specials px-4 text-center border-r-2">
            <h3 className="text-[20px] font-bold text-titleColor">95</h3>
            <small className="text-[16px] opacity-70">Specials</small>
          </div>

          <div className="deliveries px-4 text-center border-r-2">
            <h3 className="text-[20px] font-bold text-titleColor">82</h3>
            <small className="text-[16px] opacity-70">Deliveries</small>
          </div>
        </div>
      </div>
      {/* categories Div */}
      <div className="flex mt-8 items-center gap-10 ">
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#fdca7d34] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={veganBurger}
              alt="vegan Burger"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            Burgers
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#d4f5c031] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={mohito}
              alt="mohito drinks"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            Mohito
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#67fdf016] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={veganBQQ}
              alt="vegan BBQ"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            BBQ
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#e0696125] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={veganPizza}
              alt="vegan Pizza"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#cca7872c] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={cafe}
              alt="vegan Brunch"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            Cafe
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#a7c7e732] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={sushi}
              alt="vegan Burger"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            Sushi
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#c3b1e121] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={veganBrunch}
              alt="vegan Burger"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            Brunch
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#c1e1c12f] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={ethiopian}
              alt="vegan Burger"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            Ethiopian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#ff696115] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={indian}
              alt="vegan Burger"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            Indian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#FDFD9630] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={mediterranean}
              alt="vegan Burger"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            Mediterranean
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#fac79826] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={jerkChicken}
              alt="vegan Burger"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            Carribean
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imDiv h-[40px] w-[40px] bg-[#fff] rounded-full flex items-center justify-center m-auto p-1">
            <BsPlus className="text-center flex justify-center m-auto text-[25px] hover:scale-[1.5] transition-transform cursor-pointer " />
          </div>

          <span className="uppercase text-[12px] font-medium opacity-60 pt-2 text-center">
            More
          </span>
        </div>
      </div>

      {/* Restaurant Section */}
      <div className="restaurant mt-8 ">
        <div className="flex items-center justify-between">
          <div className="title">
            <h1 className="text-[23px] text-titleColor font-bold">
              {" "}
              New Restaurants{" "}
            </h1>
            <span>
              {" "}
              <strong className="text-[16px] opacity-70">
                {" "}
                3 restaurants,{" "}
              </strong>{" "}
              have opened up in London{" "}
            </span>
          </div>

          <button className=" flex align-center gap-2 transition-colors duration-700 hover:bg-[#808080] hover:text-bodyBg text-titleColor ease-in-out cursor-pointer font-semibold py-2 px-4\ rounded-[5px] items-center">
            Veiw All <BsArrowRightShort className="text-[20px] " />
          </button>
        </div>

        <div className="restaurantContainer py-8 flex justify-between items-center">
          {/* Restaurant 1 */}
          <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorTwo p-3 rounded-[10px] mr-4">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img
                src={veganBurgers}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
              Mildreds
            </h1>
            <small className="block text-center text-[#808080] font-medium">
              International Cuisine
            </small>
            <div className="info mt-5 flex justify-center items-center ">
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>

              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
            </div>
          </div>

          {/* Restaurant 2 */}
          <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorTwo p-3 rounded-[10px] mr-4">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img
                src={veganBurgers}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
              Mildreds
            </h1>
            <small className="block text-center text-[#808080] font-medium">
              International Cuisine
            </small>
            <div className="info mt-5 flex justify-center items-center ">
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>

              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
            </div>
          </div>

          {/* Restaurant 3 */}
          <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorFour p-3 rounded-[10px] mr-4">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img
                src={veganBurgers}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
              Mildreds
            </h1>
            <small className="block text-center text-[#808080] font-medium">
              International Cuisine
            </small>
            <div className="info mt-5 flex justify-center items-center ">
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>

              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
            </div>
          </div>

          {/* Restaurant 4 */}
          <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorOne p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img
                src={veganBurgers}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
              Mildreds
            </h1>
            <small className="block text-center text-[#808080] font-medium">
              International Cuisine
            </small>

            <div className="info mt-5 flex justify-center items-center ">
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>

              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
            </div>
          </div>

          {/* Restaurant 5 */}
          <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorOne p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img
                src={veganBurgers}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
              Mildreds
            </h1>
            <small className="block text-center text-[#808080] font-medium">
              International Cuisine
            </small>

            <div className="info mt-5 flex justify-center items-center ">
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>

              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
            </div>
          </div>

          {/* Restaurant 6 */}
          <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorOne p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img
                src={veganBurgers}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
              Mildreds
            </h1>
            <small className="block text-center text-[#808080] font-medium">
              International Cuisine
            </small>

            <div className="info mt-5 flex justify-center items-center ">
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>

              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
            </div>
          </div>

          {/* Restaurant 4 */}
          <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorOne p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img
                src={veganBurgers}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
              Mildreds
            </h1>
            <small className="block text-center text-[#808080] font-medium">
              International Cuisine
            </small>

            <div className="info mt-5 flex justify-center items-center ">
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>

              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
            </div>
          </div>

          {/* Restaurant 5 */}
          <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorOne p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img
                src={veganBurgers}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
              Mildreds
            </h1>
            <small className="block text-center text-[#808080] font-medium">
              International Cuisine
            </small>

            <div className="info mt-5 flex justify-center items-center ">
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>

              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
            </div>
          </div>

          {/* Restaurant 6 */}
          <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorOne p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img
                src={veganBurgers}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
              Mildreds
            </h1>
            <small className="block text-center text-[#808080] font-medium">
              International Cuisine
            </small>

            <div className="info mt-5 flex justify-center items-center ">
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>

              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font-semibold ">3.4</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
