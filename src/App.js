import React, { useEffect, useRef, useState } from 'react';
import './css/App.css';
import norwayFlag from './images/norway.png';
import ukFlag from './images/uk.jpeg';
import translations from './utils/translations';
import githubLogo from './images/github-emoji.png';
import linkedinLogo from './images/linkedin-icon.png';
import fullLogo from './images/full-logo.png';


function LanguageToggle({ lang, setLang }) {
  return (
    <button
      className="language-toggle-btn"
      onClick={() => setLang(lang === 'en' ? 'no' : 'en')}
      aria-label="Toggle language"
      type="button"
    >
      {lang === 'no' ? (
        <>
          <img
            src={norwayFlag}
            alt="Norwegian flag"
            className="flag-icon icon-margin"
          />
          Norsk
        </>
      ) : (
        <>
          <img
            src={ukFlag}
            alt="UK flag"
            className="flag-icon icon-margin"
          />
          English
        </>
      )}
    </button>
  );
}

// eslint-disable-next-line 
function ThemeToggle({ theme, setTheme, t }) {
  return (
    <button
      className="theme-toggle-btn"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={t.toggleLabel}
      type="button"
    >
      {theme === 'dark' ? (
        <>
          <span role="img" aria-label={t.moonLabel} className="icon-margin">🌙</span>
          {t.dark}
        </>
      ) : (
        <>
          <span role="img" aria-label={t.sunLabel} className="icon-margin">☀️</span>
          {t.light}
        </>
      )}
    </button>
  );
}

// Hero component
const Hero = React.forwardRef(({ t }, ref) => {
  return (
    <header className="hero" ref={ref}>
      <div className="hero-content hero-row">
        <img src={fullLogo} alt="Michael Ekornrud logo" className="hero-logo" />
        <div className="hero-text">
          <p>{t.desc}</p>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#services">{t.nav.services}</a></li>
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
});

function Services({ sectionRef, t }) {
  return (
    <section id="services" ref={sectionRef}>
      <h2>{t.title}</h2>
      <div className="service-list">
        {t.items.map((service) => (
          <div className="service" key={service.title}>
            <h3>{service.title}</h3>
            <div className="technology-list">
              {service.technologies.map((tech) => (
                <span key={tech} className="technology-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ sectionRef, t }) {
  return (
    <section id="about" ref={sectionRef}>
      <h2>{t.title}</h2>
      <p>{t.desc}</p>
    </section>
  );
}

function Contact({ sectionRef, t }) {
  return (
    <section id="contact" ref={sectionRef}>
      <h2>{t.title}</h2>
      <p>{t.desc}</p>
      <ul>
        <li>{t.email}: <a href={`mailto:${t.emailValue}`}>{t.emailValue}</a></li>
        <li>{t.phone}: <a href={`tel:${t.phoneValue.replace(/\s/g, '')}`}>{t.phoneValue}</a></li>
      </ul>
    </section>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/michael-ekornrud" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center'}}>
          <img src={linkedinLogo} alt="LinkedIn" style={{width: '22px', height: '22px', borderRadius: '50%', marginRight: '4px', background: '#fff'}} />
          LinkedIn
        </a>
        <a href="https://github.com/michaelekornrud" target="_blank" rel="noopener noreferrer" style={{marginLeft: '12px', display: 'inline-flex', alignItems: 'center'}}>
          <img src={githubLogo} alt="GitHub" style={{width: '22px', height: '22px', borderRadius: '50%', marginRight: '4px', background: '#fff'}} />
          GitHub
        </a>
      </div>
      <br/>
      <small>&copy; 2024 Michael Ekornrud </small>
      
    </footer>
  );
}

function ScrollToTop({ lang }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return isVisible ? (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label={lang === 'no' ? 'Gå til toppen' : 'Back to top'}
    >
      ↑
    </button>
  ) : null;
}

function App() {
  const [lang, setLang] = useState('no');
  // eslint-disable-next-line 
  const [theme, setTheme] = useState('light');
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const heroT = translations.hero[lang];
  const servicesT = translations.services[lang];
  const aboutT = translations.about[lang];
  const contactT = translations.contact[lang];
  // eslint-disable-next-line 
  const themeT = translations.theme[lang];

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    return () => heroObserver.disconnect();
  }, []);

  const handleAnchorClick = (e) => {
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          // La animasjonen kjøre på nytt hver gang seksjonen kommer i view
          entry.target.classList.remove('fade-init');
          void entry.target.offsetWidth; // Trigger reflow
          entry.target.classList.add('fade-init');
        }
      });
    }, { 
      threshold: 0.5, // Trigger når halve seksjonen er synlig
      rootMargin: '-10% 0px' // Litt margin for å unngå for tidlig trigger
    });

    [servicesRef, aboutRef, contactRef].forEach(ref => {
      if (ref.current) {
        ref.current.classList.add('fade-init');
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [servicesRef, aboutRef, contactRef]);

  return (
    <div className="App" onClick={handleAnchorClick}>
      <div className="top-right-controls">
        <LanguageToggle lang={lang} setLang={setLang} />
      </div>
      <div className="header-container">
        <Hero t={heroT} ref={heroRef} />
      </div>
      {!isHeroVisible && (
        <nav className="sticky-nav">
          <ul>
            <li><a href="#about">{heroT.nav.about}</a></li>
            <li><a href="#services">{heroT.nav.services}</a></li>
            <li><a href="#contact">{heroT.nav.contact}</a></li>
          </ul>
        </nav>
      )}
      <main>
        <About sectionRef={aboutRef} t={aboutT} />
        <Services sectionRef={servicesRef} t={servicesT} />
        <Contact sectionRef={contactRef} t={contactT} />
      </main>
      <Footer />
      <ScrollToTop lang={lang} />
    </div>
  );
}

export default App;
