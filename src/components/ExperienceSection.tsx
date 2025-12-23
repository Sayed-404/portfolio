import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'OCI Infrastructure Engineer',
    company: 'Zone Trading Company — Egypt',
    duration: 'Present',
    responsibilities: [
      'Provisioning and managing OCI resources (Compute, Storage, Networking, Security)',
      'Designing and securing Virtual Cloud Networks (VCNs), subnets, route tables, Security Lists, and NSGs',
      'Deploying and configuring OCI Load Balancers with health checks for high availability',
      'Implementing secure access with OCI Bastion and IAM policies',
      'Configuring OS Management Hub for patching, monitoring, and updates',
      'Enhancing security posture using Cloud Guard, Security Zones, and Web Application Firewall (WAF)',
      'Troubleshooting and analyzing network traffic with Network Path Analyzer and Network Visualizer',
      'Supporting hybrid connectivity with Site-to-Site VPN (IPsec)',
      'Monitoring cost and usage through OCI Billing & Cost Management',
    ],
  },
  {
    title: 'IT & Database Administration Intern',
    company: 'RALY (IT) — Egypt',
    duration: 'Nov 2024 – Apr 2025',
    responsibilities: [
      'Completed CompTIA ITF+, A+, N+, Security+, and Linux+ courses',
      'Gained hands-on experience with SQL, PL/SQL, and Oracle DBA fundamentals',
      'Assisted in basic database administration tasks including installation, user management, and backup concepts',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="section-title">Professional Experience</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="card-base">
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary" />
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground italic text-sm md:text-base">{exp.company}</p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full self-start">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExperienceSection;
