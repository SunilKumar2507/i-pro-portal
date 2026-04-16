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
import { FaWhatsapp } from "react-icons/fa";
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
  return (
    <div className='Carinformation-container'>
    <Header/>
    <div className='herosection-carinfomation'>
        <div className='car-information-image'>
        <img src={carimage} alt='car-information-image' className='car-image'/>
        </div>

              <div className="car-information-firstpara" style={{ textAlign: "left" }}>
                  <h1 className='private-car-insurance-heading'>What is Private Cars Insurance?</h1>
                  <p className='private-car-paragraph'>
                      Private car insurance is a type of motor insurance policy that covers <br></br> your personal car..
                      This insurance   policy will cover you financially<br></br> against the losses 
                      that arise due to  an accident,natural calamity,  theft, <br></br>  or fire. 
                      A comprehensive car insurance cover offers the highest level  <br></br>financial security to your car by covering 
                      almost all types of damages<br></br>  that your car may sustain.
                  </p>
              </div>

    </div>

          <div className="quote-container">
              <a
                  href="https://web.iproinfinity.com/car-insurance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quotes-btn-carinformation"
              >
                  Get Quote
              </a>
          </div>
<br></br>
          <div className='backgroundsection-carinformation'>
              <div className='bacground-sec-heading'>Private Car - New Vehicle Insurance</div>

              <div className='carinfo-content'>
                  <div className='carinfo-section'>
                      <img src={carimage1} alt="Green Car" className='carinfo-image' />
                      <p>
                          New Vehicle Insurance Policy is a specialized insurance coverage designed for brand-new cars.
                          It offers comprehensive protection against various risks and damages that may occur during
                          the initial period of owning a new vehicle.
                      </p>
                  </div>

                  <div className='carinfo-section'>
                      <img src={carimage2} alt="Orange Car" className='carinfo-image' />
                      <p>
                          One of the major differences in this policy is that it provides a three-year third party premium
                          and a one-year own-damage (OD) premium. This means that the third-party coverage remains valid
                          for three years, ensuring extended protection against third-party liabilities, while the own damage
                          coverage is for one year.
                      </p>
                  </div>
              </div>
          </div>

          <div className="coverage-container">
              <h2 className="coverage-title">Coverages Of Four Wheeler Insurance</h2>
              <div className="coverage-grid-section2">
                  {data.map((item, index) => (
                      <div key={index} className="coverage-item-car">
                          <img src={item.image} alt={item.title} />
                          <div className="coverage-text">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                          </div>
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
         <Footer/> 
    </div>
    
  )
}

export default Carinformation