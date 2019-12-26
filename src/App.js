import React, { Component } from 'react';
// import Navbar from './components/Header/Navbar';
import Section from "./components/Section";
import './App.scss';
import OlivieriPhoto from "./components/pageComponents/OlivieriPhoto";
import Passionate from "./components/pageComponents/Passionate";
import SkateSpot from "./components/pageComponents/SkateSpot";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
           <Switch>
             <Route path="/" exact component={Section} />
            <Route path="/OlivieriPhoto" component={OlivieriPhoto} />
            <Route path="/SkateSpot" component={SkateSpot} />
            <Route path="/Passionate" component={Passionate} />
          </Switch>
        </Router>
       
      </div>
    );
  }
}