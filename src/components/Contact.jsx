import React, { useRef } from 'react';
import {useTranslation} from "react-i18next";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

const Contact = () => {
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
          console.log(result.text);
          alert("Message sent!");
      }, (error) => {
          console.log(error.text);
      });
      reset();
  }


  return (
    <>
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
