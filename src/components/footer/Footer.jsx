import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noreferrer"
            >
              ib-themes
            </a>
            . All rights reserved Jaime Hernández.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
