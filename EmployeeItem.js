import React, { Component, Fragment } from 'react'
import {observer} from 'mobx-react'; 
import { Button, Card, Image, Reveal, Divider, Icon, List  } from 'semantic-ui-react'
import worker from './male.jpg'
import femaleWorker from './female.jpg'


@observer
 class EmployeeItem extends Component{
   constructor(props) {
     super(props);
     this.avatar = this.props.employee.avatar;
     this.hired = this.props.employee.isWorking === true ? "currently hired" : "fired";
     if(this.avatar === ''){
       this.avatar = this.props.employee.gender === 'female' ? femaleWorker : worker;
     }
   } 
   
    render() {
        let {employee} = this.props;
        let {index} = this.props;
        
        return (
          <div className="ui raised container segment">
           
              <Card key={index}>
                <Image src={this.avatar} size='large' circular />
                <Divider hidden/>
                    <Card.Content>
                    <Fragment>
                    <Card.Header>{employee.header}</Card.Header>
                    <Card.Meta>{employee.date}</Card.Meta>
                    <Card.Meta>{employee.city !== '' && employee.city}</Card.Meta>
                    <Card.Meta>{employee.vehicle && <Icon name='car' size='mini' />}</Card.Meta>
                    <Card.Meta>{employee.gender}</Card.Meta>
                    <List.Item
                    content={<a href={`mailto:${employee.email}`} >{employee.email}</a>}
                    />
                    <Card.Description>{employee.description}</Card.Description>
                    </Fragment>
                    <Divider/>
                    <Card.Header color='green' >{employee.isWorking && this.hired}</Card.Header>
                    <Divider/>
                    </Card.Content>
                    <Card.Content extra>
                      <Button circular className="btn btn-primary btn-xs" onClick={this.props.deleteEmployee.bind( this, employee)}>Delete</Button>
                      <Button circular className="btn btn-primary btn-xs" onClick={this.props.fireEmployee.bind( this, employee)}>Status</Button>
                      <Button circular className="btn btn-primary btn-xs" onClick={this.props.fireEmployee.bind( this, employee)}>Update</Button>
                      {/* <Button circular className="btn btn-primary btn-xs" onClick={this.props.editInformation.bind( this, employee)}>edit</Button> */}
                    </Card.Content>
                  </Card>
            </div>
          )
        }

        onSaveField(event) {
          event.preventDefault();
  
          const employee = this.props.employee;
          const newInformation = this.refs.editInput.value;
          this.props.editInformation(employee, newInformation, employee.header);
      }
      
}

export default EmployeeItem;