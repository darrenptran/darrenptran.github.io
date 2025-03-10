import React from 'react';
import '../styles/Contact.css'; // Import CSS styles for the Contact component

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>

      {/* Using Formspree for form handling */}
      <form action="https://formspree.io/f/xqazokkb" method="POST" className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
