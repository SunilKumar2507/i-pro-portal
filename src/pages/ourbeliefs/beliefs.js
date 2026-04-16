import React from 'react';
import ourbeliefs from '../../assets/our-beliefs.jpg';
import customerfirst from '../../assets/customer-first.jpg';
import teamwork from '../../assets/teamswork.png';
import professionalism from '../../assets/professionalism.jpg';
import respect from '../../assets/respectstamp 1.png';
import integrity from '../../assets/integrity.jpg';
import Header from "../../components/Header/header";
import Footer from "../../components/footer/footer";
import { FaWhatsapp } from "react-icons/fa";
import './beliefs.css';

const BeliefsSection = () => {

    const values = [
        {
            title: 'Customer First',
            text: 'Client success is our business. We do everything in the best interest of our clients and help them succeed.',
            img: customerfirst,// Update path as per your image folder
        },

        {
            title: 'Integrity',
            text: 'When you get to us, we are all with you working together. We provide innovative solutions and professional advice to clients with our collective expertise.',
            img: integrity,
        },
        {
            title: 'Professionalism',
            text: 'We aim to achieve excellence in everything we do. We are continually committed to professional and personal development of our team.',
            img: professionalism,
        },
        {
            title: 'Respect',
            text: 'The world is full of differences. We support and respect the differences. We foster an inclusive culture and are open, honest, fair, ethical and respectful in all our relationships.',
            img: respect,
        },
        {
            title: 'Teamwork',
            text: 'We are accountable to our stakeholders in our day-to-day activities. We value and maintain the TRUST amidst us, by acting with integrity and doing what is right.',
            img: teamwork,
        },
        
       
       
    ];

    return (
        <div className="ourbelief-container">
        <Header/>
            <div className="vision-mission">
                <div className="vision-mission-text">
                    <div className="vision">
                        <h3>Vision</h3>
                        <p>Add <strong>VALUE</strong> to insurance through professional services, wherever risk exists.</p>
                    </div>

                    <div className="mission">
                        <h3>Mission</h3>
                        <ul>
                            <li>Provide professional, credible and creative services</li>
                            <li>Provide a platform for people to professionally flourish and fulfil their career ambitions</li>
                            <li>Provide unparalleled insurance solutions through qualitative and innovative products.</li>
                        </ul>
                    </div>
                </div>
                <div className="vision-mission-image">
                    <img src={ourbeliefs} alt="Vision and Mission Image" className='vission-image' />
                </div>
            </div>

            <div className="values-section">
                <h3>Values</h3>
                <div className="cards">
                    {values.map((value, index) => (
                        <div className="card" key={index}>
                            <img src={value.img} alt={value.title} />
                            <p>{value.text}</p>
                            <h4>{value.title}</h4>
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
            <br></br>
            <br></br>
            <Footer/>
        </div>
    );
};

export default BeliefsSection;
