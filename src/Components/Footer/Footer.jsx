import React from 'react';
import './styles.css';

const cursorStyle = {
	cursor: 'pointer',
};

const Footer = ({ setPage }) => {
	return (
		<section className="footer">
			<div className="footer-container">
				<div className="footer-left">
					<a href="/" aria-current="page">
						<div className="logo">boco</div>
					</a>
					<div className="footer-description">
						We are driven by quality and we’re 0 bullshit. If you think the same way, we love a good
						chat.
					</div>
					<div className="social-icons">
						<img
							src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6706351059ed547b7733da1b_Vector%20(12).svg"
							alt="Instagram"
							className="social-icon"
						/>
						<img
							src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6731b34f0fce48fafa0ab302_basil_linkedin-solid.png"
							alt="LinkedIn"
							className="social-icon"
						/>
					</div>
				</div>

				<div className="footer-right">
					<div>
						<h4 className="footer-heading">Products</h4>
						<div className="right-products">
							<div style={cursorStyle}>Shopify Store Build</div>
							<div style={cursorStyle}>Custom Landing Pages</div>
							<div
								style={cursorStyle}
								onClick={() => {
									window.scrollTo({ top: 0, behavior: 'smooth' });
									setPage('caseStudies');
								}}
							>
								Case Studies
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-divider"></div>
			<div className="footer-bottom">
				<div className="footer-text">© Copyright, BOCO 2024</div>
			</div>
		</section>
	);
};

export default Footer;
