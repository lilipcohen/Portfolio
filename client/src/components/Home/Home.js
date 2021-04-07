import React from 'react';
import profileImg from '../../images/profile.png';
import '../../styles/Home.css';

function Home() {
  return (
    <div>
      <br></br>
      <h1>Lili Cohen</h1>
      <div className="background">
        <img src={profileImg} alt="Profile Photo" />
        <h2>Full-Stack Web Developer</h2>
        <p>
          I'm a Full-Stack Web Developer located in Los Angeles, California.
        </p>
        <div>
          <a></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
