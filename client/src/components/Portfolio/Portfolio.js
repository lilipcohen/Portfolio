import React from 'react';
import lauraPreview from '../../images/laura-preview.png';
import nwvPreview from '../../images/nw-veg.png';
import griffinPreview from '../../images/griffin-oskar.png';
import { Link } from 'react-router-dom';
import '../../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="">
        <div className="row">
          <h1 className="h1">PROJECTS</h1>
        </div>
        <div className="background">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-sm-6">
              <img
                id="imgPort"
                src={lauraPreview}
                alt="Laura Cullen Homepage"
              />
            </div>
            <div className="col-sm-5">
              <h3 className="title">Laura Cullen</h3>
              <br></br>
              <p className="text">
                A simple portfolio website showcasing Laura Cullen's work as a
                mixed-media artist. Her page works to connect personally and
                artistically with its users and build relationships to further
                her career.
              </p>
              <br></br>
              <button>
                <Link
                  to="/lauracullen"
                  className={window.location.pathname === '/lauracullen'}
                >
                  View Details
                </Link>
              </button>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-sm-6">
              <img
                id="imgPort"
                src={nwvPreview}
                alt="North-West Veg Homepage"
              />
            </div>
            <div className="col-sm-5">
              <h3 className="title">North West Veg</h3>
              <br></br>
              <p className="text">
                A vegan-based recipe Application featuring North-West Veg as the
                center of eating vegan and healthy. The site allows clients to
                view recipes they may enjoy and encourage the vegan diet.
              </p>
              <br></br>
              <button>
                <Link
                  to="/northwestveg"
                  className={window.location.pathname === '/northwestveg'}
                >
                  View Details
                </Link>
              </button>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-sm-6">
              <img
                id="imgPort"
                src={griffinPreview}
                alt="Laura Cullen Homepage"
              />
            </div>
            <div className="col-sm-5">
              <h3 className="title">Griffin Oskar</h3>
              <br></br>
              <p className="text">
                A one-stop shop website for fans and potential management to
                view the muciscal artist Griffin Oskar. With his website,
                Griffin will potentially grow in popularity and enhance his
                musical career.
              </p>
              <br></br>
              <button>
                <Link
                  to="/griffinoskar"
                  className={window.location.pathname === '/griffinoskar'}
                >
                  View Details
                </Link>
              </button>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
