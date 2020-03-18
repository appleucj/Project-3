import React, { useState } from "react";
import { Alert } from 'react-bootstrap';


const Alertlink = () => {
    const [show, setShow] = useState(true);

    return (
        <div>
            <Alert variant='info' >
                <h3>Services:</h3>
              <Alert.Link href="#">Dog Walking    </Alert.Link>
                <Alert.Link href="#">Pet Sitting    </Alert.Link>
                <Alert.Link href="#">Pet Boarding    </Alert.Link>
                <Alert.Link href="#">Pet Glooming    </Alert.Link>
            </Alert>
            <br></br>

           
            <Alert variant='info'>
                <h3>Three steps process:</h3>
                <Alert.Link href="#">1. Pick your location.    </Alert.Link>
                <Alert.Link href="#">2. Find a care giver.    </Alert.Link>
                <Alert.Link href="#">3. Schedule date & time.    </Alert.Link>
            </Alert>


        </div>
    )};
export default Alertlink