import React, { useEffect, useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

import { auth } from "../../js/firebase";
import { db } from "../../js/firebase";

const SideMenu = ({ authenticated }) => {
  const [userDisplayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(userDisplayName);
      if (user) {
        const displayName = user.displayName;
        console.log("User.displayName from Firebase:", displayName);

        if (displayName) {
          setDisplayName(displayName);
          setLoading(false);
        } else {
          const userId = user.uid;
          const userRef = db.ref("user/" + userId);

          userRef
            .once("value")
            .then((snapshot) => {
              const userData = snapshot.val();

              if (userData) {
                const fullName = `${userData.firstName} ${userData.lastName}`;
                console.log("fullName from user data:", fullName);
                setDisplayName(fullName);
              }

              setLoading(false);
              console.log(userDisplayName);
            })
            .catch((error) => {
              console.error("Error user data wrong", error);
              setLoading(false);
            });
        }
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe(); // Clean up the observer on unmount
  }, [authenticated]);

  console.log("authenticated:", authenticated);

  return (
    <div className=" bg-bodyBg relative flex flex-col items-center  basis-30 p-5 w-full">
      {/* LOGO */}
      <div className="logo mt-4 gap-2 text-white flex justify-center items-center "></div>
      <div className="flex  mt-[3rem]">
        {/* User Div & Menu */}
        <div className=" username flex flex-col text-[white] items-center admin">
          <span className="opacity-90 mt-2 text-neutral-200 items-center pl-3">
            <h3 className="font-bold text-textColor items-center pl-3">
              {loading
                ? "Loading..."
                : `Welcome,
               ${userDisplayName}`}
            </h3>
          </span>

          {/* Single Menu*/}

          <div className=" grid  mt-10 mb-7">
            <li
              className="flex pt-3 pb-3 pl-3 gap-2 transition-opacity
            duration-500 hover:opacity-100 items-center"
            >
              <AiFillHome className="text-white" />
              <span className="text-textColor">Home</span>
            </li>

            <li
              className="flex pt-3 pb-3 pl-3 gap-2 transition-opacity
            duration-500  hover:opacity-100 items-center"
            >
              <BiRestaurant className="text-white" />
              <span className="text-textColor">Catergory</span>
            </li>

            <li
              className="flex pt-3 pb-3 pl-3 gap-2
            duration-500  transition-opacity hover:opacity-100 items-center"
            >
              <BsFillBookmarkStarFill className="text-white" />
              <span className="text-textColor">Reservations</span>
            </li>

            <li
              className="flex pt-3 pb-3 pl-3 gap-2
            duration-500      transition-opacity hover:opacity-100 items-center"
            >
              <AiFillHeart className="text-white" />
              <span className="text-textColor">Favourites</span>
            </li>
          </div>
        </div>

        {/* Sidemenu Map Div */}
      </div>
    </div>
  );
};

export default SideMenu;
