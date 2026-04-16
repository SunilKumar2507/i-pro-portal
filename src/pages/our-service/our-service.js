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
import timedifferent from "../../assets/timedifferent11.png";
import timedifferent2 from "../../assets/timedifferent22.png";
import { FaWhatsapp } from "react-icons/fa";
import './our-service.css';

const OurServices = () => {
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
                    OUR SERVICES
                </h1>
                <p className='our-services-para'>At IPRO Insurance, we are committed to providing comprehensive and reliable
                    insurance solutions tailored to meet the diverse needs of our clients. Whether
                    you're looking for personal or commercial coverage, our expert team is dedicated
                    to offering the peace of mind that comes with knowing you’re protected by a trusted partner.
                </p>
            </section>
            <section className='business-philosophy-container'>
                <div className='business-philosophy-content'>
                    <h1 className='business-philosophy-heading'>
                        BUSINESS PHILOSOPHY AT I-PRO INFINITY IS SIMPLY TO PROVIDE WHAT OUR CLIENTS WANT AND VALUE!
                    </h1>
                    <ul className="business-philosophy-list">
                        <li><FaCheckCircle className="icon" />Confidence that their broker understands their business and industry.</li>
                        <li><FaCheckCircle className="icon" />A broker that puts them at the centre of all its activities and decisions.</li>
                        <li><FaCheckCircle className="icon" />A team that will provide dedicated support when they need it most.</li>
                        <li><FaCheckCircle className="icon" />A broker that insurance companies respect and actively seek to write business with.</li>
                        <li><FaCheckCircle className="icon" />A broker who invests in technology to provide best service.</li>
                    </ul>
                </div>
                <div className='business-philosophy-img-container'>
                    <img src={ourservicescreenimg} alt="Insurance Expert" className='business-philosophy-img' />
                </div>
            </section>

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

            <section className='corporate-insurance-container'>
                <div className='corporate-insurance-content'>
                    <h1 className='corporate-insurance-heading'>
                        CORPORATE INSURANCE
                    </h1>
                    <p className="corporate-insurance-para">At i-Pro Insurance, we understand the complexities and risks associated with running a business. Our comprehensive corporate insurance solutions are designed to protect your company’s assets, employees,
                        and operations, allowing you to focus on growth and success. Whether you’re a small business or a large corporation, we offer tailored insurance packages to meet your specific needs.</p>
                </div>
                <div className='corporate-insurance-img-container'>
                    <img src={customerinterview} alt="Insurance Expert" className='corporate-insurance-img' />
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

            <div className="business-container">
                <h2 className="business-title">WE UNDERSTAND YOUR BUSINESS</h2>
                <div className="business-cards">
                    {cardData.map((card, index) => (
                        <div className="business-card" key={index}>
                            <img src={card.img} alt={`Business Info ${index + 1}`} className="business-img" />
                            <p className="business-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ipro-container">
                <h2 className="ipro-title">WHAT MAKES I-PRO INFINITY DIFFERENT?</h2>
                <div className="ipro-content">
                    <div className="ipro-card">
                        <h3 className="ipro-subtitle">QUITE SIMPLY, THE PEOPLE</h3>
                        <img src={timedifferent} alt="People" className="ipro-img" />
                        <p className="ipro-text">
                            We recruit and retain talented, committed and motivated individuals that share our
                            vision for providing safe and regulated support throughout our engagement with each
                            one of our valued clients. They are developed and take pride in our unique culture
                            of customer service delivery which is innovative and forward-thinking.
                        </p>
                    </div>
                    <div className="ipro-card">
                        <h3 className="ipro-subtitle">CLAIMS FOCUS</h3>
                        <img src={timedifferent2} alt="Claims" className="ipro-img" />
                        <p className="ipro-text">
                            The unfortunate point at which you have to make a claim on your insurance is sometimes
                            called the moment of truth, as an acid test for your insurance coverage. It is the moment
                            that you and your insurer (promptly) deliver the agreed benefits to minimize the loss
                            and disruption to your business.
                        </p>
                    </div>
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
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default OurServices;
