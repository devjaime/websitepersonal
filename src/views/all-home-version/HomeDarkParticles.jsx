import React from "react";

import Header from "../../components/header/HeaderDark";
import Slider from "../../components/slider/SliderDarkParticles";
import About from "../../components/about/AboutDark";
import Service from "../../components/service/Service";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Footer from "../../components/footer/Footer";
import Address from "../../components/Address";
import {useTranslation} from "react-i18next";

const HomeDarkParticles = () => {
  const [t] = useTranslation("global");
  document.body.classList.add("dark");
  return (
    <div className="home-light">
      <div
        className="demo-fixed-wrapper"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        
      </div>
      {/* demo show wrapper  */}

      <Header />
      {/* End Header */}

      <Slider />
      {/* End Slider */}

      <div className="beny_tm_about" id="about">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>{t("Home.aboutMe")}</span>
            <h2>{t("Home.aboutMe")}</h2>
            <p>
            {t("Home.detail")}
            </p>
          </div>
          {/* End .beny_tm_title */}
          <About />
          {/* End Slider */}
        </div>
      </div>
      {/* /ABOUT */}

      {/* SERVICES */}
      {/* <div className="beny_tm_services" id="service">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span> {t("Home.titleServices")}</span>
            <h2>{t("Home.subtitleServices")}</h2>
            <p>
            {t("Home.detailServices")}
            </p>
          </div>
          <Service />
        </div>
      </div> */}
      {/* /SERVICES */}

      {/* PORTFOLIO */}
      <div className="beny_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span> {t("Home.titlePortfolio")}</span>
            <h2> {t("Home.subtitlePortfolio")}</h2>
            <p>
            {t("Home.detailPortfolio")}
            </p>
          </div>
          {/* End beny_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* /PORTFOLIO */}

      {/* TESTIMONIALS */}
      {/* <div className="beny_tm_testimonials">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span> {t("Home.titleTestimonials")}</span>
            <h2> {t("Home.subtitleTestimonials")}.</h2>
            <p>
            {t("Home.detailTestimonials")}
            </p>
          </div>
          <div className="testimonials_list">
            <Testimonial />
          </div>
        </div>
      </div> */}
      {/* /TESTIMONIALS */}

      {/* NEWS */}
      <div className="beny_tm_news" id="news">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>{t("Home.blog")}</span>
            <h2>{t("Home.recentNews")}</h2>
            <p>
            {t("Home.detailNews")}
            </p>
          </div>
          {/* End beny_tm_title */}
          <Blog />
        </div>
      </div>
      {/* /NEWS */}

      {/*  CONTACT */}
      <div className="beny_tm_contact" id="contact">
        <div className="container">
          <div className="contact_inner">
            <div className="left">
              <div className="beny_tm_title_holder">
                <span>{t("Home.contact")}</span>
                <h2>{t("Home.subtitleContact")}</h2>
              </div>
              <div className="short_list">
                <Address />
              </div>
            </div>
            {/* End .left */}
            <div className="right">
              <div className="title">
                <p>
                {t("Home.detailProduct")}
                  <br />
                  <span>{t("Home.partnerships")}.</span>
                </p>
              </div>
              <div className="fields">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /CONTACT */}

      {/* COPYRIGHT */}
      <div className="beny_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* /COPYRIGHT */}
    </div>
  );
};

export default HomeDarkParticles;
