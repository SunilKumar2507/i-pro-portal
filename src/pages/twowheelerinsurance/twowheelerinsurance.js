import React from 'react';
import './twowheelerinsurance.css'; // Link to the CSS below
import Header from '../../components/Header/header';
import scooter from '../../assets/two-wheelerinsurance.png'; // Replace with your actual image paths
import owndamage from '../../assets/own-damage.png';
import thirdparty from '../../assets/third-part.png';
import personalaccident from '../../assets/personalaccident.png';
import passengercover from '../../assets/passengercover.png';
import { FaWhatsapp } from "react-icons/fa";
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
    return (
        <div className="twowheeler-container">
        <Header/>
            <div className="twowheeler-hero">
                <div className="twowheeler-image">
                    <img src={scooter} alt="Scooter" className='scooter-image'/>
                </div>
                <div className="scooty-information-firstpara"  style={{ textAlign: "left" }}>
                    <h2 className='private-scooty-insurance-heading'>What is Two Wheeler Insurance ?</h2> 
                    <p className='private-scooty-paragraph'>
                        Provides a cover that protects you from any own-damage (OD) premiums that are calculated yearly and keeps your bike policy valid with comprehensive coverage.
                    </p>
                    <p className="two-wheeler">
                        Two Wheeler Insurance provides financial protection against accidents, theft, or damage to your bike or scooter. It covers third-party liabilities and helps in fulfilling legal obligations.
                        With options like Liability, Collision, and Comprehensive coverage, riders can choose a plan that best suits their needs. Riding a two-wheeler becomes a smoother way to finish gaps on the move
                        thanks to these policies. Ensure you’re covered by safeguarding both Vehicle owners and third parties from potential financial burdens.
                    </p>
                    <div className="quote-container">
                                 <a
                            href="https://web.iproinfinity.com/two-wheeler-insurance/"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="quotes-btn-scooty"
                                 >
                                     Get Quote
                                 </a>
                             </div>
                </div>
            </div>

            <div className="twowheeler-coverage-section">
                <div className="coverage-grid">
                    <div className="coverage-card">
                        <h4>Liability Insurance</h4>
                        <p className="twowheeler-grid-text">
                            Just like with car insurance, liability insurance for scooters covers bodily injury and property damage you cause to others and keeps you street legal.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Collision Coverage</h4>
                        <p className="twowheeler-grid-text">
                            This coverage pays for repairs or replacement of your scooter if it's damaged in an accident with another vehicle or object.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Comprehensive Coverage</h4>
                        <p className="twowheeler-grid-text">
                            Comprehensive coverage protects your scooter against non-collision incidents such as theft, vandalism, fire, or natural disasters.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Liability Insurance</h4>
                        <p className="twowheeler-grid-text">
                            If you're involved in an accident with a driver who doesn’t hold insurance or enough coverage, this helps recover costs for injuries, medical expenses and damages to your scooter.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Medical Payments Coverage</h4>
                        <p className="twowheeler-grid-text">
                            Also known as personal injury protection (PIP), this covers costs associated with injuries for you and your passengers—regardless of who’s at fault.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Accessory Coverage</h4>
                        <p className="twowheeler-grid-text">
                            If you’ve added custom accessories or modifications to your scooter, accessory coverage helps repair or replace them if damaged or stolen.
                        </p>
                    </div>
                </div>
               
            </div>

            <div className="coverage-container">
                <h2 className="coverage-title">Coverages Of Two Wheeler Insurance</h2>
                <div className="coverage-grid-section2">
                    {data.map((item, index) => (
                        <div key={index} className="coverage-item-scooty">
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

           <Footer/>
        </div>
    );
};

export default TwoWheelerInsurance;
