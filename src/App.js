
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css"
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

class App extends Component {
  render() {
    return (

      // <Router>
      <div className="App">
        
        <NavBar/>
        
        <div className="app_content">
          <Switch>
            
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route path="/home">
              <Home/>
            </Route>

            <Route  path="/about">
              <About/>
            </Route>

            <Route  path="/projects">
              <Projects/>
            </Route>

            <Route  path="/contact">
              <Contact/>
            </Route>

          </Switch>
          
        </div>
          
      </div>
      // </Router>
    );
  }
}
 
export default App;