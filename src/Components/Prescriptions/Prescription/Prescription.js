import React from 'react';
import { Card } from 'react-bootstrap';
import './Prescription.css';
const prescription = props => {
    return (
        <Card style={{ width: '15rem', marginRight: '1rem', marginBottom: '1rem', border: '2px solid lightseagreen'}}>
            <Card.Img variant="top" src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg" />
            <Card.Body>
                <Card.Title>Disease Name</Card.Title>
                <Card.Subtitle>Prescription</Card.Subtitle>
                <Card.Text className = "mt-2">
                    <ul>
                        <li>Paracetamol</li>
                        <li>Paracetamol</li>
                        <li>Paracetamol</li>
                        <li>Paracetamol</li>
                    </ul>
                </Card.Text>
                <Card.Link href =  "#">Details</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default prescription;