import './index.css';

const Navbar = () => {
  return (
    
    <header className="header">
      <nav className="navbar">
        <img src="logo.png" alt="" className="logo" width="200" />
        <ul>
          <li><a href="#events">EVENTS</a></li>
          <li><a href="#works">WORKS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>

  );
}
export default Navbar;