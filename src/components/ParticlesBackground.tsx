import { useEffect, useState } from 'react';

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      size: Math.random() * 3 + 2,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
