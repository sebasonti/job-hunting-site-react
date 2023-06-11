import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>{career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Based in: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          laboriosam nostrum animi labore minus provident neque dignissimos id
          corporis blanditiis debitis tenetur deleniti, ex necessitatibus
          voluptate sequi ratione illum dolorum.
        </p>
      </div>
    </div>
  );
}

export async function careerLoader({ params }) {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that carrer");
  }

  return res.json();
}
