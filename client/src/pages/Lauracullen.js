import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import '../styles/Lauracullen.css';

const Lauracullen = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="titleL">LAURA CULLEN</h1>
          </div>
        </div>
        <div id="backgroundL">
          <br></br>
          <br></br>
          <h3 id="h3L">Gallery</h3>
          <hr></hr>
          <br></br>
          <Carousel />
          <br></br>
          <br></br>
          <h3 id="h3L">Overview</h3>
          <hr></hr>
          <p id="pL">
            Laura Cullen is a modern artist who is always making new work and
            presenting in exhibits with her existing collection.The website
            stores emails and blogs using MongoDB. The website includes a
            manager portal, with the use of Firebase Auth, that she can login to
            update her blogs and retrieve subscribed emails. The site showcases
            a polished UI with parallax scroll features to give it an artsy
            appearance.
          </p>
          <br></br>
          <button id="btnL">
            <a target="_blank" href="https://laura-cullen.herokuapp.com/">
              Visit website
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lauracullen;
