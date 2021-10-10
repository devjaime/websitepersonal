import React from "react";
import Skills from "../skills/Skills";

const About = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.jpg" alt="" />
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/about/1.jpg"
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
                    <span>Name :</span> Bany Naira
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address :</span> H-400 - Path2UK
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age :</span> 21 Years
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> +12345667
                  </p>
                </li>
                <li>
                  <p>
                    <span>Nationality :</span> USA
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email :</span> yourmail@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance :</span> Available
                  </p>
                </li>
                <li>
                  <p>
                    <span>Languages :</span> French, English
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

export default About;
