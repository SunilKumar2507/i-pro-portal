import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer';
import './privacypolicy.css';

const policyParagraphs = [
  'At iproinfinity there is no scope for any kind of violation of copyright or any other intellectual copyright issues. The information that is given on iproinfinity is left for the judgment of the same and is to be expected to change without notification. We make no delay to communicate any changes in matters of public value and efficacy.',
  'At iproinfinity there is no scope for any kind of violation of copyright or any other intellectual copyright issues. The information that is given on iproinfinity is left for the judgment of the same and is to be expected to change without notification. We make no delay to communicate any changes in matters of public value and efficacy.',
  'iproinfinity has taken every possible step to sustain standards in intelligibility, excellence as well as the correctness of the materials that are being published on our portal. However iproinfinity is not lawfully responsible for all such things being mentioned there. It is to be noted that all the partners, employees and allied staffs who are associated with iproinfinity are also not liable for any kind of failure, impairment or any kind of damages that might occur due to the use of information from our portal. In such cases customers are given the advice to apply their own wisdom and prudence in order to know the shortcomings of the insurance policies and the risks involved. iproinfinity are not accountable for any such issues.',
  'You are advised to go through the documents with rapt attention and sincerity. The common perception is that the customers will get associated with our portal at their personal risk and preferential criteria.',
  "All the visitors of Array must take note of the fact that portal's owner are not the agents or intermediaries of the insurance providers whose products are dealt with in this portal. Although honest venture is taken to create accurate comparison of product policies, and other things like features, quotes and many more on the basis of the information being given by the providers or insurers or its agents, it is being clear that iproinfinity is not answerable for any client for investment decision, and everyone should be only bear the brunt of the outcome of his/her decision.",
];

const PrivacyPolicy = () => (
  <div className="privacy-policy-page">
    <Header />
    <main className="privacy-policy-main">
      <section className="privacy-policy-hero" aria-labelledby="privacy-policy-title">
        <div className="privacy-policy-hero-content">
          <p className="privacy-policy-eyebrow">I-Pro Infinity</p>
          <h1 id="privacy-policy-title">Privacy &amp; Policy</h1>
          <p>Our commitment to transparent and responsible service.</p>
        </div>
      </section>

      <section className="privacy-policy-content" aria-label="Privacy policy content">
        {policyParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
