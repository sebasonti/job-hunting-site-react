import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi
        molestiae sequi aliquam amet nostrum! Asperiores aliquid id repudiandae
        quas voluptatibus numquam non at error? Accusamus, earum. Sunt quibusdam
        expedita odit veritatis, beatae consectetur distinctio!
      </p>

      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </div>
  );
}
