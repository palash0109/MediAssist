import React from 'react';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import Nav_Icon from '../assets/plant.svg';
import '../App.css';

function Navigation_Bar() {
    return (
        <div className="navigation">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    <img className="nav_icon pr-2" src={Nav_Icon}/>
                        MediAssist</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#deets">Login</Nav.Link>
                            <Nav.Link href="#deets">SignUp</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation_Bar;
