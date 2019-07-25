import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Image, Reveal } from 'semantic-ui-react'
import {List} from './Components/list'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        employees: [
     
            {
              avatar: 'https://image.shutterstock.com/z/stock-photo-experienced-businesswoman-reading-publication-via-laptop-computer-making-research-for-planning-1051137005.jpg',
              date: 'Joined in 2013',
              header: 'Helen',
              description: 'Primary Contact',
              isWorking: false

            },
            {
              avatar: '/images/avatar/large/matthew.png',
              date: 'Joined in 2013',
              header: 'Matthew',
              description: 'Primary Contact',
              isWorking: false
            },
            {
              avatar: '/images/avatar/large/molly.png',
              date: 'Joined in 2013',
              header: 'Molly',
              description: 'Primary Contact',
              isWorking: true
            },
        ]
    }
  }       
  render () {
  return (



    <List employees={this.state.employees}>

    </List>

  );
  }
}
  
  export default App;
  