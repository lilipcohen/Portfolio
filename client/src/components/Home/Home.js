import React from 'react';
import profileImg from '../../images/profile.png';
import '../../styles/Home.css';

const Home = () => {
  return (
    <div>
      <div className="">
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <h1>LILI COHEN</h1>
        </div>
        <div className="row">
          <div className="background">
            <div className="row">
              <img src={profileImg} alt="Profile Photo" />
              <h2>Full-Stack Web Developer</h2>
            </div>
            <div className="row">
              <p>
                I'm a Fullstack Web Developer & Designer based in Los Angeles,
                California.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
