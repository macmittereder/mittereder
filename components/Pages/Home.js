"use client";

import { useEffect, useState } from "react";
import moment from "moment";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentJobTime = () => {
    var start = moment([2024, 3]);
    var end = moment([moment().year(), moment().month() + 2]);

    var months = moment.duration(end.diff(start)).months();
    var years = moment.duration(end.diff(start)).years();

    return `(${years > 0 ? years + (years > 1 ? " yrs" : " yr") : ""}${
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
        "Mentored junior developers and conducted code reviews to maintain high code quality standards",
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      achievements: [
        "Improved team efficiency by 25%",
        "Reduced bug reports by 40%",
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
        "Integrated new features in modern React applications and refactored legacy codebase for improved maintainability",
        "Worked closely with QA and PMOs to design, build, and deliver software features with high user satisfaction",
        "Implemented database optimizations and API improvements resulting in 30% faster response times",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
      achievements: ["30% performance improvement", "95% user satisfaction"],
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
      technologies: [".NET", "C#", "SQL Server", "SSIS", "ASP.NET MVC"],
      achievements: ["Migrated 50+ legacy pages", "99.9% system uptime"],
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
        "C#",
        "Entity Framework",
        "SSRS",
        "SQL Server",
      ],
      achievements: ["Global customer support", "100+ reports delivered"],
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
      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              I'm a passionate software engineer with over 6 years of experience
              building scalable applications and innovative solutions. I
              specialize in full-stack development, cloud architecture, and
              modern web technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                title: "Frontend",
                skills: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML/CSS",
                ],
              },
              {
                title: "Backend",
                skills: ["Node.js", "Python", ".NET", "C#", "REST APIs"],
              },
              {
                title: "Database & Cloud",
                skills: [
                  "PostgreSQL",
                  "SQL Server",
                  "MongoDB",
                  "AWS",
                  "Firebase",
                ],
              },
              {
                title: "DevOps & Tools",
                skills: ["Git", "Docker", "CI/CD", "Linux", "Agile/Scrum"],
              },
            ].map((category, index) => (
              <div
                key={category.title}
                className="card hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-6 text-blue-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-slate-900/30">
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
                className={`card hover-lift transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                    <div className="w-20 h-20 bg-slate-700/50 rounded-xl flex items-center justify-center">
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {experience.company}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg mb-1">
                        {experience.position}
                      </p>
                      <p className="text-slate-400">{experience.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-300 font-medium text-lg">
                      {experience.time}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {experience.timeSummary}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
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

                {/* Achievements */}
                {false && experience.achievements && (
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-blue-400 mb-4">
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {experience.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
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
            <div className="card hover-lift">
              <div className="flex items-center space-x-8 mb-8">
                <div className="w-24 h-24 bg-slate-700/50 rounded-xl flex items-center justify-center">
                  <img
                    src={education.logo}
                    alt={`${education.school} logo`}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {education.school}
                  </h3>
                  <p className="text-blue-400 font-semibold text-lg mb-1">
                    {education.position}
                  </p>
                  <p className="text-slate-400">{education.location}</p>
                </div>
              </div>

              <div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
