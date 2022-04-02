import React from "react";
import Social from "../Social";
import SocialTwo from "../SocialTwo";
import Particles from "react-particles-js";
import ReactTyped from "react-typed";
import {useTranslation} from "react-i18next";

const SliderDarkParticles = () => {
  const [t] = useTranslation("global");
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
            <h3 className="name">{t("Slider.name")}</h3>
            <h1 className="job">
              <span className="typer-toper">
                <ReactTyped
                  loop
                  typeSpeed={150}
                  backSpeed={60}
                  strings={["Software", "Engineer", "Full Stack"]}
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
              <br /> <span>{t("Slider.from")}.</span>
            </h1>
            <p className="text">
              {t("Slider.bio")}
            </p>
            <div className="mobile_social">
              <Social />
            </div>
            {/* End .social */}

            <div className="beny_tm_button">
              <a className="anchor" href="#about">
                <span className="wrapper">
                  <span className="first">Empezar</span>
                  <span className="second">Empezar</span>
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
