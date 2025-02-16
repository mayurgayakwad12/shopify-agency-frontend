import React from 'react';
import './styles.css';
const CaseStudyList = ({data}) => {
  return (
    <div role="list" className="case-study-list">
      {data?.map((imgs, index) => (
        <img
          key={index}
          loading="eager"
          src={imgs.src}
          alt={`Image-${index}`}
          className="case-study-image"
        />
      ))}
    </div>
  );
};

export default CaseStudyList;
