import { useState, useEffect } from "react";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setVisible(window.scrollY > 300);
    });
  }, []);

  return (
    visible && (
      <button
        className="scrollTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    )
  );
};

export default ScrollTop;