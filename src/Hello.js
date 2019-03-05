import React, { Component } from 'react';
import './Hello.css' // zaimportowanie pliku css dla tego komponentu


const Hello = (props) => {
    return ( // opakowanie kodu html w nawiasy w returnie pozwala uzywac wiecej lini kodu niz tylko jedna 
        <div className='f1 tc'>
            <h1>Hello World</h1> 
            <p>{props.greeting}</p>
        </div>
        
    );
}


export default Hello; // wyeksportowanie klasy