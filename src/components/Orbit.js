import "./Orbit.css";

export default function Orbit() {
  return (
    <div className = "wrapper">
      <div className="circle" />
      <div className="orbitingCircle"> 
        <img src="/dslr2.png" alt="DSLR Camera" className="camera-icon" />
        <img src="/flash.png" alt="Flash" className="child" />
      </div>
        
    </div>
  );
}