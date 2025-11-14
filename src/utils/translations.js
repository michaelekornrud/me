// Technical skills and technologies
const technicalSkills = {
  frontend: ["JavaScript", "React", "HTML", "CSS", "ESLint", "Prettier"],
  backend: [
    "Java",
    "Python",
    "PHP",
    "Node.js",
    "REST",
    "OpenAPI",
    "Swagger",
    "npm",
  ],
  databases: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "IBM DB2",
    "JetBrains DataGrip",
    "Oracle SQL Developer",
    "IBM DataStudio",
  ],
  frameworks: ["Spring Boot", "JUnit", "Mockito"],
  datascience: [
    "TensorFlow",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "PyTorch",
    "Scikit-Learn",
    "Jupyter Notebooks",
  ],
  pythonTools: [
    "PyTest",
    "PyTest Benchmarks",
    "Ruff",
    "Black",
    "MyPy",
    "Poetry",
    "Astral UV",
    "Flask",
  ],
  devops: [
    "Git",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Dev Containers",
    "Maven",
    "GitHub Actions",
    "Azure",
    "AWS",
    "Grafana",
  ],
  tools: [
    "Jira",
    "Confluence",
    "Jenkins",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Azure DevOps",
    "Postman",
    "JetBrains IntelliJ",
    "Visual Studio Code",
    "PyCharm",
    "HubSpot",
    "Basware",
    "Coupa",
  ],
};

