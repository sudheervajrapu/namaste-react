import restroLogo from "../../restro-logo.svg";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

export default function RestroHeader() {
  const networkStatus = useNetworkStatus();

  return (
    <header className="flex justify-between p-5 bg-orange-200">
      <div className="restro-logo-container">
        <Link to="/">
          <img className="w-56" src={restroLogo} />
        </Link>
      </div>
      <nav className="flex items-center">
        <ul className="flex">
          <li className="px-4">{networkStatus ? "Online 🟢" : "Offline 🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </nav>
    </header>
  );
}
