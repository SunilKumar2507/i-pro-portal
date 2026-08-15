import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/footer/footer";
import ourservicescreenimg from "../../assets/City Businessman11.png";
import time24hrs from "../../assets/time24hrs.png";
import customerinterview from "../../assets/Customer Interview Animation - Free Download Business Animations _ IconScout 1.png.png";
import business1 from "../../assets/business11.jpg (2).png";
import business2 from "../../assets/business22.png";
import business3 from "../../assets/business33.png";
import business4 from "../../assets/business44.png";
import timedifferent from "../../assets/timedifferent11.png";
import timedifferent2 from "../../assets/timedifferent22.png";
import {
    FaArrowRight,
    FaBriefcase,
    FaCheckCircle,
    FaHandshake,
    FaHome,
    FaRegLightbulb,
    FaShieldAlt,
    FaUserShield,
    FaWhatsapp
} from "react-icons/fa";
import './our-service.css';

const OurServices = () => {
    const policyHighlights = [
        "Personal and corporate cover",
        "Dedicated advisory support",
        "Claims-focused service",
    ];

    const quickStats = [
        { value: "360", label: "Insurance advisory support" },
        { value: "2", label: "Personal and business lines" },
        { value: "24x7", label: "Client-first assistance" },
    ];

    const philosophyItems = [
        "Confidence that their broker understands their business and industry.",
        "A broker that puts them at the centre of all its activities and decisions.",
        "A team that will provide dedicated support when they need it most.",
        "A broker that insurance companies respect and actively seek to write business with.",
        "A broker who invests in technology to provide best service.",
    ];

    const serviceCards = [
        {
            title: "Personal Insurance",
            description: "Comprehensive personal insurance solutions designed to safeguard your home, vehicle, health, and financial well-being.",
            image: time24hrs,
            icon: <FaHome />
        },
        {
            title: "Corporate Insurance",
            description: "Business insurance solutions designed to protect company assets, employees, and operations so you can focus on growth.",
            image: customerinterview,
            icon: <FaBriefcase />
        },
    ];

    const businessCards = [
        {
            title: "Industry Fit",
            img: business1,
            text: "Whichever industry or business you operate in, with our experience, we can source the best and optimal insurance covers fit for your business needs."
        },
        {
            title: "Risk Assessment",
            img: business2,
            text: "We appreciate that different industries face varied challenges and risks. Our experts assess your requirements and align proposals with your operational needs."
        },
        {
            title: "Clear Consultation",
            img: business3,
            text: "Our insights into solutions, costs, coverage, and relevant information help you make informed decisions through a clear consultation process."
        },
        {
            title: "Complex Coverage",
            img: business4,
            text: "From retail insurance to complex property, materials, transportation, and organization risks, we identify suitable covers for your business."
        }
    ];

    const differenceCards = [
        {
            title: "Quite Simply, The People",
            description: "We recruit and retain talented, committed and motivated individuals who share our vision for safe, regulated support throughout every client engagement.",
            image: timedifferent
        },
        {
            title: "Claims Focus",
            description: "The moment of claim is the true test of insurance coverage. We stay focused on helping minimize loss and disruption when support matters most.",
            image: timedifferent2
        },
    ];

    return (
        <div className="osi-container">
            <Header />

            <main className="osi-page">
                <section className="osi-hero">
                    <div className="osi-hero-copy">
                        <span className="osi-eyebrow">Our Services</span>
                        <h1 className="osi-title">Insurance solutions shaped around the people and businesses we serve</h1>
                        <p className="osi-description">
                            At IPRO Insurance, we provide comprehensive and reliable insurance solutions tailored to meet diverse client needs. Whether you need personal or commercial coverage, our team helps you move with the confidence of a trusted insurance partner.
                        </p>

                        <div className="osi-highlight-list" aria-label="Our services highlights">
                            {policyHighlights.map((item, index) => (
                                <span key={index} className="osi-highlight-chip">
                                    <FaCheckCircle />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="osi-actions">
                            <a href="#service-lines" className="osi-btn osi-btn-primary">
                                <span>Explore Services</span>
                                <FaArrowRight />
                            </a>
                            <a href="#why-us" className="osi-btn osi-btn-secondary">
                                <span>Why I-Pro</span>
                            </a>
                        </div>
                    </div>

                    <div className="osi-hero-visual">
                        <div className="osi-visual-toolbar">
                            <span><FaShieldAlt /> Advisory cover</span>
                            <span>Client-first service</span>
                        </div>
                        <img src={ourservicescreenimg} alt="Insurance services" className="osi-main-image" />
                        <div className="osi-visual-card">
                            <FaHandshake />
                            <div>
                                <strong>Service-ready support</strong>
                                <span>Personal and business protection</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="osi-stats" aria-label="Our services overview">
                    {quickStats.map((item, index) => (
                        <div className="osi-stat" key={index}>
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </section>

                <section className="osi-philosophy-section">
                    <div className="osi-section-header">
                        <span className="osi-eyebrow">Business Philosophy</span>
                        <h2>We provide what our clients want and value</h2>
                    </div>

                    <div className="osi-philosophy-grid">
                        {philosophyItems.map((item, index) => (
                            <div className="osi-philosophy-card" key={index}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <FaCheckCircle />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="osi-service-section" id="service-lines">
                    <div className="osi-section-header">
                        <span className="osi-eyebrow">Service Lines</span>
                        <h2>Insurance support for personal lives and business operations</h2>
                    </div>

                    <div className="osi-service-grid">
                        {serviceCards.map((item, index) => (
                            <div className="osi-service-card" key={index}>
                                <div className="osi-service-media">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="osi-service-copy">
                                    <span>{item.icon}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="osi-business-section">
                    <div className="osi-section-header">
                        <span className="osi-eyebrow">Business Insight</span>
                        <h2>We understand your business</h2>
                    </div>

                    <div className="osi-business-grid">
                        {businessCards.map((card, index) => (
                            <div className="osi-business-card" key={index}>
                                <div className="osi-business-topline">
                                    <img src={card.img} alt={card.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="osi-business-copy">
                                    <h3>{card.title}</h3>
                                    <p>{card.text}</p>
                                </div>
                                <FaRegLightbulb className="osi-business-icon" />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="osi-difference-section" id="why-us">
                    <div className="osi-section-header">
                        <span className="osi-eyebrow">What Makes Us Different</span>
                        <h2>I-Pro Infinity is built around service, people, and claims support</h2>
                    </div>

                    <div className="osi-difference-grid">
                        {differenceCards.map((item, index) => (
                            <div className="osi-difference-card" key={index}>
                                <div className="osi-difference-media">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="osi-difference-copy">
                                    <span>{index === 0 ? <FaUserShield /> : <FaShieldAlt />}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://wa.me/919380029170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-float osi-whatsapp"
                        aria-label="Contact on WhatsApp"
                    >
                        <FaWhatsapp className="whatsapp-icon" />
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default OurServices;
