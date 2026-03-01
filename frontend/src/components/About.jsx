import { FaUniversity, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">

      {/* Title */}
      <h2 className="about-title">
        About <span className="gradient-text">Me</span>
      </h2>

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h3>Who I Am</h3>

          <p>
            Hello everyone I'm <span className="highlight">Kunal Gautam</span>,
            a passionate full-stack developer who loves building modern,
            scalable and interactive web applications.
          </p>

          <p>
            I specialize in React, Node.js and MongoDB while crafting
            seamless UI experiences with strong backend logic and efficient API integrations.
          </p>

          <p>
            I continuously sharpen my skills and keep pace with evolving
            industry trends to build projects that blend visual elegance
            with high performance.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          {/* Card 1 */}
          <div className="edu-card">
            <div className="edu-header">
              <h4>Bachelor of Technology in Computer Science</h4>
              <span><FaCalendarAlt /> 2022 - Present</span>
            </div>
            <p><FaUniversity /> SB Jain Institute of Technology</p>
            <p><FaMapMarkerAlt /> Nagpur</p>
            <div className="badge">CGPA: 8.8 / 10</div>
          </div>

          {/* Card 2 */}
          <div className="edu-card">
            <div className="edu-header">
              <h4>Higher Secondary Certificate (12th)</h4>
              <span><FaCalendarAlt /> 2020 - 2022</span>
            </div>
            <p><FaUniversity /> Bharti Krishna Vidya Vihar</p>
            <p><FaMapMarkerAlt /> Nagpur</p>
            <div className="badge">Percentage: 71%</div>
          </div>

          {/* Card 3 */}
          <div className="edu-card">
            <div className="edu-header">
              <h4>Secondary School Certificate (10th)</h4>
              <span><FaCalendarAlt /> 2019 - 2020</span>
            </div>
            <p><FaUniversity /> Bharti Krishna Vidya Vihar</p>
            <p><FaMapMarkerAlt /> Nagpur</p>
            <div className="badge">Percentage: 76%</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;