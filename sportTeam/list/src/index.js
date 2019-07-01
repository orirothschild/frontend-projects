import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';

let todoItems = [];
todoItems.push({index: 1, value: "Write my todo list", done: true});
todoItems.push({index: 2, value: "learn react", done: false});
todoItems.push({index: 3, value: "learn Webpack", done: false});
todoItems.push({index: 4, value: "learn ES6", done: false});
todoItems.push({index: 5, value: "learn Routing", done: false});
todoItems.push({index: 6, value: "learn Redux", done: false});

ReactDOM.render(<App todoItems={todoItems}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
