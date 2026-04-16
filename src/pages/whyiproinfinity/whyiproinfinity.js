import React from 'react';
import './whyiproinfinity.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/header';
//import whatmakeusdiffernt from '../../assets/philospoy.jpg';
import business1 from "../../assets/business11.jpg (2).png";
import business2 from "../../assets/business22.png";
import business3 from "../../assets/business33.png";
import business4 from "../../assets/business44.png";
import timedifferent from "../../assets/timedifferent11.png";
import timedifferent2 from "../../assets/timedifferent22.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const DifferenceSection = () => {
    const cardData = [
        {
            img: business1,
            text: `Whichever industry or business you operate in, with our experience, 
            we can source the best and optimal insurance covers fit for your business needs.`
        },
        {
            img: business2,
            text: `We appreciate that different industries face varied challenges and risks, 
            and our insurance experts are ready to assess your particular requirements. 
            We work with your business to keep well-detailed business and employee records, 
            giving you a clearer picture of operational aspects so your insurance proposals 
            align with your needs.`
        },
        {
            img: business3,
            text: `Our detailed insights into solutions, costs, coverage, and other relevant 
            information ensure you are informed. We arrange a consultation session with you 
            to explain our proposal so you can make informed decisions on how to proceed.`
        },
        {
            img: business4,
            text: `From simple retail insurance to a major home, health to complex coverage 
            solutions such as property, materials, transportation, and organization, our 
            experience and expertise ensure we identify the right insurance covers for your 
            business.`
        }
    ];

    return (
        <div className="difference-section">
            <Header />

            {/* Main Content with left text and right image */}
            <div className="difference-content">
                {/* LEFT SIDE TEXT */}
                <div className="difference-text">
                    <h1 className="our-services-heading">
                        OUR PHILOSOPHY AT I-PRO INFINITY IS SIMPLY TO PROVIDE WHAT YOU WANT AND VALUES!
                    </h1>

                    <section className='business-philosophy-container'>
                        <div className='business-philosophy-content'>
                            <ul className="business-philosophy-list">
                                <li><FaCheckCircle className="icon" />Confidence that WE understand YOUR business and industry.</li>
                                <li><FaCheckCircle className="icon" />WE keep your requirements at the centre of all our activities and decisions.</li>
                                <li><FaCheckCircle className="icon" />OUR team will provide dedicated support when YOU need it most.</li>
                                <li><FaCheckCircle className="icon" />WE are respected by insurance companies, who actively seek to write business with us.</li>
                                <li><FaCheckCircle className="icon" />WE invest in technology to provide the best service, meeting YOUR needs.</li>
                            </ul>
                        </div>
                    </section>

                    <h2>What Makes Us Different</h2>
                    <p>
                        People make all the difference. We are a team of passionate and mature professionals with years of experience, having seen the ups and downs in life.
                        The experience, expertise, and enthusiasm of our team is something that our clients truly benefit from.
                    </p>
                    <ul>
                        <li><strong>Dedicated Claims Management:</strong> We have a dedicated and experienced claims management team...</li>
                        <li><strong>Client Continuity:</strong> We aim to provide stability and continuity...</li>
                        <li><strong>Innovation through Technology:</strong> We are a progressive and ambitious team...</li>
                        <li><strong>Committed to Growth:</strong> We are here to stay and growing...</li>
                        <li><strong>Core Values:</strong> We live by our core values...</li>
                    </ul>
                    <p>
                        The unfortunate point at which a client has to make a claim is the true moment of truth. It’s the time when an insurer must promptly deliver the agreed benefits...
                    </p>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="difference-image">
                    {/* <img src={whatmakeusdiffernt} alt="Our Team" /> */}
                </div>
            </div>

            {/* Business Section */}
            <div className="business-container">
                <h2 className="business-title">WE UNDERSTAND YOUR BUSINESS</h2>
                <div className="business-cards">
                    {cardData.map((card, index) => (
                        <div className="business-card" key={index}>
                            <img src={card.img} alt={`Business Info ${index + 1}`} className="business-img" />
                            <p className="business-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* I-Pro Section */}
            <div className="ipro-container">
                <h2 className="ipro-title">WHAT MAKES I-PRO INFINITY DIFFERENT?</h2>
                <div className="ipro-content">
                    <div className="ipro-card">
                        <h3 className="ipro-subtitle">QUITE SIMPLY, THE PEOPLE</h3>
                        <img src={timedifferent} alt="People" className="ipro-img" />
                        <p className="ipro-text">
                            We recruit and retain talented, committed and motivated individuals...
                        </p>
                    </div>
                    <div className="ipro-card">
                        <h3 className="ipro-subtitle">CLAIMS FOCUS</h3>
                        <img src={timedifferent2} alt="Claims" className="ipro-img" />
                        <p className="ipro-text">
                            The unfortunate point at which you have to make a claim...
                        </p>
                    </div>
                </div>
                 <a
                                                                href="https://wa.me/919380029170"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="whatsapp-float"
                                                              >
                                                                <FaWhatsapp className="whatsapp-icon" />
                                                              </a>
            </div>

            <Footer />
        </div>
    );
};

export default DifferenceSection;
