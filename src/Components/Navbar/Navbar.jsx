import React, { Fragment, useState, useEffect } from "react";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineAppstoreAdd } from "react-icons/ai";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import veganiseLogo from "../../Assets/veganiseLogo.jpeg";

import RegistrationModal from "../Registration/RegistrationModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import restaurantData from "../../json/restaurant.json";
import debounce from "lodash.debounce";

const Navbar = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleRegistrationModal = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };
  // useEffect(() => {
  //   // This effect will be triggered whenever searchResults changes
  //   // Update the dropdown menu logic here
  //   console.log("Updated searchResults:", searchResults);
  // }, [searchResults]);

  const handleSearch = (query) => {
    console.log("Search Query:", query);

    if (query.trim() === "") {
      setSearchResults([]); // Clear results if the search query is empty
      return;
    }

    const results = restaurantData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    console.log("search results:", results);

    setSearchResults(results);
  };
  const debouncedHandleSearch = debounce(handleSearch, 100);

  const toggleLoginModal = () => {
    setLoginOpen(!isLoginOpen);
  };

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const navbarClass = top ? "nav" : "nav with-box-shadow";
  return (
    <Disclosure as="nav" className={`bg-bodyBg ${navbarClass}`}>
      {({ open }) => (
        <>
          <div className=" max-w-full sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-sideMenuBg hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* VEGAN LOGO */}
              <div className=" flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto bg-colorTwo"
                    src={veganiseLogo}
                    alt="VEGANISE"
                  />
                  <h1 className="text-[30px] justify-center items-center font-bold text-textColor mr-40">
                    Veganise
                  </h1>
                </div>
                <div className=" hidden ml-20 sm:ml-6 sm:block">
                  {/* NAV ITEMS */}
                  <div className="flex space-x-4 mt-2 items-center">
                    <a
                      href="#"
                      className="text-gray-600 transition-colors duration-700 ease-in-out hover:bg-[#808000] hover:text-white rounded-full px-3 py-2 text-sm font-medium border-2 border-colorTwo/75"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 transition-colors duration-700 ease-in-out hover:bg-[#808000] hover:text-white rounded-full px-3 py-2 text-sm font-medium border-2 border-colorTwo/75"
                    >
                      Mission
                    </a>
                  </div>
                </div>
                {/* search bar */}
                <div className="ml-10 mt-2 relative w-96 md:w-auto">
                  <div className="">
                    <input
                      type="text"
                      className="pl-10 pr-4 py-2 rounded-full border-2 border-colorTwo/75 focus:ring-colorTwo focus:border-colorTwo h-10 w-[32rem]"
                      placeholder="What's your craving?"
                      id="searchbar"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);

                        debouncedHandleSearch(e.target.value);
                      }}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <AiOutlineSearch className="h-5 w-5 text-colorTwo/80" />
                    </div>
                  </div>
                  {searchResults.length > 0 && (
                    <div className="absolute z-10 mt-2 w-96 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      {searchResults.map((result) => (
                        <div key={result.id} className="py-2 px-4">
                          {/* Render your search result item content here */}
                          <p>{result.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex space-x-4 mt-2">
                <div className="flex gap-4 items-center">
                  <button
                    onClick={toggleRegistrationModal}
                    className="transition-colors hover:bg-[#808000] duration-700 ease-in-out text-gray-600  hover:text-white rounded-full px-3 py-2 text-sm font-medium border-2 cursor-pointer border-colorTwo/75"
                  >
                    Sign up
                  </button>
                  {isRegistrationOpen && (
                    <RegistrationModal
                      isOpen={isRegistrationOpen}
                      onClose={toggleRegistrationModal}
                      navigate={navigate}
                    />
                  )}
                </div>

                <div className="flex gap-4 items-center">
                  <button
                    onClick={toggleLoginModal}
                    className="login transition-colors hover:bg-[#808000] duration-700 ease-in-out cursor-pointer text-gray-600 hover:text-white text-sm font-medium py-2 px-3 rounded-full border-2 border-colorTwo/75  "
                  >
                    Log in
                  </button>
                  {isLoginOpen && (
                    <LoginModal
                      isOpen={isLoginOpen}
                      onClose={toggleLoginModal}
                      navigate={navigate}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Mobile navigation items go here */}
              <div className="space-y-1 px-2 pb-3 pt-2">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  About
                </a>
                {/* Add more mobile navigation links as needed */}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
