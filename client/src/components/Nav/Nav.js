import { Link } from 'react-router-dom';
import '../../styles/Nav.css';

function Nav() {
  // TODO: add state in order for navbar show and hide to work
  if (
    window.location.pathname === '/home' ||
    window.location.pathname === '/'
  ) {
    return (
      <div className="cont">
        <ul>
          <li className="item tabs">
            <Link
              to="/contact"
              className={
                window.location.pathname === '/contact' ? 'link active' : 'link'
              }
            >
              Contact
            </Link>
          </li>
          <li className="item tabs">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === '/portfolio'
                  ? 'link active'
                  : 'link'
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
      <div className="cont">
        <ul>
          <li className="item tabs">
            <Link
              to="/contact"
              className={
                window.location.pathname === '/contact' ? 'link active' : 'link'
              }
            >
              Contact
            </Link>
          </li>
          <li className="item tabs">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === '/portfolio'
                  ? 'link active'
                  : 'link'
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="item tabs">
            <Link
              to="/home"
              className={
                window.location.pathname === '/home' ? 'link active' : 'link'
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
