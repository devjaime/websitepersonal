import React from "react";

const Address = () => {
  return (
    <ul>
      {/* <li>
        <img className="svg" src="img/svg/phone.svg" alt="" />
        <a href="Tel: 7614123224">+56 949288019</a>
      </li> */}
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/mail.svg" alt="" />
        <span>
          <a href="mailto:ib-themes21@gmail.com">hernandez.hs@gmail.com</a>
        </span>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
          Santiago de Chile
          <br /> Remote Home work
        </span>
      </li>
    </ul>
  );
};

export default Address;
