import { useState, useEffect } from "react";
import { RESTRO_DETAILS_API } from "./constants";

export default function useFetchRestaurantMenu(restaurantId) {
  const [restroDetails, setRestroDetails] = useState(null);

  useEffect(() => {
    fetchRestroDetails();
  }, []);

  async function fetchRestroDetails() {
    const responseData = await fetch(RESTRO_DETAILS_API + restaurantId);
    const responseJson = await responseData.json();
    const restroDetails = responseJson?.data;
    setRestroDetails(restroDetails);
  }

  return restroDetails;
}
