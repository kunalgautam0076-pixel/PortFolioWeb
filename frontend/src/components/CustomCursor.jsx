import { useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorDot = document.querySelector(".cursor-dot");

    let trails = [];

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      cursorDot.style.left = x + "px";
      cursorDot.style.top = y + "px";

      // Create glow trail element
      const trail = document.createElement("div");
      trail.className = "cursor-wave";
      trail.style.left = x + "px";
      trail.style.top = y + "px";

      document.body.appendChild(trail);
      trails.push(trail);

      setTimeout(() => {
        trail.remove();
      }, 600);
    };

    const addHover = () => cursor.classList.add("cursor-hover");
    const removeHover = () => cursor.classList.remove("cursor-hover");

    const clickEffect = () => {
      cursor.classList.add("cursor-click");
      setTimeout(() => {
        cursor.classList.remove("cursor-click");
      }, 150);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", clickEffect);

    const hoverElements = document.querySelectorAll("a, button, .project-card");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", clickEffect);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-dot"></div>
    </>
  );
};

export default CustomCursor;