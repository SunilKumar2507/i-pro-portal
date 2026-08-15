import React from 'react';
import './commercialvehicle.css';
import Header from '../../components/Header/header';
import commercialvehicle from '../../assets/commercialvehicle-insurance.png';
import owndamages from '../../assets/own-amange-commercial.png';
import thirdparties from '../../assets/third-party-commercial.png';
import Comprehensive from '../../assets/compres-coverage-commercial.png';
import makeandmodel from '../../assets/vehiclemakemodel.png';
import vehicleage from '../../assets/vehicleage.png';
import { FaArrowRight, FaCheckCircle, FaShieldAlt, FaTruck, FaWarehouse, FaWhatsapp } from "react-icons/fa";
import insured from '../../assets/insured-comercial.png'
import RTO from '../../assets/RTO.png';
import vehicleweight from '../../assets/weight-commercialvehicle.png'
import Roadsideaccident from '../../assets/roadsideaccident.png';
import ZeroDepreciation from '../../assets/Zero Depreciation.png';
import fueltype from '../../assets/Fueltype.png'
import commercialbus from '../../assets/commercial-bus.png';
import Footer from '../../components/footer/footer';


const CommercialVehicleInsurance = () => {


    const data = [
        {
            title: "Vehicles Make and Model",
            description: "Protection against damages to your Vehicle due to accidents, fire, theft, vandalism, or natural calamities",
            image: makeandmodel
        },
        {
            title: "Vehicle Age",
            description: "Covers legal liabilities for bodily injuries or property damage caused to third parties in an accident involving your vehicle",
            image: vehicleage
        },
        {
            title: "Insured Declared Value (IDV)",
            description: "The IDV represents the commerical vehicle current market value and is a major factor in premium calculation. Higher IDV results in a higher premium.",
            image: insured
        },
        {
            title: "RTO Number / State",
            description: "The location where the commercial Vehicles is registered (RTO number or state) affects the premium. Metropolitan cities or certain states may have higher premiums due to increased risks.",
            image: RTO
        },
         {
             title: "Gross Weight Of the Vehicle",
             description: "The Gross Vehicle Weight Rating (GVWR) is the maximum safe weight of your vehicle, including its curb weight, passengers, fuel, accessories, cargo, and trailer tongue weight.",
             image: vehicleweight 
        },
        {
            title: "Fuel Type (CNG / Petrol / Electric)",
            description: "The type of fuel used in the new affects the premium. The diesel-powered vehicles potentially having different premium rates compared CNG vehicles",
            image: fueltype
        }

    ];

    const policyHighlights = [
        "Goods carrying vehicle protection",
        "Third-party liability support",
        "Fleet-ready risk coverage",
    ];

    const coverageCards = [
        {
            title: "Own Damage Coverage",
            description: "Protection against damages to your car due to accidents, fire, theft, vandalism, or natural calamities.",
            image: owndamages
        },
        {
            title: "Third-Party Liability Coverage",
            description: "Covers legal liabilities for bodily injuries or property damage caused to third parties in an accident involving your car.",
            image: thirdparties
        },
        {
            title: "Comprehensive Coverage",
            description: "Compensation for injuries or death to the owner/driver of the insured car",
            image: Comprehensive
        },
        {
            title: "Roadside Assistance",
            description: "Assistance for breakdowns, towing, flat tire, battery jumpstart, and other emergency services.",
            image: Roadsideaccident
        },
        {
            title: "Zero Depreciation Cover",
            description: "Full reimbursement of repair/replacement costs without considering depreciation.",
            image: ZeroDepreciation
        },
    ];

    const quickStats = [
        { value: "6", label: "Premium rating factors" },
        { value: "5", label: "Primary cover options" },
        { value: "CV", label: "Commercial vehicle ready" },
    ];

    return (
        <div className="cvi-container">
            <Header />

            <main className="cvi-page">
                <section className="cvi-hero">
                    <div className="cvi-hero-copy">
                        <span className="cvi-eyebrow">Commercial Vehicle Insurance</span>
                        <h1 className="cvi-title">Protection for business vehicles that keep operations moving</h1>
                        <p className="cvi-description">
                            Goods Carrying Vehicle Insurance is a specialized insurance policy designed to provide coverage
                            for vehicles that are used for transporting goods commercially. This type of insurance is particularly
                            important for businesses that rely on vehicles such as trucks, vans, and lorries to transport goods from
                            one place to another. Goods Carrying Vehicle Insurance offers financial protection against various risks,
                            including accidents, theft, damages to the vehicle, and liabilities towards third parties.
                            It ensures that the vehicles used for carrying goods are adequately covered, protecting the business from
                            potential financial losses in case of unexpected events. This insurance policy is crucial for businesses in the
                            logistics and transportation industry to ensure the smooth and secure operation of their operation
                        </p>

                        <div className="cvi-highlight-list" aria-label="Commercial vehicle insurance highlights">
                            {policyHighlights.map((item, index) => (
                                <span key={index} className="cvi-highlight-chip">
                                    <FaCheckCircle />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="cvi-actions">
                            <a
                                href="https://web.iproinfinity.com/commercial-vehicle-insurance/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="quotes-btn-commercial cvi-btn cvi-btn-primary"
                            >
                                <span>Get Quote</span>
                                <FaArrowRight />
                            </a>
                            <a href="#commercial-premium-factors" className="cvi-btn cvi-btn-secondary">
                                <span>View Premium Factors</span>
                            </a>
                        </div>
                    </div>

                    <div className="cvi-hero-visual">
                        <div className="cvi-visual-toolbar">
                            <span><FaShieldAlt /> Business cover</span>
                            <span>Secure transit</span>
                        </div>
                        <img src={commercialvehicle} alt="Commercial vehicle" className="cvi-main-image" />
                        <div className="cvi-visual-card">
                            <FaWarehouse />
                            <div>
                                <strong>Logistics-ready</strong>
                                <span>Protection for transport operations</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cvi-stats" aria-label="Commercial vehicle policy overview">
                    {quickStats.map((item, index) => (
                        <div className="cvi-stat" key={index}>
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </section>

                <section className="cvi-coverage-section">
                    <div className="cvi-section-header">
                        <span className="cvi-eyebrow">Coverage Options</span>
                        <h2>Coverages for commercial vehicle risks</h2>
                    </div>

                    <div className="cvi-coverage-grid">
                        {coverageCards.map((item, index) => (
                            <div className="cvi-coverage-card" key={index}>
                                <div className="cvi-coverage-topline">
                                    <img src={item.image} alt={item.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                        <div className="cvi-coverage-card cvi-coverage-visual">
                            <img src={commercialbus} alt="Commercial bus" className="cvi-bus-image" />
                        </div>
                    </div>
                </section>

                <section className="cvi-factor-section" id="commercial-premium-factors">
                    <div className="cvi-section-header">
                        <span className="cvi-eyebrow">Premium Intelligence</span>
                        <h2>Factors Determining the Premium of Commercial Vehicle Insurance</h2>
                    </div>
                    <div className="cvi-factor-grid">
                        {data.map((item, index) => (
                            <div key={index} className="cvi-factor-card">
                                <div className="cvi-factor-topline">
                                    <img src={item.image} alt={item.title} />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="cvi-factor-copy">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <FaTruck className="cvi-factor-icon" />
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://wa.me/919380029170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-float cvi-whatsapp"
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

export default CommercialVehicleInsurance;
