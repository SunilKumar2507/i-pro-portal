import React from 'react';
import './whyinsuranceintermediary.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/header';
import whatmakeusdiffernt from '../../assets/blue blup.png';
import {
    FaArrowRight,
    FaBalanceScale,
    FaCheckCircle,
    FaClipboardCheck,
    FaFileSignature,
    FaHandshake,
    FaSearchDollar,
    FaShieldAlt,
    FaWhatsapp
} from "react-icons/fa";

const Whyinsuranceintermediary = () => {
    const policyHighlights = [
        "Expert cover assessment",
        "Insurer term comparison",
        "Policy and claims support",
    ];

    const quickStats = [
        { value: "360", label: "Risk and coverage view" },
        { value: "1", label: "Advisor between you and insurers" },
        { value: "4", label: "Current insurance lines supported" },
    ];

    const reasonCards = [
        {
            title: "Insurance Is Complex",
            description: "Policy terms, exclusions, deductibles, and coverage limits can change over time. An intermediary helps you understand what the policy actually protects.",
            icon: <FaFileSignature />
        },
        {
            title: "Coverage Needs Change",
            description: "The cover bought last year may no longer match your current personal, vehicle, health, commercial, or business risk exposure.",
            icon: <FaClipboardCheck />
        },
        {
            title: "Premiums Need Context",
            description: "A low premium is not always the right answer. We help compare price against coverage quality, scope, and claim usefulness.",
            icon: <FaSearchDollar />
        },
        {
            title: "Advice Reduces Risk",
            description: "A qualified intermediary can assess, source, recommend, and service suitable cover before a claim exposes a gap.",
            icon: <FaBalanceScale />
        },
    ];

    const processSteps = [
        "Understand your requirement and risk exposure.",
        "Approach suitable insurers and solicit terms.",
        "Analyze coverage, premiums, exclusions, and conditions.",
        "Recommend suitable cover and support policy servicing.",
    ];

    return (
        <div className="wii-container">
            <Header />

            <main className="wii-page">
                <section className="wii-hero">
                    <div className="wii-hero-copy">
                        <span className="wii-eyebrow">Insurance Intermediary</span>
                        <h1 className="wii-title">Why you need an insurance broker before choosing a policy</h1>
                        <p className="wii-description">
                            The world of insurance is complex and ever-changing. A well experienced and suitably qualified intermediary can help assess, source, compare, and service the types and levels of cover you need, saving you effort while reducing the chance of costly coverage gaps.
                        </p>

                        <div className="wii-highlight-list" aria-label="Insurance intermediary highlights">
                            {policyHighlights.map((item, index) => (
                                <span key={index} className="wii-highlight-chip">
                                    <FaCheckCircle />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="wii-actions">
                            <a href="#broker-reasons" className="wii-btn wii-btn-primary">
                                <span>View Reasons</span>
                                <FaArrowRight />
                            </a>
                            <a href="#broker-process" className="wii-btn wii-btn-secondary">
                                <span>How It Works</span>
                            </a>
                        </div>
                    </div>

                    <div className="wii-hero-visual">
                        <div className="wii-visual-toolbar">
                            <span><FaShieldAlt /> Broker guidance</span>
                            <span>Better cover decisions</span>
                        </div>
                        <img src={whatmakeusdiffernt} alt="Insurance broker guidance" className="wii-main-image" />
                        <div className="wii-visual-card">
                            <FaHandshake />
                            <div>
                                <strong>Advisor-led support</strong>
                                <span>Assess, compare, recommend, service</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="wii-stats" aria-label="Insurance intermediary overview">
                    {quickStats.map((item, index) => (
                        <div className="wii-stat" key={index}>
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </section>

                <section className="wii-reason-section" id="broker-reasons">
                    <div className="wii-section-header">
                        <span className="wii-eyebrow">Why It Matters</span>
                        <h2>Broker support helps you make clearer insurance decisions</h2>
                    </div>

                    <div className="wii-reason-grid">
                        {reasonCards.map((item, index) => (
                            <div className="wii-reason-card" key={index}>
                                <div className="wii-reason-topline">
                                    <span>{item.icon}</span>
                                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="wii-process-section" id="broker-process">
                    <div className="wii-section-header">
                        <span className="wii-eyebrow">How We Help</span>
                        <h2>From requirement review to policy servicing</h2>
                    </div>

                    <div className="wii-process-grid">
                        {processSteps.map((item, index) => (
                            <div className="wii-process-card" key={index}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <FaCheckCircle />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="wii-support-section">
                    <div className="wii-support-copy">
                        <span className="wii-eyebrow">Claim Readiness</span>
                        <h2>The right cover matters most when you need to make a claim</h2>
                        <p>
                            The consequences of not having the right insurance in place can be serious, and sometimes this only becomes clear at claim time. Broker-led advice helps identify gaps earlier, while there is still time to correct them.
                        </p>
                    </div>
                    <div className="wii-support-card">
                        <FaShieldAlt />
                        <strong>Current support scope</strong>
                        <span>Motor, Health, Corporate, and Commercial insurance guidance.</span>
                    </div>

                    <a
                        href="https://wa.me/919380029170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-float wii-whatsapp"
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

export default Whyinsuranceintermediary;
