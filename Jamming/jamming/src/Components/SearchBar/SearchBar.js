import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        term:'noterm'
      }

      this.search = this.search.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e){
      if(e.key === 'Enter'){
        this.search();
      }
    }
    
    handleTermChange(e){
     this.setState({
       term:e.target.value
      });
    }

    search(){
      this.props.onSearch(this.state.term);
    }
    render(){
      
        return(
        <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
      )
}
}

export default SearchBar;