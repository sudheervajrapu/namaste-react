import RestroCard from "./RestroCard";
import RestroList from "../utils/mockData.js";

export default function RestroBody() {
  console.log("RestroData", RestroList);

  return (
    <div className="restro-body">
      <div className="restro-search"> Search</div>
      <div className="restro-container">
        {RestroList.map((restaurant) => (
          <RestroCard restaurantData={restaurant?.info} />
        ))}
      </div>
    </div>
  );
}