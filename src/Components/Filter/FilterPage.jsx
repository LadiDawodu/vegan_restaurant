import React, { useEffect, useState } from "react";

const filterableOPtions = [
  {
    id: "sort",
    title: "Sort By",
    options: sortRestaurantsBy,
    filterType: "price",
  },
  {
    id: "mostReviewed",
    title: "Most Reviewed",
    options: [],
    filterType: "review",
  },
  {
    id: "openNow",
    title: "Open Now",
    options: [],
    filterType: "openNow",
  },
  {
    id: "highestRating",
    title: "Highest Rating",
    options: [],
    filterType: "rating",
  },
];

const FilterPage = () => {
  return <div className="filterPage ">Filters</div>;
};

export default FilterPage;
