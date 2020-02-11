import React from 'react';
import {Switch, Route} from "react-router-dom";
import '../src/stylesheets/App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <NavBar/>
     <div>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      </Switch>
     </div>
    </div>
  );
}

export default App;
