import React, { Component } from 'react';
import { render } from 'react-dom';
import { Input, Message, Container , Header,Button } from "semantic-ui-react";
import CheckboxTree from "react-checkbox-tree";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-checkbox-tree/lib/react-checkbox-tree.css';


import _ from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
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

  sumvalues = (nodes,addedValue) => {
    let requestedArray = nodes.filter(element => element.value === addedValue);
    return requestedArray.checked;
  }

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
      ? this.keywordFilter(_.cloneDeep(this.props.nodesData), this.state.keyword)
      : this.props.nodesData;

      let searchedTimes = this.state.keyword.trim()
      ? this.keywordFilter(_.cloneDeep(this.props.times), this.state.keyword)
      : this.props.times;

      let searchedProtocols = this.state.keyword.trim()
      ? this.keywordFilter(_.cloneDeep(this.props.protocols), this.state.keyword)
      : this.props.protocols;
    return (
      <div>
      <i class="fas fa-archway"></i>
      <Container fluid>
      <Header as='h2'>checked boxes summery</Header>
      <p>
       {this.state.checked.join('  ')}
      </p>
      <p>
        total boxes checked {this.state.checked.length}
         <p> time value {this.sumvalues(searchedNodes,"Times")}</p>
      </p>
     
      
    </Container>
      <h1 className="rct-icon-half-check2">Select devices</h1>
        <Input
          style={{ marginBottom: "20px" }}
          fluid
          icon="search"
          placeholder="search from devices"
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
         <h1 className="rct-icon-half-check2">Select Time Period</h1>
        <Input
          style={{ marginBottom: "20px"}}
          fluid
          icon="search"
          placeholder="Search time periods"
          iconPosition="left"
          onChange={(event, data) => {
            this.onSearchInputChange(event, data, searchedTimes);
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
          nodes={searchedTimes}
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
        <h1 className="rct-icon-half-check2">Select protocol</h1>
        <Input
          style={{ marginBottom: "20px"}}
          fluid
          icon="search"
          placeholder="Search protocols"
          iconPosition="left"
          onChange={(event, data) => {
            this.onSearchInputChange(event, data, searchedProtocols);
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
          nodes={searchedProtocols}
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


export default App;
