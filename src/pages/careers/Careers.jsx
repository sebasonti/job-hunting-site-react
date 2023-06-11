import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

//loader function
export async function careersLoader() {
  let res;
  try {
    res = await fetch("http://localhost:4000/careers");
  } catch (error) {
    throw Error("SORRY! Could not find any carrers at the moment");
  }

  if (!res.ok) {
    throw Error("Something went wrong, please try again later.");
  }

  return res.json();
}
