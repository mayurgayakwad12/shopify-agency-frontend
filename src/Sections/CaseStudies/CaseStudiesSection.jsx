import React from 'react'
import './styles.css'

const caseStudies = [
	{
		imgSrc: 'https://cdn.prod.website-files.com/65ded9eabc08178230e44733/673315e4525121b4443a35d4_Case%20Study%20SW%20Container.png',
		imgAlt: 'Stylish Wardrobe'
	},
	{
		imgSrc: 'https://cdn.prod.website-files.com/65ded9eabc08178230e44733/6733160417ca4a8acc23a05d_Case%20Study%20TGL%20Container.png',
		imgAlt: 'The Good Leaf'
	}
]

const CaseStudyList = () => {
	return (
		<div role="list" className="case-study-list">
			{caseStudies.map((study, index) => (
				<div role="listitem" className="case-study-item" key={index}>
					<img
						loading="eager"
						src={study.imgSrc}
						alt={study.imgAlt}
						className="case-study-image"
					/>
				</div>
			))}
		</div>
	)
}

export default CaseStudyList
