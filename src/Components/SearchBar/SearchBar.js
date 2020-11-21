import React from 'react';

import classes from './SearchBar.module.css';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

const searchBar = props => {
    return (
        <div className={classes.SearchBar}>
          <InputGroup className="mt-3">
            <FormControl 
              placeholder="Search Records"
              aria-label="Search Records"
              aria-describedby="basic-addon2"
              onChange={props.onChangedHandler}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" >Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
    );
}

export default searchBar;