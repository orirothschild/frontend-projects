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
              avatar: 'https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg',
              date: 'Joined in 2013',
              header: 'Helen',
              description: 'Primary Contact',
              isWorking: false

            },
            {
              avatar: 'https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg',
              date: 'Joined in 2013',
              header: 'Matthew',
              description: 'Primary Contact',
              isWorking: false
            },
            {
              avatar: 'https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg',
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
  