import React from 'react';
import './whyiproinfinity.css';
import './whyiproinfinity-overrides.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/header';
import heroImage from '../../assets/why-ipro-hero-image.png';
import business1 from '../../assets/business11.jpg (2).png';
import business2 from '../../assets/business22.png';
import business3 from '../../assets/business33.png';
import business4 from '../../assets/business44.png';
import timedifferent from '../../assets/timedifferent11.png';
import timedifferent2 from '../../assets/timedifferent22.png';
import { FaArrowRight, FaCheckCircle, FaChartLine, FaHandshake, FaLightbulb, FaShieldAlt, FaStar, FaUserFriends, FaWhatsapp } from 'react-icons/fa';

const philosophyPoints = ['Your business and industry are understood before advice is given.', 'Your requirements stay at the centre of every recommendation.', 'Dedicated support is available when you need it most.'];
const strengths = [
    { icon: FaUserFriends, title: 'Dedicated claims management', text: 'Experienced support when a claim needs careful attention.' },
    { icon: FaHandshake, title: 'Client continuity', text: 'A steady team that learns your needs and stays close to them.' },
    { icon: FaLightbulb, title: 'Technology-led service', text: 'Better information and responsive service at every step.' },
    { icon: FaChartLine, title: 'Committed to growth', text: 'An ambitious team that keeps investing in our clients.' },
    { icon: FaStar, title: 'Values in action', text: 'Professional advice built on trust, care and accountability.' },
];
const businessCards = [
    { image: business1, title: 'Industry fit', text: 'Experience across industries helps us source insurance covers that fit the way your business operates.' },
    { image: business2, title: 'Risk understanding', text: 'We assess your specific challenges and risks, so proposals align with your actual requirements.' },
    { image: business3, title: 'Clear consultation', text: 'We explain solutions, costs and coverage clearly, helping you make informed decisions.' },
    { image: business4, title: 'Broad expertise', text: 'From retail insurance to complex business risks, we identify protection that is right for you.' },
];
const differenceCards = [
    { image: timedifferent, title: 'Quite simply, the people', text: 'Our talented and committed professionals bring experience and a passion for the best client outcomes.' },
    { image: timedifferent2, title: 'Claims focus', text: 'When a claim happens, we help make the process simple, smooth and less stressful.' },
];

const DifferenceSection = () => (
    <div className="wip-container">
        <Header />
        <main className="wip-page">
            <section className="wip-hero">
                <div className="wip-hero-copy">
                    <span className="wip-eyebrow">Why i-Pro Infinity</span>
                    <h1>Insurance advice shaped around what you value most.</h1>
                    <p>We combine experienced people, practical market knowledge and responsive service to help you protect what matters with confidence.</p>
                    <div className="wip-highlight-list">{philosophyPoints.map(point => <span className="wip-highlight-chip" key={point}><FaCheckCircle />{point}</span>)}</div>
                    <div className="wip-actions"><a href="#our-difference" className="wip-btn wip-btn-primary"><span>Explore our difference</span><FaArrowRight /></a><a href="/contact-us" className="wip-btn wip-btn-secondary">Talk to an expert</a></div>
                </div>
                <div className="wip-hero-visual"><div className="wip-visual-toolbar"><span><FaShieldAlt /> Client-first protection</span><span>Trusted support</span></div><img src={heroImage} alt="i-Pro Infinity insurance advisory" /><div className="wip-visual-card"><FaHandshake /><div><strong>Here when it counts</strong><span>Advice that stays with you</span></div></div></div>
            </section>
            <section className="wip-stats" aria-label="i-Pro Infinity highlights"><div><strong>360°</strong><span>Insurance perspective</span></div><div><strong>1</strong><span>Dedicated client partner</span></div><div><strong>24×7</strong><span>Support when it matters</span></div></section>
            <section className="wip-strengths" id="our-difference"><div className="wip-section-header"><span className="wip-eyebrow">What makes us different</span><h2>The confidence of a team that knows your world.</h2><p>From understanding your needs to supporting a claim, our people make the difference.</p></div><div className="wip-strength-grid">{strengths.map(({ icon: Icon, title, text }, index) => <article className="wip-strength-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
            <section className="wip-business"><div className="wip-section-header"><span className="wip-eyebrow">Business insight</span><h2>We understand your business.</h2></div><div className="wip-business-grid">{businessCards.map((card, index) => <article className="wip-business-card" key={card.title}><div><img src={card.image} alt="" /><span>{String(index + 1).padStart(2, '0')}</span></div><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></section>
            <section className="wip-difference-section"><div className="wip-section-header"><span className="wip-eyebrow">Our promise</span><h2>Support that remains personal.</h2></div><div className="wip-difference-grid">{differenceCards.map(card => <article className="wip-difference-card" key={card.title}><img src={card.image} alt="" /><div><h3>{card.title}</h3><p>{card.text}</p><a href="/contact-us">Speak with our team <FaArrowRight /></a></div></article>)}</div></section>
        </main>
        <a href="https://wa.me/919380029170" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat with I-Pro Infinity on WhatsApp"><FaWhatsapp /></a>
        <Footer />
    </div>
);

export default DifferenceSection;
