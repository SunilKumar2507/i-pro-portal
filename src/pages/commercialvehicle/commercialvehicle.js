import React from 'react';
import './commercialvehicle.css'; // Link to the CSS below
import Header from '../../components/Header/header';
import commercialvehicle from '../../assets/commercialvehicle-insurance.png'; // Replace with your actual image paths
import owndamage from '../../assets/own-damage.png';
import thirdparty from '../../assets/third-part.png';
import personalaccident from '../../assets/personalaccident.png';
import passengercover from '../../assets/passengercover.png'
import owndamages from '../../assets/own-amange-commercial.png';
import thirdparties from '../../assets/third-party-commercial.png';
import Comprehensive from '../../assets/compres-coverage-commercial.png';
import makeandmodel from '../../assets/vehiclemakemodel.png';
import vehicleage from '../../assets/vehicleage.png';
import { FaWhatsapp } from "react-icons/fa";
import insured from '../../assets/insured-comercial.png'
import RTO from '../../assets/RTO.png';
import vehicleweight from '../../assets/weight-commercialvehicle.png'
import Roadsideaccident from '../../assets/roadsideaccident.png';
import ZeroDepreciation from '../../assets/Zero Depreciation.png';
import fueltype from '../../assets/Fueltype.png'
import commercialbus from '../../assets/commercial-bus.png';
import Footer from '../../components/footer/footer';


const CommercialVehicleInsurance = () => {


    const data = [
        {
            title: "Vehicles Make and Model",
            description: "Protection against damages to your Vehicle due to accidents, fire, theft, vandalism, or natural calamities",
            image: makeandmodel
        },
        {
            title: "Vehicle Age",
            description: "Covers legal liabilities for bodily injuries or property damage caused to third parties in an accident involving your vehicle",
            image: vehicleage
        },
        {
            title: "Insured Declared Value (IDV)",
            description: "The IDV represents the commerical vehicle current market value and is a major factor in premium calculation. Higher IDV results in a higher premium.",
            image: insured
        },
        {
            title: "RTO Number / State",
            description: "The location where the commercial Vehicles is registered (RTO number or state) affects the premium. Metropolitan cities or certain states may have higher premiums due to increased risks.",
            image: RTO
        },
         {
             title: "Gross Weight Of the Vehicle",
             description: "The Gross Vehicle Weight Rating (GVWR) is the maximum safe weight of your vehicle, including its curb weight, passengers, fuel, accessories, cargo, and trailer tongue weight.",
             image: vehicleweight 
        },
        {
            title: "Fuel Type (CNG / Petrol / Electric)",
            description: "The type of fuel used in the new affects the premium. The diesel-powered vehicles potentially having different premium rates compared CNG vehicles",
            image: fueltype
        }

    ];
    return (
        <div className="twowheeler-container">
            <Header />
            <div className="twowheeler-hero">
                <div className="commercial-image">
                    <img src={commercialvehicle} alt="Scooter" />
                </div>
                <div className="commercial-description">
                    <h2>Commercial Vehicle Insurance ?</h2>
                    
                    <p className='comm-align'>
                        Goods Carrying Vehicle Insurance is a specialized insurance policy designed to provide coverage
                        for vehicles that are used for transporting goods commercially. This type of insurance is particularly
                        important for businesses that rely on vehicles such as trucks, vans, and lorries to transport goods from
                        one place to another. Goods Carrying Vehicle Insurance offers financial protection against various risks, 
                        including accidents, theft, damages to the vehicle, and liabilities towards third parties. 
                        It ensures that the vehicles used for carrying goods are adequately covered, protecting the business from
                        potential financial losses in case of unexpected events. This insurance policy is crucial for businesses in the
                        logistics and transportation industry to ensure the smooth and secure operation of their operation
                    </p>
                    <div className="quote-container">
                        <a
                            href="https://web.iproinfinity.com/commercial-vehicle-insurance/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="quotes-btn-commercial"
                        >
                            Get Quote
                        </a>
                    </div>
                </div>
            </div>

            <div className="twowheeler-coverage-section">
                <div className="coverage-grid">
                    <div className="coverage-card">
                        <h4>Own Damage Coverage</h4>
                        <img src={owndamages} alt="" className='own-damage-coverage'/>
                        <p>
                            Protection against damages to your car due to accidents, fire, theft, vandalism, or natural calamities.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Third-Party Liability Coverage</h4>
                        <img src={thirdparties} alt="" className='own-damage-coverage' />
                        <p>
                            Covers legal liabilities for bodily injuries or property damage caused to third parties in an accident involving your car.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Comprehensive Coverage</h4>
                        <img src={Comprehensive} alt="" className='own-damage-coverage' />
                        <p>
                            Compensation for injuries or death to the owner/driver of the insured car
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Roadside Assistance</h4>
                        <img src={Roadsideaccident} alt="" className='own-damage-coverage' />
                        <p>
                            Assistance for breakdowns, towing, flat tire, battery jumpstart, and other emergency services.
                        </p>
                    </div>
                    <div className="coverage-card">
                        <h4>Zero Depreciation Cover</h4>
                        <img src={ZeroDepreciation} alt="" className='own-damage-coverage' />
                        <p>
                            Full reimbursement of repair/replacement costs without considering depreciation.
                        </p>
                    </div>
                    <div className="coverage-card">
                    <h4>
                    <br></br>
                    <br></br>
                            <img src={commercialbus} alt="" className='commercialbus-coverage' />
                        </h4>
                    </div>
                </div>

            </div>

            <div className="coverage-container">
                <h2 className="coverage-title">Factors Determining the Premium of Coverages of Commercial Vehicle Insurance</h2>
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

            <Footer />
        </div>
    );
};

export default CommercialVehicleInsurance;

