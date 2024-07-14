const ContactUs = () => {
    return (
        <div className="container">
            <form className="container" onSubmit={handleSubmit}>
                <p>For Any Inquiries Submit Here</p>
                <div class="mb-3">
                    <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default ContactUs;