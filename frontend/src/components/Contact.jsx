import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

  <div className="contact-heading">
    <h2 className="hero-heading">
      Contact <span>Me</span>
    </h2>
    <div className="heading-underline"></div>
  </div>

  {/* Rest of your content */}
      <div className="contact-container">
        
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Let's Work Together 🚀</h2>
          <p>
            Have a project in mind or just want to say hello?
            Feel free to reach out.
          </p>

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
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" required />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input type="email" required />
              <label>Email</label>
            </div>

            <div className="input-group">
              <textarea rows="4" required></textarea>
              <label>Message</label>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;