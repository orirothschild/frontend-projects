import React,{Component} from 'react';
import './App.css';
import _ from 'lodash';
import { Header } from 'semantic-ui-react';
import {inject,observer} from 'mobx-react';

@inject('devices')  
@observer //forces to re render when the data in store changes
class App extends Component {
  constructor(props) {
    super(props);

}

render() {
    let {devices} = this.props;
  return (
      <div>
          <div className="wrap">
          <div className="header">
              <Header as="h4" className="headerclass"> 1.Select blackbox </Header></div>
            <div className="wrap-list">

          <div className="td-list-con">
             </div>
          </div>
      </div>
  </div>
  )
}
}
export default App;