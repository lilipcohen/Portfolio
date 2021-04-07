import { Link } from 'react-router-dom';
import '../../styles/Nav.css';

function Nav() {
  if (
    window.location.pathname === '/home' ||
    window.location.pathname === '/'
  ) {
    return (
      <div className="nav">
        <ul>
          <li className="nav-item nav-tabs">
            <Link
              to="/contact"
              className={
                window.location.pathname === '/contact'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Contact
            </Link>
          </li>
          <li className="nav-item nav-tabs">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === '/portfolio'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="nav">
        <ul>
          <li className="nav-item nav-tabs">
            <Link
              to="/contact"
              className={
                window.location.pathname === '/contact'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Contact
            </Link>
          </li>
          <li className="nav-item nav-tabs">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === '/portfolio'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item nav-tabs">
            <Link
              to="/home"
              className={
                window.location.pathname === '/home'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Lili Cohen
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
