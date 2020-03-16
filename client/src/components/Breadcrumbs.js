import React, { useState } from "react";
import { Breadcrumb } from 'react-bootstrap';

const Breadcrumbs = () => {
    const [show, setShow] = useState(true);

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Contact Us</Breadcrumb.Item>
            
        </Breadcrumb>
    )
}
export default Breadcrumbs;
