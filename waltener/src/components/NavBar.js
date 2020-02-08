import React, { Component } from "react";
import '../stylesheets/Navbar.css';
import {Link} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className='navcontainer'>
        
        <ul className='navul'>
          <li>
            <Link to="/"><button className='button'>Startseite</button></Link>
          </li>
          <li >
            <a href="news.asp">News</a>
          </li>
          <li >
          <Link to="/contact"><button className='button'>Kontakt</button></Link> 
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
        </ul>
      </div>
    );
  }
}
