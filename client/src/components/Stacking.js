import React, { useState } from "react";
import { Toast } from 'react-bootstrap';

const Stackings = () => {
    const [show, setShow] = useState(true);

    return (
      <div>
      <Toast>
        <Toast.Header>
          <img src="./pets.png" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Name</strong>
         
        </Toast.Header>
        <Toast.Body>I love pets.</Toast.Body>
      </Toast>



      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Name</strong>
          
        </Toast.Header>
        <Toast.Body>I have a dog.</Toast.Body>
      </Toast>

      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Name</strong>
          
        </Toast.Header>
        <Toast.Body>I have two cats.</Toast.Body>
      </Toast>
      </div>
    )}

    export default Stackings