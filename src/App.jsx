import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './css/App.css';
import './css/mobile-improvements.css';
import norwayFlag from './images/norway.webp';
import ukFlag from './images/uk.webp';
import translations from './utils/translations';
import experience from './utils/experience';
import githubLogo from './images/github-emoji.webp';
import linkedinLogo from './images/linkedin-icon.webp';
import fullLogo from './images/full-logo.webp';

export function LanguageToggle({ lang, setLang }) {
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
            src={require('./images/norway.webp')}
            srcSet={`${require('./images/norway-small.webp')} 600w, ${require('./images/norway-medium.webp')} 1200w, ${require('./images/norway-large.webp')} 2000w`}
            sizes="(max-width: 600px) 24px, (max-width: 1200px) 32px, 48px"
            alt="Norwegian flag"
            className="flag-icon icon-margin"
          />
          Norsk
        </>
      ) : (
        <>
        <img
          src={require('./images/uk.webp')}
          srcSet={`${require('./images/uk-small.webp')} 600w, ${require('./images/uk-medium.webp')} 1200w, ${require('./images/uk-large.webp')} 2000w`}
          sizes="(max-width: 600px) 24px, (max-width: 1200px) 32px, 48px"
          alt="UK flag"
          className="flag-icon icon-margin"
        />
        English
        </>
      )}
    </button>
  );
}

LanguageToggle.propTypes = {
  lang: PropTypes.oneOf(['en', 'no']).isRequired,
  setLang: PropTypes.func.isRequired,
};

