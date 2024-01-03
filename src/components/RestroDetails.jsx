import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import ShimmerUI from "./ShimmerUI";

export default function RestroDetails() {
  const { restaurantId } = useParams();
  const restroDetails = useFetchRestaurantMenu(restaurantId);

  if (restroDetails === null) {
    return <ShimmerUI />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = restroDetails?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restroDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="restro-details">
      <h2>Restaurant Details</h2>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>
        {costForTwoMessage} • {avgRatingString} stars • {totalRatingsString}
      </p>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((itemCard) => (
          <li key={itemCard?.card?.info?.id}>
            {itemCard?.card?.info?.name} - ₹
            {itemCard?.card?.info?.price / 100 ||
              itemCard?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}
