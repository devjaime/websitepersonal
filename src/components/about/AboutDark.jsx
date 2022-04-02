import React from "react";
import Skills from "../skills/Skills";
import {useTranslation} from "react-i18next";
const AboutDark = () => {
  const [t] = useTranslation("global")
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
            <h3> {t("About.myName")}</h3>
            <h5>
            {t("About.profesion")} <span className="theme-color">Web &amp; Developer </span>
            {t("About.region")}<span className="theme-color"> {t("About.country")}</span>
            </h5>
            <p>
            {t("About.bio")}
            </p>
          </div>
          <div className="extra">
            <h3 className="title">{t("About.titleinfo")}</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>{t("About.titleName")} :</span> Jaime Hernández
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance :</span> {t("About.FreelanceAvailable")}
                  </p>
                </li>
                <li>
                  <p>
                    <span>{t("About.titleTwitter")} :</span> HsJhernandez
                  </p>
                </li>
                <li>
                  <p>
                    <span>{t("About.titleAdress")} :</span> Santiago, Chile
                  </p>
                </li>
                <li>
                  <p>
                    <span>{t("About.titleEmail")} :</span> hernandez.hs@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>{t("About.titleLanguagles")} :</span> Spanish, English
                  </p>
                </li>
              </ul>
            </div>
            <div className="beny_tm_button color-outline">
              <a href={t("About.LinkCV")} download>
                <span className="wrapper">
                  <span className="first">{t("About.DownloadCV")}</span>
                  <span className="second">{t("About.DownloadCV")}</span>
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
