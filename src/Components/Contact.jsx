function Contact() {
  return (

    
    <main className="contact">


  <h1>Contact Me</h1>

      <p className="contact-description">
        I'm always open to new opportunities, collaborations,
        and connecting with other developers.
      </p>
      
      <form className="contact-form">

  <label htmlFor="name">Name</label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Enter your name"
    required
  />

  <label htmlFor="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your email"
    required
  />

  <label htmlFor="message">Message</label>
  <textarea
    id="message"
    name="message"
    placeholder="Write your message"
    rows="6"
    required
  ></textarea>

  <button type="submit">
    Send Message
  </button>

</form>

    

      <div className="contact-card">

        <h2>Let's Connect</h2>

        <p>
          <strong>Email:</strong><br />
          youremail@email.com
        </p>

        <p>
          <strong>GitHub:</strong><br />
          <a
            href="https://github.com/JaKristanCavitt"
            target="_blank"
            rel="noreferrer"
          >
            github.com/JaKristanCavitt
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong><br />
          Coming Soon
        </p>

    

      </div>

    </main>
  );
}

export default Contact;