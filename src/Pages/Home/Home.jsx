import { useEffect, useState } from 'react';
import AuditMyWebsiteButton from '../../BaseComponents/Buttons/Button';
import BrandCarousel from '../../Components/BrandPartnersCarousel/BrandCarousel';
import Footer from '../../Components/Footer/Footer';
import CaseStudyList from '../../Sections/CaseStudies/CaseStudiesSection';
import Contact from '../../Sections/Contact/Contact';
import HeroSection from '../../Sections/HeroSection/HeroSection';
import Quote from '../../Sections/Quote/Quote';
import Services from '../../Sections/Services/Services';
import Shopify from '../../Sections/Shopify/Shopify';

import './styles.css';

const StarDivider = () => (
  <div className="star-divider">
    <div className="star-left-divider"></div>
    <div className="star-text">
      {Array(5)
        .fill(
          'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707d64d12c30c0aab593a83_Vector.svg'
        )
        .map((star, index) => (
          <img src={star} key={index} loading="lazy" alt="" data-label-id="0" />
        ))}
      &nbsp; 90+ Brands & Counting
    </div>
    <div className="star-right-divider"></div>
  </div>
);

const Home = ({ setPage, data }) => {
  return (
    <div>
      <HeroSection />
      <StarDivider />
      <BrandCarousel brandsLogos={data.brandsLogos || []} />
      <div className="star-right-divider"></div>
      <Shopify webSesignWorkImages={data.webDesignWorkImages || []} />
      <Services serviceCards={data.serviceCards || []} />
      <div className="shopify-container">
        <div className="shopify-header">
          <div className="hero-title">{data.caseStudies?.title}</div>
        </div>
        <div className="case-studies-imgs">
          <CaseStudyList data={data.caseStudies} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AuditMyWebsiteButton label="View Case Studies" padding="14px 100px" />
        </div>
      </div>
      <Contact />
      <Quote quote={data.quote || {}} />
      <Footer setPage={setPage} />
    </div>
  );
};

export default Home;
