/**
 * Portfolio content — single source of truth for experience, education, and social links.
 */

export const SOCIAL_LINKS = {
  github: "https://github.com/macmittereder",
  linkedin: "https://www.linkedin.com/in/mackenzie-mittereder/",
};

/** @param {Date} startDate @param {Date} [endDate] */
export const formatDuration = (startDate, endDate = new Date()) => {
  const totalMonths = Math.max(
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()),
    0
  );

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0 && months === 0) return "less than a month";

  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
};

const CURRENT_ROLE_START = new Date(2024, 2, 1);

export const workExperience = [
  {
    company: "WebstaurantStore",
    logo: "/images/webstaurantstore-logo.png",
    location: "Remote",
    totalTime: "March 2024 - Present",
    totalTimeSummary: `(${formatDuration(CURRENT_ROLE_START)})`,
    featured: true,
    positions: [
      {
        title: "Software Engineer III",
        time: "January 2026 - Present",
        duration: formatDuration(new Date(2026, 0, 1)),
        content: [
          "Promoted to Software Engineer III in recognition of technical leadership and contributions to team success",
        ],
      },
      {
        title: "Software Engineer II",
        time: "March 2024 - January 2026",
        duration: formatDuration(new Date(2024, 2, 1), new Date(2026, 0, 1)),
        content: [
          "Developed internal tools and applications to streamline customer relations workflows and improve team productivity",
          "Collaborated with cross-functional teams to design and implement scalable solutions using modern web technologies",
          "Mentored peers and conducted code reviews to maintain high code quality standards",
          "Maintained nearly 100% code coverage on pull requests with comprehensive unit and integration tests; added Playwright end-to-end coverage where appropriate",
        ],
      },
    ],
    technologies: [
      "React",
      "C#/.NET",
      "TypeScript",
      "REST APIs",
      "GraphQL",
      "RabbitMQ",
      "Kubernetes",
      "Grafana",
      "Vault",
      "Playwright",
      "SQL Server",
      "LLM",
      "RAG",
      "VertexAI",
      "LangGraph",
    ],
  },
  {
    company: "Lexicon",
    logo: "/images/lexicon-logo.png",
    location: "Remote",
    featured: true,
    positions: [
      {
        title: "Full Stack Software Developer",
        time: "March 2023 - March 2024",
        duration: "1 yr",
        content: [
          "Integrated new features in modern Angular applications and refactored legacy codebase for improved maintainability",
          "Worked closely with QA and PMOs to design, build, and deliver software features with high user satisfaction",
          "Implemented database optimizations and API improvements resulting in 30% faster response times",
        ],
      },
    ],
    technologies: ["Angular", "C#/.NET", "SSMS", "REST APIs"],
  },
  {
    company: "Dollar Bank",
    logo: "/images/dollar-bank-logo.png",
    location: "Pittsburgh, PA",
    featured: true,
    positions: [
      {
        title: "Senior Application Developer",
        time: "August 2021 - March 2023",
        duration: "1 yr 8 mos",
        content: [
          "Developed enterprise .NET applications from console applications to web services serving thousands of users",
          "Led the migration of legacy ASP.NET web pages to modern .NET MVC architecture",
          "Built and maintained SSIS packages for critical data migration and synchronization between systems",
        ],
      },
    ],
    technologies: ["Razor", "C#/.NET", "SQL Server", "SSIS", "ASP.NET MVC"],
  },
  {
    company: "aSa",
    logo: "/images/aSa-logo.png",
    location: "Murrysville, PA",
    positions: [
      {
        title: "Software Developer II",
        time: "May 2018 - August 2021",
        duration: "3 yrs 4 mos",
        content: [
          "Led development across Processing and Inventory Tracking teams, implementing critical features using AngularJS and Entity Framework",
          "Provided global customer support and resolved production issues across multiple time zones",
          "Designed and developed SSRS reports used daily by customers worldwide for business operations",
        ],
      },
    ],
    technologies: [
      "AngularJS",
      "C#/.NET",
      "Entity Framework",
      "SSRS",
      "SQL Server",
    ],
  },
];

/** Companies shown in the hero social-proof row */
export const featuredCompanies = workExperience.filter((job) => job.featured);

export const education = {
  school: "Saint Vincent College",
  logo: "/images/svc-logo.png",
  location: "Latrobe, PA",
  degree: "BS - Computing and Information Science",
  summary:
    "Courses taken include Server Side Programming, Database Concepts and Information Structures, Software Engineering, Discrete Mathematics, Computer Architecture and Operating Systems and Website Design.",
};

export const NAV_ITEMS = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#education", label: "Education", id: "education" },
];
