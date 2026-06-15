import { useState } from "react";
import { ExternalLink, Code2, FolderKanban, Play, AlertTriangle } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { FadeIn } from "../components/ui/PageTransition";
import GlowCard, { TechBadge, ActionButton } from "../components/ui/GlowCard";
import { projects, projectCategories } from "../data/portfolio";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <section className="py-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects & engineering work"
            description="Real-world systems spanning web automation, AI/ML market research, and serverless cloud architecture."
          />
        </FadeIn>
      </section>

      <section className="py-6">
        <FadeIn delay={50}>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30"
                    : "glass text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {filtered.map((project) => (
            <article key={project.id}>
              <GlowCard className="flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20">
                    <FolderKanban size={20} className="text-blue-400" />
                  </div>
                  {project.featured && (
                    <TechBadge variant="emerald">Featured</TechBadge>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <TechBadge variant="blue">{project.category}</TechBadge>
                  <TechBadge>{project.period}</TechBadge>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-emerald-400/80">
                  {project.subtitle}
                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-xs leading-relaxed text-slate-500"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                      {h}
                    </li>
                  ))}
                </ul>

                {project.disclaimer && (
                  <div className="mt-4 flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
                    <AlertTriangle
                      size={16}
                      className="mt-0.5 shrink-0 text-amber-400"
                    />
                    <p className="text-xs leading-relaxed text-amber-200/75">
                      <span className="font-semibold text-amber-300">
                        Disclaimer:{" "}
                      </span>
                      {project.disclaimer}
                    </p>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechBadge key={t} variant="violet">
                      {t}
                    </TechBadge>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/5 pt-5">
                  <ActionButton
                    href={project.github}
                    icon={Code2}
                    label="GitHub"
                    variant="secondary"
                    disabled={project.github === "#"}
                  />
                  <ActionButton
                    href={project.demo}
                    icon={project.demoLabel ? Play : ExternalLink}
                    label={project.demoLabel || "Live Demo"}
                    variant="primary"
                    disabled={project.demo === "#"}
                  />
                </div>
              </GlowCard>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
