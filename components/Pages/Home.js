"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { education, workExperience } from "../../data/portfolio";

const ExperienceCard = ({ experience, index, isVisible }) => {
  const primaryRole = experience.positions[0];
  const hasMultipleRoles = experience.positions.length > 1;

  return (
    <div
      className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-colors shadow-[0_0_0_8px_rgba(15,23,42,1)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse-slow" />
      </div>

      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 backdrop-blur-sm group-hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white/5 p-2 flex items-center justify-center border border-white/10">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {experience.company}
              </h3>
              {hasMultipleRoles ? (
                <p className="text-slate-400 text-sm">
                  {experience.totalTime} {experience.totalTimeSummary}
                </p>
              ) : (
                <p className="text-blue-400 font-medium">{primaryRole.title}</p>
              )}
            </div>
          </div>
          {!hasMultipleRoles && (
            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                {primaryRole.time}
              </span>
            </div>
          )}
        </div>

        {hasMultipleRoles ? (
          <div className="space-y-6 mb-6">
            {experience.positions.map((position) => (
              <div
                key={`${experience.company}-${position.title}`}
                className="relative pl-4 border-l-2 border-slate-700"
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h4 className="text-lg font-semibold text-blue-400">
                      {position.title}
                    </h4>
                    <span className="text-xs text-slate-400">
                      {position.time} · {position.duration}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {position.content.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-3 mb-6">
            {primaryRole.content.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}

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
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <section
        id="experience"
        className="section bg-slate-900/20 scroll-mt-24 relative"
      >
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
              <ExperienceCard
                key={experience.company}
                experience={experience}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section scroll-mt-24">
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
                  <Image
                    src={education.logo}
                    alt={`${education.school} logo`}
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {education.school}
                  </h3>
                  <p className="text-xl text-blue-400 font-medium mb-2">
                    {education.degree}
                  </p>
                  <p className="text-slate-400 mb-6">{education.location}</p>

                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                    <p className="text-slate-300 leading-relaxed">
                      {education.summary}
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
