import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/header';
import Footer from "../../components/footer/footer";
import {
  FaArrowRight,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaShieldAlt,
  FaTimes,
  FaUser,
  FaWhatsapp
} from "react-icons/fa";
import bluecar from "../../assets/Blue car (2).png";
import scooter from "../../assets/Scooter.png";
import commercial from "../../assets/Truck.png";
import handsonheart from "../../assets/handsonhearts.png";
import travel from "../../assets/Airplane Take Off.png";
import corporate from "../../assets/Business Building.png";
import homeloan from "../../assets/Real Estate.png";
import family from "../../assets/Defend Family.png";
import car from '../../assets/car-insurance-banner.png';
import scooty from '../../assets/bike-insurance-banner.png';
import Commercial from '../../assets/commercial-insurance-banner.png';
import health from '../../assets/health-insurance-banner.png';

import "./bannerscreen.css";

const images = [car, scooty, Commercial, health];
const bannerTexts = [
  "Car Insurance - Take a 4-wheeler insurance in a few simple steps",
  "Bike Insurance - Take a 2-wheeler insurance in a few simple steps",
  "Commercial Vehicle Insurance - Take commercial insurance in a few steps",
  "Health Insurance - Take a health insurance policy in a few simple steps"
];
const bannerLinks = ["/4-wheeler", "/2-wheeler", "/commercial-insurance", "/healthinsurance"];
const trustWord = "TRUST";

