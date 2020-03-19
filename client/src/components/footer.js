import React, { useState } from "react";
import { Navbar } from 'react-bootstrap';

const Footers = () => {

    return (
        <Navbar bg="dark" variant="dark" width='100%'>
            <Navbar.Brand>
                {/* <img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                /> */}
                Copyright          
            </Navbar.Brand>
        </Navbar>
    )
};

export default Footers;