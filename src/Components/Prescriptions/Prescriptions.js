import React from 'react';
import Prescription from './Prescription/Prescription.js';
import { Container } from 'react-bootstrap';


const prescriptions = props => {
    let a = [];
    for(let i = 1; i <= 100; i++) a.push(i);
    let prescriptionJSX = a.map(el => <Prescription key = {el}></Prescription>)
    return (
        <Container className= "mt-3" style = {{display: 'flex' , justifyContent: 'flex-start', flexWrap: 'wrap'}}>
            {prescriptionJSX}
        </Container>
    )
}

export default prescriptions;