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


const Corporateinsurancecontant = () => {

    return (
        <div className="services-container">
            <header className='header-section'>
                <Header />
            </header>


          

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

export default Corporateinsurancecontant;
