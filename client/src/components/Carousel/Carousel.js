import React, { useState } from 'react';
import img1 from '../../images/Laura-Carousel/img1.png';
import img2 from '../../images/Laura-Carousel/img2.png';
import img3 from '../../images/Laura-Carousel/img3.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../../styles/Carousel.css';

const Carousel = () => {
  const images = [{ img: img1 }, { img: img2 }, { img: img3 }];
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="carousel">
      <div className="innerCarousel">
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon />
        </div>
        <img className="imgCar" src={images[currImg].img} />
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
