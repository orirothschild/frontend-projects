import {observable,action,computed} from 'mobx';
import _ from 'lodash';


class employeeList{
  @observable isAdding = false;
    @observable employees =  [
     
            {
              avatar: 'https://image.cnbcfm.com/api/v1/image/105780118-1551964473037gettyimages-956953036.jpeg?v=1563398890&w=575&h=383',
              city: 'rishon lezion',
              vehicle : true,
              gender : 'female',
              email : 'linoy@gmail.com',
              date: 'Joined in 2017',
              header: 'linoy adrian',
              description: 'CEO',
              isWorking: false,
              Id:1

            },
            {
              avatar: '',
              city: '',
              vehicle : false,
              gender : 'female',
              email : 'avi@gmail.com',
              date: 'Joined in 2013',
              header: 'avital krizbaski',
              description: 'React developer',
              isWorking: false,
              Id:2
            },
            {
              avatar: 'https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg',
              city: 'tel aviv',
              vehicle : true,
              gender : 'female',
              email : 'tamar@gmail.com',
              date: 'Joined in 2010',
              header: 'tamar ohayon',
              description: 'logistics',
              isWorking: true,
              Id:3
            },
            {
              avatar: '',
              city: 'lod',
              vehicle : true,
              gender : 'male',
              email : 'rotem@gmail.com',
              date: 'Joined in 2010',
              header: 'rotem mantzor',
              description: 'C++ developer',
              isWorking: true,
              Id:4
            },
        ]

@action deleteEmployee  = (employeeToRemove) => {
 _.remove(this.employees, employee => employee.email === employeeToRemove.email)
}

@action changeEmploymentStatus = (employee) => {
    const foundEmployee = _.find(this.employees, emp => emp.email === employee.email)
    console.log(foundEmployee);
    foundEmployee.isWorking = !foundEmployee.isWorking;
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
@action editInformation = (employee, newInformation, atField) =>{
  const foundEmployee = _.find(this.employees,emp => emp.email === employee.email);
  let keys = Object.keys(foundEmployee);
  for(let key in keys){
    if(key === atField){
      employee.atField = newInformation;
    }
    return;

  }
}
@computed get renderEmployeeCount() {
    let employeeCount =  _.size(this.employees);
    return employeeCount === 1 ? '1 employee:' : (employeeCount + ' employees:');
}
@action handleAdding = () => this.isAdding = !this.isAdding;
}

const employees = new employeeList();
export default employees;