// Technology descriptions for tooltips
const technologyDescriptions = {
  en: {
    // Frontend
    "JavaScript": "Dynamic programming language for web development",
    "React": "Popular library for building user interfaces",
    "HTML": "Standard markup language for web pages",
    "CSS": "Style sheet language for designing web pages",
    "ESLint": "Tool for identifying and fixing JavaScript code issues",
    "Prettier": "Code formatter for consistent code style",
    
    // Backend
    "Java": "Enterprise-grade object-oriented programming language",
    "Python": "Versatile programming language for various applications",
    "PHP": "Server-side scripting language for web development",
    "Node.js": "JavaScript runtime for server-side development",
    "REST": "Architectural style for designing web APIs",
    "OpenAPI": "Specification for describing REST APIs",
    "Swagger": "Tools for API development and documentation",
    "npm": "Package manager for JavaScript and Node.js",
    
    // Databases
    "PostgreSQL": "Advanced open-source relational database",
    "MongoDB": "Popular NoSQL document database",
    "MySQL": "Widely-used open-source relational database",
    "IBM DB2": "Enterprise relational database management system",
    "JetBrains DataGrip": "Database IDE for SQL development",
    "Oracle SQL Developer": "Integrated development environment for Oracle databases",
    "IBM DataStudio": "Data management and development tool",
    
    // Frameworks
    "Spring Boot": "Java framework for building production-ready applications",
    "JUnit": "Testing framework for Java applications",
    "Mockito": "Mocking framework for unit testing in Java",
    
    // Data Science
    "TensorFlow": "Machine learning framework by Google",
    "Pandas": "Data manipulation library for Python",
    "NumPy": "Library for numerical computing in Python",
    "Matplotlib": "Plotting library for creating visualizations",
    "PyTorch": "Deep learning framework by Facebook",
    "Scikit-Learn": "Machine learning library for Python",
    "Jupyter Notebooks": "Interactive computing environment",
    
    // Python Tools
    "PyTest": "Testing framework for Python applications",
    "PyTest Benchmarks": "Performance testing plugin for PyTest",
    "Ruff": "Fast Python linter and code formatter",
    "Black": "Python code formatter for consistent style",
    "MyPy": "Static type checker for Python",
    "Poetry": "Dependency management tool for Python",
    "Astral UV": "Fast Python package installer and resolver",
    "Flask": "Lightweight web framework for Python",
    
    // DevOps
    "Git": "Version control system for tracking code changes",
    "Docker": "Containerization platform for applications",
    "Kubernetes": "Container orchestration platform",
    "CI/CD": "Continuous integration and deployment practices",
    "Dev Containers": "Development environments in containers",
    "Maven": "Build automation tool for Java projects",
    "GitHub Actions": "CI/CD service integrated with GitHub",
    "Azure": "Microsoft's cloud computing platform",
    "AWS": "Amazon's cloud computing services",
    "Grafana": "Analytics and monitoring platform",
    
    // Tools
    "Jira": "Project management and issue tracking tool",
    "Confluence": "Collaboration and documentation platform",
    "Jenkins": "Open-source automation server for CI/CD",
    "GitHub": "Git-based platform for version control and collaboration",
    "GitLab": "DevOps platform with Git repository management",
    "Bitbucket": "Git-based code collaboration tool by Atlassian",
    "Azure DevOps": "Microsoft's DevOps services platform",
    "Postman": "API development and testing platform",
    "JetBrains IntelliJ": "Integrated development environment for Java",
    "Visual Studio Code": "Lightweight code editor by Microsoft",
    "PyCharm": "IDE for Python development",
    "HubSpot": "Customer relationship management platform",
    "Basware": "Procurement and invoice management solution",
    "Coupa": "Business spend management platform",
  },
  no: {
    // Frontend
    "JavaScript": "Dynamisk programmeringsspråk for webutvikling",
    "React": "Populært bibliotek for å bygge brukergrensesnitt",
    "HTML": "Standard markup-språk for nettsider",
    "CSS": "Stilark-språk for design av nettsider",
    "ESLint": "Verktøy for å identifisere og fikse JavaScript-kodeproblemer",
    "Prettier": "Kodeformatterer for konsistent kodestil",
    
    // Backend
    "Java": "Objektorientert programmeringsspråk for enterprise-løsninger",
    "Python": "Allsidig programmeringsspråk for ulike applikasjoner",
    "PHP": "Server-side skriptspråk for webutvikling",
    "Node.js": "JavaScript runtime for server-side utvikling",
    "REST": "Arkitektonisk stil for design av web-APIer",
    "OpenAPI": "Spesifikasjon for beskrivelse av REST APIer",
    "Swagger": "Verktøy for API-utvikling og dokumentasjon",
    "npm": "Pakkebehandler for JavaScript og Node.js",
    
    // Databases
    "PostgreSQL": "Avansert open-source relasjonsdatabase",
    "MongoDB": "Populær NoSQL dokumentdatabase",
    "MySQL": "Mye brukt open-source relasjonsdatabase",
    "IBM DB2": "Enterprise relasjonsdatabasesystem",
    "JetBrains DataGrip": "Database-IDE for SQL-utvikling",
    "Oracle SQL Developer": "Integrert utviklingsmiljø for Oracle-databaser",
    "IBM DataStudio": "Databehandlings- og utviklingsverktøy",
    
    // Frameworks
    "Spring Boot": "Java-rammeverk for å bygge produksjonsklare applikasjoner",
    "JUnit": "Testing-rammeverk for Java-applikasjoner",
    "Mockito": "Mock-rammeverk for enhetstesting i Java",
    
    // Data Science
    "TensorFlow": "Maskinlæring-rammeverk av Google",
    "Pandas": "Datamanipuleringsbibliotek for Python",
    "NumPy": "Bibliotek for numerisk databehandling i Python",
    "Matplotlib": "Plotting-bibliotek for å lage visualiseringer",
    "PyTorch": "Dyp læring-rammeverk av Facebook",
    "Scikit-Learn": "Maskinlæring-bibliotek for Python",
    "Jupyter Notebooks": "Interaktivt datamiljø",
    
    // Python Tools
    "PyTest": "Testing-rammeverk for Python-applikasjoner",
    "PyTest Benchmarks": "Ytelsestesting-plugin for PyTest",
    "Ruff": "Rask Python linter og kodeformatterer",
    "Black": "Python kodeformatterer for konsistent stil",
    "MyPy": "Statisk typekontroller for Python",
    "Poetry": "Avhengighetsbehandlingsverktøy for Python",
    "Astral UV": "Rask Python pakkeinstallerer og løser",
    "Flask": "Lett web-rammeverk for Python",
    
    // DevOps
    "Git": "Versjonskontrollsystem for sporing av kodeendringer",
    "Docker": "Containeriseringsplattform for applikasjoner",
    "Kubernetes": "Container-orkestreringsplattform",
    "CI/CD": "Kontinuerlig integrasjon og deployment-praksis",
    "Dev Containers": "Utviklingsmiljøer i containere",
    "Maven": "Byggeautomatiseringsverktøy for Java-prosjekter",
    "GitHub Actions": "CI/CD-tjeneste integrert med GitHub",
    "Azure": "Microsofts cloud-plattform",
    "AWS": "Amazons cloud-tjenester",
    "Grafana": "Analyse- og overvåkingsplattform",
    
    // Tools
    "Jira": "Prosjektstyring og problemsporingsverktøy",
    "Confluence": "Samarbeids- og dokumentasjonsplattform",
    "Jenkins": "Open-source automatiseringsserver for CI/CD",
    "GitHub": "Git-basert plattform for versjonskontroll og samarbeid",
    "GitLab": "DevOps-plattform med Git repository-styring",
    "Bitbucket": "Git-basert kodesamarbeidsverktøy av Atlassian",
    "Azure DevOps": "Microsofts DevOps-tjenesteplattform",
    "Postman": "API-utvikling og testplattform",
    "JetBrains IntelliJ": "Integrert utviklingsmiljø for Java",
    "Visual Studio Code": "Lett kodeditor av Microsoft",
    "PyCharm": "IDE for Python-utvikling",
    "HubSpot": "Kunderelasjonsbehandlingsplattform",
    "Basware": "Innkjøps- og fakturabehandlingsløsning",
    "Coupa": "Forretningsutgiftstyringssystem",
  }
};

