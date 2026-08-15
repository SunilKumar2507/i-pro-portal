import React from 'react';
import './healthinsurance.css';
import Header from '../../components/Header/header';

import healthinsurance1 from '../../assets/health-image1.png';
import healthinsurance2 from '../../assets/health-image2.png';
import healthinsurance3 from '../../assets/health-image3.png';
import aged from '../../assets/aged-health.jpg';
import preexisting from '../../assets/pre-existing.jpg';
import money from '../../assets/money.jpg'
import plan from '../../assets/plan.jpg';
import location from '../../assets/location.jpg'
import healthisnurance4 from '../../assets/health-image4.png';
import family from '../../assets/family.jpg';
import senior from "../../assets/senior.jpg"
import policy from '../../assets/policy.jpg'
import healthinsurance from '../../assets/healthinsurance.png';
import { FaArrowRight, FaCheckCircle, FaHeartbeat, FaHospital, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import Footer from '../../components/footer/footer';


const HealthInsurance = () => {

    const data = [
        {
            title: "Age of the Insured",
            description: "Older individuals generally have higher premiums due to increased health risks.",
            image: aged
        },
        {
            title: "Pre-existing Medical Conditions",
            description: "If the policyholder has pre-existing conditions like diabetes, heart disease, etc., the premium is usually higher",
            image: preexisting
        },
        {
            title: "Coverage Amount (Sum Insured)",
            description: "Higher the sum insured, greater the premium, as the insurer bears a higher potential claim liability.",
            image: money
        },
        {
            title: "Type of Plan",
            description: "Individual, family floater, senior citizen, or critical illness plans vary in premium based on the extent and nature of coverage.",
            image: plan
        },
        {
            title: "Geographical Location",
            description: "Premiums may vary based on the city or region due to differences in healthcare costs.",
            image: location
        },
        {
            title: "Policy Tenure",
            description: "Longer policy durations may offer discounts, but premium rates can still vary based on terms.",
            image: policy
        }

    ];

    const policyHighlights = [
        "Emergency medical protection",
        "Family health security",
        "Hospital expense support",
    ];

    const benefitCards = [
        {
            title: "Financial Protection Against High Medical Costs",
            description: "Medical treatments can be extremely expensive, especially for serious illnesses or emergencies. Health insurance helps cover these costs, ensuring that you don't have to deplete your savings or go into debt to pay for necessary medical care.",
            image: healthinsurance1
        },
        {
            title: "Access to Quality Healthcare",
            description: "With a health insurance policy, you have access to a network of hospitals, clinics, and specialists. This ensures you receive timely and appropriate medical attention without worrying about the cost. Quality healthcare is crucial for maintaining and improving your health.",
            image: healthinsurance2
        },
        {
            title: "Peace of Mind",
            description: "Knowing that you have a health insurance policy gives you peace of mind. In case of a medical emergency, you can focus on recovery rather than worrying about how to afford the treatment. This mental relief is invaluable during stressful times.",
            image: healthinsurance3
        },
        {
            title: "Individuals",
            description: "Personalized Coverage Options. Financial Security and Peace of Mind Variety of Plans Portability.",
            image: healthisnurance4
        },
        {
            title: "Family",
            description: "Comprehensive Coverage for All Family Members Cost-Effective Simplified Management Unified Deductible Access to Comprehensive Benefits Peace of Mind Support for Chronic Conditions",
            image: family
        },
        {
            title: "Senior Citizens",
            description: "Comprehensive Health Coverage Preventive Care and Screenings Coverage for Pre-existing Conditions Access to Specialized Care Home Healthcare Services Critical Illness Coverage",
            image: senior
        },
    ];

    const quickStats = [
        { value: "6", label: "Premium rating factors" },
        { value: "24x7", label: "Digital quote access" },
        { value: "Family", label: "Individual and family ready" },
    ];

    return (
        <div className="hii-container">
            <Header />

            <main className="hii-page">
                <section className="hii-hero">
                    <div className="hii-hero-copy">
                        <span className="hii-eyebrow">Health Insurance</span>
                        <h1 className="hii-title">Health coverage designed for calm, confident care decisions</h1>

                        <p className="hii-description">
                            Health insurance serves as a crucial shield, protecting you and your family from the financial
                            burdens of unexpected medical emergencies. It's a common misconception that only the elderly or
                            those with pre-existing conditions need health coverage. In reality, health insurance is essential
                            for everyone, regardless of age or health status. A comprehensive health policy provides peace of mind
                            during hospital stays by covering medical expenses.
                        </p>

                        <div className="hii-highlight-list" aria-label="Health insurance highlights">
                            {policyHighlights.map((item, index) => (
                                <span key={index} className="hii-highlight-chip">
                                    <FaCheckCircle />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="hii-actions">
                            <a
                                href="https://web.iproinfinity.com/health-insurance/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="quotes-btn-health hii-btn hii-btn-primary"
                            >
                                <span>Get Quote</span>
                                <FaArrowRight />
                            </a>
                            <a href="#health-premium-factors" className="hii-btn hii-btn-secondary">
                                <span>View Premium Factors</span>
                            </a>
                        </div>
                    </div>

                    <div className="hii-hero-visual">
                        <div className="hii-visual-toolbar">
                            <span><FaShieldAlt /> Medical cover</span>
                            <span>Secure care</span>
                        </div>
                        <img src={healthinsurance} alt="Health insurance" className="hii-main-image" />
                        <div className="hii-visual-card">
                            <FaHospital />
                            <div>
                                <strong>Care-ready support</strong>
                                <span>Built for families and individuals</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="hii-stats" aria-label="Health insurance overview">
                    {quickStats.map((item, index) => (
                        <div className="hii-stat" key={index}>
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </section>

                <section className="hii-benefits-section">
                    <div className="hii-section-header">
                        <span className="hii-eyebrow">Health Protection</span>
                        <h2>Why health insurance matters</h2>
                    </div>

                    <div className="hii-benefit-grid">
                        {benefitCards.map((item, index) => (
                            <div className="hii-benefit-card" key={index}>
                                <div className="hii-benefit-topline">
                                    <img src={item.image} alt={item.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="hii-factor-section" id="health-premium-factors">
                    <div className="hii-section-header">
                        <span className="hii-eyebrow">Premium Intelligence</span>
                        <h2>Factors Determining the Premium of Health Insurance</h2>
                    </div>
                    <div className="hii-factor-grid">
                        {data.map((item, index) => (
                            <div key={index} className="hii-factor-card">
                                <div className="hii-factor-topline">
                                    <img src={item.image} alt={item.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="hii-factor-copy">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <FaHeartbeat className="hii-factor-icon" />
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://wa.me/919380029170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-float hii-whatsapp"
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

export default HealthInsurance;
