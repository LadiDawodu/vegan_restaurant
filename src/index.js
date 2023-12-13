import { response } from "express";
import { client as _client } from "yelp-fusion";
const client = _client(
  "2n_T11KN6acX6xRKB13dEcY8W_pHKqVYUfMVhmBBLzyEglfzS2cYKPy8enXiIq-igD6iDPJHdEoBhhHx1T6oW7xhKH05axyWeAZnOdN86HqOFFCfX9nU-No2yv04ZXYx"
);

let allBusinesses = [];

const requestIdleCallback = (response) => {
  for (const business of response.jsonBody.businesses.slice(0, 10)) {
    allBusinesses.push(business);
  }
  const writeToFile = async () => {
    try {
      const jsonData = JSON.stringify(allBusinesses, null, 2);
      await FSWatcher.writeFileSync("restuarant.json", jsonData);
      console.log(`Restaurant data saved to "restaurants.json" file.`);
    } catch (err) {
      console.error(`Failed to write data to JSON file:`, err);
    }
  };
  setTimeout(writeToFile, 2000);
};

client
  .search({
    location: "London",
    term: "restaurant",
    categories: "vegan",
    sort_by: "review_count",
    price: "1,2,3,4",
    open_now: "true",
  })
  .then((response) => {
    //console.log(response.jsonBody.businesses);
  })
  .catch((e) => {
    console.log(e);
  });

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
