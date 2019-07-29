 import {observable,action,computed} from 'mobx';
 import _ from 'lodash';

 class todoList {
 @observable todos = [];


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