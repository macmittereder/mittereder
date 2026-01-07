"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentJobTime = () => {
    const startDate = new Date(2024, 3, 1);
    const now = new Date();

    const totalMonths = Math.max(
      (now.getFullYear() - startDate.getFullYear()) * 12 +
        (now.getMonth() - startDate.getMonth()),
      0
    );

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `(${years > 0 ? years + (years > 1 ? " yrs " : " yr ") : ""}${
      months > 0 ? months + (months > 1 ? " mos" : " mo") : ""
    })`;
  };

  const workExperience = [
    {
      company: "WebstaurantStore",
      logo: "/images/webstaurantstore-logo.png",
      location: "Remote",
      position: "Software Engineer III",
      time: "March 2024 - Present",
      timeSummary: currentJobTime(),
      content: [
        "Promoted to Software Engineer III in recognition of technical leadership and contributions to team success",
        "Developed internal tools and applications to streamline customer relations workflows and improve team productivity",
        "Collaborated with cross-functional teams to design and implement scalable solutions using modern web technologies",
        "Mentored peers and conducted code reviews to maintain high code quality standards",
        "Maintained 80%+ code coverage on pull requests with comprehensive unit and integration tests; added Playwright end-to-end coverage where appropriate",
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
      position: "Full Stack Software Developer",
      time: "March 2023 - March 2024",
      timeSummary: " (1 yr)",
      content: [
        "Integrated new features in modern Angular applications and refactored legacy codebase for improved maintainability",
        "Worked closely with QA and PMOs to design, build, and deliver software features with high user satisfaction",
        "Implemented database optimizations and API improvements resulting in 30% faster response times",
      ],
      technologies: ["Angular", "C#/.NET", "SSMS", "REST APIs"],
    },
    {
      company: "Dollar Bank",
      logo: "/images/dollar-bank-logo.png",
      location: "Pittsburgh, PA",
      position: "Senior Application Developer",
      time: "August 2021 - March 2023",
      timeSummary: " (1 yr 8 mos)",
      content: [
        "Developed enterprise .NET applications from console applications to web services serving thousands of users",
        "Led the migration of legacy ASP.NET web pages to modern .NET MVC architecture",
        "Built and maintained SSIS packages for critical data migration and synchronization between systems",
      ],
      technologies: ["Razor", "C#/.NET", "SQL Server", "SSIS", "ASP.NET MVC"],
    },
    {
      company: "aSa",
      logo: "/images/aSa-logo.png",
      location: "Murrysville, PA",
      position: "Software Developer II",
      time: "May 2018 - August 2021",
      timeSummary: " (3 yrs 4 mos)",
      content: [
        "Led development across Processing and Inventory Tracking teams, implementing critical features using AngularJS and Entity Framework",
        "Provided global customer support and resolved production issues across multiple time zones",
        "Designed and developed SSRS reports used daily by customers worldwide for business operations",
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

  const education = {
    school: "Saint Vincent College",
    logo: "/images/svc-logo.png",
    location: "Latrobe, PA",
    position: "BS - Computing and Information Science",
    time: "",
    content: [
      "Courses taken include Server Side Programming, Database Concepts and Information Structures, Software Engineering, Discrete Mathematics, Computer Architecture and Operating Systems and Website Design.",
    ],
  };

  const allSkills = Array.from(
    new Set(workExperience.flatMap((exp) => exp.technologies))
  ).sort();

  return (
    <div className="min-h-screen pb-20">
      
      {/* Experience Section */}
      <section id="experience" className="section bg-slate-900/20 scroll-mt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50 pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              My professional journey in software development
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {workExperience.map((experience, index) => (
              <div
                key={experience.company}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-colors shadow-[0_0_0_8px_rgba(15,23,42,1)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse-slow"></div>
                </div>

                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 backdrop-blur-sm group-hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/5 p-2 flex items-center justify-center border border-white/10">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {experience.company}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {experience.position}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                        {experience.time}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {experience.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-md border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card group hover:border-blue-500/30">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-2xl bg-white/5 p-4 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={education.logo}
                    alt={`${education.school} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {education.school}
                  </h3>
                  <p className="text-xl text-blue-400 font-medium mb-2">
                    {education.position}
                  </p>
                  <p className="text-slate-400 mb-6">{education.location}</p>
                  
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                    <p className="text-slate-300 leading-relaxed">
                      {education.content[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
