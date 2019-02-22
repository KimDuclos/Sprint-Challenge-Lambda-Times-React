import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'


const Cards = ({cards}) => {  // needed to replace props - cards was undefined
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {cards.map(({headline, image, author}, i) => 
            <Card headline={headline} iamge={image} author={author} key={i}/>
          )}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string,
  }))
}

export default Cards;