import './CardFlipper.css';
import { useState } from 'react';
import FlipCard from './FlipCard';
import Button from '@mui/material/Button';

function CardFlipper({ cards }) {
  const [flippedCardsIndices, setFlippedCardsIndices] = useState(new Set())

  const flippingCard = (index) => {
    if (flippedCardsIndices.has(index)) {
      flippedCardsIndices.delete(index)
      setFlippedCardsIndices(new Set(flippedCardsIndices))
    } else {
      setFlippedCardsIndices(new Set([...flippedCardsIndices, index]))
    }
  }

  return (
    <div className="CardFlipper">
      <Button variant="contained" onClick={() => setFlippedCardsIndices(new Set())}>RESET</Button>
      <div className="CardFlipper-cards">
        {cards.map(
          (card, index) => <FlipCard
            key={index}
            front={card.front}
            back={card.back}
            showBack={!flippedCardsIndices.has(index)}
            flip={() => flippingCard(index)}
          />
        )}
      </div>
    </div>
  );
}

export default CardFlipper;