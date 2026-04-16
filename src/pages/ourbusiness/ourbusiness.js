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

import './ourbusiness.css';

const OurBusiness = () => {
    const cardData = [
        {
            img: business1,
            text: `Whichever industry or business you operate in, with our experience, 
            we can source the best and optimal insurance covers fit for your business needs.`
        },
        {
            img: business2,
            text: `We appreciate that different industries face varied challenges and risks, 
            and our insurance experts are ready to assess your particular requirements. 
            We work with your business to keep well-detailed business and employee records, 
            giving you a clearer picture of operational aspects so your insurance proposals 
            align with your needs.`
        },
        {
            img: business3,
            text: `Our detailed insights into solutions, costs, coverage, and other relevant 
            information ensure you are informed. We arrange a consultation session with you 
            to explain our proposal so you can make informed decisions on how to proceed.`
        },
        {
            img: business4,
            text: `From simple retail insurance to a major home, health to complex coverage 
            solutions such as property, materials, transportation, and organization, our 
            experience and expertise ensure we identify the right insurance covers for your 
            business.`
        }
    ];
    return (
        <div className="services-container">
            <header className='header-section'>
                <Header />
            </header>
            <section className='our-services-container'>
                <h1 className='our-services-heading'>
                    OUR BUSINESS
                </h1>
                <p className='our-services-para'>
                    i-Pro Infinity is a business of insurance intermediation
                    <a
                        href="/document/IRDAI License Copy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ margin: "0 4px" }}
                    >
                        licensed
                    </a>
                   by the Insurance Regulatory and Development Authority of India (IRDAI) to act as an insurance intermediary for direct business, under life and general (including health) insurance categories. The license is valid for 3 years.  <a
                        href="/document/IRDAI License Copy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ margin: "0 4px" }}
                    >
                        (upto 6th Dec 2026)
                    </a>, and is renewable thereafter.
                </p>


            </section>
            <section className='business-philosophy-container'>
                <div className='business-philosophy-content'>
                    <h1 className='business-philosophy-heading'>
                       What is Insurance Intermediation ?
                    </h1>
                    <ul className="business-philosophy-list">
                        <li><FaCheckCircle className="icon" />Whenever our client (you) has any insurance requirement, i-Pro Infinity (we) helps
                         you by providing the best insurance coverage at an optimal price. We intermediate with insurance companies on your behalf,
                          understand your requirement, present the required information to the insurance company, and solicit the best terms. We then
                           analyse and recommend the most appropriate coverage and place the insurance with your acceptance. We service your policies thereafter. 
                           The process of insurance intermediation is also called insurance broking services.</li>
                       
                    </ul>
                </div>
                <div className='business-philosophy-img-container'>
                    <img src={ourservicescreenimg} alt="Insurance Expert" className='business-philosophy-img' />
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

export default OurBusiness;