export function ThemeToggle({ theme, setTheme, t }) {
  return (
    <button
      className="theme-toggle-btn"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={t.toggleLabel}
      type="button"
    >
      {theme === 'dark' ? (
        <>
          <span role="img" aria-label={t.moonLabel} className="icon-margin">
            🌙
          </span>
          {t.dark}
        </>
      ) : (
        <>
          <span role="img" aria-label={t.sunLabel} className="icon-margin">
            ☀️
          </span>
          {t.light}
        </>
      )}
    </button>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  setTheme: PropTypes.func.isRequired,
  t: PropTypes.shape({
    toggleLabel: PropTypes.string.isRequired,
    moonLabel: PropTypes.string.isRequired,
    sunLabel: PropTypes.string.isRequired,
    dark: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
  }).isRequired,
};

// Hero component
const Hero = ({ t, forwardedRef }) => {
  return (
    <header className="hero" ref={forwardedRef}>
      <div className="hero-content hero-row">
        <img
          src={require('./images/full-logo.webp')}
          srcSet={`${require('./images/full-logo-small.webp')} 600w, ${require('./images/full-logo-medium.webp')} 1200w, ${require('./images/full-logo-large.webp')} 2000w`}
          sizes="(max-width: 600px) 80px, (max-width: 1200px) 120px, 200px"
          alt="Michael Ekornrud logo"
          className="hero-logo"
        />
        <div className="hero-text">
          <p>{t.desc}</p>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#about">{t.nav.about}</a>
            </li>
            <li>
              <a href="#expertise">{t.nav.expertise}</a>
            </li>
            <li>
              <a href="#experience">{t.nav.experience}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Hero.propTypes = {
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  t: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    nav: PropTypes.shape({
      about: PropTypes.string.isRequired,
      expertise: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

function Expertise({ sectionRef, t }) {
  return (
    <section
      id="expertise"
      ref={sectionRef}
      aria-labelledby="expertise-heading"
    >
      <h2 id="expertise-heading">{t.title}</h2>
      <p>{t.desc}</p>
      <div className="expertise-list">
        {t.items.map((item) => (
          <div className="expertise-item" key={item.title}>
            <h3>{item.title}</h3>
            <div className="technology-list">
              {item.technologies.map((tech) => (
                <span key={tech} className="technology-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Expertise.propTypes = {
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  t: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

function About({ sectionRef, t, contactT }) {
  const paragraphs = t.desc.split('\n\n');

  return (
    <section id="about" ref={sectionRef} aria-labelledby="about-heading">
      <h2 id="about-heading">{t.title}</h2>
      <div className="about-content">
        <img
          src={require('./images/mek.webp')}
          srcSet={`${require('./images/mek-small.webp')} 600w, ${require('./images/mek-medium.webp')} 1200w, ${require('./images/mek-large.webp')} 2000w`}
          sizes="(max-width: 600px) 80px, (max-width: 1200px) 120px, 200px"
          alt="Michael Ekornrud"
          className="about-image"
        />
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
                <a href={`mailto: ${contactT.emailValue}`}>
                  {contactT.emailValue}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">{contactT.phone}:</span>
                <a href={`tel: ${contactT.phoneValue.replace(/\s/g, '')}`}>
                  {contactT.phoneValue}
                </a>
              </div>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/michael-ekornrud"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <img
                    src={require('./images/linkedin-icon.webp')}
                    srcSet={`${require('./images/linkedin-icon-small.webp')} 600w, ${require('./images/linkedin-icon-medium.webp')} 1200w, ${require('./images/linkedin-icon-large.webp')} 2000w`}
                    sizes="(max-width: 600px) 22px, (max-width: 1200px) 32px, 48px"
                    alt="LinkedIn"
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      marginRight: '4px',
                      background: '#fff',
                    }}
                  />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/michaelekornrud"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={require('./images/github-emoji.webp')}
                    srcSet={`${require('./images/github-emoji-small.webp')} 600w, ${require('./images/github-emoji-medium.webp')} 1200w, ${require('./images/github-emoji-large.webp')} 2000w`}
                    sizes="(max-width: 600px) 22px, (max-width: 1200px) 32px, 48px"
                    alt="GitHub"
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      marginRight: '4px',
                      background: '#fff',
                    }}
                  />
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

About.propTypes = {
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  t: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  contactT: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    phoneValue: PropTypes.string.isRequired,
  }).isRequired,
};

function Experience({ sectionRef, t }) {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading">{t.title}</h2>
      <div className="experience-list">
        <h3 className="experience-section-title">{t.experienceTitle}</h3>
        {t.experienceItems.map((item) => (
          <div
            className={`experience-item ${expandedJob === item.title ? 'expanded' : ''}`}
            key={item.title + item.date}
            onClick={() => toggleJob(item.title)}
            data-tooltip={
              t.lang === 'no' ? 'Klikk for å utvide' : 'Click to expand'
            }
            data-testid="experience-item"
          >
            <div className="experience-header">
              <h4>{item.title}</h4>
              <span className="experience-date">{item.date}</span>
            </div>
            <div className="experience-details">
              <div className="company">{item.company}</div>
              <div className="role">{item.role}</div>
              {expandedJob === item.title && (
                <div className="experience-description">
                  <p>{item.description}</p>
                  {item.projects && (
                    <div className="projects-list">
                      <h5 className="projects-title">
                        {t.lang === 'no' ? 'Prosjekter' : 'Projects'}
                      </h5>
                      {item.projects.map((project, index) => (
                        <div key={index} className="project-item">
                          <div className="project-header">
                            <h6>{project.client}</h6>
                            <span className="project-period">
                              {project.period}
                            </span>
                          </div>
                          <div className="project-role">{project.role}</div>
                          <p className="project-description">
                            {project.description}
                          </p>
                          <div className="project-technologies">
                            {project.technologies?.map((tech, techIndex) => (
                              <span key={techIndex} className="technology-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        <h3 className="experience-section-title experience-education-title">
          {t.educationTitle}
        </h3>
        {t.educationItems.map((item) => (
          <div
            className="experience-item education-item"
            key={item.title + item.date}
          >
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

Experience.propTypes = {
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  t: PropTypes.shape({
    title: PropTypes.string.isRequired,
    experienceTitle: PropTypes.string.isRequired,
    educationTitle: PropTypes.string.isRequired,
    experienceItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        projects: PropTypes.arrayOf(
          PropTypes.shape({
            client: PropTypes.string.isRequired,
            period: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            technologies: PropTypes.arrayOf(PropTypes.string),
          }),
        ),
      }),
    ).isRequired,
    educationItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
      }),
    ).isRequired,
    lang: PropTypes.oneOf(['en', 'no']).isRequired,
  }).isRequired,
};

// Footer component
function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/michael-ekornrud"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              marginRight: '4px',
              background: '#fff',
            }}
          />
          LinkedIn
        </a>
        <a
          href="https://github.com/michaelekornrud"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginLeft: '12px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <img
            src={githubLogo}
            alt="GitHub"
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              marginRight: '4px',
              background: '#fff',
            }}
          />
          GitHub
        </a>
      </div>
      <small>Org nr: 827 157 562</small>
      <br />
      <small>&copy; 2024 Michael Ekornrud - All rights reserved. </small>
      <br />
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
      behavior: 'smooth',
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

ScrollToTop.propTypes = {
  lang: PropTypes.oneOf(['en', 'no']).isRequired,
};

function App() {
  const [lang, setLang] = useState('no');
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    // Set theme immediately to avoid null values in tests
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    return savedTheme;
  });
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

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          setIsHeroVisible(entry.isIntersecting);
        },
        { threshold: 0.1 },
      );

      const currentHeroRef = heroRef.current;
      if (currentHeroRef && heroObserver.observe) {
        heroObserver.observe(currentHeroRef);
      }

      return () => {
        if (currentHeroRef && heroObserver.unobserve) {
          heroObserver.unobserve(currentHeroRef);
        }
      };
    } else {
      // Fallback for environments without IntersectionObserver
      setIsHeroVisible(true);
    }
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

  // Removed fade-in effect

  return (
    <div className="App" onClick={handleAnchorClick}>
      <div className="top-right-controls">
        <LanguageToggle lang={lang} setLang={setLang} />
        <ThemeToggle theme={theme} setTheme={setTheme} t={themeT} />
      </div>
      <div className="header-container">
        <Hero t={heroT} forwardedRef={heroRef} />
      </div>
      {!isHeroVisible && (
        <nav className="sticky-nav">
          <ul>
            <li>
              <a href="#about">{heroT.nav.about}</a>
            </li>
            <li>
              <a href="#expertise">{heroT.nav.expertise}</a>
            </li>
            <li>
              <a href="#experience">{heroT.nav.experience}</a>
            </li>
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
