import React from 'react';
import todos from './data.js';
class App extends React.Component {
  state = {
    todos: todos,
    createTodoText: '',
    isUpdate: false,
    updateTodoText: '',
    updateTodo: {}

  }
  _createTodoText = (e) => {
    this.setState({
     createTodoText: e.target.value 
    })
  }
  _createTodo = () => {
    let todo = {
      id: Date.now(),
      text: this.state.createTodoText,
      completion: false
    }
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
      createTodoText: ''
    });
  }
  _showTodoText = todo => {
    if (todo.completion) {
      return <span onClick={() => this._toggleTodo(todo)} className="lt">{todo.text}</span>
    }
    return <span onClick={() => this._toggleTodo(todo)}>{todo.text}</span>
  }
  _toggleTodo = td => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === td.id ) {
        return {
          id: todo.id,
          text: todo.text,
          completion: ! todo.completion
        }
      }else {
        return todo
      }
    });

    this.setState({
      todos
    })
  }
  _updateTodoText = (e) =>  {
    this.setState({
      updateTodoText: e.target.value
    });
  }
  _updateTodo = (td) => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === td.id) {
        return {
          id: todo.id,
          completion: todo.completion,
          text: this.state.updateTodoText
        }
      }else {
        return todo;
      }
    });
    this.setState({todos, isUpdate: false});
  }
  _deleteTodo = (td) => {
    var todos = this.state.todos.filter(todo => todo.id !== td.id);
    this.setState({todos});
  }
  _createBlock = () => {
    return <div className="add-todo-info mt-3">
      <div className="add-todo-header">
        <h2>Create a todo</h2>
      </div>
      <div className="add-todo-body">
        <input
          type="text"
          className="form-control"
          value={this.state.createTodoText}
          onChange={this._createTodoText}
          />
          <button
            onClick={this._createTodo}
            className="btn add-todo-btn mt-2">Add a todo</button>
      </div>
    </div>
  }
  _updateBlock = (todo) => {
    return <div className="update-todo-list mt-2">
      <div className="update-todo-header">
        <h2>Update your todo</h2>
      </div>
      <div className="update-todo-body">
        <input type="text"
          value={this.state.updateTodoText}
          className="form-control"
          onChange={this._updateTodoText}
        />
        <button
        onClick={() => this._updateTodo(todo)}
        className="btn updae-todo-btn mt-2">Update todo</button>
      </div>
    </div>
  }
  _updateStart = (todo) => {
    this.setState({
      isUpdate: true,
      updateTodo: todo,
      updateTodoText: todo.text
    });
  }
  render () {
    return <div>
    <div className="todo-list-info">
      <div className="todo-list-header">
        <h2>Monday, 12 Dec</h2>
      </div>
      <div className="todo-list-body">
        {
          this.state.todos.map(todo => {
            return <li key={todo.id}>
            {this._showTodoText(todo)}
            <div className="btn-list">
              <button onClick={() => this._updateStart(todo)} className="btn edit-btn m-2">Edit</button>
              <button onClick={() => this._deleteTodo(todo)} className="btn delete-btn m-2">Delete</button>
              </div>
            </li>
          })
        }
      </div>
    </div>
    {
      this.state.isUpdate ? this._updateBlock(this.state.updateTodo) : null
    }
    {
      this._createBlock()
    }


    </div>
  }
}

export default App;