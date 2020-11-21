import React from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap'

function App() {

    return (
        
      <div className="App">
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />

         </Form.Group>
        </Form>

      <Button>Click me pls</Button>
      
      </div>

        )
    }

export default App;