import Antigravity from "./Antigravity";
import "./Hero.css";

const Hero = () => {

  const handleMagnet = (e, btn) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const resetMagnet = (btn) => {
    btn.style.transform = "translate(0px, 0px)";
  };

  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-bg">
        <Antigravity
          count={250}
          color="#093ca9"
          autoAnimate
        />
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1>Hi, I'm <span>Kunal Gautam</span></h1>
        <h2 className="typewriter">Full Stack Developer</h2>
        <p>I build modern and animated web applications.</p>

        <div className="hero-buttons">
          <a
            href="#projects"
            className="btn primary"
            onMouseMove={(e) => handleMagnet(e, e.currentTarget)}
            onMouseLeave={(e) => resetMagnet(e.currentTarget)}
          >
            View Work
          </a>

          <a
            href="#contact"
            className="btn secondary"
            onMouseMove={(e) => handleMagnet(e, e.currentTarget)}
            onMouseLeave={(e) => resetMagnet(e.currentTarget)}
          >
            Hire Me
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;