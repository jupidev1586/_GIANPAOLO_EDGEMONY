import './index.css';
import Button from '../Button/Button';
import { useState } from 'react';

const Navbar = ({onHandleClick, propState}) => {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);
  console.log('propState Navbar', propState)
  return (
    
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Button btnTextCont="show / hide" propState={ () => setGalleryVisibility(!isGalleryVisibile)} />
        </nav>
      </div>
    </header>

  );
}
export default Navbar;