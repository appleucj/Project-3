import { useState } from "react";
import profileImage from "../assets/images/profile.png";

const useUserModel = () => {
    const [nameState, setName] = useState("");
    const [cityState, setName] = useState("");
    const [usernameState, setName] = useState("");
    const [passwordState, setName] = useState("");
    const [imageState, setImage] = useState(profileImage);
    const [statusState, setStatus] = useState

    return {
        error: nameState === "" ? "Please enter State name" : "",
        name: {
            value: nameState,
            onChange: e => setName(e.target.value)
        },
        error: cityState === "" ? "Please enter State name" : "",
        name: {
            value: nameState,
            onChange: e => setName(e.target.value)
        }

    }
}
