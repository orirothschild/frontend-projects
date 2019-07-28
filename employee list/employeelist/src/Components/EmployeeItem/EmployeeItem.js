import React, { Component, Fragment } from 'react'
import {observer} from 'mobx-react'; 
import { Button, Card, Image, Reveal  } from 'semantic-ui-react'
@observer

 class EmployeeItem extends Component{
    
    render() {
        let {employee} = this.props;
        let {index} = this.props;
        return (
            <Fragment>
              <Card.Group doubling itemsPerRow={3} stackable>
                  <Card key={index}>
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
      
}

export default EmployeeItem;
