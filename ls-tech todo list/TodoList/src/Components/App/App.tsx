import * as React from 'react';
import './App.css';
import './todo.css'
import _ from 'lodash';
import TodoCreate from '../List/todo-create';
import TodoList from '../List/todo-list';
import { Header } from 'semantic-ui-react';
import {inject,observer} from 'mobx-react'; 

@inject('todoclass')  
@observer //forces to re render when the data in store changes
class App extends React.Component<{todoclass: any}> {
  constructor(props) {
    super(props);

}

render() {
    let {todoclass}= this.props;
  return (
      <div>
          <div className="ui raised container segment">
          <div>
              <Header as="h2" className="headerclass">ls-tech Todo-list </Header></div>
            <div className="wrap-list ui raised container segment">

          <div className="td-list-con">
              <TodoCreate
                  todos={todoclass.todos}
                  createTask={ todoclass.createTask}
                  />

              <TodoList
                  todos={ todoclass.todos }
                  saveTask={ todoclass.saveTask }
                  deleteTask={ todoclass.deleteTask }
                  toggleTask={ todoclass.toggleTask }
                  count={ todoclass.renderTasksCount }
                  />
             </div>
          </div>
      </div>
  </div>
  )
}
}
export default App;