import { ExternalLink, Cloud, Shield, Database, Network, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const certifications = [
  { title: 'Oracle Cloud Infrastructure 2025 Networking Professional', url: 'https://drive.google.com/file/d/1A-EuQgMsHSFqLLFKHQ7RV4YWtDQRtXiJ/view?usp=drive_link', icon: Network, color: 'text-orange-500' },
  { title: 'Oracle Cloud Infrastructure 2025 Architect Associate', url: 'https://drive.google.com/file/d/1T5BcpY9g1CUC0aZs7roct0IZYwhGRm5I/view?usp=drive_link', icon: Cloud, color: 'text-red-500' },
  { title: 'Oracle Data Platform 2025 Foundations Associate', url: 'https://drive.google.com/file/d/1-7WSCWQpfcK708lsq7MlRifymE2uYqiW/view?usp=sharing', icon: Database, color: 'text-red-500' },
  { title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate', url: 'https://drive.google.com/file/d/18S33uOh0eNI-pAyQr7eg6ZDSS3hJQsnv/view?usp=drive_link', icon: Cloud, color: 'text-red-500' },
  { title: 'Oracle Cloud Infrastructure 2025 Foundations Associate', url: 'https://drive.google.com/file/d/1cB6_9C0Q6UlFccuMUDD0lDeOKVJEHUtB/view?usp=drive_link', icon: Cloud, color: 'text-red-500' },
  { title: 'ITF+', url: 'https://drive.google.com/file/d/1buPqaPmUKUfG0O34ouVn8pGyin1zx8zl/view?usp=drive_link', icon: Award, color: 'text-red-600' },
  { title: 'A+', url: 'https://drive.google.com/file/d/1ypdtbdvAV3gb6c13hVhKNqSKjHnZAtR1/view?usp=drive_link', icon: Award, color: 'text-red-600' },
  { title: 'Network+', url: 'https://drive.google.com/file/d/13fdSQIQjdlSg3g4lC_K1ogYlzImDrLmY/view?usp=drive_link', icon: Network, color: 'text-red-600' },
  { title: 'Security+', url: 'https://drive.google.com/file/d/11N14NCVvEvP5mgkJSLeBq-gw3rx1LUsb/view?usp=drive_link', icon: Shield, color: 'text-red-600' },
  { title: 'Cisco Cybersecurity', url: 'https://drive.google.com/file/d/1WX3tucdEt2AKtDB9t2-ctRhrzIKw0G7U/view?usp=drive_link', icon: Shield, color: 'text-blue-500' },
  { title: 'CCNA', url: 'https://drive.google.com/file/d/1SydMgXHYGtwe0WXZzNsQiLmfnI9-PzIj/view?usp=drive_link', icon: Network, color: 'text-blue-500' },
  { title: 'SQL', url: 'https://drive.google.com/file/d/19NhyM4dePAXX7x-CeaQ9rrSYSz8XEX6r/view?usp=sharing', icon: Database, color: 'text-yellow-500' },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="section-title">Certifications</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="cert-card">
                <div className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-4 ${cert.color}`}>
                  <cert.icon size={24} />
                </div>
                <h3 className="text-foreground font-semibold mb-4 text-sm md:text-base leading-relaxed">
                  {cert.title}
                </h3>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/80 transition-all duration-300"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
