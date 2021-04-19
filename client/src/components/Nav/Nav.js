import { Link } from 'react-router-dom';
import '../../styles/Nav.css';

function Nav() {
  // TODO: add state in order for navbar show and hide to work
  return (
    <div className="cont">
      <div className="row">
        <ul>
          <li className="item tabs">
            <Link
              id="underline"
              to="/"
              className={
                window.location.pathname === '/' ? 'link active' : 'link'
              }
            >
              Home
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
    </div>
  );
}

export default Nav;
