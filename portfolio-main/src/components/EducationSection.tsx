import { GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="section-title">Education</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="card-base">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">B.Sc. in Computers and Information</h3>
                <p className="text-primary font-medium mt-1">Assiut University</p>
                <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  2020 - 2024
                </span>
                <p className="text-muted-foreground mt-4 text-sm md:text-base">
                  Graduated with <span className="text-secondary font-semibold">A+</span> in AI-Based Human Resource Management System project.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EducationSection;
