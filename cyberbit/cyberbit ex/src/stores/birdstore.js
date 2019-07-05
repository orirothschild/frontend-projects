import {observable,action,computed} from 'mobx';
import _ from 'lodash';

class todoList {
 @observable allDevices ={
	"device_groups": [{
		"id": "1",
		"name": "group 1",
		"devices": [{
			"id": 11,
			"name": "device 11",
			"active": 1
		}, {
			"id": 12,
			"name": "device 12",
			"active": 0
		}, {
			"id": 13,
			"name": "device 13",
			"active": 1
		}, {
			"id": 14,
			"name": "device 14",
			"active": 0
		}, {
			"id": 15,
			"name": "device 15",
			"active": 0
		}, {
			"id": 16,
			"name": "device 16",
			"active": 1
		}, {
			"id": 17,
			"name": "device 17",
			"active": 1
		}]

	}, {
		"id": "2",
		"name": "group 2",
		"devices": [{
			"id": 21,
			"name": "device 21",
			"active": 1
		}, {
			"id": 22,
			"name": "device 22",
			"active": 0
		}, {
			"id": 23,
			"name": "device 23",
			"active": 1
		}, {
			"id": 24,
			"name": "device 24",
			"active": 0
		}, {
			"id": 25,
			"name": "device 25",
			"active": 0
		}, {
			"id": 26,
			"name": "device 26",
			"active": 1
		}, {
			"id": 27,
			"name": "device 27",
			"active": 1
		}]

	}, {
		"id": "3",
		"name": "group 3",
		"devices": [{
			"id": 31,
			"name": "device 31",
			"active": 1
		}, {
			"id": 32,
			"name": "device 32",
			"active": 1
		}, {
			"id": 33,
			"name": "device 33",
			"active": 1
		}, {
			"id": 34,
			"name": "device 34",
			"active": 1
		}, {
			"id": 35,
			"name": "device 35",
			"active": 1
		}, {
			"id": 36,
			"name": "device 36",
			"active": 1
		}, {
			"id": 37,
			"name": "device 37",
			"active": 1
		}]

	}],
    
    "protocols": [ {
        "id": 1,
        "name": "Modbus"
    },{
        "id": 2,
        "name": "DNP 3"
    },{
        "id": 3,
        "name": "IEC104"
    },{
        "id": 4,
        "name": "MMS"
    }],
    
    "times": [ {
        "id": 1,
        "name": "Last 30 minutes"
    },{
        "id": 2,
        "name": "Last Hour"
    },{
        "id": 3,
        "name": "Last 8 hours"
    },{
        "id": 4,
        "name": "Last 24 Hours"
    }]
}

 @action createTask = (task) =>{
    this.todos.push({
        task,
        error: null,
        isEditing: false,
        isCompleted: false,
        creationDate:new Date().toLocaleTimeString() + new Date().toLocaleDateString(),
        updateDate:new Date().toLocaleTimeString() +  new Date().toLocaleDateString()
    });
 }
 @action saveTask = (oldTask, newTask) => {
    const foundTodo = _.find(this.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    foundTodo.updateDate = new Date().toLocaleTimeString() +  new Date().toLocaleDateString();
 }

@action deleteTask = (taskToDelete) => {
    _.remove(this.todos, todo => todo.task === taskToDelete);
}
@action toggleTask= (task) => {
    const foundTodo = _.find(this.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    foundTodo.updateDate = new Date().toLocaleTimeString() + '' + new Date().toLocaleDateString();
}

@computed get renderTasksCount() {
    let tasksCount =  _.size(this.todos);
    return tasksCount === 1 ? '1 task:' : (tasksCount + ' tasks:');
}

}

const storelist = new todoList();
export default storelist;