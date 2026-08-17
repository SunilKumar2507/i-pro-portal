import React from 'react';
import ourbeliefs from '../../assets/our-beliefs.jpg';
import customerfirst from '../../assets/customer-first.jpg';
import teamwork from '../../assets/teamswork.png';
import professionalism from '../../assets/professionalism.jpg';
import respect from '../../assets/respectstamp 1.png';
import integrity from '../../assets/integrity.jpg';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import { FaWhatsapp } from 'react-icons/fa';
import './beliefs.css';

const values = [
    { title: 'Customer First', text: 'Client success is our business. We act in our clients’ best interests and help them succeed.', img: customerfirst },
    { title: 'Integrity', text: 'We offer innovative solutions and professional advice through our collective expertise.', img: integrity },
    { title: 'Professionalism', text: 'We pursue excellence in everything we do and invest in continual development.', img: professionalism },
    { title: 'Respect', text: 'We value differences and foster relationships that are open, fair, ethical and respectful.', img: respect },
    { title: 'Teamwork', text: 'We build trust with our stakeholders by being accountable and doing what is right.', img: teamwork },
];

const BeliefsSection = () => (
    <div className="beliefs-page">
        <Header />
        <main>
            <section className="beliefs-hero">
                <div className="beliefs-hero-copy">
                    <span className="beliefs-kicker">What guides us</span>
                    <h1>Our beliefs shape<br />every promise we make.</h1>
                    <p>At i-Pro Infinity, our values guide how we advise, support and build trust with every client.</p>
                </div>
                <div className="beliefs-hero-image"><img src={ourbeliefs} alt="i-Pro Infinity team discussion" /></div>
            </section>

            <section className="beliefs-direction">
                <article className="beliefs-direction-card">
                    <span>01</span><h2>Vision</h2>
                    <p>Add <strong>value</strong> to insurance through professional services, wherever risk exists.</p>
                </article>
                <article className="beliefs-direction-card">
                    <span>02</span><h2>Mission</h2>
                    <ul>
                        <li>Provide professional, credible and creative services.</li>
                        <li>Help people flourish and fulfil their career ambitions.</li>
                        <li>Deliver qualitative and innovative insurance solutions.</li>
                    </ul>
                </article>
            </section>

            <section className="beliefs-values">
                <div className="beliefs-values-heading"><span className="beliefs-kicker">Our values</span><h2>How we show up.</h2><p>Five principles that keep our advice purposeful and our relationships strong.</p></div>
                <div className="beliefs-cards">
                    {values.map((value, index) => (
                        <article className="beliefs-card" key={value.title}>
                            <div className="beliefs-card-top"><img src={value.img} alt="" /><span>{String(index + 1).padStart(2, '0')}</span></div>
                            <h3>{value.title}</h3><p>{value.text}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
        <Footer />
        <a href="https://wa.me/919380029170" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat with us on WhatsApp"><FaWhatsapp className="whatsapp-icon" /></a>
    </div>
);

export default BeliefsSection;
