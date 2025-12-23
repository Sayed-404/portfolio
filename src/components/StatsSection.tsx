import { Award, Briefcase, Calendar, Code } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: Calendar, value: 1, suffix: '+', label: 'Years Experience' },
  { icon: Award, value: 12, suffix: '', label: 'Certifications' },
  { icon: Briefcase, value: 2, suffix: '', label: 'Companies' },
  { icon: Code, value: 15, suffix: '+', label: 'Skills' },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="card-base text-center py-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
