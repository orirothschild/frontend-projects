import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'mobx-react';
import  storelist from './Components/stores/birdstore';
import 'react-mobile-devices/dist/style.css';
import { Nexus } from 'react-mobile-devices';
const Root = (
    <Provider todoclass={storelist}>
        <App todoclass={storelist}/>
    </Provider>
)
ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
