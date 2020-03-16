import React, { useState } from "react";
import { Button, Alert } from 'react-bootstrap';

const AlertDismissable = () => {
    const [show, setShow] = useState(true);

    return (
      <>
        <Alert show={show} variant="info">
          <Alert.Heading>Welcom to Pet Caring!</Alert.Heading>
          
         
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-info">
              Sign-In 
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
}

export default AlertDismissable;