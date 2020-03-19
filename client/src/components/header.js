import React from "react";
import { Navbar } from 'react-bootstrap';

const Headers = () => {
    
    return (
        <Navbar bg="dark" variant="dark" width="100%" fixed="top">
        <Navbar.Brand href="#home">
            <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Pet Care Hello !!!
        </Navbar.Brand>
        <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                     <a href="#login">Sign in</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Headers;
