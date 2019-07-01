import React from 'react';
import { Checkbox } from 'semantic-ui-react'
import './todo.css'
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
            <label className="col-md-7 text-left text" style={ taskStyle } onClick={this.props.toggleTask.bind(this, task) }>
                {task}
                <div></div>
                <Checkbox className='itembox' toggle={this.props.toggleTask.bind(this)}>checked </Checkbox>
            </label>
        )
    }

    renderStateSection() {
        const { isCompleted } = this.props;

        if (isCompleted) {
            return (
                <div className="col-md-2 text-right">
                    <span className="label label-success"> Completed at {this.props.todos.updateDate}</span>
                </div>
            )
        }

        return (
            <div className="col-md-2 text-right">
                <span className="label label-danger">last updated at  {this.props.todos.creationDate} </span>
            </div>
        )
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <div className="col-md-3 text-right">
                    <button className="btn btn-primary btn-xs" onClick={this.onSaveClick.bind(this) }>Save</button>
                    &nbsp; &nbsp; &nbsp;
                    <button className="btn btn-primary btn-xs" onClick={this.onCancelClick.bind(this) }>Cancel</button>
                </div>
            )
        }

        return (
            <div className="col-md-3 text-right">
                <button className="btn btn-primary btn-xs" onClick={this.onEditClick.bind(this) }>Edit</button>
                &nbsp; &nbsp; &nbsp;
                <button className="btn btn-primary btn-xs" onClick={this.props.deleteTask.bind(this, this.props.task) }>Delete</button>
            </div>
        )
    }

    render() {
        return (
            <div className="form-group">
                { this.renderTaskSection() }
                { this.renderStateSection() }
                { this.renderActionSection() }
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