import React from "react";
import Social from "../Social";
import SocialTwo from "../SocialTwo";
import Particles from "react-particles-js";
import ReactTyped from "react-typed";

const SliderDarkParticles = () => {
  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="frame-layout__particles dark">
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
              },
              size: {
                value: 5,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
      {/* End particle animation */}
      <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "https://github.com/devjaime/websitepersonal/blob/main/public/img/slider/code.png?raw=true"
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
            <h3 className="name">Hi! I'm Jaime Hernandez</h3>
            <h1 className="job">
              <span className="typer-toper">
                <ReactTyped
                  loop
                  typeSpeed={150}
                  backSpeed={60}
                  strings={["Frontend", "Backend", "Mobile"]}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
              <br /> <span>Based In Chile.</span>
            </h1>
            <p className="text">
              I'm developer focused on crafting user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>
            <div className="mobile_social">
              <Social />
            </div>
            {/* End .social */}

            <div className="beny_tm_button">
              <a className="anchor" href="#about">
                <span className="wrapper">
                  <span className="first">Get Started</span>
                  <span className="second">Get Started</span>
                </span>
              </a>
            </div>
            {/* End beny_tm_button */}
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="social">
        <SocialTwo />
      </div>
      {/* End .social */}
    </div>
    //HERO
  );
};

export default SliderDarkParticles;
