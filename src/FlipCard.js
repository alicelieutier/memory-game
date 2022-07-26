import './FlipCard.css';
import * as React from 'react';
import { useState } from 'react';

function FlipCard({front, back, showBack, flip}) {
  const flippedClass = showBack ? 'flipped' : '';

  return (
    <div
      className="FlipCard"
      onClick={() => flip()}
    >
      <div className={`FlipCard-rotator ${flippedClass}`}>
        <div className="FlipCard-front">
          {front}
        </div>
        <div className="FlipCard-back">
          {back}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
