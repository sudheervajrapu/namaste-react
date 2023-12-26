import restroLogo from "../../restro-logo.svg";

export default function RestroHeader() {
  return (
    <header className="restro-header">
      <div className="restro-logo-container">
        <img className="restro-logo" src={restroLogo} />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}