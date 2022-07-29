import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, useCallback } from 'react';
import CardFlipper from './components/CardFlipper';
import CardBack from './components/CardBack';
import { Button } from '@mui/material';
import genImages from './model/imageLoader';

function App() {

  const NB_OF_CARDS = 24;
  const [cards, setCards] = useState([]);

  const genCards = useCallback( async () => {
    const images = await genImages(NB_OF_CARDS);
    const cards = images.map(image => ({
      front: (<ImageCard url={image.url} name={image.name} />),
      back: (<CardBack pattern={'zigzag'} />),
    }));
    setCards(cards);
  }, []);

  useEffect(() => {
    genCards();
  }, [genCards]);

  return (
    <div className="App">
      <CssBaseline />
      <div className="App-wrapper">
        <Button variant="contained" onClick={() => genCards()}>Fetch Memes</Button>
        <CardFlipper cards={cards} />
      </div>
    </div>
  );
}

function ImageCard({ url, name }) {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="ImageCard"
    >
      <img src={url} alt={name} loading="lazy" style={{visibility: "hidden"}}/>
    </div>
  )
}

function TitleCard({ title }) {
  return (
    <div className="TitleCard">
      <h1>{title}</h1>
    </div>
  );
}

export default App;
