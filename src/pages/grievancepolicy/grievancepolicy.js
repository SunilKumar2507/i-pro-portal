import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import './grievancepolicy.css';

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const GrievancePolicy = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="grievance-policy-page">
    <Header />

    <main className="grievance-policy-main">
      <header className="grievance-policy-hero">
        <div className="grievance-policy-shell">
          <p className="grievance-policy-eyebrow">I-Pro Infinity Insurance Broking Services LLP</p>
          <h1>Grievance Handling Policy</h1>
        </div>
      </header>

      <div className="grievance-policy-shell grievance-policy-layout">
        <article className="grievance-policy-content" aria-label="Grievance Handling Policy">
          <ol className="grievance-policy-sections">
            <li>
              <p>All those customers who have insured through or availed the services of I-Pro Infinity Insurance Broking Services and have any grievance relating to the services provided by I-Pro, or the Insurer with whom the policy has been placed, the Customer can</p>
              <ol className="grievance-policy-subsections" type="I">
                <li>email their grievance to <a href="mailto:grievance.customerfirst@iproinfinity.com">grievance.customerfirst@iproinfinity.com</a> quoting grievance and the policy number in the subject line</li>
                <li>contact the office in person and submit their grievance in writing.</li>
              </ol>
            </li>
            <li><p>I-Pro Infinity Insurance Broking Services will acknowledge receipt of the grievance on the same working day assigning a unique reference number (URN).</p></li>
            <li><p>Upon assigning the URN to the customer grievance, the concerned employee is required to collate all relevant information and submit an explanatory note to the reporting Manager within the NEXT working day.</p></li>
            <li><p>The concerned Manager will review the submission and resolve the grievance if the grievance is relating to the services provided by the broker, within THREE working days from the date of submission of the grievance.</p></li>
            <li><p>If the grievance is relating to the insurance provider, the Manager will coordinate grievance redressal with the concerned insurer and resolve the grievance within a maximum of SEVEN working days from the date of submission of the grievance.</p></li>
            <li><p>The Manager will keep the Principal Officer informed on a daily basis of all the grievances that are escalated to the insurer/s for a solution.</p></li>
            <li><p>Principal Officer shall review all grievances on a daily basis and ensure the grievances are resolved within the stipulated Turn Around Times, in any case not exceeding SEVEN working days from the date of submission of the grievance.</p></li>
            <li><p>All Grievances shall be reviewed on a structured basis annually, and any changes to SOP shall be implemented after a thorough analysis and review.</p></li>
            <li><p>For all those grievances that are not resolved by the insurer/s, within the stipulated Turn Around Time of SEVEN working days, I-Pro Infinity Insurance Broking Services shall educate and assist the customer of the grievance redressal mechanism available to them by IRDAI as per Annexure 1, suggesting them to pursue further.</p></li>
          </ol>

          <section className="grievance-policy-annexure" aria-labelledby="annexure-title">
            <p className="grievance-policy-annexure-label">Annexure 1</p>
            <h2 id="annexure-title">Cell for redressal of grievances of Policyholders</h2>

            <p>The <a href="https://irdai.gov.in/grievance-redressal-mechanism1" {...externalLinkProps}>Grievance Redressal Cell</a> in the Policyholder's Protection &amp; Grievance Redressal Department of the Insurance Regulatory and Development Authority of India looks into complaints/grievances from policyholders. This Cell takes up the grievances with the respective insurers for redressal.</p>

            <p>Policyholders who have complaints against insurers are required to first approach the Complaints/Grievance Redressal Cell of the insurer concerned. <a href="https://irdai.gov.in/list-of-gros" {...externalLinkProps}>Click here</a> for the mail ids of the Grievance Redressal Officers of the insurers. If they do not receive a response from the insurer within a reasonable period of time or are dissatisfied with the response of the company, they may approach the Grievance Redressal Cell in the Policyholder's Protection &amp; Grievance Redressal Department of the IRDAI.</p>

            <p>Only complaints from the insured or the claimants shall be entertained. The Cell shall not entertain complaints written on behalf of policyholders by advocates or agents or by any third parties.</p>

            <p>Complainants are requested to submit complete details of the complaint as required in the complaint registration form put on the IRDAI website – policyholder.gov.in (http://www.policyholder.gov.in/Report.aspx#). <a href="https://irdai.gov.in/documents/37343/620662/policyholder+complaints+registration+form29092021.pdf/5ff5e0af-a34e-6cba-91d2-fe053b076624?t=1633587167192" {...externalLinkProps}>Click here</a> to download the Complaint Registration Form. Without the required information called for in the Complaint Registration Form, IRDAI will not be in a position to register the complaint.</p>

            <h3>Registration of Complaints with the IRDAI by Policyholders:</h3>
            <ol className="grievance-policy-registration">
              <li>Can make use of the <a href="https://bimabharosa.irdai.gov.in/" {...externalLinkProps}>Bima Bharosa system - IRDAI Portal at https://bimabharosa.irdai.gov.in/</a> for registering the complaints themselves and to monitor the status of the complaints.</li>
              <li>Can send the complaint through Email to <a href="mailto:complaints@irdai.gov.in">complaints@irdai.gov.in</a>.</li>
              <li>Can call Toll Free No. <a href="tel:155255">155255</a> or <a href="tel:18004254732">1800 4254 732</a>.</li>
              <li>
                <p>Apart from the above options, if it is felt necessary by the complainant to send the communication in physical form, the same may be sent to IRDAI addressed to:</p>
                <address>
                  General Manager<br />
                  Insurance Regulatory and Development Authority of India(IRDAI)<br />
                  Policyholder's protection &amp; Grievance Redressal Department – Grievance Redressal Cell.<br />
                  Sy.No.115/1, Financial District, Nanakramguda,<br />
                  Gachibowli, Hyderabad – 500 032.
                </address>
              </li>
            </ol>
          </section>
        </article>
      </div>
    </main>

    <a href="https://wa.me/919380029170" target="_blank" rel="noopener noreferrer" className="grievance-policy-whatsapp" aria-label="Chat with I-Pro Infinity on WhatsApp">
      <FaWhatsapp aria-hidden="true" />
    </a>

    <Footer />
    </div>
  );
};

export default GrievancePolicy;
