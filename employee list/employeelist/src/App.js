import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Image, Reveal } from 'semantic-ui-react'
import {List} from './Components/list/list'
import {inject,observer} from 'mobx-react'; 

@inject('employees')  
@observer //forces to re render when the data in store changes
class App extends Component{
  constructor(props) {
    super(props);
  }
  render () {
  return (
    <List employees={this.props.employees.employees}/>
  );
  }
}
  
  export default App;
  