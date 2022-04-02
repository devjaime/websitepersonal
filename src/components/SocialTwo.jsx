import React from "react";
import {useTranslation} from "react-i18next";

const SocialTwo = () => {
  const [t,i18n] = useTranslation("global");
  return (
  <>
    <button className="first" onClick={() => i18n.changeLanguage("es")}>Español</button>
    <button className="second" onClick={() => i18n.changeLanguage("en")}>English</button>
  </>
  );
};

export default SocialTwo;
