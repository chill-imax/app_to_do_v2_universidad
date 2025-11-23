import { Link } from "react-router-dom";

export function NavbarHP() {
  return (
    <nav className="navbar fixed-top" data-bs-theme="dark">
      <div className="container-fluid nav">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <span className="brand-Section">
          <a className="navbar-brand section" href="/">
            My_ToDo_App:)
            <i className="fa-regular fa-circle-check " />
          </a>
        </span>
        <span className="botones nav">
          <Link to="/login">
            <button type="button" className="btn btn-outline-primary">
              LOGIN
              <i className="fa-solid fa-arrow-right-to-bracket" />
            </button>
          </Link>

          <Link to="/signup">
            <button type="button" className="btn btn-outline-light">
              SIGN UP
              <i className="fa-solid fa-arrow-right-to-bracket" />
            </button>
          </Link>
        </span>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h3 className="offcanvas-title">My_ToDo_App:)</h3>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="heellootext fw-normal">
            <p>Hello! :)</p>
            <p>Are you ready to better organize your time?</p>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" href="/signup">
                  JOIN US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  LOGIN
                </a>
              </li>
              <button type="button" className="btn btn-outline-info">
                WHERE AM I?
              </button>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
