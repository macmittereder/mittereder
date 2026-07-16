"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 50;
const CONNECTION_DISTANCE = 100;

const createParticle = (width, height) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.5,
  vy: (Math.random() - 0.5) * 0.5,
  size: Math.random() * 2 + 1,
  opacity: Math.random() * 0.5 + 0.2,
});

const updateParticle = (particle, width, height) => {
  particle.x += particle.vx;
  particle.y += particle.vy;

  if (particle.x < 0 || particle.x > width) particle.vx *= -1;
  if (particle.y < 0 || particle.y > height) particle.vy *= -1;
};

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (prefersReducedMotion) {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, "rgba(15, 23, 42, 1)");
      gradient.addColorStop(1, "rgba(30, 41, 59, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }

    const particles = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(canvas.width, canvas.height)
    );

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, "rgba(15, 23, 42, 1)");
      gradient.addColorStop(1, "rgba(30, 41, 59, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        updateParticle(particle, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${
              0.1 * (1 - distance / CONNECTION_DISTANCE)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full -z-10"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      }}
    />
  );
};

export default Background;
