import React , {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Form from './forms.js';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function App() {
  const[disease, setDisease] = useState("");
  const[docname,setDocname] = useState("");
  const[date, setDate] = useState("");
  const[drug,setDrug] = useState("");
  const[description, setDescription] = useState("");
  const[image,setImage] = useState("");

  function handleSubmit(event) {
    console.log(disease)
    console.log(docname)
    console.log(date)
    console.log(drug)
    console.log(description)
    console.log(image)
    event.preventDefault()
    event.target.reset();
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="top"></div>
        <p id="head">Fill me please!</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Disease name</Form.Label>
            <Form.Control type="text"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
             />

         </Form.Group>
         <Form.Group>
            <Form.Label>Doctor's name</Form.Label>
            <Form.Control type="text"
            value={docname}
            onChange={(e) => setDocname(e.target.value)} />

         </Form.Group>

         <Form.Group>
            <Form.Label>Date of consultant</Form.Label>
            <Form.Control type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)} />

         </Form.Group>
         <Form.Group>
            <Form.Label>Drug(s) name</Form.Label>
            <Form.Control type="text" 
            value={drug}
            onChange={(e) => setDrug(e.target.value)}/>

         </Form.Group>
         <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)} />

         </Form.Group>
         <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Add a picture of the prescription"
            value={image}
            onChange={(e) => setImage(e.target.value)} />
          </Form.Group>
            <Button style={{color:"#00005c"}} type="submit" variant="info">Done</Button>{' '}
        </Form>
        
        <div id="last"></div>
        </header>
        
    </div>
  );
  
}

export default App;
