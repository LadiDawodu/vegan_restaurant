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
import { v4 as uuidv4 } from "uuid";
import veganBurgers from "../../Assets/veganBurgers.jpg";
import { AiFillStar } from "react-icons/ai";
import { data } from "autoprefixer";
import RestaurantCard from "../RestaurantCard/RestaurantCard.jsx";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState([]);
  const cardsOnPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/json/restaurant.json");
        const data = await response.json();
        setTotalData(data);

        const startIndex = (currentPage - 1) * cardsOnPage;
        const endIndex = startIndex + cardsOnPage;

        const slicedData = data.slice(startIndex, endIndex);
        const uniqueKeys = slicedData.map((restaurant) => uuidv4());

        const updateRestaurants = slicedData.map((restaurant, index) => ({
          ...restaurant,
          id: uniqueKeys[index],
        }));
        setRestaurants(updateRestaurants);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };
    fetchData();
  }, [currentPage]);

  const totalPages = Math.ceil(totalData.length / cardsOnPage);

  const clickMoreButton = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="bodyClass min-h-screen flex items-center justify-center bg-bodyBg ">
      <div className=" bg-bodyBg  p-12 ">
        {/* Title Section */}
        <div>
          <div className="flex items-center justify-between mt-8">
            <div className="title">
              <h1 className="text-[35px] text-titleColor tracking[1px] font-extrabold">
                Find the best Vegan place...
              </h1>
              {/*<span className="text-[18px] opacity-70">
            <strong>+350 Vegan restaurants,</strong> the choice is yours
          </span>*/}
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

            <button className=" flex align-center gap-2 text-gray-600 transition-colors duration-700 ease-in-out hover:bg-[#808000] hover:text-white rounded-full px-3 py-2 text-sm font-medium border-2 border-colorTwo/75">
              Veiw All <BsArrowRightShort className="text-[20px] " />
            </button>
          </div>

          {restaurants.length > 0 && (
            <div className="restaurantContainer py-8 flex justify-between items-center">
              {/* Restaurantcard 1 */}
              {restaurants.map((restaurant) => (
                <div key={restaurant.id}>
                  <RestaurantCard {...restaurant} />
                </div>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="pagination flex justify-center mt-4  ">
              {/* LEFT ARROW */}

              <button
                onClick={() => clickMoreButton(currentPage - 1)}
                className={`paginationButton inline-flex items-center justify-center mx-2 px-4 py-2 rounded-full text-gray-600`}
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => clickMoreButton(index + 1)}
                  className={`paginationButton inline-flex items-center justify-center mx-1 px-4 py-2 rounded-full ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              {/* RIGHT ARROW */}
              <button
                onClick={() => clickMoreButton(currentPage + 1)}
                className={`paginationButton inline-flex items-center justify-center mx-2 px-4 py-2 rounded-full text-gray-600`}
                disabled={currentPage === totalPages}
              >
                <ChevronRightIcon className="h-6 w-6 " />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
