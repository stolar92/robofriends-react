import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; // w pliku robots zastosowano sam export (czyli plik moze miec wiecj niz jeden export) bez default ( default tylko jeden export) dlatego dano to w klamrach


class App extends Component {  // stworzono component app oparty na klasie (chyba po to zeby mogl miec swoj stete - doczytaj ? )
    constructor() { // zeby ustawic state zawsze musi byc constructor i nizej super
        super()
        this.state = { 
            robots: robots,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobots = this.state.robots.filter( robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    } //w komponencie searchBox searchChange przechowuje funkcje onSearchChange po to zeby ja triggerowac
    //CardList przechowuje robots state
}

export default App;