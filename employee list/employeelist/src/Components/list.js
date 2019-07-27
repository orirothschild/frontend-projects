
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
              <Reveal animated='fade'>
              <Reveal.Content visible>
              <Image src='https://image.shutterstock.com/image-vector/black-abstract-halftone-logo-design-600w-175771670.jpg' size='small'/>
              </Reveal.Content>
              <Reveal.Content hidden>
            
                
                      <Image src={employee.avatar} size='small' circular />
              </Reveal.Content>
            </Reveal>
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
  
    listView = () => {
      return _.map(this.props.employees,employee =>(
        <Segment>
          {this.employeeFragmentation(employee)}
        </Segment>
        ))}
      //    <Divider >
      //   {_.map(this.props.employees,employee =>(
      // <Reveal animated='fade'>
      //   <Reveal.Content visible>
      //   <Image src='https://image.shutterstock.com/image-vector/black-abstract-halftone-logo-design-600w-175771670.jpg' />
      //   </Reveal.Content>
      //   <Reveal.Content hidden>
       
      //     {this.employeeFragmentation(employee)}
      //   </Reveal.Content>
      // </Reveal>
      //   ))}
      // </Divider>

    render(){
        return this.listView();
    }
}


export {employeeList as List};
