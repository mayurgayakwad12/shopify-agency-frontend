import { useRef } from 'react';
import './styles.css';
import { BE_URL } from '../../App';

export default function ImageSlider({ images }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="image-slider-wrapper">
      <div onClick={scrollLeft}>
        <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#D3C3F8" />
          <path
            d="M32.0256 24.0435L32.0256 25.5203L18.1024 25.5271L24.4283 31.853L23.3677 32.9136L15.236 24.7819L23.3677 16.6502L24.4283 17.7108L18.1024 24.0367L32.0256 24.0435Z"
            fill="#140152"
            data-label-id="0"
            contentEditable="true"
            spellCheck="true"
          ></path>
        </svg>
      </div>
      <div ref={sliderRef} className="slider-container">
        {images.map((data, index) => (
          <div key={index} className="image-card">
            <div className="image-content">
              <img
                src={`${BE_URL}${data?.image?.url}`}
                alt={data.name}
                className="image"
              />
            </div>
          </div>
        ))}
      </div>
      <div onClick={scrollRight}>
        <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#D3C3F8" />
          <path
            d="M15.9744 23.9565L15.9744 22.4797L29.8976 22.4729L23.5717 16.147L24.6323 15.0864L32.764 23.2181L24.6323 31.3498L23.5717 30.2892L29.8976 23.9633L15.9744 23.9565Z"
            fill="#140152"
            data-label-id="0"
            contentEditable="true"
            spellCheck="true"
          ></path>
        </svg>
      </div>
    </div>
  );
}
