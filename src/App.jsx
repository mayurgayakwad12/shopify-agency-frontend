import { useState } from 'react'
import TalkToUsButton from './BaseComponents/Buttons/RedirectionButton'
import AuditMyWebsiteButton from './BaseComponents/Buttons/Button'
import NavbarButtons from './BaseComponents/Buttons/NavbarButtons'
import BrandCarousel from './Components/BrandPartnersCarousel/BrandCarousel'
import ImageSlider from './Components/ImageSlider/imageSlider'
import ServiceCard from './Components/ServicesCards/ServicesCards'
import Footer from './Components/Footer/Footer'

import './App.css'
import Home from './Pages/Home/Home'
import DirectionIcon from './icons/DirectionIcon'
import CaseStudiesPage from './Pages/CaseStudies/CaseStudiesPage'

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

const BurgerMenuItems = ({ setPage, setMenuActive, menuActive, page }) => {
	return (
		<div className={`menu-items ${menuActive ? 'menu-items-active' : ''} `}>
			{BUTTONS.map(({ label, id, key }) => (
				<button
					onClick={() => {
						if (['storeBuild', 'pageDesign'].includes(key)) return
						setPage(key)
						setMenuActive(false)
					}}
					className={`menu-btn ${page === key ? 'selected' : ''}`}
					key={key}
					value={id}
				>
					{label}
				</button>
			))}
		</div>
	)
}

function App() {
	const [page, setPage] = useState('home')
	const [menuActive, setMenuActive] = useState(false)

	const propsForBurgerMenu = {
		page,
		setPage,
		menuActive,
		setMenuActive
	}

	return (
    <div className="page-container">
      <BurgerMenuItems {...propsForBurgerMenu} />
      <div className="page-header-conatiner">
        <div className="destop-header-view">
          <div className="logo" onClick={() => setPage('home')}>
            boco
          </div>
          <NavbarButtons page={page} setPage={setPage} />
          <TalkToUsButton />
        </div>
        <div className="mobile-header-view">
          <div
            style={{
              fontSize: '28px',
              cursor: 'pointer',
              zIndex: 1,
            }}
            onClick={() => setMenuActive((prev) => !prev)}
          >
            ☰
          </div>
          <div
            className="logo"
            onClick={() => {
              setPage('home');
              setMenuActive(false);
            }}
          >
            boco
          </div>
          <DirectionIcon />
        </div>
      </div>
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'caseStudies' ? <CaseStudiesPage /> : <></>}
    </div>
  );
}

export default App
