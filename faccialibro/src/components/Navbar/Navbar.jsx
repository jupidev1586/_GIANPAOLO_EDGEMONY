import './index.css';

const Navbar = () => {
  
  return (
    <header className="Navbar__header">
      <div className="container">
        <nav className="Navbar__nav">
          <img src="logo.png" alt="" className="logo" width="45" />
          <ul className="list-unstyled">
            <li>EVENTS</li>
            <li>GROUPS</li>
            <li>ME</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;