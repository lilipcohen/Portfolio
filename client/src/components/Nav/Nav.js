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
        <div></div>
        <ul>
          <li className="item tabs">
            <Link
              id="underline"
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
              id="underline"
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
        <div className="row">
          <ul>
            <li className="item tabs">
              <Link
                id="underline"
                to="/contact"
                className={
                  window.location.pathname === '/contact'
                    ? 'link active'
                    : 'link'
                }
              >
                Contact
              </Link>
            </li>
            <li className="item tabs">
              <Link
                id="underline"
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
                id="underline"
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
      </div>
    );
  }
}

export default Nav;
