import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="container">
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div>
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
