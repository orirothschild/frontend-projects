import React, { Component } from 'react';
import { Input, Grid, Segment, Radio,Form,Header } from "semantic-ui-react";
import CheckboxTree from "react-checkbox-tree";

import 'semantic-ui-css/semantic.min.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import _ from "lodash";
const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      expanded: [],
      keyword: "",
      protocol:"",
      time:""
    };
  }
  handleProtocolChange = (e, {value}) =>{
  this.setState({protocol: value })
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

  renderDeviceTreeElements = () =>{
    let searchedNodes = this.state.keyword.trim()
      ? this.keywordFilter(_.cloneDeep(this.props.nodesData), this.state.keyword)
      : this.props.nodesData;

    return(
      <label className="col-md-7 text-left">
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
    </label>
    )

  }

  render() {
   
      // <Container fluid>
      // <Header as='h2'>checked boxes summery</Header>
      // <p>
      //  {this.state.checked.join('  ')}
      // </p>
      // <p>
      //   total boxes checked {this.state.checked.length}
      //    <p> time value {this.sumvalues(searchedNodes,"Times")}</p>
      // </p>
    return (
      <div>
      <i className="fas fa-archway"></i>
    <Grid columns='equal' divided inverted padded>
    <Grid.Row color='black' textAlign='center'>
      <Grid.Column>
        <Segment color='black' inverted>
        {this.renderDeviceTreeElements()}
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment color='orange' inverted>
      <Form>
        <Form.Field>
        <Header as ='h3'>  Selected value: <b>{this.state.protocol}</b></Header>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Choose this'
            name='radioGroup'
            value= '1'
            checked={this.state.protocol === "1"}
            onChange={this.handleProtocolChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Or that'
            name='radioGroup'
            value='2'
            checked={this.state.protocol === "2"}
            onChange={this.handleProtocolChange}
          />
        </Form.Field>
        
      </Form>
      </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          3
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
      </div>
    );
  }
}


export default App;
