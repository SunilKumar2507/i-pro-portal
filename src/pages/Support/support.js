import React, { useState } from 'react';
import Footer from "../../components/footer/footer"
import './support.css';
import contactImg from '../../assets/customersupport.gif'; // Top-left illustration
import Header from '../../components/Header/header';
 import Calling from '../../assets/calling.jpg'; // Support icon
import emailImg from '../../assets/email.jpg'; // Email icon
import address from '../../assets/addresss.jpg';
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const faqs = [
    {
      question: "Does this policy cover Pre-existing diseases?",
      answer: "Yes, some policies may cover pre-existing conditions after a waiting period. Please review your policy details for specifics."
    },
    {
      question: "Is there cover for pre-medical conditions like diabetes?",
      answer: "Yes, coverage for diabetes is available under specific policies. Check the policy terms for more details."
    },
    {
      question: "Why do I need travel insurance?",
      answer: "Travel insurance provides financial protection for medical emergencies, trip cancellations, and other unforeseen incidents during your trip."
    },
    {
      question: "In case medical treatment is required, is there any need for pre-approval before hospitalization?",
      answer: "Yes, pre-approval is often required for planned treatments. Emergency treatments may not require prior approval."
    },
    {
      question: "What is an ASP?",
      answer: "An ASP (Application Service Provider) is a company that offers software applications and related services over the internet."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:deepthi@iproinfinity.com?subject=New Contact Inquiry&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
  };

  return (
    <div className="container">
      <Header />
      <br />
      <br />
      <div className="contact-headers">
        <img src={contactImg} alt="Contact Illustration" className="contact-img" />
        <div className="contact-form">
          <h2>Questions? Drop us a line!</h2>
          <form onSubmit={handleSubmit}>
            <label>Name*</label>
            <input type="text" name="name" placeholder="Please enter your full name" value={formData.name} onChange={handleChange} required />

            <label>Email*</label>
            <input type="email" name="email" placeholder="Please enter your email" value={formData.email} onChange={handleChange} required />

            <label>Phone No*</label>
            <input type="tel" name="phone" placeholder="Please enter your ph no" value={formData.phone} onChange={handleChange} required />

            <label>Message</label>
            <textarea className='textarea' name="message" placeholder="Your message..." value={formData.message} onChange={handleChange}></textarea>

            <button type="submit" className="send-button">Send message</button>
          </form>
        </div>
      </div>

      <div className="contact-info">
        <div className="info-cards">
          <img className="calling" src={Calling} alt="Support" />
          <p className='contact-us'>Contact Us!</p>
          <p className='contact-us'>080 25441353</p>
        </div>

        <div className="info-cards">
          <img className="emailimage" src={emailImg} alt="Email" />
          <p className='contact-us'>Email</p>
          <p className='contact-us-email'>customerfirst@iproinfinity.com</p>
        </div>

        <div className="info-cards">
          <img className="addresss" src={address} alt="WhatsApp" />
          <p className='contact-us'>Address</p>
          <p className='contact-us'>
            # 18, 3rd Cross, RMV 2nd Stage<br />
            4th Block, MLA Layout,<br />
            Sanjaynagar, Bengaluru 560094
          </p>
        </div>
      </div>

      <div className="faq-container">
        <h2>FAQ's</h2>
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>&#9660;</span>
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}

         <a
                                        href="https://wa.me/919380029170"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="whatsapp-float"
                                      >
                                        <FaWhatsapp className="whatsapp-icon" />
                                      </a>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
