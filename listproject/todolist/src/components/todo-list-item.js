import React from 'react';
import { Checkbox, Message } from 'semantic-ui-react'
import './todo.css'
import { Button } from 'semantic-ui-react';
export default class TodoListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;

        const taskStyle = {
            color: isCompleted ? '#5cb85c' : '#d9534f',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <label className="col-md-7 text-left">
                    <form onSubmit={this.onSaveClick.bind(this) }>
                        <input className="form-control input-sm" defaultValue={task} ref="editInput" type="text"/>
                    </form>
                </label>
            )
        }

        return (
            <label className="col-md-7 text-left text" style={ taskStyle }>
                 <Message icon='inbox' header={task} style={ taskStyle } content={this.renderStateSection()}/>
                <Checkbox className='itembox' toggle onClick={this.props.toggleTask.bind(this, task)}></Checkbox>
                {this.renderActionSection()}
            </label>
        )
    }

    renderStateSection() {
        const { isCompleted } = this.props;

        if (isCompleted) {
            return `Completed at ${this.props.todos.updateDate}`
        }

        return `created at ${this.props.todos.creationDate}`
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <div className="col-md-3 text-right">
                    <Button circular className="btn btn-primary btn-xs" onClick={this.onSaveClick.bind(this) }>Save</Button>
                    &nbsp; &nbsp; &nbsp;
                    <Button circular className="btn btn-primary btn-xs" onClick={this.onCancelClick.bind(this) }>Cancel</Button>
                </div>
            )
        }

        return (
            <div className="col-md-3 text-right">
                <Button circular className="btn btn-primary btn-xs" onClick={this.onEditClick.bind(this) }>Edit</Button>
                &nbsp; &nbsp; &nbsp;
                <Button circular className="btn btn-primary btn-xs" onClick={this.props.deleteTask.bind(this, this.props.task) }>Delete</Button>
            </div>
        )
    }

    render() {
        return (
            <div className="form-group">
                { this.renderTaskSection() }
            </div>
        )
    }

    componentDidUpdate() {
        if (this.state.isEditing) {
            this.refs.editInput.focus();
        }
    }

    onEditClick() {
        this.setState({ isEditing: true });
        // this.refs.editInput.getDOMNode().focus();
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }

}