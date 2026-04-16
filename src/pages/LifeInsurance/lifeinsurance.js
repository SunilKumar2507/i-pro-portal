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
import { FaWhatsapp } from "react-icons/fa";
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
    return (
        <div className='Carinformation-container'>
            <Header />
            <div className='herosection-carinfomation'>
                <div className='car-information-image'>
                    <img src={Lifeinsuranceimage} alt='car-information-image' className='car-image' />
                </div>

                <div className="car-information-firstpara" style={{ textAlign: "left" }}>
                    <h1 className='travel-insurance-heading'>What is Life Insurance?</h1>
                    <p className='private-car-paragraph'>
                        Life insurance is a long-term financial safety net that provides a lump-sum payment <br></br>to your beneficiaries in the event of your death. It ensures your loved ones<br></br>are financially secure even in your absence. It can also serve as a savings or investment tool for future needs.

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
                <div className='bacground-sec-heading'>Life Insurance – Secure Your Family's Future</div>

                <div className='carinfo-content'>
                    <div className='carinfo-section'>
                        <img src={lifeinsuranceimage1} alt="Green Car" className='carinfo-image' />
                        <p>
                            Red Heart
                        Term Life Insurance offers high coverage at low premiums and ensures your family’s financial security in case of an untimely demise.
                        </p>
                    </div>

                    <div className='carinfo-section'>
                        <img src={Lifeinsuranceimage2} alt="Orange Car" className='carinfo-image' />
                        <p>
                            Golden Tree
                            Endowment & Whole Life Plans combine life cover with savings or investment benefits, helping you build a financial corpus for the future.
                        </p>
                    </div>
                </div>
            </div>

            <div className="coverage-container">
                <h2 className="coverage-title">Coverages of Life Insurance</h2>
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

export default Lifeinsurance