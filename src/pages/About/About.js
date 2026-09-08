import React from 'react';
import Headers from '../../components/Header/header';
import Profile from '../../assets/profile.jpg';
import SureshProfile from '../../assets/Suresh_Profile.png';
import UmeshProfile from '../../assets/Umesh_profile.png';
import PadmanabhProfile from '../../assets/Padmanabh_img.jpeg';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from '../../components/footer/footer';
import './About.css';

const leaders = [
    { name: 'Mr. Suresh Sivalingam', role: 'Principal Officer & CEO', image: SureshProfile, text: 'A Mechanical Engineer, he entered the insurance sector as a Direct Recruit Officer with United India Insurance Company before working in Oman and the UK. He brings more than three decades of experience across underwriting, claims, reinsurance, risk engineering and risk management.' },
    { name: 'Mr. Umesh Kadarmandlagi', role: 'Executive Director', image: UmeshProfile, text: 'A Commerce Graduate with more than three decades of experience at United India Insurance Company, including leadership roles as Branch Manager and Divisional Manager. He heads the Corporate Insurance Team.' },
    { name: 'Mr. H Padmanabh Bhandary', role: 'Executive Director', image: PadmanabhProfile, text: 'A Law Graduate and former Regional Manager at United India Insurance Co., he has more than three decades in the insurance industry, serving in leadership roles across regions and superannuating as Regional Manager, Calicut. He heads the Claims and Personal Insurance Team.' },
];

const AboutIPro = () => (
    <div className="about-page">
        <header className="header-section"><Headers /></header>
        <main>
            <section className="about-hero">
                <div className="about-orb about-orb-one" />
                <div className="about-orb about-orb-two" />
                <div className="about-hero-copy">
                    <span className="about-eyebrow">About i-Pro Infinity</span>
                    <h1>Insurance expertise, <em>made personal.</em></h1>
                    <p>We combine deep insurance knowledge with a modern, people-first approach to protect what matters most.</p>
                    <div className="about-hero-actions">
                        <a href="/contact-us" className="about-primary-action">Talk to an expert <span>→</span></a>
                        <a href="#leadership" className="about-text-action">Meet our leadership</a>
                    </div>
                </div>
                <div className="about-hero-visual">
                    <div className="about-image-glow" />
                    <img src={Profile} alt="i-Pro Infinity insurance professional" />
                </div>
            </section>

            <section className="about-story-section">
                <div className="about-section-intro"><span className="about-eyebrow">Our story</span><h2>Built on expertise.<br />Driven by trust.</h2></div>
                <div className="about-story-copy">
                    <p>i-Pro Infinity was founded by visionary insurance professionals with a passion for helping people make confident decisions. From our early beginnings to our position today, our journey has been shaped by a relentless pursuit of excellence.</p>
                    <p>We bring together thoughtful advice, broad market understanding and responsive support—creating insurance solutions that feel clear, capable and genuinely human.</p>
                </div>
            </section>

            <section className="about-values-section">
                <article className="about-value-card"><span className="about-value-number">01</span><h3>Clarity first</h3><p>Clear guidance and transparent advice at every step.</p></article>
                <article className="about-value-card"><span className="about-value-number">02</span><h3>Built around you</h3><p>Protection shaped around your needs, not a template.</p></article>
                <article className="about-value-card"><span className="about-value-number">03</span><h3>Here when it counts</h3><p>Steady support when you need it most.</p></article>
            </section>

            <section className="about-team-section" id="leadership">
                <div className="about-team-heading"><span className="about-eyebrow">Leadership</span><h2>People behind the promise.</h2><p>Our leaders bring decades of experience across every dimension of insurance.</p></div>
                <div className="about-leaders-grid">
                    {leaders.map((leader) => (
                        <article className="about-leader-card" key={leader.name}>
                            <div className="about-leader-card-inner">
                                <div className="about-leader-face about-leader-front">
                                    <div className="about-leader-image"><img src={leader.image || Profile} alt={leader.name} className={leader.image ? 'about-leader-photo-full' : undefined} /></div>
                                    <h3>{leader.name}</h3>
                                </div>
                                <div className="about-leader-face about-leader-back">
                                    <div className="about-leader-content">
                                        <p className="about-leader-role">{leader.role}</p>
                                        <h3>{leader.name}</h3>
                                        <p>{leader.text}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
        <Footer />
        <a href="https://wa.me/919380029170" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat with us on WhatsApp"><FaWhatsapp className="whatsapp-icon" /></a>
    </div>
);

export default AboutIPro;
