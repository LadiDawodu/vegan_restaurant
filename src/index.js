// import { response } from "express";
// import { writeFileSync as writeFileSync  } from '';
// import { writeFileSync } from "fs";

("use strict");
import * as fs from "fs";
//import { off } from "process";
import { client as _client } from "yelp-fusion";
const client = _client(
  "2n_T11KN6acX6xRKB13dEcY8W_pHKqVYUfMVhmBBLzyEglfzS2cYKPy8enXiIq-igD6iDPJHdEoBhhHx1T6oW7xhKH05axyWeAZnOdN86HqOFFCfX9nU-No2yv04ZXYx"
);

let allBusinesses = [];
const limit = 20;
let offset = 0;
const updateInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
let lastUpdateTime = null;

const fetchData = async () => {
  console.log("Fetching data process started at", new Date());
  try {
    const currentTime = new Date().getTime();
    if (!lastUpdateTime || currentTime - lastUpdateTime > updateInterval) {
      while (offset < 160) {
        const response = await client.search({
          location: "London",
          term: "restaurants",
          categories: "vegan",
          limit,
          offset,
        });
        const businesses = response.jsonBody.businesses;
        allBusinesses = allBusinesses.concat(businesses);
        offset += limit;

        console.log(
          `fetched ${businesses.length} results. Total count: ${offset}`
        );
      }
      lastUpdateTime = currentTime;

      const jsonData = JSON.stringify(allBusinesses, null, 2);
      fs.writeFileSync("./src/json/restaurant.json", jsonData);
      console.log(`Restaurant data saved to "restaurants.json" file.`);
    } else {
      console.log("Date is up-to-date. No need to fetch");
    }
  } catch (error) {
    console.error("Yelp API request failed:", error);
  }
};
fetchData();

// const fetchData = async () => {
//   try {
//     while (offset < 160) {
//       const response = await client.search({
//         location: "London",
//         //latitude: "51.5072",
//         //longitude: "0.1276",
//         term: "restaurants",
//         categories: "vegan",
//         //sort_by: "rating",
//         //price: "1,2,3,4",
//         //open_now: "true",
//         limit,
//         offset,
//       });

//       const businesses = response.jsonBody.businesses;
//       allBusinesses = allBusinesses.concat(businesses);
//       offset += limit;

//       console.log(
//         `Fetched ${businesses.length} results. Total count: ${offset}`
//       );
//     }

//     const jsonData = JSON.stringify(allBusinesses, null, 2);
//     fs.writeFileSync("./src/json/restaurant.json", jsonData);
//     console.log(`Restaurant data saved to "restaurants.json" file.`);
//   } catch (error) {
//     console.error("Yelp API request failed:", error);
//   }
// };

// fetchData();

// const requestIdleCallback = (response) => {
//   for (const business of response.jsonBody.businesses) {
//     allBusinesses.push(business);
//   }
//   const jsonData = JSON.stringify(allBusinesses, null, 2);
//   fs.writeFileSync("./src/json/restuarant.json", jsonData);
//   console.log(`Restaurant data saved to "restaurants.json" file.`);
// };

// client
//   .search({
//     location: "London",
//     term: "restaurant",
//     categories: "vegan",
//     sort_by: "rating",
//     price: "1,2,3,4",
//     open_now: "true",
//     limit: 50,
//   })
//   .then(requestIdleCallback)
//   .catch((error) => {
//     console.error("Yelp API request failed:", error);
//   });

// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const errorHandler = require("./middleware/error");

// const PORT = process.env.PORT || 5173;

// const app = express();

// // app.get("/api", (req, res) => {
// //   res.json({ success: true });
// // });
// alert("HERE");
// app.use("/api", require("./../src/routes/index"));

// app.use(cors());

// app.use(express.static("src"));

// app.use(errorHandler);

// app.listen(PORT, () => console.log(`server running on port ${PORT}`));
