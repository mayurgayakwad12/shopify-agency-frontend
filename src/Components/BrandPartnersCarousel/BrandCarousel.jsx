import React from 'react';
import './styles.css';

const BrandCarousel = ({ brandsLogos }) => {
  return (
    <section className="brand-carousel">
      <div className="carousel-container">
        <div className="carousel-track">
          {[...brandsLogos, ...brandsLogos].map((brand, index) => (
            <div className="brand-item" key={index}>
              <img
                src={`${'https://backend-with-strapi-prjd.onrender.com'}${brand?.logo?.url}`}
                alt={brand.name}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
