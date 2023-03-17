import React from 'react';
import lauraPreview from '../../images/laura-preview.png';
import dhPreview from '../../images/dark-horse.png';
import nwvPreview from '../../images/nw-veg.png';
import griffinPreview from '../../images/griffin-oskar.png';
import scasPreview from '../../images/scas.png';
import '../../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="">
        <div className="row">
          <h1 className="h1P">PROJECTS</h1>
        </div>
        <div className="background">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-sm-7">
              <img
                id="imgPort"
                src={scasPreview}
                alt="Southern California Academy of Sciences"
              />
            </div>
            <div className="col-sm-5">
              <div className="columns">
                <h3 className="title">SCAS</h3>
                <br></br>
                <p className="text">
                A headless CMS website for directors of Southern California Academy of Sciences to create, update, and delete content on their frontend website where end users can sign up for their Newsletter, learn about their organization, donate and join their annual meeting.
                </p>
                <br></br>
                <button id="btnP">
                  <a
                    target="_blank"
                    href="https://scas.nhm.org/"
                  >
                    Visit website
                  </a>
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-sm-7">
              <img
                id="imgPort"
                src={lauraPreview}
                alt="Laura Cullen Homepage"
              />
            </div>
            <div className="col-sm-5">
              <div className="columns">
                <h3 className="title">Laura Cullen</h3>
                <br></br>
                <p className="text">
                  A simple portfolio website showcasing Laura Cullen's work as a
                  mixed-media artist. Her page works to connect personally and
                  artistically with its users and build relationships to further
                  her career. This MERN stack application uses Firebase.js, AWS,
                  MongoDB, and Bootstrap frameworks. Click&nbsp;
                  <a
                    target="_blank"
                    href="https://github.com/lilipcohen/Laura-Cullen"
                  >
                    here
                  </a>
                  &nbsp;to view the Github repo.
                </p>
                <br></br>
                <button id="btnP">
                  <a target="_blank" href="https://laura-cullen.herokuapp.com/">
                    Visit website
                  </a>
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-sm-7">
              <img id="imgPort" src={dhPreview} alt="Dark Horse Homepage" />
            </div>
            <div className="col-sm-5">
              <div className="columns">
                <h3 className="title">Dark Horse</h3>
                <br></br>
                <p className="text">
                  An application to connect small, upcoming musicians to their
                  fans. Users help crowdfund their favorite new bands to play in
                  areas near them creating more profit for the bands and help
                  build their fanbase through their live performances. This
                  application uses MERN stack, it includes Firebase.js, Leaflet
                  API, and Bootstrap frameworks. Click&nbsp;
                  <a
                    target="_blank"
                    href="https://github.com/lilipcohen/Dark-Horse"
                  >
                    here
                  </a>
                  &nbsp;to view the Github repo.
                </p>
                <br></br>
                <button id="btnP">
                  <a
                    target="_blank"
                    href="http://darkhorsetours.herokuapp.com/"
                  >
                    Visit website
                  </a>
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-sm-7">
              <img
                id="imgPort"
                src={nwvPreview}
                alt="North-West Veg Homepage"
              />
            </div>
            <div className="col-sm-5">
              <div className="columns">
                <h3 className="title">North West Veg</h3>
                <br></br>
                <p className="text">
                  A vegan-based recipe Application featuring North-West Veg as
                  the center of eating vegan and healthy. The site allows
                  clients to view recipes they may enjoy and encourage the vegan
                  diet. This application uses MVC, Express.js, Edamam API, and
                  Bootstrap frameworks. Click&nbsp;
                  <a
                    target="_blank"
                    href="https://github.com/lilipcohen/Northwest-Veg"
                  >
                    here
                  </a>
                  &nbsp;to view the Github repo.
                </p>
                <br></br>
                <button id="btnP">
                  <a
                    target="_blank"
                    href="https://northwest-veg.herokuapp.com/"
                  >
                    Visit website
                  </a>
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-sm-7">
              <img
                id="imgPort"
                src={griffinPreview}
                alt="Griffin Oskar Homepage"
              />
            </div>
            <div className="col-sm-5">
              <div className="columns">
                <h3 className="title">Griffin Oskar</h3>
                <br></br>
                <p className="text">
                  A one-stop shop website for fans and potential management to
                  view the muciscal artist Griffin Oskar. With his website,
                  Griffin will potentially grow in popularity and enhance his
                  musical career. This simple application uses HTML, CSS,
                  Javascript, and the bandsintown API. Click&nbsp;
                  <a
                    target="_blank"
                    href="https://github.com/lilipcohen/Griffin-Oskar"
                  >
                    here
                  </a>
                  &nbsp;to view the Github repo.
                </p>
                <br></br>
                <button id="btnP">
                  <a
                    target="_blank"
                    href="https://griffin-oskar.herokuapp.com/"
                  >
                    Visit website
                  </a>
                </button>
              </div>
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
