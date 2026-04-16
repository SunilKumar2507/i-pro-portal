import "./footer.css";
import locationQR from "../../assets/I-Pro location QR.png";
import iProLogo from "../../assets/i-pro_logo_with_trans.png";
import emailIcon from "../../assets/email icon.png";
import callIcon from "../../assets/call icon.png";
import locationIcon from "../../assets/location icon.png";
import facebokLogo from "../../assets/facebook icon.png";
import xLogo from "../../assets/x-logo icon.png";
import linkedinLogo from "../../assets/linkedin-logo icon.png";
import instaLogo from "../../assets/instagram-logo icon.png";

const Footer = () => {
  return (
    <footer className="ipro-footer">
      <div className="footer-container">
        <div className="footer-row top-row">
          {/* Contact Info */}

          <div className="footer-contact">
            <div className="footer-logo">
              <img src={iProLogo} alt="I-Pro Infinity Logo" />
            </div>
            <p className="footer-contaact-p"><span className="icon"><img src={emailIcon} alt="email icon" className="email-icon" /></span> &nbsp;customerfirst@iproinfinity.com</p>
            <p className="footer-contaact-p"><span className="icon"><img src={callIcon} alt="call icon" className="call-icon" /></span> &nbsp;&nbsp;080 23414133</p>
            <p className="footer-contaact-p"><span className="icon"><img src={locationIcon} alt="location icon" className="location-icon" /></span > <span className="address-text"> &nbsp;#16/1, 3rd Cross, RMV2nd Stage, 4th Block,<br />
              &nbsp;MLA Layout, Lottegollahalli, Sanjaynagar,<br />
              &nbsp;Bengaluru, Karnataka – 560094 </span></p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div>
              <h4>Products</h4>
              <ul>
                <li><a href="https://web.iproinfinity.com/health-insurance/" target="_blank" rel="noopener noreferrer">Health Insurance</a></li>
                <li><a href="https://web.iproinfinity.com/car-insurance/" target="_blank" rel="noopener noreferrer">Private Car Insurance</a></li>
                <li><a href="https://web.iproinfinity.com/two-wheeler-insurance/" target="_blank" rel="noopener noreferrer">Two-Wheeler Insurance</a></li>
                <li><a href="https://web.iproinfinity.com/commercial-vehicle-insurance/" target="_blank" rel="noopener noreferrer">Commercial Insurance</a></li>
                <li><a href="#">Corporate Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4>General</h4>
              <ul>
                <li><a href="/Aboutus">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="/career">Careers</a></li>
                <li><a href="/beliefs-section">Our Beliefs</a></li>
                <li><a href="/why-ipro-infinty">Why I Pro Infinity</a></li>
              </ul>
            </div>
            <div>
              <h4>Policy</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Grievance Policy</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">E-Insurance Accounts</a></li>
              </ul>
            </div>
          </div>

          {/* QR & Social */}
          <div className="footer-social">
            <h4>Scan for Location</h4>
            <div className="qr-container">
              <img src={locationQR} alt="QR Code" />
            </div>
            <br />
            <br />
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><img src={facebokLogo} alt="facebook logo" className="facebook-logo" /></a>
              <a href="#" aria-label="Twitter"><img src={xLogo} alt="X logo" className="x-logo" /></a>
              <a href="#" aria-label="LinkedIn"><img src={linkedinLogo} alt="linkedin logo" className="linkedin-logo" /></a>
             <a 
  href="https://www.instagram.com/i_pro_infinity_insurance?igsh=ZnE3NmoydzNvNmg4"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <img 
    src={instaLogo} 
    alt="instagram logo" 
    className="instagram-logo" 
  />
</a>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-row bottom-row">
          <div className="footer-disclaimer">
            <p><b>Disclaimer:</b> The content provided is for informational purposes only and should not be considered
              professional advice. Always consult with licensed professionals before making any insurance
              decisions. For details on risk factors, terms, conditions, and exclusions, please refer to the
              sales brochure of the respective insurer before concluding a sale.</p>
          </div>
          <div className="footer-company">
            <p><strong>I-Pro Infinity Insurance Broking Services LLP</strong><br />
              <strong>IRDAI Licence Number:</strong> 925<br />
              <strong>CIN No:</strong> sscdcdcdwc1374524</p>
          </div>
        </div>


        <div className="footer-copy">
          © 2023. I-Pro Infinity Insurance Broking Service LLP
        </div>
      </div>
    </footer>
  );
};

export default Footer;