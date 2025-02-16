import './styles.css';

const Quote = ({ quote = {} }) => {
  return (
    <div className="quote-container">
      <div className="marquee">
        <div className="marquee-content first-content">{quote.title}</div>
        <div className="marquee-content">{quote.title}</div>
      </div>
    </div>
  );
};

export default Quote;
