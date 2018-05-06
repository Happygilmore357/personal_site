import React, { Component } from 'react';
import {
    Link
  } from'react-router-dom';



class Header extends Component {
  render() {
    return (
      <header>
        
        <div className="logo">
            isaiah_fleischer
        </div>

        <nav>
            <ul>
                <li className="first">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Experience">Experience</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li className="last">
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>

      </header>
    );
  }
}

export default Header;