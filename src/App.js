import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, useCallback } from 'react';
import CardFlipper from './components/CardFlipper';
import { Button } from '@mui/material';
import genImages from './model/imageLoader';
import { pick, initialState } from './model/memory';

function App() {

  const NB_OF_IMAGES = 12;
  const [memoryGameState, setMemoryGameState] = useState(initialState([]));
  const [currentPattern, setCurrentPattern] = useState('rhombus');

  const setGameUp = useCallback(async () => {
    const images = await genImages(NB_OF_IMAGES);
    setMemoryGameState(initialState(images));
  }, []);

  useEffect(() => {
    setGameUp();
  }, [setGameUp]);

  const PATTERNS = ['rhombus', 'isometric', 'zigzag'];

  return (
    <div className="App">
      <CssBaseline />
      <div className="App-wrapper">
        <div className="App-pattern-selector">
          {PATTERNS.map(pattern => (
            <PatternPill key={pattern} pattern={pattern} active={pattern === currentPattern} onClick={() => setCurrentPattern(pattern)} />
          ))}
        </div>
        <Button variant="contained" onClick={() => setGameUp()}>New Game</Button>
        <CardFlipper {...memoryGameState} pattern={currentPattern} flip={(index) => setMemoryGameState(pick(memoryGameState, index))}/>
      </div>
    </div>
  );
}

export default App;

function PatternPill({ pattern, active, onClick }) {
  return (
    <div
      className={`PatternPill ${active ? 'active' : ''} ${pattern}-pattern`}
      onClick={onClick}
    > </div>
  );
}
