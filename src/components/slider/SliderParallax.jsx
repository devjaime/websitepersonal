import React from "react";
import { Parallax } from "react-parallax";
import SocialTwo from "../SocialTwo";
import TextLoop from "react-text-loop";

const image1 = "img/slider/4.jpg";

const SliderParallax = () => {
  return (
    <>
      <Parallax bgImage={image1} strength={500}>
        <div className="beny_tm_hero" id="home">
          <div className="background d-none d-sm-block">
            <div
              className="image"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/slider/4.jpg"
                })`,
              }}
            ></div>
            <div className="overlay"></div>
          </div>
          {/* End bg */}
          <div className="go-to go-to-next">
            <a href="#about">
              <span></span>
            </a>
          </div>
          {/* End animated goto button */}
          <div className="container">
            <div className="content">
              <div className="content_inner">
                <h3
                  className="name"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Hello I'm
                </h3>
                <h1
                  className="job"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="50"
                >
                  Alyssa Healy
                </h1>
                <h2
                  className="typer"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Top Level{" "}
                  <TextLoop>
                    <p className="loop-text lead">Developer</p>
                    <p className="loop-text lead">Designer</p>
                    <p className="loop-text lead">Developer</p>
                  </TextLoop>
                </h2>

                <p
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="150"
                >
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p>

                <div
                  className="beny_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <a className="anchor" href="#about">
                    <span className="wrapper">
                      <span className="first">See Portfolio</span>
                      <span className="second">See Portfolio</span>
                    </span>
                  </a>
                </div>
                {/* End beny_tm_button */}
              </div>
            </div>
          </div>
          <div className="social">
            <SocialTwo />
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default SliderParallax;
