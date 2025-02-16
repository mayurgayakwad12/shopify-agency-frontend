import ImageSlider from '../../Components/ImageSlider/imageSlider';

const Shopify = ({ webSesignWorkImages }) => {
  return (
    <div className="shopify-container">
      <div className="shopify-header">
        <div className="hero-title">Stunningly Crafted Shopify Solutions <br/> Driven by Insights</div>
        <div className="shopify-description">
          As Shopify Partners and a leading eCommerce Web Design Agency, we empower brands to thrive
          through strategic design and robust Shopify development. We bring a fresh strategic
          approach to your brand, focussing on delivering pixel perfect websites, built for
          Conversions & Growth.
        </div>
      </div>
      <div className="shopify-image-slider">
        <ImageSlider images={webSesignWorkImages} />
      </div>
    </div>
  );
};

export default Shopify;
