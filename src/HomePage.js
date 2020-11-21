import React, {Component} from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import Prescriptions from './Components/Prescriptions/Prescriptions';
import Carousel from './Components/Carousel/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

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
        <SearchBar changed = {this.onChangedHandler}/>
        <Carousel />
        <Prescriptions />
      </>
    );
  }
}

export default HomePage;
