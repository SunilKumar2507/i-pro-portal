import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import './termsofuse.css';

const termsParagraphs = [
  'There is no doubt that web.iproinfinity.com(Iproinfinity), a professional portal for online brokerage, has a skilled panel on its board, which is making diligent efforts to supply true information to our visitors. But being human we are prone to make mistake at any point of time. In any way we cannot be held guilty for the information that might appears to be quite irrelevant for some section of visitors. However while visiting our site if you find out anything not up to your requirement we request you to report us as quickly as possible.',
  'In other words if you incur damage due to use of any material from our portal you cannot held responsible in that matter. As our piece of advice you have to do the verification as well as rechecking before going for your selections. For instance Iproinfinity also can be accused in case you meet with any kind of virus attack or related damage during accessing our info. There is no bar in uploading audio, text message, video and many more but we are also held no liability for those things also. Do not use any copyright materials on our site for any commercial usage.',
  'Since information on Iproinfinity portal is thoroughly updated and also modified on a regular basis we cannot be accountable for any kind of lapse in information flow to your end. In addition we have reserved the exclusive copyright of any information that is being posted on our portal. Besides loads of data, articles and other information remarks, testimonials, enquires of the clients also are being posted in our portal.',
  "In order to get acquainted with the shortcomings and utility of our portal you are advised to go through this section with due attention. Conditions of use are likely to change according to company's discretion.",
  'You authorize us to contact you via email, or sms . We will send quotes and policy related information to you on phone or email.',
];

const TermsOfUse = () => (
  <div className="terms-of-use-page">
    <Header />
    <main className="terms-of-use-main">
      <section className="terms-of-use-hero" aria-labelledby="terms-of-use-title">
        <div className="terms-of-use-hero-content">
          <p className="terms-of-use-eyebrow">I-Pro Infinity</p>
          <h1 id="terms-of-use-title">Terms &amp; Conditions</h1>
          <p>Guidelines for using our online insurance brokerage portal.</p>
        </div>
      </section>

      <section className="terms-of-use-content" aria-label="Terms and conditions content">
        {termsParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </main>
    <Footer />
  </div>
);

export default TermsOfUse;
