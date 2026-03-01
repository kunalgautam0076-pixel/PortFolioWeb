import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xc1chee",
        "template_telnqnn",
        form.current,
        "757I8dVqdRwXdGU9l"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess("Something went wrong ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-heading">
        <h2 className="hero-heading">
          Contact <span>Me</span>
        </h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Let's Work Together 🚀</h2>
          <p>Have a project in mind or just want to say hello? Feel free to reach out.</p>

          <div className="info-item">
            <FaEnvelope />
            <span>kunal@example.com</span>
          </div>

          <div className="info-item">
            <FaPhone />
            <span>+91 98765 43210</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Nagpur, India</span>
          </div>

          <div className="social-icons">
  <a 
    href="https://github.com/kunalgautam0076-pixel"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a 
    href="https://www.linkedin.com/in/kunal-gautam-b877952b1/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>
</div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>

            <div className="input-group">
              <input type="text" name="user_name" required />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input type="email" name="user_email" required />
              <label>Email</label>
            </div>

            <div className="input-group">
              <textarea name="message" rows="4" required></textarea>
              <label>Message</label>
            </div>

            <button type="submit" className="contact-btn">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && <p className="form-status">{success}</p>}

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;