import React, { useState } from "react";
import { Figure } from 'react-bootstrap';


const Figures = () => {
    const [show, setShow] = useState(true);

    return (
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="holder.js/171x180"
            />
            <Figure.Caption>
            We are an online platform that allow pet owners post their needs.
            </Figure.Caption>
        </Figure>
    )}

    export default Figures