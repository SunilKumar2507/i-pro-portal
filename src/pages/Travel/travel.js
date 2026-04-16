import React from 'react';
import flight from '../../assets/Flight1.jpg';
import flight11 from '../../assets/flight11.jpg';
import flight12 from '../../assets/flight12.jpg'
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import flight111 from '../../assets/flight111.jpg';
import flight112 from '../../assets/flight112.jpg'; 
import Roadassist from '../../assets/road-assistance.jpg';
import engineprotection from '../../assets/engine-protection.jpg';
import carconsumable from '../../assets/carconsumable.jpg';
import depreciation from '../../assets/depreciation.png';
import { FaWhatsapp } from "react-icons/fa";
import './travel.css';



function Carinformation() {

    const data = [
        {
            title: "Medical Emergency Cover",
            description: "Coverage for emergency medical treatment, hospitalization, and medical evacuation while traveling.",
            image: flight111
        },
        {
            title: "Trip Cancellation",
            description: "Reimbursement for pre-paid trip expenses if you need to cancel due to covered reasons like illness or emergencies.",
            image: flight112
        },
        {
            title: "Baggage Loss/Delay",
            description: " Compensation for delayed, lost, or stolen luggage during your travel.",
            image: Roadassist
        },
        {
            title: "Passport Loss",
            description: " Covers the cost of obtaining a duplicate passport in case of loss or theft.",
            image: engineprotection
        },
        {
            title: "Flight Delay/Cancellation",
            description: " Compensation for additional expenses due to delayed or cancelled flights.",
            image: carconsumable
        },
        {
            title: "Personal Liability",
            description: "   Protection against legal liabilities due to accidental damages or injuries caused to others.",
            image: depreciation
        },
    ];
    return (
        <div className='Carinformation-container'>
            <Header />
            <div className='herosection-carinfomation'>
                <div className='car-information-image'>
                    <img src={flight} alt='car-information-image' className='car-image' />
                </div>

                <div className="car-information-firstpara" style={{ textAlign: "left" }}>
                    <h1 className='travel-insurance-heading'>What is Travel Insurance?</h1>
                    <p className='private-car-paragraph'>
                        Travel insurance is a type of insurance that provides financial protection  during <br></br>domestic or international travel. It covers unexpected events such as trip <br></br> cancellations,medical emergencies, lost luggage, flight delays, and more. <br></br>  A comprehensive travel insurance policy ensures a worry-free journey by <br></br> safeguarding you from unforeseen disruptions.
                        
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
                <div className='bacground-sec-heading'>Travel Insurance – Trip Protection</div>

                <div className='carinfo-content'>
                    <div className='carinfo-section'>
                        <img src={flight11} alt="Green Car" className='carinfo-image' />
                        <p>
                            Blue Suitcase
                        Single Trip Insurance provides coverage for a one-time journey, ideal for vacations or business trips. It includes medical expenses, baggage loss, trip cancellation, and personal liability.
                        </p>
                    </div>

                    <div className='carinfo-section'>
                        <img src={flight12} alt="Orange Car" className='carinfo-image' />
                        <p>
                            Yellow Plane
                        Annual Multi-Trip Insurance is suitable for frequent travelers. It offers continuous coverage throughout the year for multiple trips, ensuring you’re protected every time you travel.
                        </p>
                    </div>
                </div>
            </div>

            <div className="coverage-container">
                <h2 className="coverage-title">Coverages of Travel Insurance</h2>
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

export default Carinformation