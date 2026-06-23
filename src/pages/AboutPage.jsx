import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Building2,
  ChevronDown,
  GraduationCap,
  MapPin,
  Calendar,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/ui/PageTransition";
import GlowCard, { TechBadge } from "../components/ui/GlowCard";
import {
  personal,
  experience,
  education,
  certificates,
} from "../data/portfolio";

function TimelineItem({ item, index, isLast }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div className="relative flex gap-6 pb-12">
      {!isLast && (
        <div className="absolute left-[19px] top-10 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />
      )}

      <motion.div
        className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-500/30"
        whileHover={{ scale: 1.08 }}
      >
        <Building2 size={18} className="text-emerald-400" />
      </motion.div>

      <div className="flex-1">
        <GlowCard className="cursor-pointer">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="w-full text-left"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  {item.type}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{item.company}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-300">{item.period}</p>
                <p className="mt-1 flex items-center justify-end gap-1 text-xs text-slate-500">
                  <MapPin size={12} />
                  {item.location}
                </p>
              </div>
            </div>

            <ChevronDown
              size={18}
              className={`mt-5 text-slate-500 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-3 border-t border-white/5 pt-4">
                  {item.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-3 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </GlowCard>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <section className="py-8">
        <FadeIn>
          <SectionHeading
            eyebrow="About Me"
            title="Professional journey & impact"
            description="From government tech internships to AI-powered quantitative platforms — a story of building reliable, scalable software."
          />
        </FadeIn>
      </section>

      {/* Narrative */}
      <section className="py-8">
        <FadeIn delay={0.1}>
          <GlowCard className="relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            <p className="relative text-base leading-relaxed text-slate-300 sm:text-lg">
              {personal.summary}
            </p>
            <div className="relative mt-6 flex flex-wrap gap-3">
              <TechBadge variant="emerald">C++ · Python · Java</TechBadge>
              <TechBadge variant="blue">FastAPI · REST APIs</TechBadge>
              <TechBadge variant="violet">ML · Generative AI</TechBadge>
              <TechBadge>AWS EC2 · S3 · IAM</TechBadge>
            </div>
          </GlowCard>
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <FadeIn>
          <h2 className="mb-10 text-2xl font-semibold text-white">
            Experience Timeline
          </h2>
        </FadeIn>

        {experience.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.1}>
            <TimelineItem
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          </FadeIn>
        ))}
      </section>

      {/* Education */}
      <section className="py-8">
        <FadeIn>
          <h2 className="mb-8 text-2xl font-semibold text-white">Education</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <GlowCard>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 ring-1 ring-violet-500/30">
                  <GraduationCap size={22} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {education.institution} · {education.location}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {education.period}
                    </span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
                      GPA {education.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <StaggerContainer className="mt-6 grid gap-3 sm:grid-cols-3">
              {education.highlights.map((h) => (
                <StaggerItem key={h}>
                  <div className="rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-400">
                    {h}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </GlowCard>
        </FadeIn>
      </section>

      {/* Certificates */}
      <section className="py-16">
        <FadeIn>
          <h2 className="mb-8 text-2xl font-semibold text-white">
            Certifications
          </h2>
        </FadeIn>
        <StaggerContainer className="grid gap-4 sm:grid-cols-2">
          {certificates.map((cert) => (
            <StaggerItem key={cert.name}>
              {cert.url ? (
                <GlowCard
                  href={cert.url}
                  external
                  className="flex items-start gap-4"
                >
                  <Award size={22} className="shrink-0 text-emerald-400" />
                  <div>
                    <h3 className="font-semibold text-white">{cert.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
                    {cert.verified && (
                      <span className="mt-2 inline-block text-xs text-emerald-400">
                        View Certificate →
                      </span>
                    )}
                  </div>
                </GlowCard>
              ) : (
                <GlowCard className="flex items-start gap-4">
                  <Award size={22} className="shrink-0 text-slate-500" />
                  <div>
                    <h3 className="font-semibold text-white">{cert.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
                  </div>
                </GlowCard>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
