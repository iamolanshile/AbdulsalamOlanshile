import React, { useRef, useState } from "react";
import "./contact.css";
import Nextbewe from "../../assets/nextbewelogo.png";
import CynTern from "../../assets/cynternlogo.png";
import Avanthi from "../../assets/anvanthilogo.jpeg";
import Monsipo from "../../assets/monsipologo.jpeg";
import Radiant from "../../assets/radiantlogo.jpg";
import LinkedInIcon from "../../assets/linkedin.png"; // Replace with your LinkedIn icon
import GitIcon from "../../assets/git.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // null, 'success', or 'error'
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    const name = formData.get("your_name").trim();
    const email = formData.get("your_email").trim();
    const message = formData.get("message").trim();

    if (!name || name.length < 2) {
      errors.your_name = "Name must be at least 2 characters long";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.your_email = "Please enter a valid email address";
    }
    if (!message || message.length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus(null); // Reset status
    setFormErrors({}); // Reset errors

    const formData = new FormData(form.current);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_w18ffrk",
        "template_dsj66aw",
        form.current,
        "O6FaqVW5e_bXgZw7Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setFormStatus("success");
          setTimeout(() => setFormStatus(null), 5000); // Clear message after 5s
        },
        (error) => {
          console.log(error.text);
          setFormStatus("error");
          setTimeout(() => setFormStatus(null), 5000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contactPage">
      <div id="clients" className="fade-in">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies,
          delivering high-quality web solutions.
        </p>
        <div className="clientImgs">
          <a
            href="https://nextbewe.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Nextbewe} alt="Nextbewe Logo" className="clientImg" />
          </a>
          <a
            href="https://www.cyntern.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CynTern} alt="CynTern Logo" className="clientImg" />
          </a>
          <a
            href="https://avanthiglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Avanthi} alt="Avanthi Logo" className="clientImg" />
          </a>
          <a
            href="https://monsipo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Monsipo} alt="Monsipo Logo" className="clientImg" />
          </a>
          <a
            href="https://radiantpetroenergy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Radiant} alt="Radiant Logo" className="clientImg" />
          </a>
        </div>
      </div>

      <div id="contact" className="fade-in">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <label htmlFor="your_name" className="sr-only">
            Your Name
          </label>
          <input
            type="text"
            className={`name ${formErrors.your_name ? "error" : ""}`}
            id="your_name"
            placeholder="Your Name"
            name="your_name"
            required
          />
          {formErrors.your_name && (
            <span className="errorMsg">{formErrors.your_name}</span>
          )}

          <label htmlFor="your_email" className="sr-only">
            Your Email
          </label>
          <input
            type="email"
            className={`email ${formErrors.your_email ? "error" : ""}`}
            id="your_email"
            placeholder="Your Email"
            name="your_email"
            required
          />
          {formErrors.your_email && (
            <span className="errorMsg">{formErrors.your_email}</span>
          )}

          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            className={`msg ${formErrors.message ? "error" : ""}`}
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          {formErrors.message && (
            <span className="errorMsg">{formErrors.message}</span>
          )}

          <button type="submit" className="submitBtn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>

          {formStatus && (
            <span className={`formStatus ${formStatus}`}>
              {formStatus === "success"
                ? "Email sent successfully!"
                : "Failed to send email. Please try again."}
            </span>
          )}

          <div className="socialLinks">
            <a
              href="https://t.co/irRq4U57u5" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedInIcon}
                alt="LinkedIn Profile"
                className="socialLink"
              />
            </a>
            <a
              href="https://github.com/iamolanshile" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitIcon} alt="GitHub Profile" className="socialLink" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
