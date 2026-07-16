"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { featuredCompanies, SOCIAL_LINKS } from "../../data/portfolio";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative container-custom w-full z-10">
        <div className="flex flex-col items-center text-center">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-8 text-white">
              Building <span className="gradient-text">digital</span>
              <br />
              <span className="gradient-text">experiences</span> that matter.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              I&apos;m <span className="text-white font-semibold">Mac Mittereder</span>,
              a full-stack engineer crafting high-performance web applications with
              React, .NET, and modern cloud architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="#experience" className="btn-primary w-full sm:w-auto group">
                View Work
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                Check GitHub
              </a>
            </div>

            <div className="border-t border-white/5 pt-10">
              <p className="text-sm text-slate-500 mb-6 font-medium uppercase tracking-wider">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-90">
                {featuredCompanies.map((company) => (
                  <div
                    key={company.company}
                    className="h-8 md:h-10 w-auto relative flex items-center justify-center"
                  >
                    <Image
                      src={company.logo}
                      width={200}
                      height={50}
                      alt={company.company}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
