import React, { useState } from 'react'
import { Form, Button , Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Assets/landing_image-01-01-01.svg'
import Navigator from './Navigator'

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(event) {
		console.log(email)
		event.preventDefault();
		alert("The form is summited")
	  }
	  function validateForm() {
		return (email.includes('@') && email.length>8) && password.length > 3;
	  }

	return (
		<div className="container top ">
			<div className="row  justify-content-center align-items-center form-back border shadow">
				<div className='col-md-6 d-none d-sm-block'>
				<Image  className="border-right border-black" src={img} rounded />
				</div>
				<div className="col-md-5 col-sm-12 m-sm-2 ">
					<h3>Login</h3>
					<Form onSubmit={handleSubmit} >
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}/>
							<Form.Text className="text-muted lg">
								We'll never share your email with anyone else.
		  					</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password"
							  value={password}
							  onChange={(e) => setPassword(e.target.value)} />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Remember Me!" />
						</Form.Group>

						<Button classname="button-color"  type="submit"  disabled={!validateForm()}>
							Submit
						</Button>
						<div >
							<Navigator />
						</div>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default Login;
