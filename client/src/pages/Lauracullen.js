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
        <div className="background">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Carousel />
          {/* <img id="imgPage" src={img1} />
          <img id="imgPage" src={img2} />
          <img id="imgPage" src={img3} /> */}
        </div>
      </div>
    </div>
  );
};

export default Lauracullen;
