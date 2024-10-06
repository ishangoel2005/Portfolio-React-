import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState(''); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); 
    setMessage(''); 

    const formData = new FormData(event.target);
    formData.append("access_key", "d48056d9-0ee8-4e92-bd10-23602e8597d9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Message sent successfully!"); 
        event.target.reset(); 
      } else {
        setMessage("Submission failed. Please try again."); 
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again."); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <section className="contact">
      <h2 className='heading'>Contact Me</h2>
      {message && <p className="feedback-message">{message}</p>} 
      <form onSubmit={onSubmit}>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder="Enter your name" name='name' required /> 
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className="field" placeholder='Enter your email' name='email' required /> 
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name="message" className="field mess" placeholder='Enter your message' required></textarea> 
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button> 
      </form>
    </section>
  );
};

export default Contact;
