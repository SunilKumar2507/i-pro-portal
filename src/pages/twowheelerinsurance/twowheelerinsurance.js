import React from 'react';
import './twowheelerinsurance.css';
import Header from '../../components/Header/header';
import scooter from '../../assets/two-wheelerinsurance.png';
import owndamage from '../../assets/own-damage.png';
import thirdparty from '../../assets/third-part.png';
import personalaccident from '../../assets/personalaccident.png';
import passengercover from '../../assets/passengercover.png';
import { FaArrowRight, FaCheckCircle, FaMotorcycle, FaRoad, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import Footer from '../../components/footer/footer';

const TwoWheelerInsurance = () => {

    const data = [
        {
            title: "Own Damage (OD) Coverage",
            description: "Protection against damages to your Vehicle due to accidents, fire, theft, vandalism, or natural calamities",
            image: owndamage
        },
        {
            title: "Third-Party Liability Coverage",
            description: "Covers legal liabilities for bodily injuries or property damage caused to third parties in an accident involving your vehicle",
            image: thirdparty
        },
        {
            title: "Personal Accident (PA) Cover",
            description: "Compensation for injuries or death to the owner/driver of the insured two wheeler.",
            image: personalaccident
        },
        {
            title: "Passenger Cover",
            description: "Coverage for passengers traveling in the insured Vehicle against bodily injuries or death.",
            image: passengercover
        }
    ];

    const policyHighlights = [
        "Own damage protection",
        "Third-party liability support",
        "Personal accident cover",
    ];

    const coverageTypes = [
        {
            title: "Liability Insurance",
            description: "Just like with car insurance, liability insurance for scooters covers bodily injury and property damage you cause to others and keeps you street legal.",
        },
        {
            title: "Collision Coverage",
            description: "This coverage pays for repairs or replacement of your scooter if it's damaged in an accident with another vehicle or object.",
        },
        {
            title: "Comprehensive Coverage",
            description: "Comprehensive coverage protects your scooter against non-collision incidents such as theft, vandalism, fire, or natural disasters.",
        },
        {
            title: "Liability Insurance",
            description: "If you're involved in an accident with a driver who doesn't hold insurance or enough coverage, this helps recover costs for injuries, medical expenses and damages to your scooter.",
        },
        {
            title: "Medical Payments Coverage",
            description: "Also known as personal injury protection (PIP), this covers costs associated with injuries for you and your passengers, regardless of who's at fault.",
        },
        {
            title: "Accessory Coverage",
            description: "If you've added custom accessories or modifications to your scooter, accessory coverage helps repair or replace them if damaged or stolen.",
        },
    ];

    const quickStats = [
        { value: "4", label: "Core policy covers" },
        { value: "24x7", label: "Digital quote access" },
        { value: "2W", label: "Bike and scooter ready" },
    ];

    return (
        <div className="twi-container">
            <Header />

            <main className="twi-page">
                <section className="twi-hero">
                    <div className="twi-hero-copy">
                        <span className="twi-eyebrow">Two Wheeler Insurance</span>
                        <h1 className="twi-title">Bike and scooter insurance for confident everyday rides</h1>
                        <p className="twi-lead">
                            Provides a cover that protects you from any own-damage (OD) premiums that are calculated yearly and keeps your bike policy valid with comprehensive coverage.
                        </p>
                        <p className="twi-description">
                            Two Wheeler Insurance provides financial protection against accidents, theft, or damage to your bike or scooter. It covers third-party liabilities and helps in fulfilling legal obligations.
                            With options like Liability, Collision, and Comprehensive coverage, riders can choose a plan that best suits their needs. Riding a two-wheeler becomes a smoother way to finish gaps on the move
                            thanks to these policies. Ensure you're covered by safeguarding both Vehicle owners and third parties from potential financial burdens.
                        </p>

                        <div className="twi-highlight-list" aria-label="Two wheeler insurance highlights">
                            {policyHighlights.map((item, index) => (
                                <span key={index} className="twi-highlight-chip">
                                    <FaCheckCircle />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="twi-actions">
                            <a
                                href="https://web.iproinfinity.com/two-wheeler-insurance/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="quotes-btn-scooty twi-btn twi-btn-primary"
                            >
                                <span>Get Quote</span>
                                <FaArrowRight />
                            </a>
                            <a href="#two-wheeler-coverages" className="twi-btn twi-btn-secondary">
                                <span>View Coverages</span>
                            </a>
                        </div>
                    </div>

                    <div className="twi-hero-visual">
                        <div className="twi-visual-toolbar">
                            <span><FaShieldAlt /> Comprehensive</span>
                            <span>Secure ride</span>
                        </div>
                        <img src={scooter} alt="Scooter" className="twi-scooter-image" />
                        <div className="twi-visual-card">
                            <FaRoad />
                            <div>
                                <strong>Ride-ready cover</strong>
                                <span>Built for bike and scooter owners</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="twi-stats" aria-label="Two wheeler policy overview">
                    {quickStats.map((item, index) => (
                        <div className="twi-stat" key={index}>
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </section>

                <section className="twi-info-section">
                    <div className="twi-section-header">
                        <span className="twi-eyebrow">Policy Options</span>
                        <h2>Coverage types for two-wheeler owners</h2>
                    </div>

                    <div className="twi-info-grid">
                        {coverageTypes.map((item, index) => (
                            <div className="twi-info-card" key={index}>
                                <span className="twi-card-index">{String(index + 1).padStart(2, "0")}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="twi-coverage-section" id="two-wheeler-coverages">
                    <div className="twi-section-header">
                        <span className="twi-eyebrow">Protection Suite</span>
                        <h2>Coverages Of Two Wheeler Insurance</h2>
                    </div>

                    <div className="twi-coverage-grid">
                        {data.map((item, index) => (
                            <div key={index} className="twi-coverage-card">
                                <div className="twi-coverage-topline">
                                    <img src={item.image} alt={item.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="twi-coverage-copy">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <FaMotorcycle className="twi-coverage-icon" />
                            </div>
                        ))}
                    </div>
                </section>

                <a
                    href="https://wa.me/919380029170"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-float twi-whatsapp"
                    aria-label="Contact on WhatsApp"
                >
                    <FaWhatsapp className="whatsapp-icon" />
                </a>
            </main>

            <Footer />
        </div>
    );
};

export default TwoWheelerInsurance;
