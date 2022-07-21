import { useState } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
// import Button from './components/Button';
import './App.css';

function App(propState) {
  const [galleryVisibility, setGalleryVisibility] = useState(true);
  console.log('propState', propState)
  return (
    <div className="App">
      <Navbar propState={ () => setGalleryVisibility(!propState) } />
      <Hero />
      <Gallery visibility={galleryVisibility} />
    </div>
  );
}

export default App;
