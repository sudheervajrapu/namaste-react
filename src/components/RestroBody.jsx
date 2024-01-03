import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import RestroCard from "./RestroCard";
import { RESTAURANTS_LIST_API } from "../utils/constants";
import useNetworkStatus from "../utils/useNetworkStatus";

export default function RestroBody() {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const responseData = await fetch(RESTAURANTS_LIST_API);
    const responseJson = await responseData.json();
    const responseContent = responseJson?.data;
    const restroList =
      responseContent?.cards[4]?.card?.card?.gridElements.infoWithStyle
        .restaurants;
    setRestaurantsList(restroList);
    setFilteredRestaurantsList(restroList);
  }

  function searchHandler(restaurantName) {
    const searchRestaurantsList = restaurantsList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(restaurantName.toLowerCase())
    );
    setFilteredRestaurantsList(searchRestaurantsList);
  }

  function filterHandler(restaurants) {
    const filteredRestaurantsList = restaurants.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    setFilteredRestaurantsList(filteredRestaurantsList);
  }

  const networkStatus = useNetworkStatus();

  if (networkStatus === false) {
    return (
      <div id="network-status">
        <h4>
          Looks like you're offline! Please check your internet connection.
        </h4>
      </div>
    );
  }

  return (
    <div className="restro-body">
      {restaurantsList.length === 0 ? (
        <ShimmerUI />
      ) : (
        <>
          <div className="restro-filter-container">
            <div className="restro-search m-4 p-4">
              <input
                type="text"
                name="search-input"
                className="search-input"
                value={searchRestaurant}
                onChange={(e) => setSearchRestaurant(e.target.value)}
              />
              <button
                type="button"
                className="search"
                onClick={() => searchHandler(searchRestaurant)}
              >
                Search
              </button>
            </div>
            <div className="restro-filter">
              <button
                type="button"
                className="filter"
                onClick={() => filterHandler(filteredRestaurantsList)}
              >
                Ratings 4.2+
              </button>
            </div>
          </div>
          <div className="restro-container">
            {filteredRestaurantsList.map((restaurant) => (
              <Link
                to={`/restaurants/${restaurant.info.id}`}
                key={restaurant.info.id}
              >
                <RestroCard restaurantData={restaurant?.info} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
