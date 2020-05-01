import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="">
          <h1>Simple Profile Page</h1>
                    
          <ul className="header">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
                    
          <div className="content">
            <Route path="/home" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </div>
                  
        </div>
      </HashRouter>
    );
  }
}
export default App;
