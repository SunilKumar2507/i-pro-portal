import React from 'react';
import Lifeinsuranceimage from '../../assets/Lifeinsurance.jpg';
import lifeinsuranceimage1 from '../../assets/Lifeinsurance1.jpg';
import Lifeinsuranceimage2 from '../../assets/Lifeinsurance2.jpg'
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import Lifeinsurance11 from '../../assets/Lifeinsurance11.jpg';
import Lifeinsurance12 from '../../assets/Lifeinsurance12.jpg';
import Lifeinsurance13 from '../../assets/Lifeinsurance13.jpg';
import Lifeinsurance14 from '../../assets/Lifeinsurance14.jpg';
import Lifeinsurance15 from '../../assets/Lifeinsurance15.jpg';
import Lifeinsurance16 from '../../assets/Lifeinsurance16.jpg';
import { FaArrowRight, FaCheckCircle, FaHandHoldingHeart, FaShieldAlt, FaUmbrella, FaWhatsapp } from "react-icons/fa";
import './lifeinsurance.css';



function Lifeinsurance() {

    const data = [
        {
            title: "Death Benefit",
            description: "A lump-sum payout to your nominee in case of death during the policy term.",
            image: Lifeinsurance11
        },
        {
            title: "Maturity Benefit",
            description: "Returns on investment or savings if you survive the policy term (only in endowment plans).",
            image: Lifeinsurance12
        },
        {
            title: "Critical Illness Cover",
            description: "Additional coverage for life-threatening illnesses like cancer, heart attack, etc.",
            image: Lifeinsurance13
        },
        {
            title: "Accidental Death Benefit",
            description: "Enhanced payout in case of death due to an accident.",
            image: Lifeinsurance14
        },
        {
            title: "Tax Benefits",
            description: " Enjoy tax deductions on premiums paid under Section 80C of the Income Tax Act.",
            image: Lifeinsurance15
        },
        {
            title: "Waiver of Premium",
            description: " Future premiums are waived off in case of critical illness or permanent disability, while the policy benefits continue.",
            image: Lifeinsurance16
        },
    ];

    const policyHighlights = [
        "Family financial safety net",
        "Long-term protection planning",
        "Savings and benefit options",
    ];

    const planCards = [
        {
            title: "Term Life Insurance",
            label: "Red Heart",
            description: "Term Life Insurance offers high coverage at low premiums and ensures your family's financial security in case of an untimely demise.",
            image: lifeinsuranceimage1
        },
        {
            title: "Endowment & Whole Life Plans",
            label: "Golden Tree",
            description: "Endowment & Whole Life Plans combine life cover with savings or investment benefits, helping you build a financial corpus for the future.",
            image: Lifeinsuranceimage2
        },
    ];

    return (
        <div className="lii-container">
            <Header />

            <main className="lii-page">
                <section className="lii-hero">
                    <div className="lii-hero-copy">
                        <span className="lii-eyebrow">Life Insurance</span>
                        <h1 className="lii-title">Life cover built to protect your family's financial future</h1>
                        <p className="lii-description">
                            Life insurance is a long-term financial safety net that provides a lump-sum payment to your beneficiaries in the event of your death. It ensures your loved ones are financially secure even in your absence. It can also serve as a savings or investment tool for future needs.
                        </p>

                        <div className="lii-highlight-list" aria-label="Life insurance highlights">
                            {policyHighlights.map((item, index) => (
                                <span key={index} className="lii-highlight-chip">
                                    <FaCheckCircle />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="lii-actions">
                            <a href="/contact-us" className="quotes-btn-carinformation lii-btn lii-btn-primary">
                                <span>Contact Us</span>
                                <FaArrowRight />
                            </a>
                            <a href="#life-coverages" className="lii-btn lii-btn-secondary">
                                <span>View Coverages</span>
                            </a>
                        </div>
                    </div>

                    <div className="lii-hero-visual">
                        <div className="lii-visual-toolbar">
                            <span><FaShieldAlt /> Family cover</span>
                            <span>Secure future</span>
                        </div>
                        <img src={Lifeinsuranceimage} alt="Life insurance" className="lii-main-image" />
                        <div className="lii-visual-card">
                            <FaHandHoldingHeart />
                            <div>
                                <strong>Protection planning</strong>
                                <span>Designed for long-term confidence</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="lii-contact-cta" aria-label="Contact us for life insurance information">
                    <div>
                        <span className="lii-eyebrow">Need More Information?</span>
                        <h2>Our team can help you choose the right life cover.</h2>
                        <p>Contact us to discuss your requirements and get guidance from our insurance experts.</p>
                    </div>
                    <a href="/contact-us" className="lii-btn lii-btn-primary">Contact Us <FaArrowRight /></a>
                </section>

                <section className="lii-plan-section">
                    <div className="lii-section-header">
                        <span className="lii-eyebrow">Future Security</span>
                        <h2>Life Insurance - Secure Your Family's Future</h2>
                    </div>

                    <div className="lii-plan-grid">
                        {planCards.map((item, index) => (
                            <div className="lii-plan-card" key={index}>
                                <div className="lii-plan-media">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="lii-plan-copy">
                                    <span>{item.label}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="lii-coverage-section" id="life-coverages">
                    <div className="lii-section-header">
                        <span className="lii-eyebrow">Protection Suite</span>
                        <h2>Coverages of Life Insurance</h2>
                    </div>
                    <div className="lii-coverage-grid">
                        {data.map((item, index) => (
                            <div key={index} className="lii-coverage-card">
                                <div className="lii-coverage-topline">
                                    <img src={item.image} alt={item.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="lii-coverage-copy">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <FaUmbrella className="lii-coverage-icon" />
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://wa.me/919380029170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-float lii-whatsapp"
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

export default Lifeinsurance
