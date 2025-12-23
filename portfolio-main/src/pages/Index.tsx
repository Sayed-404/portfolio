import ParticlesBackground from '@/components/ParticlesBackground';
import ParallaxBackground from '@/components/ParallaxBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ThemeToggle from '@/components/ThemeToggle';
import ShareButton from '@/components/ShareButton';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        <ParallaxBackground />
        <ParticlesBackground />
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <CertificationsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
        <ThemeToggle />
        <ShareButton />
      </div>
    </>
  );
};

export default Index;
