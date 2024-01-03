import { IMAGE_URL } from "../utils/constants";

export default function RestroCard({ restaurantData }) {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    areaName,
    cloudinaryImageId,
  } = restaurantData;

  return (
    <div className="restro-card">
      <img className="restro-card-logo" src={IMAGE_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>
        <strong>{avgRating}</strong> stars ᛫{" "}
        <strong>{sla.deliveryTime} </strong>
        Mins ᛫ {costForTwo}
      </p>
      <p>
        {areaName} ᛫ {sla.lastMileTravelString}
      </p>
    </div>
  );
}
