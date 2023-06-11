import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("mario");
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="about">
      <h2>About us</h2>
      {name && <p>{`Hi ${name}, this is us.`}</p>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores
        inventore libero vel incidunt odio animi ipsa sint. Quae aperiam
        perspiciatis nam officia beatae? Incidunt eaque dolorum reprehenderit
        aperiam sunt earum est quas architecto maiores, eveniet aliquam itaque
        distinctio iusto minima ea labore blanditiis natus laborum commodi
        repellat?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sequi
        voluptatibus dolore adipisci est itaque doloremque corporis, doloribus
        quae maxime? Ex, dignissimos ea recusandae, cumque optio ut voluptatum
        reiciendis voluptatibus incidunt repellat perspiciatis expedita?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores
        corrupti nihil pariatur! Saepe obcaecati impedit quod voluptas mollitia
        delectus facilis commodi officia porro nostrum tempora, laborum nihil
        molestias quia!
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
