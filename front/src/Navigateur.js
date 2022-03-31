import { Link } from "react-router-dom";
import "./style/nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link exact="true" to="/" activeclassname="nav_active" id="link">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/formulaire" activeclassname="nav_active" id="link">
            Formulaire
          </Link>
        </li>
        <li>
          <Link
            exact="true"
            to="/contact"
            activeclassname="nav_active"
            id="link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
