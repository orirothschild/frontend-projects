import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

const nodesData = [
  {
    value: "device_group-1",
    label: "device_group-1",
    children: [
       {
        value: "device-11",
        label: "device-11"
      },
       {
        value: "device-12",
        label: "device-12"
      },
       {
        value: "device-13",
        label: "device-13"
      },
       {
        value: "device 14",
        label: "device-14"
      },
       {
        value: "device-15",
        label: "device-15"
      },
       {
        value: "device-16",
        label: "device-16"
      },
      {
        value: "device-17",
        label: "device-17"
      }
    ]
  },
  {
    value: "device_group-2",
    label: "device_group-2",
     children: [
       {
        value: "device-21",
        label: "device-21"
      },
       {
        value: "device-22",
        label: "device-22"
      },
       {
        value: "device-23",
        label: "device-23"
      },
       {
        value: "device 24",
        label: "device-24"
      },
       {
        value: "device-25",
        label: "device-25"
      },
       {
        value: "device-26",
        label: "device-26"
      },
      {
        value: "device-27",
        label: "device-27"
      }
    ]
  },
  {
    value: "device_group-3",
    label: "device_group-3",
     children: [
       {
        value: "device-31",
        label: "device-31"
      },
       {
        value: "device-32",
        label: "device-32"
      },
       {
        value: "device-33",
        label: "device-33"
      },
       {
        value: "device 34",
        label: "device-34"
      },
       {
        value: "device-35",
        label: "device-35"
      },
       {
        value: "device-36",
        label: "device-36"
      },
      {
        value: "device-37",
        label: "device-37"
      }
    ]
  }]

  class addedData extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        protocol: [ {
        "id": 1,
        "name": "Modbus"
    },{
        "id": 2,
        "name": "DNP 3"
    },{
        "id": 3,
        "name": "IEC104"
    },{
        "id": 4,
        "name": "MMS"
    }
    ],

    "time": [ {
        "id": 1,
        "name": "Last 30 minutes"
    },{
        "id": 2,
        "name": "Last Hour"
    },{
        "id": 3,
        "name": "Last 8 hours"
    },{
        "id": 4,
        "name": "Last 24 Hours"
    }
    ]
    }
  }
  handleProtocolChange = (value) =>this.setState({protocol: value })
  handleTimeChange =  (value) =>this.setState({time: value })
  
}
let extradata = new addedData();
      
ReactDOM.render(<App nodesData={nodesData} addedData={extradata} />, document.getElementById('root'));

serviceWorker.unregister();