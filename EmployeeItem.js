import React, { Component, Fragment } from 'react'
import {observer} from 'mobx-react'; 
import { Button, Card, Image, Reveal, Divider, Icon, List  } from 'semantic-ui-react'
import worker from './download.jpg'
import generic from './generic.jpg'

@observer
 class EmployeeItem extends Component{
   constructor(props) {
     super(props);
     this.avatar = this.props.employee.avatar;
     if(this.avatar === ''){
       this.avatar = this.props.employee.gender === 'male' ? generic : worker;
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
                    icon='mail'
                    content={<a href={`mailto:${employee.email}`} >{employee.email}</a>}
                    />
                    <Card.Description>{employee.description}</Card.Description>
                    </Fragment>
                    </Card.Content>
                    <Card.Content extra>
                      <Button circular className="btn btn-primary btn-xs" onClick={this.props.deleteEmployee.bind( this, employee)}>Delete</Button>
                    </Card.Content>
                  </Card>
            </div>
          )
        }
      
}

export default EmployeeItem;
