import { NavLink } from "react-router-dom";

function Naviguation() {
  return (
    <div class="container-fluid">
      <h1>Navigation</h1>
      <nav>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/">
              Acceuil
            </a>
          </li>
          <li class="nav-item">
            <NavLink to="/"> A Propos</NavLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Propos{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Naviguation;
