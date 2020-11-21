import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigator2() {
	return (
		<div className="conatiner">
		<div className="row">
			<div className='offset-md-3 col-md-12 col-sm-12 '>
				<h6>Already a User ! Login <NavLink to='/'>here</NavLink></h6>
			</div>
			{"  "}  {"  "}

		</div>
	</div>
	)
}
export default Navigator2;
