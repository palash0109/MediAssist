import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './Component/Login'
import { Container, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Component/Navbar'
import './App.css';
import Signup from './Component/Signup';

function App() {
  return (


    <Router>
      <Navbar1/>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div>
        </div>
        <Route exact path='/' component={Login}></Route>
        <Route path='/signup' component={Signup} ></Route>
      </div>

    </Router>
  );
}

export default App;
