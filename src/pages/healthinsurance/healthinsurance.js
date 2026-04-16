import React from 'react';
import './healthinsurance.css'; // Link to the CSS below
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
import commercialbus from '../../assets/commercial-bus.png';
import healthinsurance from '../../assets/healthinsurance.png';
import { FaWhatsapp } from "react-icons/fa";
import Footer from '../../components/footer/footer';


const TwoWheelerInsurance = () => {

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
    return (
        <div className="twowheeler-container">
            <Header />
            <div className="twowheeler-hero">
                <div className="healthinsurance-image">
                    <img src={healthinsurance} alt="health" />
                </div>
                <div className="twowheeler-description">
                    <h2 className='health-insurance-heading'>Health Insurance ?</h2>

                    <p className='health-insurance-paragraph'>
                        Health insurance serves as a crucial shield, protecting you and your family from the financial
                         burdens of unexpected medical emergencies. It's a common misconception that only the elderly or 
                         those with pre-existing conditions need health coverage. In reality, health insurance is essential
                          for everyone, regardless of age or health status. A comprehensive health policy provides peace of mind 
                          during hospital stays by covering medical expenses.
                    </p>
                    <div className="quote-container">
                        <a
                            href="https://web.iproinfinity.com/health-insurance/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="quotes-btn-health"
                        >
                            Get Quote
                        </a>
                    </div>
                </div>
            </div>

            <div className="twowheeler-coverage-section">
                <div className="coverage-grid">
                    <div className="coverage-card">
                        <h4>Financial Protection  Against High Medical Costs</h4>
                        <img src={healthinsurance1} alt="" className='own-damage-coverage' />
                        <p className="h-second-section-paragraph">
                            Medical treatments can be extremely expensive, especially for serious illnesses or emergencies. 
                            Health insurance helps cover these costs, ensuring that you don’t have to deplete your savings or
                             go into debt to pay for necessary medical care.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Access to Quality Healthcare</h4>
                        <img src={healthinsurance2} alt="" className='own-damage-coverage' />
                        <p className="h-second-section-paragraph">
                            With a health insurance policy, you have access to a network of hospitals, clinics, and specialists.
                             This ensures you receive timely and appropriate medical attention without worrying about the cost. 
                             Quality healthcare is crucial for maintaining and improving your health.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Peace of Mind</h4>
                        <img src={healthinsurance3} alt="" className='own-damage-coverage' />
                        <p className ="h-second-section-paragraph">
                            Knowing that you have a health insurance policy gives you peace of mind. In case of a medical emergency, 
                            you can focus on recovery rather than worrying about how to afford the treatment. This mental relief is invaluable
                            during stressful times.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Individuals</h4>
                        <img src={healthisnurance4} alt="" className='own-damage-coverage' />
                        <p className="h-second-section-paragraph">
                            Personalized Coverage Options.Financial Security and Peace of Mind Variety of Plans Portability.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Family</h4>
                        <img src={family} alt="" className='own-damage-coverage' />
                        <p className="h-second-section-paragraph">
                            Comprehensive Coverage for All Family Members Cost-Effective Simplified Management Unified Deductible Access to Comprehensive Benefits Peace of Mind Support for Chronic Conditions
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Senior Citizens</h4>
                        <img src={senior} alt="" className='own-damage-coverage' />
                        <p className="h-second-section-paragraph">
                            Comprehensive Health Coverage Preventive Care and Screenings Coverage for Pre-existing Conditions Access to Specialized Care Home Healthcare Services Critical Illness Coverage
                        </p>
                    </div>
                </div>

            </div>

            <div className="coverage-container">
                <h2 className="coverage-title">Factors Determining the Premium of Coverages of Health Insurance</h2>
                <div className="coverage-grid-section2">
                    {data.map((item, index) => (
                        <div key={index} className="coverage-item-health">
                            <img src={item.image} alt={item.title} />
                            <div className="coverage-text">
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
                                  className="whatsapp-float"
                                >
                                  <FaWhatsapp className="whatsapp-icon" />
                                </a>
            </div>

            <Footer />
        </div>
    );
};

export default TwoWheelerInsurance;
