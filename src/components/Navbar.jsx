import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
      <Link to="/products" style={{ margin: '0 1rem' }}>Products</Link>
      <Link to="/services" style={{ margin: '0 1rem' }}>Services</Link>
    </nav>
  );
};

export default Navbar;
