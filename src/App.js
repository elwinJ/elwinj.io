
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css"
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

class App extends Component {
  render() {
    return (
        <Router>
              <div className="App">
                
              <NavBar/>
                
                <div className="app_content">
                  <Switch>
                    
                    <Route exact path="/">
                      <Home/>
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

                    {/* <Link to="/">Home</Link>
                    
                    {/* <Link to="/about">About</Link>
                      
                    <Link to="/projects">Projects</Link> */}
  
                   {/* <Link to="/contact">Contact</Link>  */}
                  </Switch>
                  
                
                </div>
                
 
                
                {/* <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} /> */}
              </div>
        </Router>
    );
  }
}
 
export default App;