import React from 'react';
import Homeinsuranceimage from '../../assets/Homeinsurance.jpg';
import Homeinsurance1 from '../../assets/Homeinsurance1.jpg';
import Homeinsurance2 from '../../assets/Homeinsurance2.jpg'
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import Homeinsurance11 from '../../assets/Homeinsurance11.jpg';
import Homeinsurance12 from '../../assets/Homeinsurance12.jpg';
import Homeinsurance13 from '../../assets/Homeinsurance13.jpg';
import Homeinsurance14 from '../../assets/Homeinsurance14.jpg';
import Homeinsurance15 from '../../assets/Homeinsurance15.jpg';
import Homeinsurance16 from '../../assets/Homeinsurance16.jpg'
import { FaWhatsapp } from "react-icons/fa";
import './homeinsurance.css';



function Homeinsurance() {

    const data = [
        {
            title: "Building Insurance",
            description: "Covers repair or rebuilding costs for your home due to fire, storms, earthquakes, or vandalism.",
            image: Homeinsurance11
        },
        {
            title: "Contents Insurance",
            description: "Protects your personal belongings inside the home including furniture, electronics, and valuables against theft or damage.",
            image: Homeinsurance12
        },
        {
            title: "Natural Disaster Coverage",
            description: " Provides financial protection against damages caused by floods, earthquakes, hurricanes, or other natural calamities.",
            image: Homeinsurance13
        },
        {
            title: "Loss of Use / Additional Living Expenses",
            description: " Covers temporary living costs if your home becomes uninhabitable due to an insured event.",
            image: Homeinsurance14
        },
        {
            title: "Personal Liability Coverage",
            description: " Offers protection if you are held responsible for injury or property damage to others occurring on your property.",
            image: Homeinsurance15
        },
        {
            title: "Accidental Damage",
            description: "  Covers sudden and accidental damage to your home or belongings not caused by typical risks.",
            image: Homeinsurance16
        },
    ];
    return (
        <div className='Carinformation-container'>
            <Header />
            <div className='herosection-carinfomation'>
                <div className='car-information-image'>
                    <img src={Homeinsuranceimage} alt='car-information-image' className='car-image' />
                </div>

                <div className="car-information-firstpara" style={{ textAlign: "left" }}>
                    <h1 className='travel-insurance-heading'>What is Home Insurance?</h1>
                    <p className='private-car-paragraph'>
                        Home insurance is a comprehensive insurance policy designed to protect your home  <br></br>and belongings from various risks and damages. It offers financial security  <br></br> against unexpected events such as fire, theft, natural disasters, and personal liability, ensuring peace of mind <br></br> for homeowners and their families.

                    </p>
                </div>

            </div>

            <div className="quote-container">
                <a
                    // href="https://uatweb.iproinfinity.com/carinsurance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quotes-btn-carinformation"
                >
                    Coming soon
                </a>
            </div>
            <br></br>
            <div className='backgroundsection-carinformation'>
                <div className='bacground-sec-heading'>Home Insurance – Protect Your Home and Loved Ones</div>

                <div className='carinfo-content'>
                    <div className='carinfo-section'>
                        <img src={Homeinsurance1} alt="Green Car" className='carinfo-image' />
                        <p>
                            Building & Contents Insurance
                        Covers damages to the structure of your home and the belongings inside, protecting you from losses due to fire, theft, or natural disasters.
                        </p>
                    </div>

                    <div className='carinfo-section'>
                        <img src={Homeinsurance2} alt="Orange Car" className='carinfo-image' />
                        <p>
                            Personal Liability Insurance
                        Protects you against legal claims if someone is injured on your property or if you accidentally cause damage to others’ property.
                        </p>
                    </div>
                </div>
            </div>

            <div className="coverage-container">
                <h2 className="coverage-title">Coverages of Home Insurance</h2>
                <div className="coverage-grid-section2">
                    {data.map((item, index) => (
                        <div key={index} className="coverage-item-car">
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

    )
}

export default Homeinsurance