import "./Projects.css";
import foodImg from "../assets/food.png";
import ecommerceImg from "../assets/ecommerce.jpeg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform = `
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.04)
    `;
  };

  const resetCard = (card) => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div
          className="project-card"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => resetCard(e.currentTarget)}
        >
          <img src={foodImg} alt="Food App" />

          <div className="overlay">
            <h3>Food Delivery App</h3>
            <p>MERN stack app with payment & admin dashboard.</p>

            <div className="buttons">
              <a
                href="https://your-live-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                <FaExternalLinkAlt /> Live
              </a>

              <a
                href="https://github.com/kunalgautam0076-pixel/PortFolioWeb"
                target="_blank"
                rel="noopener noreferrer"
                className="code-btn"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="project-card"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => resetCard(e.currentTarget)}
        >
          <img src={ecommerceImg} alt="Ecommerce" />

          <div className="overlay">
            <h3>My PortFolio</h3>
            <p>Its My PortFolio.</p>

            <div className="buttons">
              <a
                href="https://your-live-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                <FaExternalLinkAlt /> Live
              </a>

              <a
                href="https://github.com/yourusername/ecommerce-website"
                target="_blank"
                rel="noopener noreferrer"
                className="code-btn"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;