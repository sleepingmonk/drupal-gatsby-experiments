import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <Link to="/" className='logo'>G+D</Link>
    <nav>
      <Link to="/" activeClassName="current-page">Home</Link>
      <Link to="/solutions" activeClassName="current-page">Solutions</Link>
      <Link to="/about" activeClassName="current-page">About</Link>
      <Link to="/contact" activeClassName="current-page">Contact</Link>
    </nav>
  </header>
)

export default Header;
