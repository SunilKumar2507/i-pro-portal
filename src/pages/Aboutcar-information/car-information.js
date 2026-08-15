import React from 'react';
import carimage from '../../assets/car-information-image.png';
import carimage1 from '../../assets/Rectangle 781.png';
import carimage2 from '../../assets/Rectangle 782.png'
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import owndamage from '../../assets/own-damage.jpg';
import personalaccident from '../../assets/personal-accident.jpg';
import Roadassist from '../../assets/road-assistance.jpg';
import engineprotection from '../../assets/engine-protection.jpg';
import carconsumable from '../../assets/carconsumable.jpg';
import { FaArrowRight, FaCarSide, FaCheckCircle, FaHeadset, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import depreciation from '../../assets/depreciation.png'
import './car-information.css';


function Carinformation() {

    const data = [
        {
            title: "Own Damage Coverage",
            description: "Protection against damages to your car due to accidents, fire, theft, vandalism, or natural calamities.",
            image: owndamage
        },
        {
            title: "Personal Accident Cover",
            description: "Compensation for injuries or death to the owner/driver of the insured car.",
            image: personalaccident
        },
        {
            title: "Roadside Assistance",
            description: " Assistance for breakdowns, towing, flat tire, battery jumpstart, and other emergency services.",
            image: Roadassist
        },
        {
            title: "Engine Protection",
            description: " Coverage for damages to the car’s engine and its components",
            image: engineprotection
        },
        {
            title: "Consumables Cover",
            description: " Covers the cost of consumables like nuts, bolts, engine oil, etc., during repairs.",
            image: carconsumable
        },
        {
            title: "Zero Depreciation Cover",
            description: "   Full reimbursement of repair/replacement costs without considering depreciation",
            image: depreciation
        },
    ];

    const highlights = [
        "Accident and theft protection",
        "Natural calamity coverage",
        "Own damage support",
    ];

    const quickStats = [
        { value: "3 Years", label: "Third-party cover" },
        { value: "1 Year", label: "Own damage cover" },
        { value: "6", label: "Core coverages" },
    ];

  return (
    <div className='Carinformation-container'>
      <Header />

      <main className="car-information-page">
        <section className='herosection-carinfomation'>
          <div className="car-hero-copy">
            <span className="car-info-eyebrow">Four Wheeler Insurance</span>
            <h1 className='private-car-insurance-heading'>Private car insurance built for confident ownership</h1>
            <p className='private-car-paragraph'>
              Private car insurance is a type of motor insurance policy that covers your personal car.
              This insurance policy will cover you financially against the losses that arise due to an
              accident, natural calamity, theft, or fire. A comprehensive car insurance cover offers the
              highest level financial security to your car by covering almost all types of damages that
              your car may sustain.
            </p>

            <div className="car-hero-highlights" aria-label="Car insurance highlights">
              {highlights.map((item, index) => (
                <span key={index} className="car-hero-chip">
                  <FaCheckCircle />
                  {item}
                </span>
              ))}
            </div>

            <div className="quote-container">
              <a
                href="https://web.iproinfinity.com/car-insurance/"
                target="_blank"
                rel="noopener noreferrer"
                className="quotes-btn-carinformation car-info-btn car-info-btn-primary"
              >
                <span>Get Quote</span>
                <FaArrowRight />
              </a>
              <a
                href="#four-wheeler-coverages"
                className="car-info-btn car-info-btn-secondary"
              >
                <span>View Coverages</span>
              </a>
            </div>
          </div>

          <div className='car-information-image'>
            <div className="car-visual-toolbar">
              <span><FaShieldAlt /> Comprehensive</span>
              <span>Secure</span>
            </div>
            <img src={carimage} alt='car-information-image' className='car-image' />
            <div className="car-visual-card">
              <FaHeadset />
              <div>
                <strong>Assisted journey</strong>
                <span>Quote to policy support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="car-info-stats" aria-label="Policy overview">
          {quickStats.map((item, index) => (
            <div className="car-info-stat" key={index}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className='backgroundsection-carinformation'>
          <div className="car-info-section-header">
            <span className="car-info-eyebrow">New Vehicle Policy</span>
            <h2 className='bacground-sec-heading'>Private Car - New Vehicle Insurance</h2>
          </div>

          <div className='carinfo-content'>
            <div className='carinfo-section'>
              <div className="carinfo-media">
                <img src={carimage1} alt="Green Car" className='carinfo-image' />
              </div>
              <div className="carinfo-copy">
                <span>01</span>
                <h3>Comprehensive new-car protection</h3>
                <p>
                  New Vehicle Insurance Policy is a specialized insurance coverage designed for brand-new cars.
                  It offers comprehensive protection against various risks and damages that may occur during
                  the initial period of owning a new vehicle.
                </p>
              </div>
            </div>

            <div className='carinfo-section'>
              <div className="carinfo-media">
                <img src={carimage2} alt="Orange Car" className='carinfo-image' />
              </div>
              <div className="carinfo-copy">
                <span>02</span>
                <h3>Longer liability confidence</h3>
                <p>
                  One of the major differences in this policy is that it provides a three-year third party premium
                  and a one-year own-damage (OD) premium. This means that the third-party coverage remains valid
                  for three years, ensuring extended protection against third-party liabilities, while the own damage
                  coverage is for one year.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="coverage-container" id="four-wheeler-coverages">
          <div className="car-info-section-header">
            <span className="car-info-eyebrow">Protection Suite</span>
            <h2 className="coverage-title">Coverages Of Four Wheeler Insurance</h2>
          </div>
          <div className="coverage-grid-section2">
            {data.map((item, index) => (
              <div key={index} className="coverage-item-car">
                <div className="coverage-card-topline">
                  <img src={item.image} alt={item.title} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="coverage-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <FaCarSide className="coverage-card-icon" />
              </div>
            ))}
          </div>
        </section>

        <a
          href="https://wa.me/919380029170"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </main>

      <Footer />
    </div>
  )
}

export default Carinformation
