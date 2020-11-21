import React, { useState } from 'react'
import { Form, Button,Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Assets/landing_image-01-01-01.svg'
import Navigator2 from './Navigator2'

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setCPassword] = useState("");
	function validateForm() {
		return name.length > 3 && (email.includes('@') && email.length > 8) && password.length >= 1 && password === cpassword
	}

	function handleSubmit() {
		alert("Registration done")
	}


	return (
		<div className="container top1">
			<div className="row align-items-left border-class form-back border shadow">
				<div className='col-md-6 col-sm-12 d-none d-sm-block '>
				<Image  className="border-right border-black img1"src={img}  />
				</div>
				<div className="col-md-5 col-sm-12 ">
					<h3>SignUp</h3>
					<Form onSubmit={handleSubmit} >
						<Form.Group controlId="formName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter Name"
								value={name} onChange={(e) => setName(e.target.value)} />
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email"
								value={email} onChange={(e) => setEmail(e.target.value)} />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
		  					</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control type="telnum" placeholder="Enter Number"
								value={number} onChange={(e) => setNumber(e.target.number)} />
							<Form.Text className="text-muted">
								We'll never share your phone number with anyone else.
		  					</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password"
								value={password} onChange={(e) => setPassword(e.target.password)} />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Password"
								value={cpassword} onChange={(e) => setCPassword(e.target.cpassword)} />
						</Form.Group>
						<Button variant="primary" type="submit" disabled={!validateForm()}>
							Submit
						</Button>
						<Navigator2 />
					</Form>
				</div>
			</div>
		</div>
	)
}


export default Signup;
