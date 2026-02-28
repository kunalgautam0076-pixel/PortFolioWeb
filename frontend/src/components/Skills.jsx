import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "CSS", level: 95 },
  ];

  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  // Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <h2>Skills</h2>

      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          name={skill.name}
          level={skill.level}
          start={startAnimation}
        />
      ))}
    </section>
  );
};

const SkillBar = ({ name, level, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const speed = 15;

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= level) {
        clearInterval(counter);
      }
    }, speed);

    return () => clearInterval(counter);
  }, [start, level]);

  return (
    <div className="skill">
      <div className="skill-header">
        <span>{name}</span>
        <span>{count}%</span>
      </div>

      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: start ? `${level}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;