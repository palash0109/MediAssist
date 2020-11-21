import React from 'react'
import { Nav, NavLink } from 'react-router-dom'

function Navigator() {
	return (
		<div className="conatiner">
			<div className="row">
				<div className='offset-md-3 col-md-12 col-sm-12 '>
					<h6>New user! Register <NavLink to='/signup'>here</NavLink></h6>
				</div>
				{"  "}  {"  "}

			</div>
		</div>
	)
}
export default Navigator;
