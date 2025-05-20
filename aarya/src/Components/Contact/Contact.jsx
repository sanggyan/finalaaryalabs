import React, { useRef } from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2edba73f-f920-49a8-b279-9b0dc71ddc23");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      // Clear all input fields after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>We'd Love to Hear From You!</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Share Your Feedback or suggestions</h1>
          <p>
            Got any questions, ideas, or feedback for us? Whether you're curious
            about something, have a suggestion to share, or just want to help us
            improve — we're all ears. Don't hesitate to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>aaryalabs01@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>9806080230</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Kathmandu,Nepal</p>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
