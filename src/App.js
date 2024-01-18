import './App.css';
import { useState, useEffect, createRef } from 'react';
import Button from '@mui/material/Button';
import { Yachts } from './components/Yachts/Yachts';
import { LoadingProgress } from './components/LoadingProgress';

function App() {
  const [yachts, setYachts] = useState([])
  const [loading, setLoading] = useState(false)
  const btn = createRef();

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(yachts => {
        setYachts(yachts.slice(0,5));
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
        {
          loading ? 
          <LoadingProgress /> : 
          <Yachts yachts={yachts} />
        }
    </div>
  );
}

export default App;
