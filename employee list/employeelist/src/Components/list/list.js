
import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import './list.css'
import {observer} from 'mobx-react'; 
import EmployeeItem from '../EmployeeItem/EmployeeItem'

@observer
class employeeList extends Component{
    
    // employeeFragmentation = (employee,index) => {
    //   return (
    //     <Fragment>
    //       <Card.Group doubling itemsPerRow={3} stackable>
    //           <Card key={index}>
    //           <Reveal animated='fade'>
    //           <Reveal.Content visible>
    //           <Image src='https://image.shutterstock.com/image-vector/black-abstract-halftone-logo-design-600w-175771670.jpg' size='small'/>
    //           </Reveal.Content>
    //           <Reveal.Content hidden>
            
                
    //         <Image src={employee.avatar} size='small' circular />
    //         </Reveal.Content>
    //         </Reveal>
    //             <Card.Content>
    //             <Fragment>
    //             <Card.Header>{employee.header}</Card.Header>
    //             <Card.Meta>{employee.date}</Card.Meta>
    //             <Card.Description>{employee.description}</Card.Description>
    //             </Fragment>
                  
    //             </Card.Content>
  
    //             <Card.Content extra>
    //               <Button  primary>
    //                 Add
    //               </Button>
    //               <Button>Delete</Button>
    //             </Card.Content>
    //           </Card>
    //       </Card.Group>
    //     </Fragment>
    //   )
    // }
  
    listView = () => {
      return _.map(this.props.employees ,(employee, index) => <EmployeeItem key={index} employee={employee}/>);
    }
      // (
      //   <Segment key ={index}>
      //     {this.employeeFragmentation(employee,index)}
      //   </Segment>
      //   ))}
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
        return _.map(this.props.employees ,(employee, index) => <EmployeeItem key={index} employee={employee}/>);
    }
}


export {employeeList as List};
