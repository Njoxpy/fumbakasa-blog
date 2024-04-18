import { useState } from "react";

const Contact = () => {
    // states
    const [name, setName] = useState('');
    const [complaint, setComplaint] = useState('');
    const [email, setEmail] = useState('');
    // handle name
    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleComplaint = (event) => {
        setComplaint(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    // handle submit
    const handleSubmit = (event) => {
        // prevent browser default
        event.preventDefault();

        // set to default after submit
        setName('');
        setComplaint('');
        setEmail('');
    }
    return (
        <div>
            <section className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Kama una dukuduku Fikisha hapa</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    required
                                    onChange={handleName}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="blog body text area" className="form-label">Complaint</label>
                                <textarea
                                    className="form-control"
                                    id="blog body text area"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">E-Mail Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <address>
                            <strong>Fumbakasa</strong>
                            <br />
                            123 Main Street
                            <br />
                            Njombe, CA 12345
                            <br />
                            (+255) 623-216-785
                            <br />
                            <a href="mailto:njox3333@gmail.com">njox3333@gmail.com</a>
                        </address>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;