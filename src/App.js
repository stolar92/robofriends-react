import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'


class App extends Component {  // stworzono component app oparty na klasie (chyba po to zeby mogl miec swoj stete - doczytaj ? ) posiada on 2 state: robots i searchfield. React uzywa tych stejtow w renderze jako propsy
    constructor() { // zeby ustawic state zawsze musi byc constructor i nizej super
        super()
        this.state = { 
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // przechwytuje json ze strony i uaktalnia state na stronie tej jest example jak uzywac
        .then(response => response.json())
        .then(json => this.setState({ robots: json }));
     }
    
    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value }) // funkcja ktora ustawia state dla searchfield w tym momencie otrzymuje value wpisywane w inpucie
    }
    render() {
        const filteredRobots = this.state.robots.filter( robot =>{ //funkcja ktora ustawia state dla robots, filtruje to po wartosciach ktore sa w pisywane w searchfield 
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) { // dodano warunek jezeli dlugosc tablicy 0 wyswietl komunikat o ladowaniu jezeli wiekszy wyswietl komponenty
            return(
                <div className="tc">
                    <h1 className='f1'>Loading robots list</h1>
                </div>
            );
        } else{
            return(
                <div className="tc">
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }

    } //w komponencie searchBox searchChange przechowuje funkcje onSearchChange po to zeby ja triggerowac
    //CardList przechowuje funkcje filrered robots opisana wyzej
}

export default App;