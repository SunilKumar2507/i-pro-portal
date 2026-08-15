import React, { useEffect, useRef } from 'react';
import './whyiproinfinity.css';
import './hero-sizing.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/header';
import heroImage from '../../assets/why-ipro-hero-image.png';
import business1 from '../../assets/business11.jpg (2).png';
import business2 from '../../assets/business22.png';
import business3 from '../../assets/business33.png';
import business4 from '../../assets/business44.png';
import timedifferent from '../../assets/timedifferent11.png';
import timedifferent2 from '../../assets/timedifferent22.png';
import { FaCheckCircle, FaUsers, FaUser, FaLightbulb, FaChartLine, FaStar, FaWhatsapp } from 'react-icons/fa';

const philosophyPoints = ['Confidence that WE understand YOUR business and industry.', 'WE keep your requirements at the centre of all our activities and decisions.', 'OUR team will provide dedicated support when YOU need it most.', 'WE are respected by insurance companies, who actively seek to write business with us.', 'WE invest in technology to provide the best service, meeting YOUR needs.'];
const strengths = [
    { icon: FaUsers, title: 'Dedicated Claims Management:', text: 'We have a dedicated and experienced claims management team...' },
    { icon: FaUser, title: 'Client Continuity:', text: 'We aim to provide stability and continuity...' },
    { icon: FaLightbulb, title: 'Innovation through Technology:', text: 'We are a progressive and ambitious team...' },
    { icon: FaChartLine, title: 'Committed to Growth:', text: 'We are here to stay and growing...' },
    { icon: FaStar, title: 'Core Values:', text: 'We live by our core values...' },
];
const businessCards = [
    { image: business1, text: 'Whichever industry or business you operate in, with our experience, we can source the best and optimal insurance covers fit for your business needs.' },
    { image: business2, text: 'We appreciate that different industries face varied challenges and risks, and our insurance experts are ready to assess your particular requirements. We work with your business to keep well-detailed business and employee records, giving you a clearer picture of operational aspects so your insurance proposals align with your needs.' },
    { image: business3, text: 'Our detailed insights into solutions, costs, coverage, and other relevant information ensure you are informed. We arrange a consultation session with you to explain our proposal so you can make informed decisions on how to proceed.' },
    { image: business4, text: 'From simple retail insurance to a major home, health to complex coverage solutions such as property, materials, transportation, and organization, our experience and expertise ensure we identify the right insurance covers for your business.' },
];

const DifferenceSection = () => {
    const heroRef = useRef(null);
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
        const onMove = event => { const rect = hero.getBoundingClientRect(); hero.style.setProperty('--mouse-x', `${((event.clientX - rect.left) / rect.width - .5) * 16}px`); hero.style.setProperty('--mouse-y', `${((event.clientY - rect.top) / rect.height - .5) * 16}px`); };
        hero.addEventListener('mousemove', onMove);
        return () => hero.removeEventListener('mousemove', onMove);
    }, []);
    return <div className="difference-section"><Header /><main>
        <section className="philosophy-hero" ref={heroRef} style={{ backgroundImage: `url(${heroImage})` }}><div className="philosophy-copy"><h1>OUR PHILOSOPHY AT<br />I-PRO INFINITY IS SIMPLY TO<br /><strong>PROVIDE WHAT YOU WANT<br />AND VALUES!</strong></h1><ul>{philosophyPoints.map(point => <li key={point}><FaCheckCircle /><span>{point}</span></li>)}</ul></div></section>
        <section className="difference-intro reveal-section"><h2>What Makes Us Different</h2><span className="section-line" /><p className="intro-copy">People make all the difference. We are a team of passionate and mature professionals with years of experience,<br className="desktop-break" /> having seen the ups and downs in life. The experience, expertise, and enthusiasm of our team is something<br className="desktop-break" /> that our clients truly benefit from.</p><div className="strength-list">{strengths.map(({ icon: Icon, title, text }) => <div className="strength-item" key={title}><span className="strength-icon"><Icon /></span><p><b>{title}</b> {text}</p></div>)}</div><p className="claim-copy">The unfortunate point at which a client has to make a claim is the true moment of truth. It’s the time when an insurer must promptly deliver the agreed benefits. Our professional claims team will be at your side, providing advice and support through the process, making it as easy as possible for you during a difficult period.</p></section>
        <section className="business-container reveal-section"><h2>WE UNDERSTAND YOUR BUSINESS</h2><span className="section-line" /><div className="business-cards">{businessCards.map((card, index) => <article className="business-card" key={card.text} style={{ '--delay': `${index * 80}ms` }}><div className="business-image"><img src={card.image} alt="Insurance business consultation" /></div><p>{card.text}</p></article>)}</div></section>
        <section className="ipro-container reveal-section"><h2>WHAT MAKES I-PRO INFINITY DIFFERENT?</h2><span className="section-line" /><div className="ipro-content"><article className="ipro-card"><h3>QUITE SIMPLY,<br />THE PEOPLE</h3><img src={timedifferent} alt="Team of insurance professionals" /><p>We recruit and retain talented, committed and motivated individuals. Our trained professionals bring a wealth of experience and a passion for delivering the best outcomes for our clients.</p></article><article className="ipro-card"><h3>CLAIMS FOCUS</h3><img src={timedifferent2} alt="Claims care and support" /><p>The unfortunate point at which you have to make a claim is the true moment of truth. We focus on making the claims process simple, smooth and stress-free.</p></article></div></section>
    </main><a href="https://wa.me/919380029170" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat with I-Pro Infinity on WhatsApp"><FaWhatsapp /></a><Footer /></div>;
};
export default DifferenceSection;
