import React, { Component } from 'react';
import './Hello.css' // zaimportowanie pliku css dla tego komponentu

class Hello extends Component { // stworzono klase ktoraa rozszerzona jest o Component, ktory zaimportowano na samej gorze. Klasa rysuje i zwraca H1
    render() {
        return ( // opakowanie kodu html w nawiasy w returnie pozwala uzywac wiecej lini kodu niz tylko jedna 
            <div className='f1 tc'>
                <h1>Hello World</h1> 
                <p>{this.props.greeting}</p>
            </div>
            
        );
    }
}

export default Hello; // wyeksportowanie klasy