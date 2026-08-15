import React from 'react';
import Homeinsuranceimage from '../../assets/Homeinsurance.jpg';
import Homeinsurance1 from '../../assets/Homeinsurance1.jpg';
import Homeinsurance2 from '../../assets/Homeinsurance2.jpg'
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import Homeinsurance11 from '../../assets/Homeinsurance11.jpg';
import Homeinsurance12 from '../../assets/Homeinsurance12.jpg';
import Homeinsurance13 from '../../assets/Homeinsurance13.jpg';
import Homeinsurance14 from '../../assets/Homeinsurance14.jpg';
import Homeinsurance15 from '../../assets/Homeinsurance15.jpg';
import Homeinsurance16 from '../../assets/Homeinsurance16.jpg'
import { FaArrowRight, FaCheckCircle, FaHome, FaHouseDamage, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import './homeinsurance.css';



function Homeinsurance() {

    const data = [
        {
            title: "Building Insurance",
            description: "Covers repair or rebuilding costs for your home due to fire, storms, earthquakes, or vandalism.",
            image: Homeinsurance11
        },
        {
            title: "Contents Insurance",
            description: "Protects your personal belongings inside the home including furniture, electronics, and valuables against theft or damage.",
            image: Homeinsurance12
        },
        {
            title: "Natural Disaster Coverage",
            description: " Provides financial protection against damages caused by floods, earthquakes, hurricanes, or other natural calamities.",
            image: Homeinsurance13
        },
        {
            title: "Loss of Use / Additional Living Expenses",
            description: " Covers temporary living costs if your home becomes uninhabitable due to an insured event.",
            image: Homeinsurance14
        },
        {
            title: "Personal Liability Coverage",
            description: " Offers protection if you are held responsible for injury or property damage to others occurring on your property.",
            image: Homeinsurance15
        },
        {
            title: "Accidental Damage",
            description: "  Covers sudden and accidental damage to your home or belongings not caused by typical risks.",
            image: Homeinsurance16
        },
    ];

    const policyHighlights = [
        "Home structure protection",
        "Contents and belongings cover",
        "Family liability support",
    ];

    const planCards = [
        {
            title: "Building & Contents Insurance",
            description: "Covers damages to the structure of your home and the belongings inside, protecting you from losses due to fire, theft, or natural disasters.",
            image: Homeinsurance1
        },
        {
            title: "Personal Liability Insurance",
            description: "Protects you against legal claims if someone is injured on your property or if you accidentally cause damage to others' property.",
            image: Homeinsurance2
        },
    ];

    const quickStats = [
        { value: "6", label: "Core home coverages" },
        { value: "Home", label: "Structure and contents" },
        { value: "Soon", label: "Digital quote access" },
    ];

    return (
        <div className="hoi-container">
            <Header />

            <main className="hoi-page">
                <section className="hoi-hero">
                    <div className="hoi-hero-copy">
                        <span className="hoi-eyebrow">Home Insurance</span>
                        <h1 className="hoi-title">Home protection for the place your family depends on</h1>
                        <p className="hoi-description">
                            Home insurance is a comprehensive insurance policy designed to protect your home and belongings from various risks and damages. It offers financial security against unexpected events such as fire, theft, natural disasters, and personal liability, ensuring peace of mind for homeowners and their families.
                        </p>

                        <div className="hoi-highlight-list" aria-label="Home insurance highlights">
                            {policyHighlights.map((item, index) => (
                                <span key={index} className="hoi-highlight-chip">
                                    <FaCheckCircle />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="hoi-actions">
                            <button
                                type="button"
                                className="quotes-btn-carinformation hoi-btn hoi-btn-primary is-disabled"
                                disabled
                            >
                                <span>Coming soon</span>
                                <FaArrowRight />
                            </button>
                            <a href="#home-coverages" className="hoi-btn hoi-btn-secondary">
                                <span>View Coverages</span>
                            </a>
                        </div>
                    </div>

                    <div className="hoi-hero-visual">
                        <div className="hoi-visual-toolbar">
                            <span><FaShieldAlt /> Property cover</span>
                            <span>Secure home</span>
                        </div>
                        <img src={Homeinsuranceimage} alt="Home insurance" className="hoi-main-image" />
                        <div className="hoi-visual-card">
                            <FaHome />
                            <div>
                                <strong>Home-ready cover</strong>
                                <span>Protection for structure and belongings</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="hoi-stats" aria-label="Home insurance overview">
                    {quickStats.map((item, index) => (
                        <div className="hoi-stat" key={index}>
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </section>

                <section className="hoi-plan-section">
                    <div className="hoi-section-header">
                        <span className="hoi-eyebrow">Home Security</span>
                        <h2>Home Insurance - Protect Your Home and Loved Ones</h2>
                    </div>

                    <div className="hoi-plan-grid">
                        {planCards.map((item, index) => (
                            <div className="hoi-plan-card" key={index}>
                                <div className="hoi-plan-media">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="hoi-plan-copy">
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="hoi-coverage-section" id="home-coverages">
                    <div className="hoi-section-header">
                        <span className="hoi-eyebrow">Protection Suite</span>
                        <h2>Coverages of Home Insurance</h2>
                    </div>
                    <div className="hoi-coverage-grid">
                        {data.map((item, index) => (
                            <div key={index} className="hoi-coverage-card">
                                <div className="hoi-coverage-topline">
                                    <img src={item.image} alt={item.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="hoi-coverage-copy">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <FaHouseDamage className="hoi-coverage-icon" />
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://wa.me/919380029170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-float hoi-whatsapp"
                        aria-label="Contact on WhatsApp"
                    >
                        <FaWhatsapp className="whatsapp-icon" />
                    </a>
                </section>
            </main>

            <Footer />
        </div>

    )
}

export default Homeinsurance
