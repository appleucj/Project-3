import React, { useState } from "react";
import { Toast } from 'react-bootstrap';

const Stackings = () => {
    const [show, setShow] = useState(true);

    return (
      <div>
      <Toast>
        <Toast.Header>
          <img src="./pets.png" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Catherine</strong>
         
        </Toast.Header>
        <Toast.Body>I can walk dogs. My rate is $20.</Toast.Body>
      </Toast>



      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Keith</strong>
          
        </Toast.Header>
        <Toast.Body>Anybody could takecare of my cat?</Toast.Body>
      </Toast>

      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Grace</strong>
          
        </Toast.Header>
        <Toast.Body>I have two cats. I can take care your cats. My rate is $20 per hour.</Toast.Body>
      </Toast>
      </div>
    )}

    export default Stackings