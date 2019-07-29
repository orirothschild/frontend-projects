
import React, { Component} from 'react'
import _ from 'lodash'
import './list.css'
import {observer} from 'mobx-react'; 
import EmployeeItem from '../EmployeeItem/EmployeeItem'

@observer
class employeeList extends Component{
  handleCreateNewEmployee(event) {
    
}
    render(){
        return _.map(this.props.employees ,(employee, index) => <EmployeeItem key={index} employee={employee} deleteEmployee={this.props.deleteEmployee}/>);
    }
}


export {employeeList as List};
