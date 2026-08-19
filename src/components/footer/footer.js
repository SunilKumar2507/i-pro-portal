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
          <div className="footer-contact">
            <div className="footer-logo">
              <img src={iProLogo} alt="I-Pro Infinity Logo" />
            </div>
            <div className="social-icons">
              <button type="button" className="social-icon-button" aria-label="Facebook" disabled><img src={facebokLogo} alt="facebook logo" className="facebook-logo" /></button>
              <button type="button" className="social-icon-button" aria-label="Twitter" disabled><img src={xLogo} alt="X logo" className="x-logo" /></button>
              <button type="button" className="social-icon-button" aria-label="LinkedIn" disabled><img src={linkedinLogo} alt="linkedin logo" className="linkedin-logo" /></button>
              <a href="https://www.instagram.com/i_pro_infinity_insurance?igsh=ZnE3NmoydzNvNmg4" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instaLogo} alt="instagram logo" className="instagram-logo" />
              </a>
            </div>
            <div className="footer-social">
              <h4>Scan for Location</h4>
              <div className="qr-container">
                <img src={locationQR} alt="QR Code" />
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>Products</h4>
              <ul>
                <li><a href="https://web.iproinfinity.com/health-insurance/" target="_blank" rel="noopener noreferrer">Health Insurance</a></li>
                <li><a href="https://web.iproinfinity.com/car-insurance/" target="_blank" rel="noopener noreferrer">Private Car Insurance</a></li>
                <li><a href="https://web.iproinfinity.com/two-wheeler-insurance/" target="_blank" rel="noopener noreferrer">Two-Wheeler Insurance</a></li>
                <li><a href="https://web.iproinfinity.com/commercial-vehicle-insurance/" target="_blank" rel="noopener noreferrer">Commercial Insurance</a></li>
                <li><a href="/corporate-insurance">Corporate Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4>General</h4>
              <ul>
                <li><a href="/Aboutus">About Us</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/career">Careers</a></li>
                <li><a href="/beliefs-section">Our Beliefs</a></li>
                <li><a href="/why-ipro-infinty">Why I Pro Infinity</a></li>
              </ul>
            </div>
            <div>
              <h4>Policy</h4>
              <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><button type="button" className="footer-link-button" disabled>Grievance Policy</button></li>
                <li><a href="/terms-of-use">Terms Of Use</a></li>
                <li><a href="https://web.iproinfinity.com/customer-profile/" target="_blank" rel="noopener noreferrer">E-Insurance Accounts</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact-details">
            <h4>Connect Us</h4>
            <p className="footer-contaact-p"><span className="icon"><img src={emailIcon} alt="email icon" className="email-icon" /></span>customerfirst@iproinfinity.com</p>
            <p className="footer-contaact-p"><span className="icon"><img src={callIcon} alt="call icon" className="call-icon" /></span>080 23414133</p>
            <p className="footer-contaact-p footer-address"><span className="icon"><img src={locationIcon} alt="location icon" className="location-icon" /></span><span className="address-text">#16/1, 3rd Cross, RMV2nd Stage, 4th Block,<br />MLA Layout, Sanjaynagar,<br />Bengaluru, Karnataka - 560094</span></p>
          </div>
        </div>

        <hr />

        <div className="footer-row bottom-row">
          <div className="footer-disclaimer">
            <p><b>Disclaimer:</b> The information provided on this website is for general informational purposes only and does not constitute professional, financial, legal, or insurance advice. Insurance products, coverage, premiums, terms, conditions, exclusions, and eligibility are subject to the respective insurer's policy terms and underwriting requirements. Customers are advised to carefully review the applicable policy documents, sales literature, terms, conditions, and exclusions before purchasing or renewing any insurance policy. In case of any discrepancy, the official policy documents issued by the respective insurer shall prevail.</p>
          </div>
          <div className="footer-company">
            <p><strong>I-Pro Infinity Insurance Broking Services LLP</strong><br /><strong>IRDAI Licence Number:</strong> 925<br /><strong>CIN No:</strong> ABC-6580</p>
          </div>
        </div>

        <div className="footer-copy">© 2023. I-Pro Infinity Insurance Broking Service LLP</div>
      </div>
    </footer>
  );
};

export default Footer;
