import React from "react";

const socialList = [
  {
    name: "EN.",
    link: "https://www.facebook.com/",
  },
  {
    name: "SP.",
    link: "https://dribbble.com/",
  },
  
];

const SocialTwo = () => {
  return (
    <ul>
      {socialList.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noopener noreferrer">
            <span className="first">{val.name}</span>
            <span className="second">{val.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialTwo;
