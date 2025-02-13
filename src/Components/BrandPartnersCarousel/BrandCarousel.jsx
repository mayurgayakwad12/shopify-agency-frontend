import React from 'react';
import './styles.css';

const brands = [
  {
    name: 'Vahdam',
    src: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b01de54722aaeb8bc182_Vadam.png',
  },
  {
    name: 'Good Leaf',
    src: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b01597cd7a46186130a2_Good%20Leaf.png',
  },
  {
    name: 'Wardrop',
    src: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b018fa02c1674d4e9eeb_SW.png',
  },
  {
    name: 'Vibrant Living',
    src: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b01863ec1c635b7ea7d7_Vibrent%20Living.png',
  },
  {
    name: 'Jolly Designs',
    src: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b016de870e6b0ea79a87_Jolly%20Designs.png',
  },
  {
    name: 'Johi',
    src: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b017fc8c9edb9169fa8b_Johi.png',
  },
  {
    name: 'Relaxwell',
    src: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b017d8d12709d1080d98_Relaxwell(1).png',
  },
  {
    name: 'Clensta',
    src: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b0150279ef3bbf173aca_Clensta.png',
  },
  {
    name: 'Sleepy Owl',
    src: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b01797cd7a4618613127_Sleepy%20Owl.png',
  },
  {
    name: 'Rovectin',
    src: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b017fcda1368d9e4d19c_Rovectin.png',
  },
];

const BrandCarousel = () => {
  return (
    <section className="brand-carousel">
      <div className="carousel-container">
        <div className="carousel-track">
          {/* Duplicate brands to make the animation seamless */}
          {[...brands, ...brands].map((brand, index) => (
            <div className="brand-item" key={index}>
              <img src={brand.src} alt={brand.name} loading="eager" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
