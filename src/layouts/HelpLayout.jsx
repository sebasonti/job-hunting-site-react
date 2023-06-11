import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        possimus quia dolor accusamus aut perspiciatis laudantium autem illum
        vel minus!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
