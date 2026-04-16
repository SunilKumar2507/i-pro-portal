import React from 'react'
import Header from '../../components/Header/header';
import careerimage from '../../assets/career.jpg';
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../../components/footer/footer";
import './Career.css'

    const CareerPage = () => {
        return (
            <div className="career-container">
            <Header/>
            <div className='beach-background'>
                <div className="career-header">
                    <img
                        src={careerimage}
                        alt="Career Banner"
                        className="career-banner"
                    />
                </div>
                </div>
                <div className="career-content">
                    <h2>Welcome – Join Our Team</h2>
                    <ul>
                        <li>We are expanding our Team. We are looking for  passionate, Result oriented individuals with Entreprunerial mindset.</li>
                        <li>If you are motivated, love helping people, and enjoy working in a dynamic environment, this is the place for you.</li>
                        <li>At our company, we value dedication, teamwork, and a drive to succeed.</li>
                        <li>Whether you are experienced or just starting out, we welcome talent from all backgrounds.</li>
                        <li>You will have the opportunity to grow your career while making a real impact in customers' lives.</li>
                        <li>Great incentives, training programs, and a supportive team await you.</li>
                        <li>Submit your resume to <a>careers@iproinfinity.com </a> below to take the first step toward a fulfilling career with us.</li>
                        <li>We are excited - Let us commence a great journey together!</li>
                    </ul>
                </div>

<a
  href="https://wa.me/919380029170"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <FaWhatsapp className="whatsapp-icon" />
</a>
                {/* <div className="career-form-section">
                    <h3>Please fill out the form below to apply:</h3>
                    <form className="career-form">
                        <div className="form-row">
                            <input type="text" placeholder="Name" required />
                            <input type="tel" placeholder="Phone Number" required />
                        </div>

                        <div className="form-row">
                            <input type="email" placeholder="Email ID" required />
                            <input type="file" />
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div> */}
                <Footer />
            </div>
        );
    };

export default CareerPage