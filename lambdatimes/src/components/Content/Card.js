import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data';


const Card = ({headline, img, author}) => { // needed to replace props to fix undefined errors
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="image-container">
          {/* added alt - no alt causes warning */}
          <img src={img} alt="articleImage"/> 
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  headline: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.string,
}

export default Card;
