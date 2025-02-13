import './styles.css'

const BUTTONS = [
	{
		label: 'Shopify Store Build',
		id: 1,
		key: 'storeBuild'
	},
	{
		label: 'Landing Page Design',
		id: 2,
		key: 'pageDesign'
	},
	{
		label: 'Case Studies',
		id: 3,
		key: 'caseStudies'
	}
]
const NavbarButtons = ({ page, setPage }) => {
	return (
		<div className="navbar-buttons-container">
			{BUTTONS.map(({ label, id, key }) => (
				<button
					onClick={() => {
						if (['storeBuild', 'pageDesign'].includes(key)) return
						setPage(key)
					}}
					className={`navbar-btn ${page === key ? 'selected' : ''}`}
					key={key}
					value={id}
				>
					{label}
				</button>
			))}
		</div>
	)
}

export default NavbarButtons
