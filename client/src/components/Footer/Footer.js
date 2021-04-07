import React from 'react';
import linkedin from '../../images/linkedin-icon.png';
import github from '../../images/github-icon.png';
import resume from '../../images/resume-icon.png';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <ul className="col-sm-5">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <ul className="col-sm-7">
            <li className="green">lili.cohen.tv@gmail.com</li>
          </ul>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm-12">
            <a
              href="https://www.linkedin.com/in/lili-cohen-78a93a1b3/"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
            <a href="https://github.com/lilipcohen" target="_blank">
              <img src={github} />
            </a>
            <a href="https://lilipcohen.github.io/Resume/" target="_blank">
              <img src={resume} />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className="copyright">Copyright © Lili Cohen 2021</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
