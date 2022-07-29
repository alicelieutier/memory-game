import './CardFlipper.css';
import FlipCard from './FlipCard';
import CardFront from './CardFront';
import CardBack from './CardBack';

function CardFlipper({ cards, flippedCardsIndices, matchedCards, gameOver, flip }) {

  return (
    <div className="CardFlipper">
      <p>You have matched {matchedCards.size} pairs.</p>
      { gameOver ? <h1>Well Done!</h1> : 
      <div className="CardFlipper-cards">
        {cards.map(
          (card, index) => card ?
          <FlipCard
            key={index}
            front={<CardFront url={card.url} name={card.name} />}
            back={<CardBack pattern={'rhombus'} />}
            showBack={!flippedCardsIndices.has(index)}
            flip={() => flip(index)}
          />
          : <EmptyCardSlot key={index} />
        )}
      </div> 
      }
    </div>
  );
}

export default CardFlipper;

function EmptyCardSlot({ title }) {
  return (
    <div className="FlipCard">
    </div>
  );
}

