import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; // po zainstalowaniu zaimportowano tachyons cos w stylu bootstrapa
import { robots } from './robots'; // w pliku robots zastosowano sam export (czyli plik moze miec wiecj niz jeden export) bez default ( default tylko jeden export) dlatego dano to w klamrach
import CardList from './CardList';

ReactDOM.render(
                <CardList robots={robots}/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
