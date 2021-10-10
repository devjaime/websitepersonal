import React from "react";
import { Link } from "react-router-dom";

const previewContent = [
  {
    img: "light-animation",
    title: "Home Light Animation",
    sticker: "",
    className: "",
    routerPath: "/home-light-animation",
    delayAnimation: "",
  },
  {
    img: "light",
    title: "Light No Animation",
    sticker: "",
    className: "",
    routerPath: "/home-light",
    delayAnimation: "100",
  },
  {
    img: "dark-no-animation",
    title: "Dark No Animation",
    sticker: "",
    className: "",
    routerPath: "/home-dark",
    delayAnimation: "",
  },
  {
    img: "dark-animation",
    title: "Home Dark Animation",
    sticker: "",
    className: "",
    routerPath: "/home-dark-animation",
    delayAnimation: "100",
  },
  {
    img: "home-parallax-typer",
    title: "Home Parallax & Typer",
    sticker: "New",
    className: "sticker",
    routerPath: "/home-parallax-typer",
    delayAnimation: "",
  },
  {
    img: "home-typer",
    title: "Home Typer Creative",
    sticker: "New",
    className: "sticker",
    routerPath: "/home-typer-creative",
    delayAnimation: "100",
  },
  {
    img: "dark-particles",
    title: "Dark Particles Effect",
    sticker: "New",
    className: "sticker",
    routerPath: "/home-dark-particles",
    delayAnimation: "",
  },
  {
    img: "dark-bubbles",
    title: "Dark Bubbles Effect",
    sticker: "New",
    className: "sticker",
    routerPath: "/home-dark-bubble",
    delayAnimation: "100",
  },
  {
    img: "home-parllax",
    title: "Home Parallax Animation",
    sticker: "New",
    className: "sticker",
    routerPath: "/home-parallax",
    delayAnimation: "",
  },
  {
    img: "home-textloop",
    title: "Home TextLoop Animation",
    sticker: "New",
    className: "sticker",
    routerPath: "/home-text-loop",
    delayAnimation: "100",
  },
];

const Preview = () => {
  document.body.classList.add("light");
  return (
    <div className="beny_tm_intro_wrapper">
      <div className="container">
        <div className="intro_list">
          <div className="intro_title" id="intro">
            <span data-aos="fade-up" data-aos-duration="1200">
              Demos
            </span>
            <h3
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              10 Unique Demos
            </h3>
            <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              Beny – personal portfolio React Template can be used for many
              purposes. It’s a creative, minimal and clean design.It’s 100%
              responsive & super Fast.
            </p>
          </div>
          {/* End intro_title */}

          <ul>
            {previewContent.map((demo, i) => (
              <li
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={demo.delayAnimation}
                key={i}
              >
                <div className="list_inner">
                  <img src={`img/intro/${demo.img}.jpg`} alt="demo" />
                  <h3>{demo.title}</h3>
                  <Link
                    to={demo.routerPath}
                    className="beny_tm_full_link"
                    target="_blank"
                  ></Link>
                  <span className={demo.className}>{demo.sticker}</span>
                </div>
              </li>
            ))}
          </ul>
          {/* preview demo */}
        </div>
      </div>
      {/* End .container */}

      <div className="go_purchase ">
        <h6 data-aos="fade-up" data-aos-duration="1200">
          You are at the right step now
        </h6>
        <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          Purchase The Beny and Build Your Own{" "}
          <span className="theme-color">React JS</span> &amp;{" "}
          <span className="theme-color">Pure CSS </span> Based Portfolio
          Template.
        </h3>
        <div
          className="beny_tm_button color "
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="140"
        >
          <a
            href="https://themeforest.net/item/beny-personal-portfolio-react-template/33910000"
            target="_blank"
          >
            <span className="wrapper">
              <span className="first">Purchase Now</span>
              <span className="second">Purchase Now</span>
            </span>
          </a>
        </div>
      </div>
      {/* End .go_purchase */}

      <div className="intro_copyright">
        <p>
          &copy; {new Date().getFullYear()} Beny by{" "}
          <a href="https://themeforest.net/user/ib-themes" target="_blank">
            ib-themes.
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
      {/* End intro_copyright */}
    </div>
  );
};

export default Preview;
