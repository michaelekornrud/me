import React, { useEffect, useRef, useState } from 'react';
import './css/App.css';
import norwayFlag from './images/norway.png';
import ukFlag from './images/uk.jpeg';
import translations from './utils/translations';
import experience from './utils/experience';
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
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#expertise">{t.nav.expertise}</a></li>
            <li><a href="#experience">{t.nav.experience}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
});

function Expertise({ sectionRef, t }) {
  return (
    <section id="expertise" ref={sectionRef}>
      <h2>{t.title}</h2>
      <p>{t.desc}</p>
      <div className="expertise-list">
        {t.items.map((item) => (
          <div className="expertise-item" key={item.title}>
            <h3>{item.title}</h3>
            <div className="technology-list">
              {item.technologies.map((tech) => (
                <span key={tech} className="technology-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ sectionRef, t, contactT }) {
  const paragraphs = t.desc.split('\n\n');
  
  return (
    <section id="about" ref={sectionRef}>
      <h2>{t.title}</h2>
      <div className="about-content">
        <img src={require('./images/mek.png')} alt="Michael Ekornrud" className="about-image" />
        <div className="about-sections">
          <div className="about-section">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="about-section">
            <p>{contactT.desc}</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">{contactT.email}:</span>
                <a href={`mailto:${contactT.emailValue}`}>{contactT.emailValue}</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">{contactT.phone}:</span>
                <a href={`tel:${contactT.phoneValue.replace(/\s/g, '')}`}>{contactT.phoneValue}</a>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience({ sectionRef, t }) {
  return (
    <section id="experience" ref={sectionRef}>
      <h2>{t.title}</h2>
      <div className="experience-list">
        <h3 className="experience-section-title">{t.experienceTitle}</h3>
        {t.experienceItems.map((item) => (
          <div className="experience-item" key={item.title + item.date}>
            <div className="experience-header">
              <h4>{item.title}</h4>
              <span className="experience-date">{item.date}</span>
            </div>
            <div className="experience-details">
              <div className="company">{item.company}</div>
              <div className="role">{item.role}</div>
            </div>
          </div>
        ))}
        
        <h3 className="experience-section-title experience-education-title">{t.educationTitle}</h3>
        {t.educationItems.map((item) => (
          <div className="experience-item" key={item.title + item.date}>
            <div className="experience-header">
              <h4>{item.title}</h4>
              <span className="experience-date">{item.date}</span>
            </div>
            <div className="experience-details">
              <div className="company">{item.company}</div>
            </div>
          </div>
        ))}
      </div>
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
  const [theme, setTheme] = useState('light');
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const heroT = translations.hero[lang];
  const expertiseT = translations.expertise[lang];
  const aboutT = translations.about[lang];
  const experienceT = experience[lang];
  const contactT = translations.contact[lang];
  const themeT = translations.theme[lang];

  const heroRef = useRef(null);
  const expertiseRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
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

    [expertiseRef, aboutRef, experienceRef, contactRef].forEach(ref => {
      if (ref.current) {
        ref.current.classList.add('fade-init');
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [expertiseRef, aboutRef, experienceRef, contactRef]);

  return (
    <div className="App" onClick={handleAnchorClick}>
      <div className="top-right-controls">
        <LanguageToggle lang={lang} setLang={setLang} />
        <ThemeToggle theme={theme} setTheme={setTheme} t={themeT} />
      </div>
      <div className="header-container">
        <Hero t={heroT} ref={heroRef} />
      </div>
      {!isHeroVisible && (
        <nav className="sticky-nav">
          <ul>
            <li><a href="#about">{heroT.nav.about}</a></li>
            <li><a href="#expertise">{heroT.nav.expertise}</a></li>
            <li><a href="#experience">{heroT.nav.experience}</a></li>
          </ul>
        </nav>
      )}
      <main>
        <About sectionRef={aboutRef} t={aboutT} contactT={contactT} />
        <Expertise sectionRef={expertiseRef} t={expertiseT} />
        <Experience sectionRef={experienceRef} t={experienceT} />
      </main>
      <Footer />
      <ScrollToTop lang={lang} />
    </div>
  );
}

export default App;
