import { Mail, Linkedin } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import TypingEffect from './TypingEffect';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative z-10">
      {/* Profile Image */}
      <div className="relative mb-6 group">
        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary animate-pulse-glow transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
          <img
            src={profileImage}
            alt="Sayed Mohamed Sayed"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-3xl md:text-5xl font-bold mb-2">
        <span className="gradient-text">Sayed Mohamed Sayed</span>
      </h1>

      {/* Title with Typing Effect */}
      <h2 className="text-lg md:text-xl text-muted-foreground mb-6 h-8">
        <TypingEffect text="OCI Infrastructure Engineer" speed={80} />
      </h2>

      {/* Social Links */}
      <div className="flex gap-4">
        <a
          href="mailto:sayedmohamedmahran@gmail.com"
          className="social-icon"
          aria-label="Email"
        >
          <Mail size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/sayed404/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
