import React from 'react';
import _ from 'lodash';
import './todo.css'
import { Button } from 'semantic-ui-react';
export default class TodoCreate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
        this.handleCreate=this.handleCreate.bind(this);
    }

    renderError() {
        if (!this.state.error) { return null; }
        return <p style={{ padding: '5px 10px', background: '#d9534f', color: '#fff' }}>{ this.state.error }</p>;
    }

    componentDidMount() {
        this.refs.createInput.focus();
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return false;
        }

        this.setState({ error: null });
        //todo no more then 10 tasks
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task!';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exist!';
        }else if(_.size(this.props.todos) >= 10){
            return 'Cannot create more then 10 tasks! finish or delete previous ones';
        } else {
            return null;
        }
    }

    render() {
        return (
            <form className="create form-horizontal" onSubmit={this.handleCreate}>
                <div className="form-group">
                    <div className="col-md-10">
                        <input className="form-control" type="text" ref="createInput" placeholder="What needs to be done?" />
                    </div>
                    <div className="col-md-2 text-right">
                        <Button color='green' type="submit" className="btn btn-default">Create</Button>
                    </div>
                </div>
                { this.renderError() }
            </form>
        )
    }

}