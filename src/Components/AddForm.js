import React, { useState } from 'react'
import './AddForm.css'
import img from '../Assests/landing_image-01-01-01.svg'
import { Form, Row, Col, Container, Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function AddForm() {

	const [inputFields, setInputFields] = useState([
		{ medicineName: '', days: null, perday: null },
	]);

	const [doctorName, setDoctorName] = useState("");
	const [diseaseName, setDiseaseName] = useState("");
	const [date, setDate] = useState("");
	const [doctorType, setDoctorType] = useState("");
	const [description, setDescription] = useState("");


	const handleAddFields = (e) => {
		e.preventDefault();
		setInputFields([...inputFields, { medicineName: '', days: null, perday: null }])
	}
	const deleteItem = (i) => {
		
		setInputFields(currentItems => currentItems.filter((input, index) => index !== i));
	  }

	function handleSubmit() {
		alert("Formed Filled Up")
	}

	return (
		<div className='container mt-3'>
			<div className="layout">
				{/* <div className="row  align-items-left border box-shadow" >
					<div className="col-md-6 col-sm-12 "> */}
						<Form className="form-layout box-shadow" >
						<h1 className="text-center">Health-Care</h1>
							<Form >
								<Form.Group controlId="formBasicName">
									<Form.Label>Doctor's Name</Form.Label>
									<Form.Control type="text" placeholder="Enter Doctor's Name"
										value={doctorName} onChange={(e) => setDoctorName(e.target.value)} />
								</Form.Group>

								<Form.Group controlId="formBasicDiseaseName">
									<Form.Label>Disease Name</Form.Label>
									<Form.Control type="text" placeholder="Disease Name"
										value={diseaseName} onChange={(e) => setDiseaseName(e.target.value)} />
								</Form.Group>
								<Form.Group controlId="formBasicName">
									<Form.Label>Date of visit</Form.Label>
									<Form.Control type="date" placeholder="Enter Doctor's Name"
										value={date} onChange={(e) => setDate(e.target.value)} />
								</Form.Group>
								<Form.Group>
									<Form.Label>Doctor's Type</Form.Label>
									<Form.Control as="select" value={doctorType} onChange={(e) => setDoctorType(e.target.value)}>
										<option>General Physician </option>
										<option>Paediatrician</option>
										<option>Gynaecologist</option>
										<option>Cardiologist</option>
										<option>Others</option>
									</Form.Control>
								</Form.Group>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>Disease Description</Form.Label>
									<Form.Control as="textarea" rows={4}
										value={description} onChange={(e) => setDescription(e.target.value)} />
								</Form.Group>
							</Form>
							<Form >
								{inputFields.map((input,i) => (
									<div >
										<Form.Group className="form-inline" key={i}>
											<Form.Control type="text" placeholder="Medicine Name" className="col-sm-4 mr-2 mt-3" />
											<Form.Control type="number" min="1"  placeholder="No of Days" className="col-sm-3 mr-2 mt-3" />
											<Form.Control type="number" min="1"  placeholder="Per-Day" className="col-sm-3 mt-3" />
										</Form.Group>
										<Button type="submit" variant="warning" onClick={() => deleteItem(i)} >Remove</Button>

									</div>))}

							</Form>
							<Button type="submit" variant="warning" className="mt-2" onClick={handleAddFields}>
								Add More Prescription
  								</Button>
							<Button onClick={handleSubmit}  >Submit</Button>

						</Form>
					</div>
					{/* <div className='col-md-6 col-sm-12 d-none d-sm-block '>
						<Image className="border-left border-black img1" src={img} />
					</div> */}
				{/* </div>
			</div> */}
		</div>

	)
}

export default AddForm;
