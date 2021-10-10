import React from "react";
import TextLoop from "react-text-loop";
import Social from "../Social";

const SliderTextLoop = () => {
  return (
    <>
      <div className="beny_tm_hero" id="home">
        <div className="background ">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/slider/5.jpg"
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
              <h3 className="name" data-aos="fade-up" data-aos-duration="1200">
                Hello I'm
              </h3>
              <h1
                className="job"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="50"
              >
                Steve Smith
              </h1>
              <h2
                className="typer"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <TextLoop>
                  <p className="loop-text lead">Full-stack Developer</p>
                  <p className="loop-text lead"> UI/UX Designer</p>
                  <p className="loop-text lead"> App Developer</p>
                </TextLoop>{" "}
              </h2>

              <p
                className="text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
              <div
                className="mobile_social d-block-social"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                <Social />
              </div>

              <div
                className="beny_tm_button"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="250"
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
        {/* End .container */}
      </div>
    </>
  );
};

export default SliderTextLoop;
