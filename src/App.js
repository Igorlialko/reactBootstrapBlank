import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navbar"
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div style={{display:'flex',flexDirection:'column',minHeight:'100vh'}}>
        <Router>
        <Navibar/>
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About /> } />
            <Route path="/users" render={() => <Users /> } />
        </Switch>
            <Footer />
        </Router>
        </div>
    )
};
export default App;
