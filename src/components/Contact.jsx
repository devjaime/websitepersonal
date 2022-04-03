import React, { useRef } from 'react';
import {useTranslation} from "react-i18next";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [t] = useTranslation("global");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_n6w67mf', form.current, 'TSiwOkZ-7VoQd5PGb')
      .then((result) => {
          console.log(result.text);
          alert("Message sent!");
      }, (error) => {
          console.log(error.text);
      });
  }



  return (
    <>
      <form ref={form} className="contact_form" onSubmit={sendEmail}>
        <div className="first_row">
          <input
            
            type="text"
            placeholder={t("Contact.name")}
            name="user_name"
          />
        </div>
        {/* End .first_row */}

        <div className="second">
          <div className="left">
            <input
              type="email"
              placeholder="Email *"
              name="user_email"
            />
          </div>
          <div className="right">
            <input
              placeholder={t("Contact.subject")}
              name="user_subject"
            />
          </div>
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
            placeholder={t("Contact.message")}
            name="user_message"
          ></textarea>
        </div>
        {/* End .third */}

        <div className="beny_tm_button">
          <button type="submit" className="color">
            <span className="wrapper">
              <span className="first">{t("Contact.submit")}</span>
              <span className="second">{t("Contact.submit")}</span>
            </span>
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
