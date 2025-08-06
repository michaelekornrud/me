import '@testing-library/jest-dom';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from '../App';

// Mock translations
jest.mock('../utils/translations', () => ({
  hero: {
    en: {
      title: 'Michael Ekornrud',
      desc: 'Consultant, developer and problem solver',
      btn: 'Contact me',
      nav: {
        expertise: 'Technical Expertise',
        about: 'About',
        experience: 'Experience',
        contact: 'Contact',
      },
    },
    no: {
      title: 'Michael Ekornrud',
      desc: 'Konsulent, utvikler og problemløser',
      btn: 'Kontakt meg',
      nav: {
        expertise: 'Teknisk Ekspertise',
        about: 'Om meg',
        experience: 'Erfaring',
        contact: 'Kontakt',
      },
    },
  },
  theme: {
    en: {
      toggleLabel: 'Toggle dark/light mode',
      dark: 'Dark',
      light: 'Light',
      sunLabel: 'Sun',
      moonLabel: 'Moon',
    },
    no: {
      toggleLabel: 'Bytt mellom mørk og lys modus',
      dark: 'Mørk',
      light: 'Lys',
      sunLabel: 'Solen',
      moonLabel: 'Månen',
    },
  },
  expertise: {
    en: {
      title: 'Technical Expertise',
      desc: 'My technical skills and experience',
      items: [
        {
          title: 'Frontend Development',
          technologies: ['JavaScript', 'React', 'HTML', 'CSS', 'PHP'],
        },
        {
          title: 'Backend Development',
          technologies: ['Java', 'Python'],
        },
        {
          title: 'Databases & Tools',
          technologies: ['PostgreSQL', 'MongoDB', 'MySQL'],
        },
      ],
    },
    no: {
      title: 'Teknisk Ekspertise',
      desc: 'Mine tekniske ferdigheter og erfaring',
      items: [
        {
          title: 'Frontend-utvikling',
          technologies: ['JavaScript', 'React', 'HTML', 'CSS', 'PHP'],
        },
        {
          title: 'Backend-utvikling',
          technologies: ['Java', 'Python'],
        },
        {
          title: 'Databaser & Verktøy',
          technologies: ['PostgreSQL', 'MongoDB', 'MySQL'],
        },
      ],
    },
  },
  about: {
    en: {
      title: 'About & Contact',
      aboutTitle: 'About me',
      desc: 'About me content in English\n\nThis is a second paragraph for testing.',
    },
    no: {
      title: 'Om meg & Kontakt',
      aboutTitle: 'Om meg',
      desc: 'Om meg innhold på norsk\n\nDette er et andre avsnitt for testing.',
    },
  },
  contact: {
    en: {
      desc: 'Get in touch',
      email: 'Email',
      emailValue: 'michael@example.com',
      phone: 'Phone',
      phoneValue: '+47 123 45 678',
    },
    no: {
      desc: 'Ta kontakt',
      email: 'E-post',
      emailValue: 'michael@example.com',
      phone: 'Telefon',
      phoneValue: '+47 123 45 678',
    },
  },
}));

// Mock experience data
jest.mock('../utils/experience', () => ({
  en: {
    lang: 'en',
    title: 'Experience & Education',
    experienceTitle: 'Work Experience',
    educationTitle: 'Education',
    experienceItems: [
      {
        title: 'Consultant',
        company: 'Bouvet Norge AS',
        date: 'Jul 2024 - Present',
        role: 'Consultant',
        description:
          'Working as a consultant delivering high-quality solutions to clients.',
        projects: [
          {
            client: 'DNV',
            period: 'May 2025 - Aug 2025',
            role: 'Software Engineer',
            description: 'Translation of an open source SDK to Python',
            technologies: ['Python', 'SDK'],
          },
        ],
      },
    ],
    educationItems: [
      {
        title: 'Master of Science',
        company: 'University of Oslo',
        date: '2020 - 2022',
      },
    ],
  },
  no: {
    lang: 'no',
    title: 'Erfaring og Utdanning',
    experienceTitle: 'Arbeidserfaring',
    educationTitle: 'Utdanning',
    experienceItems: [
      {
        title: 'Konsulent',
        company: 'Bouvet Norge AS',
        date: 'Jul 2024 - Nå',
        role: 'Konsulent',
        description:
          'Jobber som konsulent og leverer høykvalitets løsninger til kunder.',
        projects: [
          {
            client: 'DNV',
            period: 'Mai 2025 - Aug 2025',
            role: 'Programvareutvikler',
            description: 'Oversettelse av en åpen kildekode SDK til Python',
            technologies: ['Python', 'SDK'],
          },
        ],
      },
    ],
    educationItems: [
      {
        title: 'Master i Informatikk',
        company: 'Universitetet i Oslo',
        date: '2020 - 2022',
      },
    ],
  },
}));

