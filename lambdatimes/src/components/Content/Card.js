import React from 'react';

const Card = props => {
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

Card.protoTypes = {
  headline: Prototype.string,
  image: PropTypes.string,
  author: PropTypes.string
}

export default Card;
