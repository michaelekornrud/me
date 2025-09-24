import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async'; // eslint-disable-line no-unused-vars
import './css/App.css';
import './css/mobile-improvements.css';
import translations from './utils/translations';
import experience from './utils/experience';
import certifications from './utils/certifications';
import githubLogo from './images/github-emoji.webp';
import githubSmall from './images/github-emoji-small.webp';
import githubMedium from './images/github-emoji-medium.webp';
import githubLarge from './images/github-emoji-large.webp';
import linkedinLogo from './images/linkedin-icon.webp';
import linkedinSmall from './images/linkedin-icon-small.webp';
import linkedinMedium from './images/linkedin-icon-medium.webp';
import linkedinLarge from './images/linkedin-icon-large.webp';
import norwaySmall from './images/norway-small.webp';
import norwayMedium from './images/norway-medium.webp';
import norwayLarge from './images/norway-large.webp';
import norwayFlag from './images/norway.webp';
import ukSmall from './images/uk-small.webp';
import ukMedium from './images/uk-medium.webp';
import ukLarge from './images/uk-large.webp';
import ukFlag from './images/uk.webp';
import fullLogo from './images/full-logo.webp';
import fullLogoSmall from './images/full-logo-small.webp';
import fullLogoMedium from './images/full-logo-medium.webp';
import fullLogoLarge from './images/full-logo-large.webp';
import mekImage from './images/mek.webp';
import mekSmall from './images/mek-small.webp';
import mekMedium from './images/mek-medium.webp';
import mekLarge from './images/mek-large.webp';

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
            src={norwayFlag}
            srcSet={`${norwaySmall} 600w, ${norwayMedium} 1200w, ${norwayLarge} 2000w`}
            sizes="(max-width: 600px) 24px, (max-width: 1200px) 32px, 48px"
            alt="Norwegian flag"
            className="flag-icon icon-margin"
          />
          Norsk
        </>
      ) : (
        <>
          <img
            src={ukFlag}
            srcSet={`${ukSmall} 600w, ${ukMedium} 1200w, ${ukLarge} 2000w`}
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
          src={fullLogo}
          srcSet={`${fullLogoSmall} 600w, ${fullLogoMedium} 1200w, ${fullLogoLarge} 2000w`}
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
            <li>
              <a href="#certifications">
                {t.lang === 'no' ? 'Sertifiseringer' : 'Certifications'}
              </a>
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
          src={mekImage}
          srcSet={`${mekSmall} 600w, ${mekMedium} 1200w, ${mekLarge} 2000w`}
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
                    src={linkedinLogo}
                    srcSet={`${linkedinSmall} 600w, ${linkedinMedium} 1200w, ${linkedinLarge} 2000w`}
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
                    src={githubLogo}
                    srcSet={`${githubSmall} 600w, ${githubMedium} 1200w, ${githubLarge} 2000w`}
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

// Certifications component
function Certifications({ sectionRef, t }) {
  // Add safety check for t object
  if (!t || !t.categories) {
    return (
      <section id="certifications" ref={sectionRef}>
        <h2>Loading certifications...</h2>
      </section>
    );
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return dateStr;
  };

  const getStatusText = (status, lang) => {
    const statusTexts = {
      en: { active: 'Active', expired: 'Expired', pending: 'Pending' },
      no: { active: 'Aktiv', expired: 'Utløpt', pending: 'Venter' },
    };
    return statusTexts[lang] ? statusTexts[lang][status] || status : status;
  };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      aria-labelledby="certifications-heading"
    >
      <h2 id="certifications-heading">{t.title}</h2>
      <p>{t.description}</p>
      <div className="certifications-categories">
        {t.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="certification-category">
            <h3>{category.title}</h3>
            <div className="certifications-grid">
              {category.certifications.map((cert, certIndex) => (
                <div key={certIndex} className="certification-card">
                  <div className="certification-header">
                    <div className="certification-logo">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        style={{ height: '2.5em', width: '2.5em' }}
                      />
                    </div>
                    <div className="certification-info">
                      <h4 className="certification-name">{cert.name}</h4>
                      <div className="certification-code">{cert.code}</div>
                    </div>
                  </div>

                  <div className="certification-meta">
                    <div className="certification-date">
                      <span>📅</span>
                      <span>
                        {t.lang === 'no' ? 'Utstedt:' : 'Issued:'}{' '}
                        {formatDate(cert.date)}
                      </span>
                    </div>
                    {cert.validUntil && (
                      <div className="certification-validity">
                        <span>⏰</span>
                        <span>
                          {t.lang === 'no' ? 'Gyldig til:' : 'Valid until:'}{' '}
                          {formatDate(cert.validUntil)}
                        </span>
                      </div>
                    )}
                    <div className={`certification-status ${cert.status}`}>
                      {getStatusText(cert.status, t.lang)}
                    </div>
                  </div>

                  <p className="certification-description">
                    {cert.description}
                  </p>

                  <div className="certification-skills">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="certification-skill">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="certification-actions">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-verify-btn"
                    >
                      <span>🔍</span>
                      {t.lang === 'no' ? 'Verifiser' : 'Verify'}
                    </a>
                  </div>

                  {cert.credentialId && (
                    <div
                      className="credential-id"
                      title={
                        t.lang === 'no' ? 'Sertifiserings ID' : 'Credential ID'
                      }
                    >
                      {t.lang === 'no' ? 'ID:' : 'ID:'} {cert.credentialId}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Certifications.propTypes = {
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  t: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lang: PropTypes.oneOf(['en', 'no']).isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        certifications: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired,
            issuer: PropTypes.string.isRequired,
            date: PropTypes.string,
            validUntil: PropTypes.string,
            credentialId: PropTypes.string,
            verificationUrl: PropTypes.string,
            description: PropTypes.string.isRequired,
            skills: PropTypes.arrayOf(PropTypes.string).isRequired,
            logo: PropTypes.string.isRequired,
            status: PropTypes.oneOf(['active', 'expired', 'pending'])
              .isRequired,
          }),
        ).isRequired,
      }),
    ).isRequired,
  }),
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

function SEO({ lang }) {
  const description = {
    no: 'Michael Ekornrud er en erfaren fullstack-utvikler fra Oslo med ekspertise innen Java, Python, React, Node.js og moderne cloud-løsninger. Kontakt meg for profesjonell webutvikling.',
    en: 'Michael Ekornrud is an experienced fullstack developer from Oslo, Norway, specializing in Java, Python, React, Node.js and modern cloud solutions. Available for professional web development projects.',
  };

  const keywords = {
    no: 'fullstack-utvikler, Java, Python, React, Node.js, cloud, webutvikling, programvareutvikling, Norge, Oslo, konsulent, freelance',
    en: 'fullstack developer, Java, Python, React, Node.js, cloud, web development, software engineering, Norway, Oslo, consultant, freelance',
  };

  return (
    <Helmet>
      <html lang={lang} />
      <title>
        {lang === 'no'
          ? 'Michael Ekornrud - Fullstack-utvikler'
          : 'Michael Ekornrud - Fullstack Developer'}
      </title>
      <meta name="description" content={description[lang]} />
      <meta name="keywords" content={keywords[lang]} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ekornrud.no/" />
      <meta
        property="og:title"
        content={
          lang === 'no'
            ? 'Michael Ekornrud - Fullstack-utvikler'
            : 'Michael Ekornrud - Fullstack Developer'
        }
      />
      <meta property="og:description" content={description[lang]} />
      <meta property="og:image" content="https://ekornrud.no/Simple_logo.svg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://ekornrud.no/" />
      <meta
        name="twitter:title"
        content={
          lang === 'no'
            ? 'Michael Ekornrud - Fullstack-utvikler'
            : 'Michael Ekornrud - Fullstack Developer'
        }
      />
      <meta name="twitter:description" content={description[lang]} />
      <meta
        name="twitter:image"
        content="https://ekornrud.no/Simple_logo.svg"
      />

      {/* Additional SEO tags */}
      <meta name="author" content="Michael Ekornrud" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://ekornrud.no/" />

      {/* International SEO */}
      <link rel="alternate" hrefLang="no" href="https://ekornrud.no/" />
      <link rel="alternate" hrefLang="en" href="https://ekornrud.no/?lang=en" />
      <link rel="alternate" hrefLang="x-default" href="https://ekornrud.no/" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Michael Ekornrud',
          url: 'https://ekornrud.no',
          sameAs: [
            'https://www.linkedin.com/in/ole-michael-ekornrud',
            'https://github.com/mekornrud',
          ],
          jobTitle:
            lang === 'no' ? 'Fullstack-utvikler' : 'Fullstack Developer',
          description: description[lang],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'NO',
            addressLocality: 'Oslo',
          },
          knowsAbout: [
            'Java',
            'Python',
            'React',
            'Node.js',
            'Cloud Computing',
            'Fullstack Development',
            'Web Development',
            'Software Engineering',
          ],
        })}
      </script>
    </Helmet>
  );
}

SEO.propTypes = {
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
  const certificationsT = certifications[lang] || {
    lang,
    title: 'Loading...',
    description: 'Loading...',
    categories: [],
  };
  const contactT = translations.contact[lang];
  const themeT = translations.theme[lang];

  const heroRef = useRef(null);
  const expertiseRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const certificationsRef = useRef(null);

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
      <SEO lang={lang} />
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
            <li>
              <a href="#certifications">
                {lang === 'no' ? 'Sertifiseringer' : 'Certifications'}
              </a>
            </li>
          </ul>
        </nav>
      )}
      <main>
        <About sectionRef={aboutRef} t={aboutT} contactT={contactT} />
        <Expertise sectionRef={expertiseRef} t={expertiseT} />
        <Experience sectionRef={experienceRef} t={experienceT} />
        <Certifications sectionRef={certificationsRef} t={certificationsT} />
      </main>
      <Footer />
      <ScrollToTop lang={lang} />
    </div>
  );
}

export default App;
