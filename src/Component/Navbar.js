import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Navbar1() {
	return (
		<div>
			<Navbar className="navcol" fixed="top" variant="light" bg="light">
				<Navbar.Brand >Navbar</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/">Login</Nav.Link>
					<Nav.Link href="/signup">Signup</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	)
}
export default Navbar1;
