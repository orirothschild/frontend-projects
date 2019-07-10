import React, { Component } from 'react';
import { Input, Grid, Segment, Radio,Form,Divider, Button } from "semantic-ui-react";
import CheckboxTree from "react-checkbox-tree";
import './App.css';

import 'semantic-ui-css/semantic.min.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import _ from "lodash";

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
  handleProtocolChange = (e, {value}) =>this.setState({protocol: value })
  handleTimeChange =  (e, {value}) =>this.setState({time: value })
  clearAll =  () =>this.setState({
     checked: [],
    expanded: [],
    keyword: "",
    protocol:"",
    time:"" })

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

  learningAlert= () =>{
    let url = `https://api.spotify.com/v1/search?devices=${this.state.checked}&protocols=${this.state.protocol}&time=${this.state.time}`;
    alert(url);
  }

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

  renderSummary = () =>{
    return(
      <Segment.Group raised color="black">
      <h1 className="rct-icon-half-check2">Summary</h1>
    <Segment className="rct-icon-half-check2" color="black">Checked Devices: {this.state.checked.join('             ,               ')}</Segment>
    <Divider horizontal></Divider>
    <Segment>Select Time:  {this.state.time}</Segment>
    <Divider horizontal></Divider>
    <Segment>Select protocol:  { this.state.protocol}</Segment>
    <Divider horizontal></Divider>
    <Segment><Button onClick={this.clearAll} >clear all</Button> <Button onClick={this.learningAlert} >start learining</Button></Segment>
  </Segment.Group>

    )

  }

  renderAddedData = (value) =>{
    if(value === 'protocol'){
      return (
       
           <label className="col-md-7 text-left">
        <Form className="left">
          <Form.Field>
          
      <h1 className="rct-icon-half-check2">Selected protocol: <b>{this.state.protocol}</b></h1>
          </Form.Field>
          <Form.Field>
            <Radio
              label='Modbus'
              name='radioGroup'
              value='Modbus'
              checked={this.state.protocol === "Modbus"}
              onChange={this.handleProtocolChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='DNP-3'
              name='radioGroup'
              value='DNP-3'
              checked={this.state.protocol === "DNP-3"}
              onChange={this.handleProtocolChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='IEC104'
              name='radioGroup'
              value='IEC104'
              checked={this.state.protocol === "IEC104"}
              onChange={this.handleProtocolChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='MMS'
              name='radioGroup'
              value='MMS'
              checked={this.state.protocol === "MMS"}
              onChange={this.handleProtocolChange}
            />
          </Form.Field>
          
        </Form>
              </label>
      )
    }
    return (
      <Form>
      <Form.Field>
      <h1 className="rct-icon-half-check2">Selected Time: <b>{this.state.time}</b></h1>
      </Form.Field>
      <Form.Field>
        <Radio
          label='Last 30 minutes'
          name='radioGroup'
          value='Last 30 minutes'
          checked={this.state.time === "Last 30 minutes"}
          onChange={this.handleTimeChange}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='Last Hour'
          name='radioGroup'
          value='Last Hour'
          checked={this.state.time === "Last Hour"}
          onChange={this.handleTimeChange}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='Last 8 Hours'
          name='radioGroup'
          value='Last 8 Hours'
          checked={this.state.time === "Last 8 Hours"}
          onChange={this.handleTimeChange}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='Last 24 Hours'
          name='radioGroup'
          value='Last 24 Hours'
          checked={this.state.time === "Last 24 Hours"}
          onChange={this.handleTimeChange}
        />
      </Form.Field>
      
    </Form>

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
    <Grid.Row color='black'>
      <Grid.Column>
        <Segment color='black' inverted >
        {this.renderDeviceTreeElements()}
        </Segment>
      </Grid.Column>
      <Grid.Column color='orange' >
        <Segment color='orange' inverted>
        {this.renderAddedData('protocol')}
        </Segment>
        </Grid.Column>
        <Grid.Column color='olive' >
        <Segment color='olive' inverted>
        {this.renderAddedData(null)}
        </Segment>
        </Grid.Column>
        <Grid.Column color='black' >
        <Segment color='black' inverted>
        {this.renderSummary()}
        </Segment>
        </Grid.Column>

     
    </Grid.Row>
  </Grid>
      
      </div>
    );
  }
}


export default App;
