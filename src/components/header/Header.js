import React, { Component } from 'react';
import {
    Link
} from'react-router-dom';

import '../../Assets/css/Header.min.css';

class Header extends Component {
    render() {
        return (
            <header className="container-fluid">

                <div className="logo">
                    <div className="typewriter">Isaiah Fleischer</div>
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
