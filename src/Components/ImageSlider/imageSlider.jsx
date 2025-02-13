import { useRef } from 'react'
import './styles.css'

const images = [
	'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729bb944f95811e3e779e6f_Card%20Image.png',
	'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729bb94defd4d3938d13ab8_Card%20Image-1.png',
	'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729bb976fa22091601dfe7e_Card%20Image-2.png',
	'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729bb956fa22091601dfcb6_Card%20Image-2%20(1).png',
	'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729bb97b6cb7fa93cf1c553_Card%20Image-3.png',
	'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729bb95fc86a994376369ab_Card%20Image%20(1).png',
	'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729bb9521e7ca61fcf73e2c_Card%20Image-1%20(1).png',
	'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729bb97474d3e3e0852c57b_Card%20Image-4.png'
]

export default function ImageSlider() {
	const sliderRef = useRef(null)

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' })
		}
	}

	const scrollRight = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' })
		}
	}

	return (
		<div className="image-slider-wrapper">
			<div onClick={scrollLeft}>
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="24" cy="24" r="24" fill="#D3C3F8" />
					<path
						d="M32.0256 24.0435L32.0256 25.5203L18.1024 25.5271L24.4283 31.853L23.3677 32.9136L15.236 24.7819L23.3677 16.6502L24.4283 17.7108L18.1024 24.0367L32.0256 24.0435Z"
						fill="#140152"
						data-label-id="0"
						contenteditable="true"
						spellcheck="true"
					></path>
				</svg>
			</div>
			<div ref={sliderRef} className="slider-container">
				{images.map((src, index) => (
					<div key={index} className="image-card">
						<div className="image-content">
							<img
								src={src}
								alt={`Slide ${index + 1}`}
								className="image"
							/>
						</div>
					</div>
				))}
			</div>
			<div onClick={scrollRight}>
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="24" cy="24" r="24" fill="#D3C3F8" />
					<path
						d="M15.9744 23.9565L15.9744 22.4797L29.8976 22.4729L23.5717 16.147L24.6323 15.0864L32.764 23.2181L24.6323 31.3498L23.5717 30.2892L29.8976 23.9633L15.9744 23.9565Z"
						fill="#140152"
						data-label-id="0"
						contenteditable="true"
						spellcheck="true"
					></path>
				</svg>
			</div>
		</div>
	)
}
