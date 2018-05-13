import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from'react-router-dom';



// components

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './components/home/Home';
import Projects from './components/projects/Projects';



class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <Header />

                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/projects" component={Projects} />

                    <Footer />

                </div>
            </Router>
        );
    }
}


export default App;
