import React from 'react'
import './styles.css'
import TalkToUsButton from '../../BaseComponents/Buttons/RedirectionButton'
import AuditMyWebsiteButton from '../../BaseComponents/Buttons/Button'

const HeroSection = () => {
	return (
		<section className="hero-section">
			<div className="hero-container">
				{/* Left Content */}
				<div className="hero-left">
					<div className="hero-title" style={{ textAlign: 'left' }}>
						We build high-converting Shopify stores that drive
						Profit
					</div>
					<p className="hero-description">
						We're a leading Shopify & Shopify Plus agency who design
						and develop strategic ecommerce websites.
					</p>
					<div className="hero-features">
						<div className="feature-item">
							<img
								src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
								alt="Check"
								className="feature-icon"
							/>
							<span>Unmatched Speed & Stability</span>
						</div>
						<div className="feature-item">
							<img
								src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
								alt="Check"
								className="feature-icon"
							/>
							<span>Build for Conversions</span>
						</div>
						<div className="feature-item">
							<img
								src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
								alt="Check"
								className="feature-icon"
							/>
							<span>
								Reduced App Stack & Developer Dependencies
							</span>
						</div>
					</div>
					<div className="hero-buttons">
						<AuditMyWebsiteButton />
						<TalkToUsButton />
					</div>
				</div>

				{/* Right Image */}
				<div className="hero-right">
					<img
						src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop.png"
						loading="eager"
						sizes="(max-width: 767px) 100vw, (max-width: 991px) 61vw, 609px"
						srcset="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop-p-500.png 500w, https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop-p-800.png 800w, https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop-p-1080.png 1080w, https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop-p-1600.png 1600w, https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c167178be759471f6168_Hero%20Section%20Desktop.png 1827w"
						alt=""
						class="hero-image"
					/>
					<img
						src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c1658b96e961ea3c6b9e_Hero%20Section.png"
						loading="lazy"
						sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 100vw"
						srcset="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c1658b96e961ea3c6b9e_Hero%20Section-p-500.png 500w, https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c1658b96e961ea3c6b9e_Hero%20Section-p-800.png 800w, https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c1658b96e961ea3c6b9e_Hero%20Section-p-1080.png 1080w, https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729c1658b96e961ea3c6b9e_Hero%20Section.png 1468w"
						alt=""
						className="hero-image-mobile-view"
					/>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
