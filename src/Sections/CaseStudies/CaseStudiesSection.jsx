import React from 'react';
import './styles.css';
import { BE_URL } from '../../App';
const CaseStudyList = ({data}) => {
  return (
    <div role="list" className="case-study-list">
      {data?.caseStudiesImages?.map((imgs, index) => (
        <img
          key={index}
          loading="eager"
          src={`${BE_URL}${imgs.url}`}
          alt={`Image-${index}`}
          className="case-study-image"
        />
      ))}
    </div>
  );
};

export default CaseStudyList;
