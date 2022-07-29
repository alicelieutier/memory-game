import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, useCallback } from 'react';
import CardFlipper from './components/CardFlipper';
import { Button } from '@mui/material';
import genImages from './model/imageLoader';
import { pick, initialState } from './model/memory';

function App() {

  const NB_OF_IMAGES = 12;
  const [images, setImages] = useState([])
  const [memoryGameState, setMemoryGameState] = useState(initialState(images));

  useEffect(() => {
    const fetchImages = async () => {
      const images = await genImages(NB_OF_IMAGES);
      setImages(images)
    }
    fetchImages()
  }, []);

  const setGameUp = useCallback(() => {
    setMemoryGameState(initialState(images));
  }, [images]);

  useEffect(() => {
    setGameUp();
  }, [setGameUp]);

  return (
    <div className="App">
      <CssBaseline />
      <div className="App-wrapper">
        <Button variant="contained" onClick={() => setGameUp()}>New Game</Button>
        <CardFlipper {...memoryGameState} flip={(index) => setMemoryGameState(pick(memoryGameState, index))}/>
      </div>
    </div>
  );
}



export default App;
