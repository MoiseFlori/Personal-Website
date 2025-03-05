import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactHeader from "../components/contact/ContactHeader";

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default Contact;
