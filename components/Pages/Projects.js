"use client";

import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Mittereder.com",
      image: "/images/mw/mwicon.png",
      page: "mw",
      description:
        "Professional portfolio website showcasing full-stack development skills with modern React, Next.js, and responsive design",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      category: "Full-Stack",
      featured: true,
    },
    {
      title: "Gradez",
      image: "/images/gz/gzicon.png",
      page: "gz",
      description:
        "Android grade tracking application with Firebase backend, real-time synchronization, and secure user authentication",
      technologies: ["Android", "Firebase", "Java", "Google APIs"],
      category: "Mobile",
      featured: true,
    },
    {
      title: "Franklin Regional",
      image: "/images/fr/fricon.png",
      page: "fr",
      description:
        "School district mobile application with push notifications, real-time updates, and comprehensive student information management",
      technologies: ["Android", "Parse API", "Java", "Push Notifications"],
      category: "Mobile",
      featured: false,
    },
    {
      title: "Life Counter",
      image: "/images/lc/lcicon.png",
      page: "lc",
      description:
        "Magic: The Gathering life counter and token tracker with custom themes, statistics tracking, and multiplayer support",
      technologies: ["Android", "Java", "SQLite", "Custom UI"],
      category: "Mobile",
      featured: false,
    },
    {
      title: "Frame It",
      image: "/images/fi/fiicon.png",
      page: "fi",
      description:
        "iOS photo framing application with social media integration, custom filters, and seamless sharing capabilities",
      technologies: ["iOS", "Swift", "Social APIs", "Image Processing"],
      category: "Mobile",
      featured: false,
    },
    {
      title: "Cuz",
      image: "/images/d/dicon.png",
      page: "cz",
      description:
        "React Native chat application with real-time socket connections, user authentication, and cross-platform compatibility",
      technologies: ["React Native", "Socket.io", "JavaScript", "Real-time"],
      category: "Mobile",
      featured: false,
    },
    {
      title: "Fast Movie Photos",
      image: "/images/fmp/fmpicon.png",
      page: "fmp",
      description:
        "Movie photo capture and sharing application with database integration, user galleries, and social features",
      technologies: ["Android", "Java", "REST APIs", "Database"],
      category: "Mobile",
      featured: false,
    },
    {
      title: "Graph Game",
      image: "/images/d/dicon.png",
      page: "gg",
      description:
        "Educational graph visualization game with interactive learning modules, progress tracking, and adaptive difficulty",
      technologies: ["JavaScript", "Canvas API", "HTML5", "Educational"],
      category: "Web",
      featured: false,
    },
    {
      title: "Words and Music",
      image: "/images/wam/wamicon.png",
      page: "wam",
      description:
        "Music composition and word association application with audio processing, creative algorithms, and user-generated content",
      technologies: ["Android", "Audio APIs", "Java", "Creative Tech"],
      category: "Mobile",
      featured: false,
    },
    {
      title: "Vehicle App",
      image: "/images/d/dicon.png",
      page: "va",
      description:
        "Comprehensive vehicle management and tracking system with maintenance scheduling, cost analysis, and reporting features",
      technologies: ["React", "Node.js", "MongoDB", "Full-Stack"],
      category: "Web",
      featured: false,
    },
    {
      title: "Rock Paper Scissors",
      image: "/images/rps/rpsicon.png",
      page: "rps",
      description:
        "Interactive RPS game with smooth animations, score tracking, and engaging user experience design",
      technologies: ["JavaScript", "CSS3", "HTML5", "Game Development"],
      category: "Web",
      featured: false,
    },
    {
      title: "Pinball Price",
      image: "/images/pp/ppicon.png",
      page: "pp",
      description:
        "Pinball machine pricing and database application with market analysis, price tracking, and comprehensive machine information",
      technologies: ["Android", "SQLite", "Java", "Database"],
      category: "Mobile",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section">
        <div className="container">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">My Projects</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A collection of applications and solutions I've built throughout
              my career, showcasing my technical expertise and problem-solving
              abilities.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <div
                    key={project.title}
                    className={`transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card
                      title={project.title}
                      image={project.image}
                      href={`/projects/${project.page}`}
                      description={project.description}
                      technologies={project.technologies}
                      featured={true}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              All Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card
                    title={project.title}
                    image={project.image}
                    href={`/projects/${project.page}`}
                    description={project.description}
                    technologies={project.technologies}
                    category={project.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
