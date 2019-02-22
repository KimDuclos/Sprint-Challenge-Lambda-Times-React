import React from 'react';
import PropTypes from 'prop-types';


const Card = ({headline, image, author}) => { // needed to replace props to fix undefined errors
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="image-container">
          <image src={image} />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  headline: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
}

export default Card;
