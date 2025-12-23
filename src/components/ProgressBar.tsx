import { useState, useEffect, useRef } from 'react';

interface ProgressBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const ProgressBar = ({ skill, percentage, delay = 0 }: ProgressBarProps) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-primary font-semibold">{width}%</span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
