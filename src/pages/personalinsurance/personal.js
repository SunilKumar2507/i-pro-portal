import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Header from "../../components/Header/header";
import Footer from "../../components/footer/footer";
import ourservicescreenimg from "../../assets/City Businessman11.png";
import time24hrs from "../../assets/time24hrs.png";
import customerinterview from "../../assets/Customer Interview Animation - Free Download Business Animations _ IconScout 1.png.png"
import businessmeeting from "../../assets/businessmeeting.jpg";
import business1 from "../../assets/business11.jpg (2).png";
import business2 from "../../assets/business22.png";
import business3 from "../../assets/business33.png";
import business4 from "../../assets/business44.png";
import { FaWhatsapp } from "react-icons/fa";
import './personal.css';

const Personal = () => {
    
    return (
        <div className="services-container">
            <header className='header-section'>
                <Header />
            </header>
           

            <section className='personal-insurance-container'>
                <div className='personal-insurance-img-container'>
                    <img src={time24hrs} alt="Insurance Expert" className='personal-insurance-img' />
                </div>
                <div className='personal-insurance-content'>
                    <h1 className='personal-insurance-heading'>
                        PERSONAL INSURANCE
                    </h1>
                    <p className="personal-insurance-para">At i-Pro  Insurance, we understand that your personal life is filled with unique and valuable assets that deserve the best protection. Our comprehensive personal insurance solutions are designed to safeguard your home, vehicle, health, and financial well-being, ensuring you can enjoy peace of mind in every aspect of your life.</p>
                </div>
            </section>

           

            {/* <section className='insurance-broker-container'>
                <div className='insurance-broker-img-container'>
                    <img src={businessmeeting} alt="Insurance Expert" className='insurance-broker-img' />
                </div>
                <div className='insurance-broker-content'>
                    <h1 className='insurance-broker-heading'>
                        WHY DO YOU NEED AN INSURANCE BROKER?
                    </h1>
                    <p className="insurance-broker-para">The world of insurance is complex and everchanging. The insurance covers provided by the policy you bought last year may no longer be suitable or sufficient for your needs. You may not know that the quoted premiums are competitive? And if you are just starting out or expanding your business, how do you know what types of insurance you need? And if the insurance you buy is good enough to protect your business against the risk exposures? A well experienced and suitably qualified professional can help assess and source the types and levels of cover that you need, saving you the trouble and effort. The consequences of not having the right insurance in place can be disastrous, and sometimes this only comes to light when you need to make a claim, which might be too late.</p>
                </div>
            </section> */}
 <a
                                href="https://wa.me/919380029170"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-float"
                              >
                                <FaWhatsapp className="whatsapp-icon" />
                              </a>


            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Personal;
