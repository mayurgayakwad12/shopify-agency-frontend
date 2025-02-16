import Footer from '../../Components/Footer/Footer';
import CaseStudyList from '../../Sections/CaseStudies/CaseStudiesSection';
import Quote from '../../Sections/Quote/Quote';

import './styles.css';

const CaseStudiesPage = ({ caseStudies, quote }) => {
  return (
    <div>
      <div className="case-studies-container">
        <div className="case-studies-name">Case Studies</div>
        <div className="hero-title">Success Stories & Results</div>
        <div className="cs-description">
          We've worked with nearly 100 brands in different modes and capacities over the years.
          Here's a few of our favorite success stories.
        </div>
        <CaseStudyList data={caseStudies} />
      </div>
      <Quote quote={quote} />
      <Footer />
    </div>  
  );
};

export default CaseStudiesPage;
