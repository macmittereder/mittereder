"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS, SOCIAL_LINKS } from "../../data/portfolio";
import { SocialLinks } from "../icons/SocialIcons";

const SECTION_IDS = ["experience", "education"];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        setActiveSection("home");
        return;
      }

      const scrollPosition = scrollY + 150;
      const sections = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.offsetTop } : null;
      }).filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].top) {
          setActiveSection(sections[i].id);
          return;
        }
      }

      setActiveSection("home");
    };

    updateActive();

    let ticking = false;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto transition-all duration-300"
      >
        <div
          className={`glass rounded-full px-6 py-3 transition-all duration-300 ${
            isScrolled
              ? "bg-slate-900/60 shadow-lg border-white/10"
              : "bg-transparent border-transparent shadow-none"
          }`}
        >
          <div className="flex items-center justify-between md:justify-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-slate-200 font-semibold text-lg hidden md:block group-hover:text-white transition-colors">
                Mac
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1 bg-slate-800/50 rounded-full p-1 border border-white/5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.id
                      ? "text-white bg-white/10 shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <SocialLinks links={SOCIAL_LINKS} variant="nav" />
            </div>

            <button
              type="button"
              className="md:hidden p-2 rounded-full bg-slate-800/50 text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen ? true : undefined}
        className={`fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-2xl font-bold transition-all duration-300 ${
                activeSection === item.id
                  ? "text-blue-400"
                  : "text-slate-400 hover:text-white"
              }`}
              onClick={(event) => {
                event.preventDefault();
                setIsMobileMenuOpen(false);
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-6 mt-8">
            <SocialLinks links={SOCIAL_LINKS} variant="mobile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
