import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import CertificationsSection from './sections/CertificationsSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
