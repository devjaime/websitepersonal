import React, { useRef , useState} from 'react';
import {useTranslation} from "react-i18next";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Social from "../../src/components/Social";
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { yes_i_understand: false }
  }
  );
  
  const [t] = useTranslation("global");

  const form = useRef();

  const sendEmail = (formData) => {
    emailjs
      .send('default_service', 'template_n6w67mf', formData, 'TSiwOkZ-7VoQd5PGb')
      .then((result) => {
          setIsOpen(true);
      }, (error) => {
          console.log(error.text);
      });
      reset();
  }


  return (
    <>
     <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="beny_tm_modalbox_news">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "https://media-exp1.licdn.com/dms/image/C5616AQF5j5YyTJsGWg/profile-displaybackgroundimage-shrink_350_1400/0/1646692775135?e=2147483647&v=beta&t=4VN0W-QJrIaWxlnIL24shMpPWxdEQKiH41gLao8Pqqk"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <span>
                Gracias por contactarme puedes ver mis últimas publicaciones aquí <a href="https://devjaime.medium.com/"> Pronto te contactaré 😉</a>
                </span>
                <h3 className="title" onClick={toggleModalOne}>
                  Sobre Mi
                </h3>
              </div>
              {/* End details */}

              <div className="main_content">
                <div className="descriptions">
                  <p className="bigger">
                    Soy un desarrollador web con experiencia en React y Node.js, Django, Flutter y React Native.
                          </p>
                        </div>
                        {/* End description */}
                        <div className="news_share ">
                          <span>Share:</span>
                          <Social />
                        </div>
                        {/* End news share */}
                      </div>
                    </div>
                  </div>
                  {/* End box inner */}
                </div>
                {/* End modal box news */}
              </Modal>
    <form ref={form} className="contact_form" id="contact-form" onSubmit={handleSubmit(sendEmail)}>
        <div className="first_row">
          <input
            {...register("user_name", { required: true })}
            type="text"
            placeholder={t("Contact.name")}
            name="user_name"
          />
            {errors.user_name && errors.user_name.type === "required" && (
            <span className="invalid-feedback">Name is required</span>
          )}
        </div>
        {/* End .first_row */}

        <div className="second">
          <div className="left">
            <input
                {...register(
                  "user_email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
              type="email"
              placeholder="Email *"
              name="user_email"
            />
            {errors.user_email && (
              <span className="invalid-feedback">{errors.user_email.message}</span>
            )}
          </div>
          <div className="right">
            <input
              {...register("user_subject", { required: true })}
              placeholder={t("Contact.subject")}
              name="user_subject"
            />
             {errors.user_subject && (
              <span className="invalid-feedback">Subject is required.</span>
            )}
          </div>
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
              {...register("user_message", { required: true })}
            placeholder={t("Contact.message")}
            name="user_message"
          ></textarea>
            {errors.user_message && (
            <span className="invalid-feedback">Message is required.</span>
          )}
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
