import React, {Component} from 'react';
import SearchBar from './Components/SearchBar/SearchBar';

class HomePage extends Component {
  state = {
    searchLine: ''
  }

  onChangedHandler = event => {
    const searchLine = event.target.value;
    this.setState({searchLine: searchLine});
  }

  render() {
    return (
      <>
        <SearchBar placeholder = "Search" changed = {this.onChangedHandler} value = {this.state.searchLine}/>
      </>
    );
  }
}

export default HomePage;
