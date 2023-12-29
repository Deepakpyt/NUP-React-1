import React, { Component } from 'react';
import './NavBar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">D<sup>S</sup></div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
