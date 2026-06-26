import { NavLink, Link } from "react-router";
import "../App.css";

export default function Header() {
  return (
    <header className="root">
      <h1>
        <Link to="/">Router Mission Blog</Link>
      </h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/posts/new">Write</NavLink>
      </nav>
    </header>
  );
}
