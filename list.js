import React, { Component} from 'react'
import _ from 'lodash'
import './list.css'
import {observer} from 'mobx-react';
import  { Form, Button, Card, Divider, Segment } from 'semantic-ui-react';
import EmployeeItem from '../EmployeeItem/EmployeeItem'
import { observable, action } from 'mobx';
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

@observer
class employeeList extends Component{
    constructor(props){
        super(props);
        this.handleAdding =this.props.handleAdding.bind(this);
        
    }
  handleCreateNewEmployee = () => {
      if(this.props.isAdding){
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button onClick={this.handleAdding}>Submit</Form.Button>
      </Form>
    )
  }
}
    render(){
        return(
          <Segment.Group>
          <Segment></Segment>
          
          <Segment>
                 <Card.Group doubling itemsPerRow={2} stackable  >
            {_.map(this.props.employees ,(employee, index) => <EmployeeItem key={index} employee={employee} deleteEmployee={this.props.deleteEmployee} AddEmployee={this.handleCreateNewEmployee} fireEmployee={this.props.fireEmployee} editInformation={this.props.editInformation}/>)};
            </Card.Group>
            <Divider hidden/>
            {!this.props.isAdding && <Button primary onClick={this.handleAdding}>Add</Button>}
            {this.handleCreateNewEmployee()}
            <Divider hidden/>
            </Segment>
            </Segment.Group>
            )
    }
}


export {employeeList as List};