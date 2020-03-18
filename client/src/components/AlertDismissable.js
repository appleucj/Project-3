import React, { useState } from "react";
import { Button, Alert } from 'react-bootstrap';

const AlertDismissable = () => {

  const [show, setShow] = useState(true);

  return (
    <div>
     <div>
      <p> 
        hi
      {/* //role="banner"
      //  class="NavMain-StyledNavbar-module--cls2--2pVZv NavMain-StyledNavbar-module--cls1--3GekH navbar navbar-expand navbar-dark"
       > */}
        {/* <a href="#rb-docs-content" tabindex="0" class="NavMain-SkipToContentLink-module--cls2--2gF78 NavMain-SkipToContentLink-module--cls1--3FRsk sr-only sr-only-focusable bg-primary text-white px-4 py-2 mr-2">Skip to  content</a>
        <div class="d-none d-md-flex navbar-nav" id="top" role="navigation"></div> */}
      </p>
      </div>
      <Alert show={show} variant="info">
        <Alert.Heading>Welcom to Pet Caring!</Alert.Heading>
        <p>We are an online platform that allow pet owners post their needs.</p>

        <div className="d-flex justify-content-end">

          <Button onClick={() => setShow(false)} variant="outline-info">
            Logout
            </Button>
        </div>

          
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      
        </div>
      
    );
}

export default AlertDismissable;