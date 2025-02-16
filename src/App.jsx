import { useEffect, useState } from 'react';
import TalkToUsButton from './BaseComponents/Buttons/RedirectionButton';
import AuditMyWebsiteButton from './BaseComponents/Buttons/Button';
import NavbarButtons from './BaseComponents/Buttons/NavbarButtons';
import BrandCarousel from './Components/BrandPartnersCarousel/BrandCarousel';
import ImageSlider from './Components/ImageSlider/imageSlider';
import ServiceCard from './Components/ServicesCards/ServicesCards';
import Footer from './Components/Footer/Footer';

import './App.css';
import Home from './Pages/Home/Home';
import DirectionIcon from './icons/DirectionIcon';
import CaseStudiesPage from './Pages/CaseStudies/CaseStudiesPage';
import Loader from './BaseComponents/Buttons/Loader';

export const BE_URL = import.meta.env.VITE_BASE_API_URL;
export const USER_TOKEN = import.meta.env.VITE_USER_JWT_TOKEN;

const BUTTONS = [
  {
    label: 'Shopify Store Build',
    id: 1,
    key: 'storeBuild',
  },
  {
    label: 'Landing Page Design',
    id: 2,
    key: 'pageDesign',
  },
  {
    label: 'Case Studies',
    id: 3,
    key: 'caseStudies',
  },
];

const getFetch = (apiEndpoit) => {
  return fetch(`${BE_URL}/api/${apiEndpoit}?populate=*`, {
    headers: {
      Authorization: `Bearer ${USER_TOKEN}`,
    },
  });
};

const BurgerMenuItems = ({ setPage, setMenuActive, menuActive, page }) => {
  return (
    <div className={`menu-items ${menuActive ? 'menu-items-active' : ''} `}>
      {BUTTONS.map(({ label, id, key }) => (
        <button
          onClick={() => {
            if (['storeBuild', 'pageDesign'].includes(key)) return;
            setPage(key);
            setMenuActive(false);
          }}
          className={`menu-btn ${page === key ? 'selected' : ''}`}
          key={key}
          value={id}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

function App() {
  const [page, setPage] = useState('home');
  const [menuActive, setMenuActive] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const [data, setData] = useState({
    serviceCards: null,
    quote: null,
    brandsLogos: null,
    webDesignWorkImages: null,
    caseStudies: null,
  });

  useEffect(() => {
    Promise.all([
      getFetch('service-cards').then((res) => res.json()),
      getFetch('quote').then((res) => res.json()),
      getFetch('brands-logos').then((res) => res.json()),
      getFetch('web-design-works').then((res) => res.json()),
      getFetch('case-studies').then((res) => res.json()),
    ])
      .then(([serviceCards, quote, brandsLogos, webDesignWorkImages, caseStudies]) => {
        setData({
          serviceCards: serviceCards.data,
          quote: quote.data,
          brandsLogos: brandsLogos.data,
          webDesignWorkImages: webDesignWorkImages.data,
          caseStudies: caseStudies.data,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setPageLoading(false);
      });
  }, []);

  if (pageLoading) {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <Loader />
      </div>
    );
  }

  const propsForBurgerMenu = {
    page,
    setPage,
    menuActive,
    setMenuActive,
  };

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
      {page === 'home' && <Home setPage={setPage} data={data} />}
      {page === 'caseStudies' ? (
        <CaseStudiesPage caseStudies={data.caseStudies} quote={data.quote || {}} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
