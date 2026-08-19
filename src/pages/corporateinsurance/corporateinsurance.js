import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/footer/footer";
import Corporateimage from '../../assets/corporateimage.jpg';
import corporateimage1 from '../../assets/corporateimage1.jpg';
import corporateimage2 from '../../assets/corporateimage2.jpg';
import corporateimage11 from '../../assets/corporateimage11.jpg';
import corporateimage12 from '../../assets/corporateimage12.jpg';
import corporateimage13 from '../../assets/corporateimage13.jpg';
import corporateimage14 from '../../assets/corporateimage14.jpg';
import corporateimage15 from '../../assets/corporateimage15.jpg';
import corporateimage16 from '../../assets/corporateimage16.jpg';
import { FaArrowRight, FaBriefcase, FaBuilding, FaCheckCircle, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import './corporateinsurance.css';

const Corporateinsurancecontant = () => {
    const data = [
        {
            title: "Group Health Coverage",
            description: "Health benefits for all employees including hospitalization and critical illness cover.",
            image: corporateimage11
        },
        {
            title: "Public Liability Insurance",
            description: "Covers legal costs and compensation if your business is held responsible for third-party injuries or property damage.",
            image: corporateimage12
        },
        {
            title: "Fire & Property Damage",
            description: "Protects office buildings, warehouses, and equipment from fire, theft, or natural calamities.",
            image: corporateimage13
        },
        {
            title: "Business Interruption",
            description: "Compensates for income loss due to temporary shutdowns caused by insured events.",
            image: corporateimage14
        },
        {
            title: "Cyber Insurance",
            description: "Protection against data breaches, cyberattacks, and IT infrastructure damage.",
            image: corporateimage15
        },
        {
            title: "Employee Accident Insurance",
            description: "Provides compensation and medical coverage in case an employee suffers an accident during work-related activities.",
            image: corporateimage16
        },
    ];

    const policyHighlights = [
        "Employee benefit protection",
        "Business asset security",
        "Liability and risk support",
    ];

    const planCards = [
        {
            title: "Group Health Insurance",
            description: "Provides medical coverage to employees under a single plan. It improves employee satisfaction and supports wellness in the workplace.",
            image: corporateimage1
        },
        {
            title: "Liability & Property Insurance",
            description: "Covers business assets, machinery, and protects the company against legal liabilities, lawsuits, and operational losses.",
            image: corporateimage2
        },
    ];

    return (
        <div className="coi-container">
            <Header />

            <main className="coi-page">
                <section className="coi-hero">
                    <div className="coi-hero-copy">
                        <span className="coi-eyebrow">Corporate Insurance</span>
                        <h1 className="coi-title">Business protection built around people, assets, and operations</h1>
                        <p className="coi-description">
                            Corporate insurance protects businesses and their employees from potential risks and losses. It includes coverage for property damage, legal liabilities, employee health, cyber risk, and business continuity so companies can focus on growth with better financial certainty.
                        </p>

                        <div className="coi-highlight-list" aria-label="Corporate insurance highlights">
                            {policyHighlights.map((item, index) => (
                                <span key={index} className="coi-highlight-chip">
                                    <FaCheckCircle />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="coi-actions">
                            <a href="/contact-us" className="coi-btn coi-btn-primary">
                                <span>Contact Us</span>
                                <FaArrowRight />
                            </a>
                            <a href="#corporate-coverages" className="coi-btn coi-btn-secondary">
                                <span>View Coverages</span>
                            </a>
                        </div>
                    </div>

                    <div className="coi-hero-visual">
                        <div className="coi-visual-toolbar">
                            <span><FaShieldAlt /> Business cover</span>
                            <span>Operational security</span>
                        </div>
                        <img src={Corporateimage} alt="Corporate insurance" className="coi-main-image" />
                        <div className="coi-visual-card">
                            <FaBuilding />
                            <div>
                                <strong>Business-ready cover</strong>
                                <span>Protection for teams and assets</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="coi-contact-cta" aria-label="Contact us for corporate insurance information">
                    <div>
                        <span className="coi-eyebrow">Need More Information?</span>
                        <h2>Our team can help build the right business cover.</h2>
                        <p>Contact us to discuss protection for your people, assets, and operations.</p>
                    </div>
                    <a href="/contact-us" className="coi-btn coi-btn-primary">Contact Us <FaArrowRight /></a>
                </section>

                <section className="coi-plan-section">
                    <div className="coi-section-header">
                        <span className="coi-eyebrow">Business Protection</span>
                        <h2>Corporate Insurance - Protection for Companies and Employees</h2>
                    </div>

                    <div className="coi-plan-grid">
                        {planCards.map((item, index) => (
                            <div className="coi-plan-card" key={index}>
                                <div className="coi-plan-media">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="coi-plan-copy">
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="coi-coverage-section" id="corporate-coverages">
                    <div className="coi-section-header">
                        <span className="coi-eyebrow">Protection Suite</span>
                        <h2>Coverages of Corporate Insurance</h2>
                    </div>
                    <div className="coi-coverage-grid">
                        {data.map((item, index) => (
                            <div key={index} className="coi-coverage-card">
                                <div className="coi-coverage-topline">
                                    <img src={item.image} alt={item.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="coi-coverage-copy">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <FaBriefcase className="coi-coverage-icon" />
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://wa.me/919380029170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-float coi-whatsapp"
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

export default Corporateinsurancecontant;
