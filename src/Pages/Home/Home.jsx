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

const Home = ({ setPage }) => {
	return (
		<div>
			<HeroSection />
			<StarDivider />
			<BrandCarousel />
			<div className="star-right-divider"></div>
			<Shopify />
			<Services />
			<div className="shopify-container">
				<div className="shopify-header">
					<div className="hero-title">Read our recent Case Studies</div>
				</div>
				<div className="case-studies-imgs">
					<CaseStudyList />
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<AuditMyWebsiteButton label="View Case Studies" padding="14px 100px" />
				</div>
			</div>
			<Contact />
			<Quote />
			<Footer setPage={setPage} />
		</div>
	);
};

export default Home;
