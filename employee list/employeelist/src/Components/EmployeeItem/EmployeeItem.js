import React, { Component, Fragment } from 'react'
import {observer} from 'mobx-react'; 
import { Button, Card, Image, Reveal, Divider  } from 'semantic-ui-react'
@observer

 class EmployeeItem extends Component{
    
    render() {
        let {employee} = this.props;
        let {index} = this.props;
        return (
          <div className="ui raised container segment">
              <Card.Group doubling itemsPerRow={3} stackable  >
              <Card key={index}>
                <Image src={employee.avatar} size='big' circular />
                <Divider hidden/>
                    <Card.Content>
                    <Fragment>
                    <Card.Header>{employee.header}</Card.Header>
                    <Card.Meta>{employee.date}</Card.Meta>
                    <Card.Description>{employee.description}</Card.Description>
                    </Fragment>
                    </Card.Content>
                    <Card.Content extra>
                      <Button circular className="btn btn-primary btn-xs" onClick={this.props.deleteEmployee.bind( this, employee)}>Delete</Button>
                    </Card.Content>
                  </Card>
                  
              </Card.Group>
            </div>
          )
        }
      
}

export default EmployeeItem;
