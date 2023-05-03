//import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    /*<nav className="nav">
      <Link to="/" className="site-route">
        Home
      </Link>
      <h1 className="title">ToDo List</h1>
      <ul>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
      </ul>
    </nav> */
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          ToDo List
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/register">
              Register
            </a>
            <a className="nav-link" href="/login">
              Login
            </a>
            <a className="nav-link" href="/logout">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

/*function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
} */
