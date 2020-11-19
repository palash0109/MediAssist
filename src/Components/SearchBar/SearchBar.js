import React from 'react';

import classes from './SearchBar.module.css';

const searchBar = props => {
    return (
        <>
            <input className ={classes.SearchBar} placeholder = {props.placeholder} onChange = {props.changed} value ={props.value} />
        </>
    );
}

export default searchBar;