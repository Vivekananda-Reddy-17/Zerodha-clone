import { Link } from "react-router";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom fixed-top" style={{backgroundColor: "#FFF"}}>
      <div class="container d-flex justify-content-around p-2">
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{width: "20%"}}/>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
