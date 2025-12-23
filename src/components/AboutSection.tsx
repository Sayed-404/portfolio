import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="section-title">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="card-base">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              I'm <span className="text-primary font-semibold">Sayed Mohamed Sayed</span>, an Oracle Cloud Infrastructure Engineer with hands-on experience in designing, deploying, and managing cloud solutions across compute, storage, networking, and security domains on Oracle Cloud (OCI).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 text-sm md:text-base">
              Currently, I'm working at <span className="text-primary font-semibold">Zone Trading Company</span>, where I build and maintain secure and scalable cloud infrastructures, integrating hybrid data center solutions and applying Oracle's best security practices.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 text-sm md:text-base">
              I hold a B.Sc. in Computers and Information from Assiut University (Class of 2024), where I achieved an <span className="text-secondary font-semibold">A+</span> for my graduation project — an AI-Based Human Resource Management System.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 text-sm md:text-base">
              I'm passionate about cloud architecture, automation, and cybersecurity, and I continuously develop my expertise through certifications such as OCI Architect Associate, OCI Networking Professional, and Security.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 text-sm md:text-base">
              Beyond the tech side, I value <span className="text-primary">teamwork</span>, <span className="text-primary">innovation</span>, and <span className="text-primary">continuous learning</span> — always striving to deliver reliable, efficient, and secure cloud environments.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
