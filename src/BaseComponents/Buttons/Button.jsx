import './styles.css'
const AuditMyWebsiteButton = ({ label = 'Audit My Website', padding = '' }) => {
	return (
		<button className="audit-btn" style={{ padding }}>
			{label}
		</button>
	)
}

export default AuditMyWebsiteButton
