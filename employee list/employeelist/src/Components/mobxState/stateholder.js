import {observable,action,computed} from 'mobx';
import _ from 'lodash';

class employeeList{
    @observable employees =  [
     
            {
              avatar: 'https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg',
              date: 'Joined in 2013',
              header: 'Helen',
              description: 'Primary Contact',
              isWorking: false,
              Id:1

            },
            {
              avatar: 'https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg',
              date: 'Joined in 2013',
              header: 'Matthew',
              description: 'Primary Contact',
              isWorking: false,
              Id:2
            },
            {
              avatar: 'https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg',
              date: 'Joined in 2013',
              header: 'Molly',
              description: 'Primary Contact',
              isWorking: true,
              Id:3
            },
        ]


@action deleteEmployee  = (employeeToRemove) => {
 _.remove(this.employees, employee => employee.header === employeeToRemove.header)
}

@action changeEmploymentStatus = (employeeId) => {
    const foundEmployee = _.find(this.employees, employee => employee.header === employeeId)
    foundEmployee.employmentStatus = !foundEmployee.employmentStatus;
}
@action addEmployee = (employeeDetails) => {
    this.employees.push({      
            avatar: employeeDetails.avatar,
            date: new Date().toLocaleDateString,
            header: employeeDetails.header,
            description: employeeDetails.description,
            isWorking: employeeDetails.isWorking,
            Id: this.renderEmployeeCount()
    })
}
@computed get renderEmployeeCount() {
    let employeeCount =  _.size(this.employees);
    return employeeCount === 1 ? '1 employee:' : (employeeCount + ' employees:');
}
}

const employees = new employeeList();
export default employees;


