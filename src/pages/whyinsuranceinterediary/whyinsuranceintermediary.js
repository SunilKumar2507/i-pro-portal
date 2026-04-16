import React from 'react';
import './whyinsuranceintermediary.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/header';
import whatmakeusdiffernt from '../../assets/blue blup.png';
import { FaWhatsapp } from "react-icons/fa";

// import differenceimg from '../../image/differenceimg.png';

const Whyinsuranceintermediary = () => {
    return (
        <div className="difference-section">
            <Header />
            <div className="difference-content">
                <div className="difference-text">
                    {/* NEW PARAGRAPH ADDED HERE */}
                    <h2>
                        WHY DO YOU NEED AN INSURANCE BROKER?<br /> </h2>

                    <p>The world of insurance is complex and ever-changing. The insurance covers provided by the policy you bought last year may no longer be suitable or sufficient for your needs. You may not know that the quoted premiums are competitive? And if you are just starting out or expanding your business, how do you know what types of insurance you need? And if the insurance you buy is good enough to protect your business against the risk exposures? A well experienced and suitably qualified professional can help assess and source the types and levels of cover that you need, saving you the trouble and effort. The consequences of not having the right insurance in place can be disastrous, and sometimes this only comes to light when you need to make a claim, which might be too late.</p>


                   
                </div>
                <div className="difference-image">
                    <img src={whatmakeusdiffernt} alt="Our Team" />
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

export default Whyinsuranceintermediary;
