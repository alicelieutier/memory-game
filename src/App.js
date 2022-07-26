import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FlipCard from './FlipCard';
import { useState } from 'react';

function App() {

  const CARDS = [
    { front: 'Card 1', back: 'This is the first card' },
    { front: 'Card 2', back: 'This is the second card' },
    { front: 'Card 3', back: 'This is the third card' },
    { front: 'Card 4', back: 'This is the fourth card' },
    { front: 'Card 5', back: 'This is the fifth card' },
    { front: 'Card 6', back: 'This is the sixth card' },
    { front: 'Card 7', back: 'This is the seventh card' },
    { front: 'Card 8', back: 'This is the eighth card' },
    { front: 'Card 9', back: 'This is the ninth card' },
    { front: 'Card 10', back: 'This is the tenth card' },
    { front: 'Card 11', back: 'This is the eleventh card' },
  ];

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
    <div className="App">
      <CssBaseline />
      <div className="App-wrapper">
        <Button variant="contained" onClick={() => setFlippedCardsIndices(new Set())}>RESET</Button>
        <div className="App-cards">
          {CARDS.map(
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
    </div>
  );
}

export default App;
