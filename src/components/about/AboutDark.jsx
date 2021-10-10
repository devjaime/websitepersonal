import React from "react";
import Skills from "../skills/Skills";

const AboutDark = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.png" alt="" />
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/thumbs/1-1.png"
              })`,
            }}
          ></div>
        </div>
        <div
          className="right wow fadeInLeft"
          data-wow-duration="1.2s"
          data-wow-delay="0.3s"
        >
          <div className="short">
            <h3> I'm Jaime Hernandez</h3>
            <h5>
              A Lead <span className="theme-color">UX &amp; UI</span> designer
              based in <span className="theme-color">Chile</span>
            </h5>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences through meaningful
              interactions. Check out my Portfolio
            </p>
          </div>
          <div className="extra">
            <h3 className="title">Personal Info</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Name :</span> Jaime Hernandez
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address :</span> Santiago of Chile
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age :</span> 38 Years
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> +56949288019
                  </p>
                </li>
                <li>
                  <p>
                    <span>Nationality :</span> Chilean
                  </p>
                </li>
                <li>
                  <p>
                    <span>mail :</span> hernandez.hs@gmail
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance :</span> Available
                  </p>
                </li>
                <li>
                  <p>
                    <span>Languages :</span> Spanish, English
                  </p>
                </li>
              </ul>
            </div>
            <div className="beny_tm_button color-outline">
              <a href="img/about/cv.webp" download>
                <span className="wrapper">
                  <span className="first">Download CV</span>
                  <span className="second">Download CV</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutDark;
