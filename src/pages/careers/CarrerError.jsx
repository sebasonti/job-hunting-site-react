import { Link, useRouteError } from "react-router-dom";

export default function CarrerError() {
  const error = useRouteError();

  return (
    <div className="carrers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/careers">Back to carrers</Link>
    </div>
  );
}
