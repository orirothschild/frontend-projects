// Fork from https://codepen.io/marekdano/pen/bVNYpq
// Inspired by these pen: 
// https://dribbble.com/shots/2451888-ToDo-List
// https://medium.muz.li/todo-list-inspiration-a1d736c2718a#.4dfc4g5wp
var todoItems = [];
todoItems.push({index: 1, value: "Write my todo list", done: true});
todoItems.push({index: 2, value: "learn react", done: false});
todoItems.push({index: 3, value: "learn Webpack", done: false});
todoItems.push({index: 4, value: "learn ES6", done: false});
todoItems.push({index: 5, value: "learn Routing", done: false});
todoItems.push({index: 6, value: "learn Redux", done: false});

class TodoList extends React.Component {
  render(){
    var items = this.props.items.map((item,index) =>{
      return(
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return(
      <ul className="list-group">{items}</ul>
    );
  }
}

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose(){
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone(){
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render(){
    var todoClass = this.props.item.done ? "done":"undone";
    return(
      <li className="list-group-item">
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" onClick={this.onClickDone}></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    this.refs.itemName.focus();
  }
  onSubmit(event){
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    if(newItemValue){
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render(){
    return(
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..." />
        <button type="submit" className="btn btn-default"></button>
      </form>
    )
  }
}

class TodoHeader extends React.Component {
  render(){
    return(
      <h3 className="title">ToDo List</h3>
    )
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: todoItems};
  }
  addItem(todoItem){
    todoItems.unshift({
      index: todoItems.length+1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem(itemIndex){
    todoItems.splice(itemIndex,1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex){
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
        <TodoList items={todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />,document.getElementById('todo'));

