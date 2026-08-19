import React from 'react';
import flight from '../../assets/Flight1.jpg';
import flight11 from '../../assets/flight11.jpg';
import flight12 from '../../assets/flight12.jpg';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import flight111 from '../../assets/flight111.jpg';
import flight112 from '../../assets/flight112.jpg';
import Roadassist from '../../assets/road-assistance.jpg';
import engineprotection from '../../assets/engine-protection.jpg';
import carconsumable from '../../assets/carconsumable.jpg';
import depreciation from '../../assets/depreciation.png';
import { FaArrowRight, FaCheckCircle, FaPlaneDeparture, FaShieldAlt, FaSuitcaseRolling, FaWhatsapp } from "react-icons/fa";
import './travel.css';

function TravelInsurance() {
    const data = [
        {
            title: "Medical Emergency Cover",
            description: "Coverage for emergency medical treatment, hospitalization, and medical evacuation while traveling.",
            image: flight111
        },
        {
            title: "Trip Cancellation",
            description: "Reimbursement for pre-paid trip expenses if you need to cancel due to covered reasons like illness or emergencies.",
            image: flight112
        },
        {
            title: "Baggage Loss/Delay",
            description: "Compensation for delayed, lost, or stolen luggage during your travel.",
            image: Roadassist
        },
        {
            title: "Passport Loss",
            description: "Covers the cost of obtaining a duplicate passport in case of loss or theft.",
            image: engineprotection
        },
        {
            title: "Flight Delay/Cancellation",
            description: "Compensation for additional expenses due to delayed or cancelled flights.",
            image: carconsumable
        },
        {
            title: "Personal Liability",
            description: "Protection against legal liabilities due to accidental damages or injuries caused to others.",
            image: depreciation
        },
    ];

    const policyHighlights = [
        "Medical emergency support",
        "Trip and baggage protection",
        "Domestic and international cover",
    ];

    const planCards = [
        {
            title: "Single Trip Insurance",
            description: "Provides coverage for a one-time journey, ideal for vacations or business trips. It includes medical expenses, baggage loss, trip cancellation, and personal liability.",
            image: flight11
        },
        {
            title: "Annual Multi-Trip Insurance",
            description: "Suitable for frequent travelers. It offers continuous coverage throughout the year for multiple trips, ensuring you are protected every time you travel.",
            image: flight12
        },
    ];

    return (
        <div className="tri-container">
            <Header />

            <main className="tri-page">
                <section className="tri-hero">
                    <div className="tri-hero-copy">
                        <span className="tri-eyebrow">Travel Insurance</span>
                        <h1 className="tri-title">Journey protection for every trip you take</h1>
                        <p className="tri-description">
                            Travel insurance provides financial protection during domestic or international travel. It covers unexpected events such as trip cancellations, medical emergencies, lost luggage, flight delays, and more so you can travel with confidence.
                        </p>

                        <div className="tri-highlight-list" aria-label="Travel insurance highlights">
                            {policyHighlights.map((item, index) => (
                                <span key={index} className="tri-highlight-chip">
                                    <FaCheckCircle />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="tri-actions">
                            <a href="/contact-us" className="tri-btn tri-btn-primary">
                                <span>Contact Us</span>
                                <FaArrowRight />
                            </a>
                            <a href="#travel-coverages" className="tri-btn tri-btn-secondary">
                                <span>View Coverages</span>
                            </a>
                        </div>
                    </div>

                    <div className="tri-hero-visual">
                        <div className="tri-visual-toolbar">
                            <span><FaShieldAlt /> Travel cover</span>
                            <span>Secure journey</span>
                        </div>
                        <img src={flight} alt="Travel insurance" className="tri-main-image" />
                        <div className="tri-visual-card">
                            <FaPlaneDeparture />
                            <div>
                                <strong>Trip-ready cover</strong>
                                <span>Protection for travel disruptions</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tri-contact-cta" aria-label="Contact us for travel insurance information">
                    <div>
                        <span className="tri-eyebrow">Need More Information?</span>
                        <h2>Our team can help you travel with confidence.</h2>
                        <p>Contact us to discuss travel insurance cover for your next journey.</p>
                    </div>
                    <a href="/contact-us" className="tri-btn tri-btn-primary">Contact Us <FaArrowRight /></a>
                </section>

                <section className="tri-plan-section">
                    <div className="tri-section-header">
                        <span className="tri-eyebrow">Trip Protection</span>
                        <h2>Travel Insurance - Protection for Planned and Frequent Trips</h2>
                    </div>

                    <div className="tri-plan-grid">
                        {planCards.map((item, index) => (
                            <div className="tri-plan-card" key={index}>
                                <div className="tri-plan-media">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="tri-plan-copy">
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="tri-coverage-section" id="travel-coverages">
                    <div className="tri-section-header">
                        <span className="tri-eyebrow">Protection Suite</span>
                        <h2>Coverages of Travel Insurance</h2>
                    </div>
                    <div className="tri-coverage-grid">
                        {data.map((item, index) => (
                            <div key={index} className="tri-coverage-card">
                                <div className="tri-coverage-topline">
                                    <img src={item.image} alt={item.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="tri-coverage-copy">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <FaSuitcaseRolling className="tri-coverage-icon" />
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://wa.me/919380029170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-float tri-whatsapp"
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

export default TravelInsurance