// Category translations
const categoryTranslations = {
  en: {
    frontend: "Frontend Development",
    backend: "Backend Development",
    databases: "Databases & Tools",
    frameworks: "Core Frameworks",
    datascience: "Data Science & ML",
    pythonTools: "Python Development Tools",
    devops: "DevOps",
    tools: "Development Tools",
  },
  no: {
    frontend: "Frontend-utvikling",
    backend: "Backend-utvikling",
    databases: "Databaser & Verktøy",
    frameworks: "Kjerne Rammeverk",
    datascience: "Data Science & ML",
    pythonTools: "Python Utviklingsverktøy",
    devops: "DevOps",
    tools: "Utviklingsverktøy",
  },
};

// Helper function to generate expertise items
const generateExpertiseItems = (lang) => {
  return Object.keys(technicalSkills).map((category) => ({
    title: categoryTranslations[lang][category],
    technologies: technicalSkills[category],
  }));
};

const translations = {
  hero: {
    en: {
      title: "Michael Ekornrud",
      desc: "Consultant, developer and problem solver",
      btn: "Contact me",
      nav: {
        expertise: "Technical Expertise",
        about: "About",
        experience: "Experience",
        contact: "Contact",
        certifications: "Certifications",
      },
    },
    no: {
      title: "Michael Ekornrud",
      desc: "Konsulent, utvikler og problemløser",
      btn: "Kontakt meg",
      nav: {
        expertise: "Teknisk Ekspertise",
        about: "Om meg",
        experience: "Erfaring",
        contact: "Kontakt",
        certifications: "Sertifiseringer",
      },
    },
  },
  technologyDescriptions,
  expertise: {
    en: {
      title: "Technical Expertise",
      desc: "I have a broad range of technical skills and experience, including:",
      items: generateExpertiseItems("en"),
    },
    no: {
      title: "Teknisk Ekspertise",
      desc: "Jeg har et bredt spekter av tekniske ferdigheter og erfaring, inkludert:",
      items: generateExpertiseItems("no"),
    },
  },
  about: {
    en: {
      title: "About & Contact",
      aboutTitle: "About me",
      desc: "As a computer engineer with a bachelor's degree from OsloMet (2022), I have specialized in backend development, gaining significant experience at DNB where I was responsible for critical systems and Java development. My role included technical development, system architecture, and specification work for enterprise solutions.\n\nMy approach to system development is characterized by structured problem-solving and a focus on scalable, maintainable solutions. I have a proven ability to handle complex technical challenges, while actively contributing to knowledge sharing and professional development within teams.\n\nDriven by technical curiosity, I continuously keep myself updated on new technologies and best practices in system development. I have experience with a wide range of modern development tools and methodologies, and I am always looking to expand my technical horizon through practical application of new technologies.\n\nMy experience as a head coach in competitive gymnastics has strengthened my leadership skills and my ability to drive results in teams. This background has given me valuable experience in motivating and guiding others, as well as coordinating complex projects towards common goals.",
    },
    no: {
      title: "Om meg & Kontakt",
      aboutTitle: "Om meg",
      desc: "Som dataingeniør med bachelorgrad fra OsloMet (2022) har jeg spesialisert meg innen backend-utvikling, med betydelig erfaring fra DNB hvor jeg har hatt ansvar for kritiske systemer og Java-utvikling. Min rolle har omfattet både teknisk utvikling, systemarkitektur og spesifikasjonsarbeid for enterprise-løsninger.\n\nMin tilnærming til systemutvikling kjennetegnes av strukturert problemløsning og fokus på skalerbare, vedlikeholdbare løsninger. Jeg har en dokumentert evne til å håndtere komplekse tekniske utfordringer, samtidig som jeg bidrar aktivt til kunnskapsdeling og faglig utvikling i team.\n\nDrevet av teknisk nysgjerrighet holder jeg meg konstant oppdatert på nye teknologier og beste praksiser innen systemutvikling. Jeg har erfaring med et bredt spekter av moderne utviklingsverktøy og -metodikker, og jeg søker kontinuerlig å utvide min tekniske horisont gjennom praktisk anvendelse av nye teknologier.\n\nMin erfaring som hovedtrener innen konkurranseturning har styrket mine lederegenskaper og evne til å drive frem resultater i team. Denne bakgrunnen har gitt meg verdifull erfaring i å motivere og veilede andre, samt å koordinere komplekse prosjekter mot felles mål.",
    },
  },
  contact: {
    en: {
      title: "Contact",
      desc: "Get in touch for a friendly chat about your needs!",
      email: "Email",
      phone: "Phone",
      emailValue: "omekornrud@gmail.com",
      phoneValue: "+47 965 12 744",
    },
    no: {
      title: "Kontakt",
      desc: "Ta kontakt for en hyggelig prat om dine behov!",
      email: "E-post",
      phone: "Telefon",
      emailValue: "omekornrud@gmail.com",
      phoneValue: "+47 965 12 744",
    },
  },
  theme: {
    en: {
      toggleLabel: "Toggle dark/light mode",
      dark: "Dark",
      light: "Light",
      sunLabel: "Sun",
      moonLabel: "Moon",
    },
    no: {
      toggleLabel: "Bytt mellom mørk og lys modus",
      dark: "Mørk",
      light: "Lys",
      sunLabel: "Solen",
      moonLabel: "Månen",
    },
  },
};

export default translations;
