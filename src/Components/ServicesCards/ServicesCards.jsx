import React from 'react';
import './styles.css';

const DATA = [
  {
    title: 'Conversion Rate <br/> Optimisation',
    services: [
      'Design Optimization',
      'Speed Optimization',
      'On Page SEO',
      'Tech Maintenance & Support',
    ],
    iconSrc:
      'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b719e3d75143640db60b_CRO.png',
    iconAlt: 'Web Platforms Icon',
  },
  {
    title: 'UI / UX <br/> Design',
    services: [
      'Landing Pages',
      'Visual Identity (Web & Digital)',
      'Icons & Illustrations',
      'Assets & Components',
    ],
    iconSrc:
      'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b719de870e6b0eade322_UX.png',
    iconAlt: 'Web Platforms Icon',
  },
  {
    title: 'Web <br/> Development',
    services: [
      'Code & E-commerce Customization',
      'Third Party & Custom Apps',
      'Front End Development',
      'Back end & CMS Setup',
    ],
    iconSrc:
      'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b7193510ca1863111ec5_WD.png',
    iconAlt: 'Web Platforms Icon',
  },
];

const ServiceCard = ({ serviceCards }) => {
  console.log({ serviceCards });
  return (
    <div className="service-card-conatiner">
      {serviceCards.map((card) => (
        <div className="service-card-d2c" key={card.title}>
          <div className="service-details-d2c">
            <img
              loading="eager"
              src={`${import.meta.env.VITE_BASE_API_URL}${card?.cardImage?.url}`}
              alt={card.iconAlt}
              className="image-208"
            />
          </div>
          <div className="servise-detail-d2c">
            <div className="sd-title-d2c">
              <div
                className="text-block-79"
                dangerouslySetInnerHTML={{ __html: card.title.replace(/\n/g, '<br/>') }}
              />
            </div>
            <div className="sd-features-d2c">
              {((card.services || '').split(',') || []).map((srv) => (
                <div className="sd-features--d2c" key={srv}>
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg"
                    alt=""
                  />
                  <div className="text-block-37">{srv}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
