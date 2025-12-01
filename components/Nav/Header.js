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
                <span className="gradient-text"> web apps</span> that scale
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

              <div className="mb-8" />

              <div className="flex flex-col gap-3 opacity-90">
                <div className="flex items-center gap-3 md:gap-5">
                  <span className="text-base md:text-lg font-semibold text-slate-200">
                    Currently at
                  </span>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-slate-600/30">
                    <Image
                      src="/images/webstaurantstore-logo.png"
                      width={360}
                      height={80}
                      alt="WebstaurantStore"
                      className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto opacity-95 hover:opacity-100 transition-opacity"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <span className="text-sm text-slate-400">Previously at</span>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-600/30">
                    <Image
                      src="/images/lexicon-logo.png"
                      width={90}
                      height={24}
                      alt="Lexicon"
                      className="h-7 sm:h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-600/30">
                    <Image
                      src="/images/dollar-bank-logo.png"
                      width={90}
                      height={24}
                      alt="Dollar Bank"
                      className="h-7 sm:h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-600/30">
                    <Image
                      src="/images/aSa-logo.png"
                      width={60}
                      height={24}
                      alt="aSa"
                      className="h-7 sm:h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
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
