import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <nav>
          <h1>JobHunter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
