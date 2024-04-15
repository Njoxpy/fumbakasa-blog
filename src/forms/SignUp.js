import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setUserName(event.target.value);
    }

    // handle password
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        // reset form fields
        setEmail('');
        setPassword('');
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter username"  onChange={handleEmailChange}/>
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="enter password" onChange={handlePasswordChange}/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Signup;

// signup form(email, password)