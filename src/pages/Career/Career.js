import React from 'react';
import Header from '../../components/Header/header';
import careerimage from '../../assets/career.jpg';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from '../../components/footer/footer';
import './Career.css';

const highlights = [
    { number: '01', title: 'Grow with purpose', text: 'Build a rewarding career while making a real impact in customers’ lives.' },
    { number: '02', title: 'Learn together', text: 'Access training, guidance and a supportive team that wants you to succeed.' },
    { number: '03', title: 'Bring your drive', text: 'We welcome passionate, results-oriented people from every background.' },
];

const CareerPage = () => (
    <div className="career-page">
        <Header />
        <main>
            <section className="career-hero">
                <div className="career-hero-copy">
                    <span className="career-kicker">Careers at i-Pro Infinity</span>
                    <h1>Take the next step<br />with <em>confidence.</em></h1>
                    <p>Bring your ambition to a team that values people, purpose and professional growth.</p>
                    <a className="career-cta" href="mailto:customerfirst@iproinfinity.com">Send your resume <span>→</span></a>
                </div>
                <div className="career-hero-art"><img src={careerimage} alt="Professional progressing towards a career goal" /></div>
            </section>

            <section className="career-intro">
                <div><span className="career-kicker">Join our team</span><h2>A place to do work that matters.</h2></div>
                <div className="career-intro-copy">
                    <p>We are expanding our team and looking for passionate, results-oriented individuals with an entrepreneurial mindset. If you are motivated, enjoy helping people and thrive in a dynamic environment, this is the place for you.</p>
                    <p>Whether you are experienced or just starting out, you will find a team that values dedication, collaboration and a drive to succeed.</p>
                </div>
            </section>

            <section className="career-highlights">
                {highlights.map(highlight => <article className="career-highlight" key={highlight.number}><span>{highlight.number}</span><h3>{highlight.title}</h3><p>{highlight.text}</p></article>)}
            </section>

            <section className="career-apply">
                <div><span className="career-kicker">Start your journey</span><h2>Ready to make your mark?</h2><p>Great incentives, training programmes and a supportive team await you. Let’s commence a great journey together.</p></div>
                <a href="mailto:customerfirst@iproinfinity.com" className="career-apply-link">customerfirst@iproinfinity.com <span>↗</span></a>
            </section>
        </main>
        <Footer />
        <a href="https://wa.me/919380029170" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat with us on WhatsApp"><FaWhatsapp className="whatsapp-icon" /></a>
    </div>
);

export default CareerPage;
