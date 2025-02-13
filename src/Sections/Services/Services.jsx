import ServiceCard from '../../Components/ServicesCards/ServicesCards'

const Services = () => {
	return (
		<div className="shopify-container">
			<div className="shopify-header">
				<div className="hero-title">
					Enhance customer experience <br /> by focusing on the
					details that matters most
				</div>
			</div>
			<div className='services-card-container'>
				<ServiceCard />
			</div>
		</div>
	)
}

export default Services
