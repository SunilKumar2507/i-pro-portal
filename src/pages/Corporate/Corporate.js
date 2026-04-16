import React from 'react';
import Corporateimage from '../../assets/corporateimage.jpg';
import corporateimage1 from '../../assets/corporateimage1.jpg';
import corporateimage2 from '../../assets/corporateimage2.jpg'
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import corporateimage11 from '../../assets/corporateimage11.jpg';
import corporateimage12 from '../../assets/corporateimage12.jpg';
import corporateimage13 from '../../assets/corporateimage13.jpg';
import corporateimage14 from '../../assets/corporateimage14.jpg';
import corporateimage15 from '../../assets/corporateimage15.jpg';
import corporateimage16 from '../../assets/corporateimage16.jpg';
import { FaWhatsapp } from "react-icons/fa";
import './Corporate.css';



function Corporate() {

    const data = [
        {
            title: "Group Health Coverage",
            description: "Health benefits for all employees including hospitalization and critical illness cover.",
            image: corporateimage11
        },
        {
            title: "Public Liability Insurance",
            description: "Covers legal costs and compensation if your business is held responsible for third-party injuries or property damage.",
            image: corporateimage12
        },
        {
            title: "Fire & Property Damage",
            description: " Protects office buildings, warehouses, and equipment from fire, theft, or natural calamities.",
            image: corporateimage13
        },
        {
            title: "Business Interruption",
            description: " Compensates for income loss due to temporary shutdowns caused by insured events.",
            image: corporateimage14
        },
        {
            title: "Cyber Insurance",
            description: " Protection against data breaches, cyberattacks, and IT infrastructure damage.",
            image: corporateimage15
        },
        {
            title: "Employee Accident Insurance",
            description: "   Provides compensation and medical coverage in case an employee suffers an accident during work-related activities.",
            image: corporateimage16
        },
    ];
    return (
        <div className='Carinformation-container'>
            <Header />
            <div className='herosection-carinfomation'>
                <div className='car-information-image'>
                    <img src={Corporateimage} alt='car-information-image' className='car-image' />
                </div>

                <div className="car-information-firstpara" style={{ textAlign: "left" }}>
                    <h1 className='travel-insurance-heading'>What is Corporate Insurance?</h1>
                    <p className='private-car-paragraph'>
                        Corporate insurance is a broad category of insurance policies designed to protect <br></br>businesses and their employees from potential risks and losses. <br></br> It includes coverage for property damage, legal liabilities, employee health, and more.  <br></br>  It ensures the smooth functioning of businesses by reducing financial uncertainties. 

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
                <div className='bacground-sec-heading'>Corporate Insurance – Business Protection</div>

                <div className='carinfo-content'>
                    <div className='carinfo-section'>
                        <img src={corporateimage1} alt="Green Car" className='carinfo-image' />
                        <p>
                            Grey Building
                        Group Health Insurance provides medical coverage to employees under a single plan. It improves employee satisfaction and ensures wellness in the workplace.
                        </p>
                    </div>

                    <div className='carinfo-section'>
                        <img src={corporateimage2} alt="Orange Car" className='carinfo-image' />
                        <p>
                            Blue Briefcase
                        Liability & Property Insurance covers business assets, machinery, and protects the company against legal liabilities and lawsuits.
                        </p>
                    </div>
                </div>
            </div>

            <div className="coverage-container">
                <h2 className="coverage-title">Coverages of Corporate Insurance</h2>
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

export default Corporate