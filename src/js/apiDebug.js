const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

import axios from "axios";

const apiKey =
  "qT3mwGWwmIY8qsU4b7ElZLBdY9EZ5qJDrz-m8i236Rnfmj-MeiVtP_c7Y4C6BUl3Hy19pb0KUj62oeCLD7moEesIG4M1sLvr17FEY4Q7yUdfOQoZaq8IcKdRabc3ZXYx";
const location = "London";
const term = "Vegan";
const categories = "Vegan";

// Initialize a cache object for restaurant data and open times
const restaurantDataCache = {};
const openTimesCache = {};

export const fetchRestaurantData = async () => {
  const apiUrl = `https://api.yelp.com/v3/businesses/search?location=${encodeURIComponent(
    location
  )}&term=${encodeURIComponent(term)}&categories=${encodeURIComponent(
    categories
  )}`;

  try {
    if (restaurantDataCache[apiUrl]) {
      // If restaurant data is available in the cache, use it
      console.log("Restaurant data from cache");
      processData(restaurantDataCache[apiUrl]);
    } else {
      // Otherwise, make the API request for restaurant data
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const restaurants = response.data.businesses;

      // Store the restaurant data in the cache
      restaurantDataCache[apiUrl] = response.data;

      processData(response.data);
    }
  } catch (error) {
    console.error("Error fetching restaurant data", error);
  }
};

// Function to fetch and display open times with a delay
async function fetchOpenTimes(businessId) {
  const hoursUrl = `https://api.yelp.com/v3/businesses/${businessId}`;

  try {
    if (openTimesCache[businessId]) {
      // If open times data is available in the cache, use it
      console.log("Open times from cache");
      displayOpenTimes(openTimesCache[businessId]);
    } else {
      // Otherwise, make the API request for open times
      const hoursResponse = await axios.get(hoursUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (hoursResponse.data.hours) {
        // Store the open times data in the cache
        openTimesCache[businessId] = hoursResponse.data.hours[0].open;
        displayOpenTimes(hoursResponse.data.hours[0].open);
      } else {
        console.log("No hours available");
      }
    }
  } catch (hoursError) {
    console.error("Error fetching or displaying open times", hoursError);
  }
  // Introduce a delay to avoid rapid requests
  await delay(3000); // Adjust the delay time as needed
}

// Display open times
function displayOpenTimes(openTimes) {
  for (const hour of openTimes) {
    console.log(`${hour.day}: ${hour.start} - ${hour.end}`);
  }
}

// Process and display restaurant data
function processData(data) {
  const restaurants = data.businesses;

  for (const restaurant of restaurants) {
    console.log(`Name: ${restaurant.name}`);
    console.log(
      `Address: ${restaurant.location.address1}, ${restaurant.location.city}`
    );
    console.log(`Rating: ${restaurant.rating}`);
    console.log(`Phone: ${restaurant.phone}`);
    console.log(`Price: ${restaurant.price}`);
    console.log(`Image URL: ${restaurant.image_url}`);
    console.log(`Is Closed: ${restaurant.is_closed ? "Closed" : "Open"}`);

    // Fetch and display open times
    fetchOpenTimes(restaurant.id);

    console.log(restaurant);
    console.log("---------------------------");
  }
}

fetchRestaurantData();
