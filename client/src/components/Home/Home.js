import React from 'react';
import profileImg from '../../images/profile.png';
import '../../styles/Home.css';

const Home = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <h1 className="h1">LILI COHEN</h1>
      </div>
      <div className="row">
        <div className="background">
          <div className="row">
            <img id="imgHome" src={profileImg} alt="Profile Photo" />
            <h2>Full-Stack Web Developer</h2>
          </div>
          <div className="row">
            <p className="col-sm-8">
              I'm a Fullstack Web Developer & Designer with a background in Ticketing Systems and a valuable member to any team. I excel in a fast paced, high energy and deadline driven environment with a willingness to take on additional tasks.
              I enjoy building everything from personal websites to
              larger business web apps.
            </p>
            <br></br>
            <br></br>
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
  );
};

export default Home;
