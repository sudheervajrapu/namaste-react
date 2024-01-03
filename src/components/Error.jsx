import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
    </div>
  );
}
