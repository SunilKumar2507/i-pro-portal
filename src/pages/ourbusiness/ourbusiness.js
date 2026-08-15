import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/footer/footer";
import ourservicescreenimg from "../../assets/City Businessman11.png";
import motorInsurance from "../../assets/Motor-Insurance 1.png";
import healthInsurance from "../../assets/healthinsurance.png";
import corporateInsurance from "../../assets/Business Building.png";
import commercialInsurance from "../../assets/commercialvehicle-insurance.png";
import {
    FaArrowRight,
    FaBriefcase,
    FaBuilding,
    FaCar,
    FaCheckCircle,
    FaFileContract,
    FaHeartbeat,
    FaHandshake,
    FaShieldAlt,
    FaTruck,
    FaWhatsapp
} from "react-icons/fa";
import './ourbusiness.css';

const OurBusiness = () => {
    const businessLines = [
        {
            title: "Motor Insurance",
            description: "Protection for private cars, two-wheelers, and motor-related risks through suitable insurance solutions.",
            image: motorInsurance,
            icon: <FaCar />
        },
        {
            title: "Health Insurance",
            description: "Health coverage support for individuals and families to manage medical expenses with confidence.",
            image: healthInsurance,
            icon: <FaHeartbeat />
        },
        {
            title: "Corporate Insurance",
            description: "Business protection for company assets, employees, liabilities, and operational risks.",
            image: corporateInsurance,
            icon: <FaBuilding />
        },
        {
            title: "Commercial Insurance",
            description: "Commercial vehicle and business-linked insurance support for organizations that keep operations moving.",
            image: commercialInsurance,
            icon: <FaTruck />
        },
    ];

    const policyHighlights = [
        "IRDAI licensed intermediary",
        "Four active insurance lines",
        "Policy placement and servicing",
    ];

    const quickStats = [
        { value: "4", label: "Current insurance offerings" },
        { value: "IRDAI", label: "Licensed intermediary" },
        { value: "2026", label: "License valid up to Dec 6" },
    ];

    const processSteps = [
        "Understand your insurance requirement and risk exposure.",
        "Intermediate with insurers and present the required information.",
        "Solicit suitable terms, compare coverage, and recommend an appropriate option.",
        "Place the policy with your acceptance and service it thereafter.",
    ];

    return (
        <div className="obi-container">
            <Header />

            <main className="obi-page">
                <section className="obi-hero">
                    <div className="obi-hero-copy">
                        <span className="obi-eyebrow">Our Business</span>
                        <h1 className="obi-title">Insurance intermediation focused on four active protection lines</h1>
                        <p className="obi-description">
                            i-Pro Infinity is an insurance intermediation business licensed by the Insurance Regulatory and Development Authority of India (IRDAI). As of now, we provide Motor, Health, Corporate, and Commercial insurance support.
                        </p>

                        <div className="obi-highlight-list" aria-label="Our business highlights">
                            {policyHighlights.map((item, index) => (
                                <span key={index} className="obi-highlight-chip">
                                    <FaCheckCircle />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="obi-actions">
                            <a href="#business-lines" className="obi-btn obi-btn-primary">
                                <span>View Offerings</span>
                                <FaArrowRight />
                            </a>
                            <a
                                href="/document/IRDAI License Copy.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="obi-btn obi-btn-secondary"
                            >
                                <span>View License</span>
                            </a>
                        </div>
                    </div>

                    <div className="obi-hero-visual">
                        <div className="obi-visual-toolbar">
                            <span><FaShieldAlt /> Licensed intermediary</span>
                            <span>Direct business</span>
                        </div>
                        <img src={ourservicescreenimg} alt="Insurance intermediation" className="obi-main-image" />
                        <div className="obi-visual-card">
                            <FaHandshake />
                            <div>
                                <strong>Broker-led support</strong>
                                <span>Placement, recommendation, and servicing</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="obi-stats" aria-label="Our business overview">
                    {quickStats.map((item, index) => (
                        <div className="obi-stat" key={index}>
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </section>

                <section className="obi-license-section">
                    <div className="obi-section-header">
                        <span className="obi-eyebrow">License</span>
                        <h2>Licensed to act as an insurance intermediary</h2>
                    </div>
                    <div className="obi-license-card">
                        <FaFileContract />
                        <p>
                            i-Pro Infinity is licensed by IRDAI to act as an insurance intermediary for direct business, under life and general insurance categories including health. The license is valid up to{" "}
                            <a href="/document/IRDAI License Copy.pdf" target="_blank" rel="noopener noreferrer">6th Dec 2026</a>
                            {" "}and is renewable thereafter.
                        </p>
                    </div>
                </section>

                <section className="obi-lines-section" id="business-lines">
                    <div className="obi-section-header">
                        <span className="obi-eyebrow">Current Offerings</span>
                        <h2>We currently provide Motor, Health, Corporate, and Commercial insurance</h2>
                    </div>

                    <div className="obi-lines-grid">
                        {businessLines.map((item, index) => (
                            <div className="obi-line-card" key={index}>
                                <div className="obi-line-topline">
                                    <img src={item.image} alt={item.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="obi-line-copy">
                                    <div className="obi-line-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="obi-process-section">
                    <div className="obi-section-header">
                        <span className="obi-eyebrow">Intermediation</span>
                        <h2>How our insurance broking service works</h2>
                    </div>

                    <div className="obi-process-grid">
                        {processSteps.map((item, index) => (
                            <div className="obi-process-card" key={index}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <FaCheckCircle />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="obi-support-section">
                    <div className="obi-support-copy">
                        <span className="obi-eyebrow">Client Support</span>
                        <h2>We help you choose, place, and service the right cover</h2>
                        <p>
                            Whenever you have an insurance requirement, we work with insurers on your behalf, analyze the available terms, recommend suitable coverage, and continue servicing your policies after placement.
                        </p>
                    </div>
                    <div className="obi-support-card">
                        <FaBriefcase />
                        <strong>Current business scope</strong>
                        <span>Motor, Health, Corporate, and Commercial insurance only.</span>
                    </div>

                    <a
                        href="https://wa.me/919380029170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-float obi-whatsapp"
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

export default OurBusiness;
