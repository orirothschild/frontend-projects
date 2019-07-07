import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  storelist from '../stores/birdstore';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App todoclass={storelist}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
