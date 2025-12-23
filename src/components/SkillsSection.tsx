import ScrollReveal from './ScrollReveal';
import ProgressBar from './ProgressBar';

const skillCategories = [
  {
    name: 'Cloud',
    skills: [
      { name: 'OCI Compute', percentage: 90 },
      { name: 'OCI Storage', percentage: 85 },
      { name: 'Load Balancers', percentage: 88 },
      { name: 'VCN Design', percentage: 92 },
      { name: 'IAM Policies', percentage: 85 },
    ],
  },
  {
    name: 'Networking & Security',
    skills: [
      { name: 'Networking', percentage: 90 },
      { name: 'Firewalls', percentage: 85 },
      { name: 'Security', percentage: 88 },
      { name: 'Cloud Guard', percentage: 80 },
    ],
  },
  {
    name: 'Programming & Tools',
    skills: [
      { name: 'Linux', percentage: 85 },
      { name: 'SQL', percentage: 80 },
      { name: 'Python', percentage: 70 },
      { name: 'Virtualization', percentage: 82 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="section-title">Skills</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="card-base">
            <div className="grid md:grid-cols-2 gap-10">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className={catIndex === 2 ? 'md:col-span-2' : ''}>
                  <h4 className="text-primary font-semibold mb-6 text-center">{category.name}</h4>
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <ProgressBar
                        key={skillIndex}
                        skill={skill.name}
                        percentage={skill.percentage}
                        delay={skillIndex * 100}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills as badges */}
            <div className="mt-10 pt-8 border-t border-border">
              <h4 className="text-primary font-semibold mb-4 text-center">Soft Skills</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['Troubleshooting', 'Teamwork', 'Problem Solving', 'Communication', 'Leadership'].map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
