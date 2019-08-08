import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Image, Reveal } from 'semantic-ui-react'
import {List} from './Components/list/list'
import {inject,observer} from 'mobx-react'; 

@inject('employees')  
@observer //forces to re render when the data in store changes
class App extends Component{
  render () {
    let {employees} = this.props;
  return (
    <List employees={employees.employees} editInformation = {employees.editInformation} handleAdding={employees.handleAdding}  isAdding={employees.isAdding} fireEmployee={employees.changeEmploymentStatus} deleteEmployee={employees.deleteEmployee}/>
  );
  }
}
  
  export default App;
  