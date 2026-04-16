import React from "react";
import Header from "../../components/Header/header";
import landingimage from "../../assets/landingscreen-image.jpeg";
import bluecar from "../../assets/Blue car (2).png";
import scooter from "../../assets/Scooter.png";
import { Link } from 'react-router-dom';
import commercial from "../../assets/Truck.png";
import handsonheart from "../../assets/handsonhearts.png";
import travel from "../../assets/Airplane Take Off.png";
import corporate from "../../assets/Business Building.png";
import homeloan from "../../assets/Real Estate.png";
import family from "../../assets/Defend Family.png";
import fLower from "../../assets/Flower Bouquet.png";
import "./landingscreen.css";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../../components/footer/footer";
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle } from "react-icons/fa";


function LandingScreen () {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/4-wheeler');  // Navigate to the /4-wheeler screen
    };

    const handleClick2wheeler = () => {
        navigate('/2-wheeler');
    }

    const handleClickcommercial = () => {
        navigate('/commercial-insurance');
    }

    const handleClickhealth = () => {
        navigate('/healthinsurance');
    }

    

    return (
   <div className="Landingscreen-container">
        <div className="header-section-for-landingpage">
        <Header/>
                
        </div>
            <div className='landing-screen-background'> </div>
            <div className="herosection-landingscreen">
            <div className="section1-landingscreen">
                    <div className="i-proheading">
                        <h1 className="i-pro-heading"> iProInfinity – Where Trust Meets Innovation, Because We Care!</h1>
                    </div>   
                    
                <img src={landingimage} alt="landing-image" className="landingscreen-image"/>
            </div>  
            <div className="section2-landingscreen">
            <div className="landingscreen-grid">
                        <div className="grid-wrapper">
                            <div
                                className="grid-box"
                                onClick={() => window.open('https://uatweb.iproinfinity.com/carinsurance/', '_blank')}
                            >
                                <img src={bluecar} alt="4 wheeler" className="icon-img" />
                                <p className="grid-lable">4 wheeler</p>
                            </div>

                            <div className="info-icon" onClick={handleClick}><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                            <div className="grid-box"
                                onClick={() => window.open('https://uatweb.iproinfinity.com/bike-insurance/', '_blank')}
                            >
                            <img src={scooter} alt="2 wheeler" className="icon-img" />
                                <p className="grid-lable">2 wheeler</p></div>
                            <div className="info-icon" onClick={handleClick2wheeler}><FaInfoCircle /></div>
                            </div>
                        <div className="grid-wrapper">
                        <div className="grid-box"
                                onClick={() => window.open('https://uatweb.iproinfinity.com/commercial-vehicle-insurance/#/', '_blank')}
                        >
                        <img src={commercial} alt="4 wheeler" className="icon-img" />
                                <p className="grid-lable">Commercial Vehicle</p></div>
                            <div className="info-icon" onClick={handleClickcommercial}><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                        <div className="grid-box"
                                onClick={() => window.open('https://uatweb.iproinfinity.com/healthinsurance/', '_blank')}
                                >
                        <img src={handsonheart} alt="4 wheeler" className="icon-img" />
                                <p className="grid-lable">Health</p></div>
                            <div className="info-icon" onClick={handleClickhealth}><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                        <div className="grid-box">
                        <img src={travel} alt="4 wheeler" className="icon-img" />
                                <p className="grid-lable">Travel</p></div>
                        <div className="info-icon"><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                        <div className="grid-box">
                        <img src={corporate} alt="4 wheeler" className="icon-img" />
                                <p className="grid-lable">Corporate</p></div>
                        <div className="info-icon"><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                        <div className="grid-box">
                        <img src={homeloan} alt="4 wheeler" className="icon-img" />
                                <p className="grid-lable">Home Insurance</p></div>
                            <div className="info-icon"><FaInfoCircle /></div>
                        </div>
                        <div className="grid-wrapper">
                        <div className="grid-box">
                        <img src={family} alt="4 wheeler" className="icon-img" />
                                <p className="grid-lable">Life Insurance</p>
                        </div>
                        <div className="info-icon"><FaInfoCircle /></div>
                        </div>
            </div>
<br></br>
                    <div className="rectangle-box-corporatescreen">
                        <Link to="/under-process" className="link-no-style">
                        <img src={fLower} alt="decor" className="decor-icon" />
                        </Link>
                        <Link to="/under-process" className="link-no-style">
                        <p className="corporate-insurance-plan">Check out the corporate insurance plan.</p>
                        </Link>
                        <Link to="/under-process" className="link-no-style">
                        <img src={corporate} alt="icon" className="decor-icon" />
                        </Link>
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
            <br></br>
            <Footer />
           
   </div>
 
    )
}


export default LandingScreen;
