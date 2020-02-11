import React, { Component } from "react";
import '../stylesheets/Contact.css';

export default class Contact extends Component {
    render() {
      return (
        <div className='contact'>
           
            <h1 className='conHeadLine'>Ihr Vermieter:</h1>
            <div>Familie Menzel</div>
            <div>Stieglitzweg 3</div>
            <div>87527 Sonthofen</div>

            <p>Tel.: 0151-58223899</p>
           <p> <a href="mailto:menzelfrank@gmail.com">Schreiben Sie uns eine E-Mail</a>
           </p>
        </div>
      );
    }
  }
  

