import "./Particles.css";

const Particles = () => {
  return (
    <div className="particles">
      {[...Array(30)].map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
};

export default Particles;