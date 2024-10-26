const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;