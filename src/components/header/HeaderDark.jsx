import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import {
  FiHome,
  FiUser,
  FiGrid,
  FiPhoneOutgoing,
} from "react-icons/fi";
import {useTranslation} from "react-i18next";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [t] = useTranslation("global")
  return (
    <>
      {/* TOPBAR  */}
      <div className={navbar ? "beny_tm_topbar animate" : "beny_tm_topbar"}>
        <div className="in">
          <div className="topbar_inner">
            <div className="logo">
 
            </div>
            <div className="menu">
              <Scrollspy
                className="anchor_nav"
                items={[
                  "home",
                  "about",
                  "portfolio",
                  "contact",
                ]}
                currentClassName="current"
                offset={-88}
              >
                <li className="current">
                  <a href="#home">
                    <span className="first">  {t("Header.Home")}</span>
                    <span className="second"> {t("Header.Home")}</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span className="first"> {t("Header.About")}</span>
                    <span className="second"> {t("Header.About")}</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <span className="first"> {t("Header.Portfolio")}</span>
                    <span className="second"> {t("Header.Portfolio")}</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span className="first">{t("Header.Contact")}</span>
                    <span className="second">{t("Header.Contact")}</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.paypal.com/donate?hosted_button_id=AHPZLS6ZR2A7S">
                    <span className="wrapper">
                      <span className="first">{t("Header.Donate")}</span>
                      <span className="second">{t("Header.Donate")}</span>
                    </span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}

      <div className="mobile-menu-wrapper">
        <Scrollspy
          className="mobile_menu-icon"
          items={["home", "about", "service", "portfolio", "news", "contact"]}
          currentClassName="current"
          offset={-65}
        >
          <li>
            <a href="#home">
              <FiHome />
              <span> {t("Header.Home")}</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FiUser />
              <span> {t("Header.About")}</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FiGrid />
              <span> {t("Header.Portfolio")}</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FiPhoneOutgoing />
              <span>{t("Header.Contact")}</span>
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default Header;
