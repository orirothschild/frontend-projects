
import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import './list.css'
import { Button, Card, Divider, Image, Placeholder, Reveal, Segment  } from 'semantic-ui-react'


class employeeList extends Component{
    
    employeeFragmentation = (employee) => {
      return (
        <Fragment>
          <Card.Group doubling itemsPerRow={3} stackable>
              <Card key={employee.header}>
                <Image src={employee.avatar} size='small' circular />
                <Card.Content>
                <Fragment>
                <Card.Header>{employee.header}</Card.Header>
                <Card.Meta>{employee.date}</Card.Meta>
                <Card.Description>{employee.description}</Card.Description>
                </Fragment>
                  
                </Card.Content>
  
                <Card.Content extra>
                  <Button  primary>
                    Add
                  </Button>
                  <Button>Delete</Button>
                </Card.Content>
              </Card>
          </Card.Group>
        </Fragment>
      )
    }
  
    listView = () => (
        
        <Segment>
         <Divider />
        {_.map(this.props.employees,employee =>(
      <Reveal animated='rotate'>
        <Reveal.Content visible>
        <Image circular size='small' src='https://image.shutterstock.com/image-vector/black-abstract-halftone-logo-design-600w-175771670.jpg' />
        </Reveal.Content>
        <Reveal.Content hidden>
       
          {this.employeeFragmentation(employee)}
        </Reveal.Content>
      </Reveal>
        ))}
      </Segment>
    )

    render(){
        return this.listView();
    }
}


export {employeeList as List};
