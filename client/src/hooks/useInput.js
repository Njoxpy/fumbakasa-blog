import { useState } from "react";

const useInput = () => {
    const [enteredValue, setEnteredValue] = useState("");
    // const [password, setPassword] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    return (
        <div className="bg-light">
            <p>Adding Custom Input Hook</p>
        </div>
    );
}
 
export default useInput;