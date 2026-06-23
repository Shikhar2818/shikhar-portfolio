import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { HeroOrbs } from "../components/ui/AnimatedBackground";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/ui/PageTransition";
import GlowCard, { TechBadge } from "../components/ui/GlowCard";
import { personal, heroSubtitles, projects } from "../data/portfolio";

export default function HomePage() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % heroSubtitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-8rem)] flex flex-col justify-center py-12">
        <HeroOrbs />

        <FadeIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-emerald-300">
            <Sparkles size={14} />
            Available for internships & collaborations
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{personal.firstName}</span>
            <span className="text-white">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-6 h-10 overflow-hidden sm:h-12">
            <motion.p
              key={subtitleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl font-medium text-slate-400 sm:text-2xl"
            >
              {heroSubtitles[subtitleIndex]}
            </motion.p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {personal.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={14} className="text-emerald-400" />
            {personal.location}
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-surface-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              My Journey
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-300"
            >
              Contact Me
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Mini About */}
      <section className="py-16">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
                About
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Engineering with purpose
              </h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-base leading-relaxed text-slate-400">
                {personal.summary.slice(0, 280)}...
              </p>
              <Link
                to="/about"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
              >
                Read full story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Quick Stats */}
      <section className="py-8">
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Briefcase,
              label: "MNRE Intern",
              value: "Gov. of India",
            },
            {
              icon: Award,
              label: "AWS Certified",
              value: "Cloud Practitioner",
            },
            {
              icon: Code2,
              label: "Projects",
              value: "4+ Built",
            },
            {
              icon: Sparkles,
              label: "GPA",
              value: "8.54 / 10",
            },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <GlowCard className="text-center sm:text-left">
                <stat.icon
                  size={22}
                  className="mx-auto text-emerald-400 sm:mx-0"
                />
                <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {stat.value}
                </p>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16">
        <FadeIn>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
                Featured Work
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Selected projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              View all projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <GlowCard>
                <div className="flex flex-wrap gap-2">
                  <TechBadge variant="emerald">{project.category}</TechBadge>
                  <TechBadge>{project.period}</TechBadge>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Let&apos;s build something impactful
              </h2>
              <p className="mt-3 max-w-xl text-slate-400">
                Open to software engineering internships, backend roles, and
                AI/ML project collaborations.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/skills"
                  className="rounded-xl glass px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                >
                  Explore Skills
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl bg-emerald-500/15 px-5 py-2.5 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/30 hover:bg-emerald-500/25"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
