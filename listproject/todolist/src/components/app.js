import React from 'react';
import _ from 'lodash';
import TodoCreate from './todo-create';
import TodoList from './todo-list';
import 'semantic-ui-css/semantic.min.css';
import { Header } from 'semantic-ui-react';
import {decorate, observable} from "mobx"
import {observer} from "mobx-react"

class todos{

    @observable todo =[
    {
        task: 'Make a React tutorial.',
        isCompleted: false,
        creationDate:new Date().toLocaleTimeString() + new Date().toLocaleDateString(),
    },
    {
        task: 'Go to watch a movie with my girlfriend.',
        isCompleted: false,
        creationDate:new Date().toLocaleTimeString() + new Date().toLocaleDateString(),
    },
    {
        task: 'Go to joes.',
        isCompleted: false,
        creationDate:new Date().toLocaleTimeString() + new Date().toLocaleDateString(),
    }
    ];
}

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           todos : todos
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
            creationDate:new Date().toLocaleTimeString() + new Date().toLocaleDateString(),
            updateDate:new Date().toLocaleTimeString() +  new Date().toLocaleDateString()
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
        foundTodo.updateDate = new Date().toLocaleTimeString() +  new Date().toLocaleDateString();
        this.setState({ todos: this.state.todos });
    }
    
    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        foundTodo.updateDate = new Date().toLocaleTimeString() + '' + new Date().toLocaleDateString();
        this.setState({ todos: this.state.todos });
    }

    render() {
        return (
            <div>
                <div className="wrap">
                <div className="header">
                    <Header as="h2" className="headerclass">ls-tech Todo-list</Header></div>
		              <div className="wrap-list">

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
            </div>
        </div>
        )
    }
    }
    