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
      position: "Software Engineer II",
      time: "March 2024 - Present",
      timeSummary: currentJobTime(),
      content: [
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
        "SQL Server (SSMS)",
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

  return (
    <div className="min-h-screen">
      {/* Experience Section */}
      <section id="experience" className="section bg-slate-900/30 scroll-mt-24">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">Work Experience</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              My professional journey in software development
            </p>
          </div>

          <div className="space-y-12">
            {workExperience.map((experience, index) => (
              <div
                key={experience.company}
                className={`card hover-lift relative overflow-hidden transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-6">
                  <div className="flex items-center gap-6">
                    <div
                      className="bg-slate-800 border border-slate-600 shadow-lg rounded-xl flex items-center justify-center px-5 py-4 min-h-20 md:min-h-24"
                      style={{ width: "220px", minWidth: "220px", maxWidth: "260px" }}
                    >
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="w-full h-auto max-h-32 md:max-h-36 object-contain drop-shadow"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">
                        {experience.company}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg">
                        {experience.position}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 text-xs rounded-full bg-slate-700/60 border border-slate-600/50 text-slate-300">
                          {experience.location}
                        </span>
                        {String(experience.time)
                          .toLowerCase()
                          .includes("present") && (
                          <span className="px-2.5 py-1 text-xs rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 lg:text-right">
                    <div className="flex lg:justify-end gap-2 mb-1">
                      <span className="px-3 py-1 text-xs rounded-md bg-slate-700/60 border border-slate-600/50 text-slate-300">
                        {experience.time}
                      </span>
                      {experience.timeSummary && (
                        <span className="px-3 py-1 text-xs rounded-md bg-slate-700/60 border border-slate-600/50 text-slate-300">
                          {experience.timeSummary}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {experience.content.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-200 text-xs md:text-sm rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card hover-lift relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-6">
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-slate-700/50 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                    <img
                      src={education.logo}
                      alt={`${education.school} logo`}
                      className="relative w-20 h-20 md:w-24 md:h-24 object-contain"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {education.school}
                  </h3>
                  <p className="text-blue-400 font-semibold text-lg">
                    {education.position}
                  </p>
                  <p className="text-slate-400 mt-1">{education.location}</p>
                </div>
              </div>

              {/* Key Courses */}
              <div className="mt-4">
                {(() => {
                  const raw = education.content?.[0] || "";
                  const cleaned = raw
                    .replace(/^Courses taken include\s*/i, "")
                    .replace(/\.$/, "");
                  const parts = cleaned
                    .split(/,| and /)
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .slice(0, 12);
                  return parts.length ? (
                    <div>
                      <p className="text-slate-300 mb-3 font-medium">
                        Relevant coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {parts.map((c) => (
                          <span
                            key={c}
                            className="px-3 py-1 bg-slate-700/50 text-slate-200 text-xs md:text-sm rounded-full border border-slate-600/50"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {education.content.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
