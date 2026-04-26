import  { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#quem-somos" onClick={() => setIsOpen(false)}>Quem somos?</a></li>
            <li><a href="#o-que-fazemos" onClick={() => setIsOpen(false)}>O que fazemos?</a></li>
            <li><a href="#noticias" onClick={() => setIsOpen(false)}>Notícias</a></li>
            <li><a href="#fale-conosco" onClick={() => setIsOpen(false)}>Transparência</a></li>
            <li><a href="#contatos" onClick={() => setIsOpen(false)}>Contatos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
