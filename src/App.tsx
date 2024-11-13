import './i18n';
import { useRef, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Feature from './Components/Feature';
import About from './Components/About';
import OurServices from './Components/OurServices';
import Why from './Components/Why';
import How from './Components/How';
import Info from './Components/Info';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';

function App() {
  const homeSection = useRef<HTMLDivElement>(null);
  const aboutSection = useRef<HTMLDivElement>(null);
  const servicesSection = useRef<HTMLDivElement>(null);
  const whySection = useRef<HTMLDivElement>(null);
  const howSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => { 
    if (sectionRef.current) {
      console.log('Scrolling to section');
      window.scrollTo({
        top: sectionRef.current.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    } else {
      console.error('Section not found');
    }
  }

  return (
    <body>
      <div className="wrap">
        <Header reference={headerRef} scrollToSection={scrollToSection} homeSection={homeSection} aboutSection={aboutSection} howSection={ howSection} servicesSection={servicesSection} contactSection={contactSection} />
        <Home id='home' sectionRef={homeSection} scrollToSection={scrollToSection} servicesSection={servicesSection} whySection={whySection}/>
        <Feature />
        <About id='about' sectionRef={aboutSection}/>
        <How id='how' sectionRef={howSection}/>
        <OurServices id='services' sectionRef={servicesSection} contactSection={contactSection} scrollToSection={scrollToSection}/>
        <Info />
        <Why id='why' sectionRef={whySection} contactSection={contactSection} scrollToSection={scrollToSection}/>
        <ContactForm id='contact' sectionRef={contactSection}/>
      </div>
      
      <Footer />
      
    </body>
  );
}

export default App;
