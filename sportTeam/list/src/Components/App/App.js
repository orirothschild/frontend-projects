import React from 'react';
import TodoHeader from '../header/header';
import TodoForm from'../form/form'
import TodoList from '../form/form'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: this.props.todoItems};
    console.log(this.state);
  }
  addItem(todoItem){
    let {todoItems} = this.state;
    todoItems.unshift({
      index: todoItems.length+1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem(itemIndex){
    let {todoItems} = this.state;
    todoItems.splice(itemIndex,1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex){
    let {todoItems} = this.state;
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex,1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});
  }
  render(){
    return(
      <div className="todoForm">
        <TodoHeader />
        <TodoForm addItem={this.addItem} />
        <TodoList items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
      </div>
    )
  }
}

export default App;
