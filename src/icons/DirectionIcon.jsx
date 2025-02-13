const DirectionIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
		>
			<circle cx="24" cy="24" r="24" fill="#140152" />
			<mask
				id="mask0_302_17084"
				style={{ maskType: 'alpha' }}
				maskUnits="userSpaceOnUse"
				x="12"
				y="12"
				width="24"
				height="24"
			>
				<rect x="12" y="12" width="24" height="24" fill="#fff" />
			</mask>
			<g mask="url(#mask0_302_17084)">
				<path
					d="M18.2942 29.6442L17.25 28.6L27.0904 18.75H18.1442V17.25H29.6442V28.75H28.1442V19.8038L18.2942 29.6442Z"
					fill="#fff"
				/>
			</g>
		</svg>
	)
}

export default DirectionIcon;
