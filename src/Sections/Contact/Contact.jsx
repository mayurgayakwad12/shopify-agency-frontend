import AuditMyWebsiteButton from '../../BaseComponents/Buttons/Button'
import TalkToUsButton from '../../BaseComponents/Buttons/RedirectionButton'

import './styles.css'

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="hero-title">Let’s Get Started</div>
			<div className="contact-buttons">
				<TalkToUsButton label="Book a Call" />
				<AuditMyWebsiteButton label="Audit your Website" />
			</div>
		</div>
	)
}

export default Contact
