import React from 'react';
import _ from 'lodash';
import TodoCreate from './todo-create';
import TodoList from './todo-list';
import 'semantic-ui-css/semantic.min.css';
import { Checkbox } from 'semantic-ui-react'


/*const todos = [
    {
        task: 'Make a React tutorial.',
        isCompleted: false,
        creationDate:new Date(),
        updateDate:

    },
    {
        task: 'Go to watch a movie with my girlfriend.',
        isCompleted: false
    },
    {
        task: 'Go to joes.',
        isCompleted: false
    }
];*/

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           todos : []
        }
        this.createTask = this.createTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
    }
    
    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false,
            creationDate:new Date(),
            updateDate:new Date()
        });
        this.setState({ todos: this.state.todos });
    }
    
    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
    
    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }
    
    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    render() {
        return (
            <div>
                <h1>ls-tech Todo-list</h1>
                <div className="td-list-con">

                    <TodoCreate
                        todos={this.state.todos}
                        createTask={ this.createTask}
                        />

                    <TodoList
                        todos={ this.state.todos }
                        saveTask={ this.saveTask }
                        deleteTask={ this.deleteTask }
                        toggleTask={ this.toggleTask }
                        />
                </div>
            </div>
        )
    }
    }
    