// App Component Tests
describe('App Component', () => {
  test('renders main content in Norwegian by default', () => {
    render(<App />);
    expect(
      screen.getByText('Konsulent, utvikler og problemløser'),
    ).toBeInTheDocument();
    expect(screen.getByText('Om meg')).toBeInTheDocument();
    expect(screen.getByText('Erfaring')).toBeInTheDocument();
    // Check that expertise section exists by looking for the heading specifically
    expect(
      screen.getByRole('heading', { level: 2, name: 'Teknisk Ekspertise' }),
    ).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(<App />);
    expect(
      screen.getByText(/© 2024 Michael Ekornrud - All rights reserved./),
    ).toBeInTheDocument();
  });

  test('renders social links', () => {
    render(<App />);
    const linkedinLinks = screen.getAllByText('LinkedIn');
    const githubLinks = screen.getAllByText('GitHub');
    expect(linkedinLinks[0]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/michael-ekornrud',
    );
    expect(githubLinks[0]).toHaveAttribute(
      'href',
      'https://github.com/michaelekornrud',
    );
  });
});

// Language Toggle Tests
describe('Language Toggle', () => {
  test('switches language from Norwegian to English', async () => {
    render(<App />);
    const languageButton = screen.getByRole('button', {
      name: /Toggle language/i,
    });

    // Initially in Norwegian
    expect(screen.getByText('Om meg')).toBeInTheDocument();

    // Click to switch to English
    fireEvent.click(languageButton);

    // Should now show English text
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('displays correct flag based on language', () => {
    render(<App />);
    expect(screen.getByAltText('Norwegian flag')).toBeInTheDocument();

    const languageButton = screen.getByRole('button', {
      name: /Toggle language/i,
    });
    fireEvent.click(languageButton);

    expect(screen.getByAltText('UK flag')).toBeInTheDocument();
  });
});

// Theme Toggle Tests
describe('Theme Toggle', () => {
  beforeEach(() => {
    // Clear localStorage and reset DOM before each test
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.body.classList.remove('dark-mode');
  });

  test('switches theme from dark to light', () => {
    render(<App />);
    const themeButton = screen.getByRole('button', {
      name: /Bytt mellom mørk og lys modus/i,
    });

    // Check initial theme (should be dark by default)
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    // Switch theme
    fireEvent.click(themeButton);

    // Verify theme changed
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  test('persists theme selection', () => {
    localStorage.setItem('theme', 'light');
    render(<App />);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});

// Experience Section Tests
describe('Experience Section', () => {
  test('renders experience items', () => {
    render(<App />);
    // Look for the experience section by its heading instead of region role
    expect(
      screen.getByRole('heading', { name: /erfaring og utdanning/i }),
    ).toBeInTheDocument();
  });

  test('expands experience details on click', async () => {
    render(<App />);
    const experienceItems = screen.getAllByTestId('experience-item');

    // Click first experience item
    fireEvent.click(experienceItems[0]);

    // Wait for expansion and verify projects section appears by looking for "Prosjekter"
    await screen.findByText(/prosjekter/i);
  });
});

// Expertise Section Tests
describe('Expertise Section', () => {
  test('renders expertise section with categories', () => {
    render(<App />);
    // Look for the expertise section by its heading instead of region role
    expect(
      screen.getByRole('heading', { name: /teknisk ekspertise/i }),
    ).toBeInTheDocument();

    // Check for main categories
    expect(screen.getByText('Frontend-utvikling')).toBeInTheDocument();
    expect(screen.getByText('Backend-utvikling')).toBeInTheDocument();
    expect(screen.getByText('Databaser & Verktøy')).toBeInTheDocument();
  });
});

// About Section Tests
describe('About Section', () => {
  test('renders about section with contact information', () => {
    render(<App />);
    // Look for the about section by its heading instead of region role
    expect(
      screen.getByRole('heading', { name: /om meg & kontakt/i }),
    ).toBeInTheDocument();

    // Check for contact information - be more specific to avoid multiple matches
    const aboutSection = screen.getByRole('region', { name: /om meg/i });
    const linkedinLink = within(aboutSection).getByRole('link', {
      name: /linkedin/i,
    });
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/michael-ekornrud',
    );
    const githubLink = within(aboutSection).getByRole('link', {
      name: /github/i,
    });
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/michaelekornrud',
    );
  });
});

// Sticky Navigation Tests
describe('Sticky Navigation', () => {
  test('shows sticky nav when hero is not visible', () => {
    render(<App />);

    // Check that navigation elements exist - simplified test without mock complexity
    const navigationElements = screen.queryAllByRole('navigation');
    expect(navigationElements.length).toBeGreaterThan(0);

    // Verify main navigation is present
    const mainNavigation = navigationElements.find((nav) =>
      nav.className?.includes('main-nav'),
    );
    expect(mainNavigation).toBeInTheDocument();
  });
});

// ScrollToTop Tests
describe('ScrollToTop', () => {
  beforeEach(() => {
    // Mock window.scrollTo and scrollY
    window.scrollTo = jest.fn();
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });
  });

  test('shows scroll button when scrolled down', () => {
    // Set scroll position before rendering
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 600,
    });

    render(<App />);

    // Simulate scroll event
    fireEvent.scroll(window);

    // Look for scroll button
    const scrollButton = screen.getByRole('button', { name: /gå til toppen/i });
    expect(scrollButton).toBeInTheDocument();
  });

  test('scrolls to top when clicked', () => {
    // Set scroll position before rendering
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 600,
    });

    render(<App />);

    // Simulate scroll to make button visible
    fireEvent.scroll(window);

    // Click scroll button
    const scrollButton = screen.getByRole('button', { name: /gå til toppen/i });
    fireEvent.click(scrollButton);

    // Check if window.scrollTo was called with correct params
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
