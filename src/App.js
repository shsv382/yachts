import './App.css';
import { useState, useEffect, createRef } from 'react';
import { Photo } from './components/Photo/Photo';
import Button from '@mui/material/Button';

function App() {
  const [photos, setPhotos] = useState([])
  const btn = createRef();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(setPhotos)
  }, [])

  return (
    <div className="App">
      <Button variant="contained" ref={btn}>Contained</Button>
      <div>
        {photos.map(photo => <Photo url={photo.url} />)}
      </div>
    </div>
  );
}

export default App;
