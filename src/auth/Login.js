import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  // handle userName
  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  // handle password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);

    if (userName.trim() === "" && password.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if (userName.trim() === "" && password.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    // reset form fields
    setUserName("");
    setPassword("");
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameIsTouched;

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userName}
            onChange={handleUsernameChange}
            onBlur={nameInputBlurHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handlePasswordChange}
            onBlur={nameInputBlurHandler}
          />
          {!enteredNameIsValid && (
            <p>User Name and password must not be empty.</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
