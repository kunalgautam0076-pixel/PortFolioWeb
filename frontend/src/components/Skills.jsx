import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiFirebase
} from "react-icons/si";

import "./Skills.css";

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
  }, []);

  const techStack = [
    { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
    { name: "Express", icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d" },
    { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "Cloudinary", icon: <SiCloudinary />, color: "#4f8cff" },
    { name: "Firebase", icon: <SiFirebase />, color: "#ffca28" },
  ];

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="skills-header">
        <h2 className="skills-title">
  My Tech <span className="gradient-text">Arsenal</span>
</h2>
        <p>A showcase of the skills and tools driving my work</p>
      </div>

      <div className={`skills-grid ${visible ? "show" : ""}`}>
        {techStack.map((tech, index) => (
         <div
  key={index}
  className="skill-card"
  onMouseMove={(e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 8;   // 🔥 smaller divisor = faster tilt
    const rotateY = (centerX - x) / 8;  // 🔥 smaller divisor = faster tilt

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  }}
>
  <div
    className="skill-icon"
    style={{ color: tech.color }}
  >
    {tech.icon}
  </div>
  <h3>{tech.name}</h3>
</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;