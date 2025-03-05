import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
 

    emailjs
      .sendForm(
        "service_fe6ulac", 
        "template_x06l1l3", 
        form.current,
        "Y9--tDJBKFr482aKR" 
      )
      .then(
        (result) => {
          setMessage("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          setMessage("Failed to send email. Try again.");
        }
      );
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>Name</label>
        <input type="text" name="from-name" required />

        <label>Email</label>
        <input type="email" name="reply_to" required />

        <label>Message</label>
        <textarea name="message" required />

        <button type="submit">Send</button>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
