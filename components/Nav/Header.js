"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="hidden md:block absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-16 md:pt-32 md:pb-24">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* Left: Headline, subtext, CTAs, social proof */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Building fast, reliable
                <br className="hidden sm:block" />
                <span className="gradient-text"> web apps</span> that users love
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
                I'm{" "}
                <span className="font-semibold text-white">
                  Mackenzie Mittereder
                </span>
                , a full‑stack software engineer focused on shipping elegant,
                production‑ready experiences with Next.js, React, TypeScript,
                and Node.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#experience"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View Experience
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mackenzie-mittereder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  LinkedIn
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-col gap-3 opacity-90">
                <div className="flex items-center gap-3 md:gap-5">
                  <span className="text-base md:text-lg font-semibold text-slate-200">
                    Currently at
                  </span>
                  <Image
                    src="/images/webstaurantstore-logo.png"
                    width={360}
                    height={80}
                    alt="WebstaurantStore"
                    className="h-10 sm:h-14 md:h-20 lg:h-24 w-auto opacity-95 hover:opacity-100 transition-opacity"
                    priority
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <span className="text-sm text-slate-400">Previously at</span>
                  <Image
                    src="/images/lexicon-logo.png"
                    width={90}
                    height={24}
                    alt="Lexicon"
                    className="h-5 sm:h-6 md:h-7 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/images/dollar-bank-logo.png"
                    width={90}
                    height={24}
                    alt="Dollar Bank"
                    className="h-5 sm:h-6 md:h-7 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/images/aSa-logo.png"
                    width={60}
                    height={24}
                    alt="aSa"
                    className="h-5 sm:h-6 md:h-7 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
