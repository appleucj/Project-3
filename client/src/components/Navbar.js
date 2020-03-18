import React, { useState } from "react";
import { Navbar } from 'react-bootstrap';


const Navbars = () => {
    const [show, setShow] = useState(true);

    return (
        <Navbar>
            <Navbar.Brand href="#home">Pet Care</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                     <a href="#login">Signed in</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars