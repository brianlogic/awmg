import React, { useState } from "react";
import "./Form.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/41b24320-2a61-11ee-9907-0b23fd627d84";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="box">
        <input className="input" type="text" placeholder="Your name" name="name" required />
      </div>
      <div className="box">
        <input className="input" type="email" placeholder="Email" name="email" required />
      </div>
      <div className="box">
        <textarea className="input" placeholder="Your message" name="message" required />
      </div>
      <div className="box">
        <button className="submit" type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default ContactForm;