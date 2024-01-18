import React from "react";
import { BsCurrencyPound } from "react-icons/bs";

const FilterPage = () => {
  return (
    <div className="filterPage">
      <details
        open
        className="m-10 max-w-md w-screen overflow-hidden rounded-lg border border-gray-200 open:shadow-lg text-gray-700 static"
      >
        <summary className="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-3 lg:hidden">
          <span className="text-sm font-medium"> Toggle Filters</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h6M4 12h16M4 18h16"
            />
          </svg>
        </summary>

        <form action="" className="flex border-t border-gray-200 lg:border-t-0">
          <fieldset className="w-full">
            <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium ">
              {" "}
              Type
            </legend>
            <div className="space-y-2 px-5 py-6">
              <div className="flex items-center">
                <input
                  id="MostReviewed"
                  type="checkbox"
                  name="type[MostReviewed]"
                  className="h-5 w-5 rounded border-gray-300"
                />
                <label
                  htmlFor="MostReviewed"
                  className="ml-3 text-sm font-medium"
                >
                  Most Reviewed
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="HighestRating"
                  type="checkbox"
                  name="type[HighestRating]"
                  className="h-5 w-5 rounded border-gray-300"
                />
                <label
                  htmlFor="HighestRating"
                  className="ml-3 text-sm font-medium"
                >
                  Highest Rating
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="text-xs text-gray-500 underline"
                >
                  Reset Type
                </button>
              </div>
            </div>
          </fieldset>

          <fieldset className="w-full">
            <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
              Price
            </legend>

            <div className="space-y-2 px-5 py-6">
              <div className="flex items-center">
                <input
                  id="£"
                  type="checkbox"
                  name="Price[£]"
                  className="h-5 w-5 rounded border-gray-300"
                />
                <label htmlFor="£" className="ml-3 text-sm font-medium">
                  <BsCurrencyPound size={20} style={{ marginLeft: 5 }} />
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="text-xs text-gray-500 underline"
                >
                  Reset Price
                </button>
              </div>
            </div>
          </fieldset>
        </form>

        <div>
          <div className="flex flex-start border-t border-gray-200 px-5 py-3">
            <button
              name="reset"
              type="button"
              className="rounded tet-xs mr-16 font-medium text-gray-600 underline"
            >
              Reset All
            </button>

            <button
              name="commit"
              type="button"
              className="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95 ml-20"
            >
              {" "}
              Apply Filters
            </button>
          </div>
        </div>
      </details>
    </div>
  );
};

export default FilterPage;
