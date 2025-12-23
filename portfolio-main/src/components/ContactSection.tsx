import { Mail, Linkedin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="section-title">Get In Touch</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="card-base text-center">
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:sayedmohamedmahran@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/80 transition-all duration-300"
              >
                <Mail size={18} />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/sayed404/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all duration-300"
              >
                <Linkedin size={18} />
                Visit LinkedIn
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