function Bannerscreen() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedGrid, setSelectedGrid] = useState('');
  const [formData, setFormData] = useState({
  name: '',
  phone: '',
  email: ''
});
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [typedTrust, setTypedTrust] = useState('');
  const intervalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Zoom-in on image load
    setIsHovered(true);

    // Allow zoom-out by removing zoom after 3.5s
    const zoomTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 2000);

    // Move to next image after 4s
    const imageTimeout = setTimeout(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => {
      clearTimeout(zoomTimeout);
      clearTimeout(imageTimeout);
    };
  }, [imageIndex]);

  useEffect(() => {
    let characterIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const animateTrust = () => {
      setTypedTrust(trustWord.slice(0, characterIndex));

      if (!isDeleting && characterIndex === trustWord.length) {
        isDeleting = true;
        timeoutId = setTimeout(animateTrust, 1100);
        return;
      }

      if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        timeoutId = setTimeout(animateTrust, 350);
        return;
      }

      characterIndex += isDeleting ? -1 : 1;
      timeoutId = setTimeout(animateTrust, isDeleting ? 120 : 180);
    };

    animateTrust();
    return () => clearTimeout(timeoutId);
  }, []);


  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigateToRoute = (route) => {
    if (!route) return;

    if (route.startsWith('http')) {
      window.location.href = route;
    } else {
      navigate(route);
    }
  };

  const handleGridClick = (gridType, route) => {
    const userSubmitted = Number(localStorage.getItem('user_submitted'));
    if (userSubmitted && userSubmitted > Date.now()) {
      if (route.startsWith('http')) {
        window.location.href = route; // ✅ External link
      } else {
        navigate(route); // ✅ Internal route
      }
    } else {
      setSelectedGrid({ gridType, route });
      setShowModal(true);
    }
  };




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    const route = selectedGrid.route;

    setShowModal(false);
    setFormData({ name: '', phone: '', email: '' });
    navigateToRoute(route);
  };

 const handleSubmit = async () => {
  const { name, phone, email } = formData;

  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !phone || !email) {
    alert("Please complete all required fields.");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const templateParams = {
    name,
    phone,
    email
  };

  try {
    setLoading(true);

    await emailjs.send(
      "service_abyxc2p",
      "template_g91x1uq",
      templateParams,
      "gqoN7k4WRoUAvRE8_"
    );

    const expiryInMs = 1000 * 60 * 60 * 24 * 180;
    const expiryTimestamp = new Date().getTime() + expiryInMs;

    localStorage.setItem("user_submitted", expiryTimestamp.toString());

    setShowModal(false);

    setFormData({
      name: "",
      phone: "",
      email: ""
    });

    navigateToRoute(selectedGrid.route);

  } catch (error) {
    alert("Failed to send email.");
    console.error("EmailJS Error:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className='banner-screen-container'>
      <div className='bannerscreen-header'>
        <Header />
      </div>
      <div>
        {/* <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="animated-content disappear-after-4s">
        <h1 className="brand-title">I-Pro Infinity</h1>
        <p className="tagline">Simple. Secure. Infinite.</p>
        <p className="subtext">The Foundation of Trust-Based Relationships</p>
      </div>


      

      Achievements Section */}
        {/* <div className="achievements-section">
        <div className="achievement">
          <span className="icon">
            <h1>🏆 Best Insurance Provider</h1>
          </span>
          <p>Recognized for exceptional customer service and coverage</p>
        </div>
        <div className="achievement">
          <span className="icon">📈</span>
          <h3>10x Growth</h3>
          <p>Rapid increase in client base and satisfaction</p>
        </div>
      </div> */}

        {/* Products Section */}
        {/* <div className="products-section">
        <h2>Our Products</h2>
        <div className="products-grid">
          <div className="product-card">Two Wheeler Insurance</div>
          <div className="product-card">Four Wheeler Insurance</div>
          <div className="product-card">Commercial Vehicle Insurance</div>
          <div className="product-card">Health Insurance</div>
        </div>
      </div> */}

      </div>




      <div className='hero-section-bannerscreen'>
        <div className='left-container'>
          <div className='bannerscreen-headertext'>
            <h2 className='insurance-service-main-title'>
              Insurance Services you can always{' '}
              <span className="trust-typing" aria-label="Trust">
                {typedTrust}
              </span>{' '}
              upon....
            </h2>
          </div>

          <div className='banner-section'>
            <div
              className="banner-section"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href={bannerLinks[imageIndex]}>
                <div className="image-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
                  <img
                    src={images[imageIndex]}
                    alt="vehicle"
                    className={`banner-image ${isHovered ? 'zoom' : ''}`}
                    style={{ cursor: 'pointer', display: 'block' }}
                  />
                  <div
                    className="click-zone"
                    onClick={() => {
                      // Your click handler logic here
                      console.log('Center clicked!');
                    }}
                  ></div>
                  <div className="banner-inside-text">
                    {bannerTexts[imageIndex]}
                  </div>
                </div>

              </a>
            </div>
          </div>
        </div>


        <div className='right-container'>
          <div className="bannerscreen-home-icons">

            <div className="bannerscreen-home-icons-wrapper">
              <div className="home-icons-box" onClick={() => handleGridClick('4-wheeler', 'https://web.iproinfinity.com/car-insurance/')}>
                <img src={bluecar} alt="4 wheeler" className="icon-img" />
                <p className="home-icons-lable">Private Car</p>
              </div>
            </div>

            <div className="bannerscreen-home-icons-wrapper">
              <div className="home-icons-box" onClick={() => handleGridClick('4-wheeler', 'https://web.iproinfinity.com/two-wheeler-insurance/')}>
                <img src={scooter} alt="2 wheeler" className="icon-img" />
                <p className="home-icons-lable">Two Wheeler</p>
              </div>
            </div>

            <div className="bannerscreen-home-icons-wrapper">
              <div className="home-icons-box" onClick={() => handleGridClick('4-wheeler', 'https://web.iproinfinity.com/commercial-vehicle-insurance/')}>
                <img src={commercial} alt="Commercial" className="icon-img" />
                <p className="home-icons-lable">Commercial Vehicle</p>
              </div>
            </div>

            <div className="bannerscreen-home-icons-wrapper">
              <div className="home-icons-box" onClick={() => handleGridClick('4-wheeler', 'https://web.iproinfinity.com/health-insurance/')}>
                <img src={handsonheart} alt="Health" className="icon-img" />
                <p className="home-icons-lable">Health</p>
              </div>
            </div>
          

            <div className="bannerscreen-home-icons-wrapper">
              <div className="home-icons-box" onClick={() => handleGridClick('travel', '/travelinsurance')}>
                <img src={travel} className="icon-img" alt='icon-img' />
                <p className="home-icons-lable">Travel</p>
              </div>
            </div>

            <div className="bannerscreen-home-icons-wrapper">
              <div className="home-icons-box" onClick={() => handleGridClick('corporate', '/corporate-insurance')}>
                <img src={corporate} alt="Corporate" className="icon-img" />
                <p className="home-icons-lable">Corporate</p>
              </div>
            </div>

            <div className="bannerscreen-home-icons-wrapper">
              <div className="home-icons-box" onClick={() => handleGridClick('home', '/homeinsurance')}>
                <img src={homeloan} alt="Home Insurance" className="icon-img" />
                <p className="home-icons-lable">Home Insurance</p>
              </div>
            </div>

            <div className="bannerscreen-home-icons-wrapper">
              <div className="home-icons-box" onClick={() => handleGridClick('life', '/lifeinsurance')}>
                <img src={family} alt="Life Insurance" className="icon-img" />
                <p className="home-icons-lable">Life Insurance</p>
              </div>
            </div>

          {showModal && (
            <div className="modal-overlay" role="presentation">
              <div
                className="modal-box"
                role="dialog"
                aria-modal="true"
                aria-labelledby="assistance-modal-title"
                aria-describedby="assistance-modal-description"
              >
                <div className="modal-accent" aria-hidden="true"></div>

                <button
                  type="button"
                  className="modal-close"
                  onClick={handleCancel}
                  aria-label="Close"
                >
                  <FaTimes />
                </button>

                <div className="modal-heading">
                  <span className="modal-shield" aria-hidden="true">
                    <FaShieldAlt />
                  </span>
                  <div>
                    <span className="modal-eyebrow">Personal insurance guidance</span>
                    <h3 id="assistance-modal-title">Let Us Help You Better</h3>
                  </div>
                </div>

                <p id="assistance-modal-description" className="modal-description">
                  Please share your details and our insurance expert will get in touch with you shortly to understand your requirement and assist you with the right insurance solution.
                </p>

                <form
                  className="assistance-form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit();
                  }}
                >
                  <label className="modal-field">
                    <span className="modal-field-label">Full Name</span>
                    <span className="modal-input-wrap">
                      <FaUser aria-hidden="true" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />
                    </span>
                  </label>

                  <label className="modal-field">
                    <span className="modal-field-label">Mobile Number</span>
                    <span className="modal-input-wrap">
                      <FaPhoneAlt aria-hidden="true" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        inputMode="numeric"
                        maxLength="10"
                        required
                      />
                    </span>
                  </label>

                  <label className="modal-field">
                    <span className="modal-field-label">Email Address</span>
                    <span className="modal-input-wrap">
                      <FaEnvelope aria-hidden="true" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                    </span>
                  </label>

                  <div className="modal-buttons">
                    <button className="modal-submit" type="submit" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner"></span> Submitting...
                        </>
                      ) : (
                        <>
                          Get Expert Assistance <FaArrowRight aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <button className="modal-cancel" type="button" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>

                  <p className="modal-trust-note">
                    <FaLock aria-hidden="true" />
                    <span>
                      <strong>Your information is kept confidential</strong> and used only to assist you with your insurance requirement.
                    </span>
                  </p>
                </form>
              </div>
            </div>
          )}
 
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
    
      <Footer />
    </div>
  );
}

export default Bannerscreen;
