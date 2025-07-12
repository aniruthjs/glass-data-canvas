import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  duration = 3,
  className = ''
}) => {
  const animationStyle = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };

  return (
    <div 
      className={`float-animation ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export const ParticleField: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};