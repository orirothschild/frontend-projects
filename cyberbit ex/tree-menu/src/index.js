import React, { Component } from 'react';
import { render } from 'react-dom';
import { Input } from "semantic-ui-react";
import CheckboxTree from "react-checkbox-tree";
import "./style.css";
import App from './App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import _ from "lodash";


const nodesData = [
  {
    value: "device_group 1",
    label: "device_group 1",
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

  const protocols =[
    {
      value: "protocol",
      label: "protocol",
      children: [
        {
          value: "MODBUS",
          label: "MODBUS"
        },
         {
          value: "DNP 3",
          label: "DNP 3"
        },
         {
          value: "IEC104",
          label: "IEC104"
        },
         {
          value: "MMS",
          label: "MMS"
        }
      ]
    }]

    const everything =[

      {
        value: "Groups",
        label: "Groups",
        children: [
          {
        value: "device_group 1",
        label: "device_group 1",
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
      }
    ]}
    ,{
        value:"protocol",
        label:"protocol",
        children: [
          {
            value: "MODBUS",
            label: "MODBUS"
          },
           {
            value: "DNP 3",
            label: "DNP 3"
          },
           {
            value: "IEC104",
            label: "IEC104"
          },
           {
            value: "MMS",
            label: "MMS"
          }
        ]
      }, {
        value:"Times",
        label:"Times",
        children: [
           {
            value: "Last Hour",
            label: "Last Hour"
          },
           {
            value: "Last 8 hours",
            label: "Last 8 hours"
          },
           {
            value: "Last 24 Hours",
            label: "Last 24 Hours"
          }]
        }]

        const devices = everything.filter(element => element.value === "Groups") 
        const times = everything.filter(element => element.value === "Times")
        const protocols = everything.filter(element => element.value === "protocol")
   
/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      checked: [],
      expanded: [],
      keyword: ""
    };
  }

  onSearchInputChange = (event, data, searchedNodes) => {
    this.setState(prevState => {
      if (prevState.keyword.trim() && !data.value.trim()) {
        return {
          expanded: [],
          keyword: data.value
        };
      }
      return {
        expanded: this.getAllValuesFromNodes(searchedNodes, true),
        keyword: data.value
      };
    });
  };

  getHighlightText = (text, keyword) => {
    const startIndex = text.indexOf(keyword);
    return startIndex !== -1 ? (
      <span>
        {text.substring(0, startIndex)}
        <span style={{ color: "#2cb664" }}>
          {text.substring(startIndex, startIndex + keyword.length)}
        </span>
        {text.substring(startIndex + keyword.length)}
      </span>
    ) : (
        <span>{text}</span>
      );
  };

  keywordFilter = (nodes, keyword) => {
    let newNodes = [];
    for (let n of nodes) {
      if (n.children) {
        const nextNodes = this.keywordFilter(n.children, keyword);
        if (nextNodes.length > 0) {
          n.children = nextNodes;
        } else if (n.label.toLowerCase().includes(keyword.toLowerCase())) {
          n.children = nextNodes.length > 0 ? nextNodes : [];
        }
        if (
          nextNodes.length > 0 ||
          n.label.toLowerCase().includes(keyword.toLowerCase())
        ) {
          n.label = this.getHighlightText(n.label, keyword);
          newNodes.push(n);
        }
      } else {
        if (n.label.toLowerCase().includes(keyword.toLowerCase())) {
          n.label = this.getHighlightText(n.label, keyword);
          newNodes.push(n);
        }
      }
    }
    return newNodes;
  };

  getAllValuesFromNodes = (nodes, firstLevel) => {
    if (firstLevel) {
      const values = [];
      for (let n of nodes) {
        values.push(n.value);
        if (n.children) {
          values.push(...this.getAllValuesFromNodes(n.children, false));
        }
      }
      return values;
    } else {
      const values = [];
      for (let n of nodes) {
        values.push(n.value);
        if (n.children) {
          values.push(...this.getAllValuesFromNodes(n.children, false));
        }
      }
      return values;
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.keyword !== nextState.keyword) {
      return true;
    }
    if (!_.isEqual(this.state.checked, nextState.checked)) {
      return true;
    }
    if (_.isEqual(this.state.expanded, nextState.expanded)) {
      return false;
    }
    return true;
  }

  render() {
    let searchedNodes = this.state.keyword.trim()
      ? this.keywordFilter(_.cloneDeep(nodesData), this.state.keyword)
      : nodesData;
    return (
      <div>
      <i class="fas fa-archway"></i>


      <h1 className="rct-icon-half-check2">123</h1>
        <Input
          style={{ marginBottom: "20px" }}
          fluid
          icon="search"
          placeholder="Search demographic, phone usage, life journey, intrest..."
          iconPosition="left"
          onChange={(event, data) => {
            this.onSearchInputChange(event, data, searchedNodes);
          }}
        />
        <CheckboxTree 
           icons={{
            check: <FontAwesomeIcon className="rct-icon rct-icon-check" icon="check-square" />,
            uncheck: <FontAwesomeIcon className="rct-icon rct-icon-uncheck" icon={['far', 'square']} />,
            halfCheck: <FontAwesomeIcon className="rct-icon rct-icon-half-check" icon="check-square" />,
            expandClose: <FontAwesomeIcon className="rct-icon rct-icon-expand-close" icon="chevron-right" />,
            expandOpen: <FontAwesomeIcon className="rct-icon rct-icon-expand-open" icon="chevron-down" />,
            expandAll: <FontAwesomeIcon className="rct-icon rct-icon-expand-all" icon="plus-square" />,
            collapseAll: <FontAwesomeIcon className="rct-icon rct-icon-collapse-all" icon="minus-square" />,
            parentClose: <FontAwesomeIcon className="rct-icon rct-icon-parent-close" icon="folder" />,
            parentOpen: <FontAwesomeIcon className="rct-icon rct-icon-parent-open" icon="folder-open" />,
            leaf: <FontAwesomeIcon className="rct-icon rct-icon-leaf-close" icon="file" />
        }}
          nodes={searchedNodes}
          checked={this.state.checked}
          expanded={this.state.expanded}
          onCheck={checked => {
            console.log("checked", checked);
            this.setState({ checked }, () => {
              console.log("this.state", this.state);
            });
          }}
          onExpand={expanded => this.setState({ expanded })}
          expandOnClick
          onClick={() => {
            console.log("on click");
          }}
          showNodeIcon={false}
        />
      </div>
    );
  }
}
*/

render(<App nodesData={devices} times={times} protocols={protocols} />, document.getElementById('root'));
