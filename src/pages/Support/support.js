import React, { useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/header';
import heroImage from '../../assets/contact_us_hero_img.png';
import quickAnswerImage from '../../assets/contact_us_quick_ans.png';
import { FaArrowRight, FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';
import './support.css';

const faqs = [
    { question: 'Does this policy cover pre-existing diseases?', answer: 'Some policies may cover pre-existing conditions after a waiting period. Please review your policy details for specifics.' },
    { question: 'Is there cover for pre-medical conditions like diabetes?', answer: 'Coverage for diabetes may be available under specific policies. Check the policy terms for details.' },
    { question: 'Why do I need travel insurance?', answer: 'Travel insurance provides financial protection for medical emergencies, trip cancellations and other unforeseen events during a trip.' },
    { question: 'Is pre-approval required before hospitalisation?', answer: 'Pre-approval is often required for planned treatment. Emergency treatment may not require prior approval.' },
    { question: 'What is an ASP?', answer: 'An Application Service Provider is a company that offers software applications and related services over the internet.' },
];

const ContactUs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const handleChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });
    const handleSubmit = event => {
        event.preventDefault();
        window.location.href = `mailto:customerfirst@iproinfinity.com?subject=New Contact Inquiry&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    };

    return (
        <div className="contact-page">
            <Header />
            <main>
                <section className="contact-hero">
                    <div className="contact-hero-copy">
                        <span className="contact-kicker">We are here to help</span>
                        <h1>Questions? Let’s start a conversation.</h1>
                        <p>Reach out to our team for clear, helpful guidance on your insurance needs.</p>
                        <div className="contact-hero-highlights"><span><FaCheckCircle /> Expert guidance</span><span><FaCheckCircle /> Responsive support</span></div>
                        <a href="#contact-form" className="contact-hero-action">Send a message <FaArrowRight /></a>
                    </div>
                    <div className="contact-hero-visual"><div className="contact-hero-toolbar"><span><FaShieldAlt /> Client-first support</span><span>We are listening</span></div><img src={heroImage} alt="Contact i-Pro Infinity" /><div className="contact-hero-badge"><FaPhoneAlt /><span><strong>Speak with our team</strong><small>Guidance when you need it</small></span></div></div>
                </section>

                <section className="contact-main-grid">
                    <form className="contact-message-card" id="contact-form" onSubmit={handleSubmit}>
                        <span className="contact-kicker">Send a message</span><h2>How can we help?</h2>
                        <div className="contact-two-fields"><label>Name*<input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required /></label><label>Email*<input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required /></label></div>
                        <label>Phone number*<input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required /></label>
                        <label>Message<textarea name="message" placeholder="Tell us how we can help" rows="5" value={formData.message} onChange={handleChange} /></label>
                        <button type="submit">Send message <FaPaperPlane /></button>
                    </form>

                    <aside className="contact-details-card"><span className="contact-kicker">Contact details</span><h2>Prefer to reach us directly?</h2><div className="contact-details-list"><a href="tel:08025441353" className="contact-detail"><b><FaPhoneAlt /></b><span><strong>Call us</strong><small>080 25441353</small></span></a><a href="mailto:customerfirst@iproinfinity.com" className="contact-detail"><b><FaEnvelope /></b><span><strong>Email</strong><small>customerfirst@iproinfinity.com</small></span></a><div className="contact-detail"><b><FaMapMarkerAlt /></b><span><strong>Visit us</strong><small>#18, 3rd Cross, RMV 2nd Stage, 4th Block,<br />MLA Layout, Sanjaynagar,<br />Bengaluru 560094</small></span></div></div></aside>
                </section>

                <section className="contact-faq-section"><div className="contact-faq-intro"><span className="contact-kicker">FAQs</span><h2>Quick answers.</h2><p>Find answers to the most common questions about our insurance policies.</p><img src={quickAnswerImage} alt="Insurance protection checklist" /></div><div className="contact-faq-list">{faqs.map((item, index) => <article className="contact-faq-item" key={item.question}><button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)} aria-expanded={openIndex === index}><span>{item.question}</span><b>{openIndex === index ? '−' : '+'}</b></button>{openIndex === index && <p>{item.answer}</p>}</article>)}</div></section>
            </main>
            <Footer />
            <a href="https://wa.me/919380029170" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat with us on WhatsApp"><FaWhatsapp className="whatsapp-icon" /></a>
        </div>
    );
};

export default ContactUs;
