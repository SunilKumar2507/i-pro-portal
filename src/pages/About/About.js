import React from 'react';
import Headers from "../../components/Header/header";
import Profile from "../../assets/profile.jpg"
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../../components/footer/footer";

import './About.css';

const AboutIPro = () => {
    return (
        <div className="about-us-conatiner">
            <header className='header-section'>
                <Headers />
            </header>

            <section className='about-ipro-container'>
                <div className='about-ipro-content'>
                    <h1 className='about-ipro-heading'>
                        ABOUT I-PRO INFINITY
                    </h1>
                    <p className="about-ipro-para">i-Pro was founded in [year] by <b>Suresh Siva</b>, a visionary entrepreneur with a passion for technology and innovation. What began as a small startup has since grown into a leading provider of cutting-edge solutions in the digital realm.
                        From humble beginnings to our current position as industry pioneers, our journey has been defined by a relentless
                        pursuit of excellence and a commitment to pushing the boundaries of what's possible.</p>
                </div>
                <div className='about-ipro-img-container'>
                    <img src={Profile} alt="Insurance Expert" className='about-ipro-img' />
                </div>
            </section>


            <section className='our-teams-container'>
                <div className='our-teams-img-container'>
                    <img src={Profile} alt="Insurance Expert" className='our-teams-img' />
                </div>
                <div className='our-teams-content'>
                    <h1 className='our-teams-heading'>
                        OUR TEAMS
                    </h1>
                    <p className="our-teams-para">i-Pro was founded in [year] by <b>Suresh Siva</b>, a visionary entrepreneur with a passion for technology and innovation.
                        What began as a small startup has since grown into a leading provider of cutting-edge solutions in the digital realm.
                        From humble beginnings to our current position as industry pioneers, our journey has been defined by a relentless
                        pursuit of excellence and a commitment to pushing the boundaries of what's possible.</p>
                </div>
            </section>

            <section className='suresh-container'>
                <div className='suresh-content'>
                    <h1 className='suresh-heading'>
                        MR. SURESH SIVALINGAM <br></br>
                        PRINCIPAL OFFICER AND CEO
                    </h1>
                    <p className="suresh-para">A Mechanical Engineer, ventured into insurance sector as a Direct Recruit Officer with M/s.
                        United India Insurance Company, and then on to Overseas Market in Oman and UK.
                        Has more than three decades of experience, handling large corporates as an insurer, reinsurer, insurance broker,
                        and risk manager and across all lines of business and functions – Underwriting, Claims, Reinsurance and Risk Engineering.</p>
                </div>
                <div className='suresh-img-container'>
                    <img src={Profile} alt="Insurance Expert" className='suresh-img' />
                </div>
            </section>

            <section className='umesh-container'>
                <div className='umesh-img-container'>
                    <img src={Profile} alt="Insurance Expert" className='umesh-img' />
                </div>
                <div className='umesh-content'>
                    <h1 className='umesh-heading'>
                        MR. UMESH KADARMANDALGI<br></br>
                        EXECUTIVE DIRECTOR
                    </h1>
                    <p className="umesh-para">A Commerce Graduate with more than three decades of experience working for M/s.
                        United India Insurance Company in various capacities as Branch Manager and Divisional Manager across various regions,
                        and superannuated as Divisional Manager, Bangalore. Heads the Corporate Insurance Team.</p>
                </div>
            </section>

            <section className='padmanabh-container'>
                <div className='padmanabh-content'>
                    <h1 className='padmanabh-heading'>
                        MR. PADMANABH H BHANDARY<br></br>
                        EXECUTIVE DIRECTOR
                    </h1>
                    <p className="padmanabh-para">A Law Graduate with more than three decades of experience working for M/s.
                        United India Insurance Company in various capacities as Branch Manager, Divisional Manager across various regions, and superannuated as
                        Regional Manager, Calicut. Heads Claims and Personal Insurance Team.</p>
                </div>
                <div className='padmanabh-img-container'>
                    <img src={Profile} alt="Insurance Expert" className='padmanabh-img' />
                </div>
            </section>
            <div className="footer">
                <Footer />
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
    );
};




export default AboutIPro;