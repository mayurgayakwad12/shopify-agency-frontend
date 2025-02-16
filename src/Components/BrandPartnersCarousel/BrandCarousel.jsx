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
                src={brand.src}
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
