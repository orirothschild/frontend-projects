import React from 'react';
import _ from 'lodash';
import {observer} from 'mobx-react'; 
@observer

class TodoCount extends React.Component {

    renderTasksCount() {
        const tasksCount =  _.size(this.props.todos);
        return tasksCount === 1 ? '1 task:' : (tasksCount + ' tasks:');
    }

    render(){
        return <p className="bg-info" style={{ padding: '5px 10px' }}>{ this.renderTasksCount() }</p>
    }
    
}

export default TodoCount;