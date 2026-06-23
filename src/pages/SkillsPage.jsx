import { Brain, Cloud, Code2, Globe, Layers } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { FadeIn } from "../components/ui/PageTransition";
import GlowCard from "../components/ui/GlowCard";
import { skillCategories } from "../data/portfolio";

const iconMap = { Code2, Layers, Brain, Globe, Cloud };

const accentStyles = {
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
    dot: "bg-emerald-400",
  },
  blue: {
    icon: "text-blue-400",
    bg: "bg-blue-500/10",
    ring: "ring-blue-500/20",
    dot: "bg-blue-400",
  },
  violet: {
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    ring: "ring-violet-500/20",
    dot: "bg-violet-400",
  },
  cyan: {
    icon: "text-cyan-400",
    bg: "bg-cyan-500/10",
    ring: "ring-cyan-500/20",
    dot: "bg-cyan-400",
  },
};

const techStackLogos = [
  { label: "Py", name: "Python" },
  { label: "Jv", name: "Java" },
  { label: "C++", name: "C++" },
  { label: "JS", name: "JavaScript" },
  { label: "Go", name: "Go" },
  { label: "Fa", name: "FastAPI" },
  { label: "Dj", name: "Django" },
  { label: "Re", name: "React" },
  { label: "As", name: "AstroJS" },
  { label: "Tw", name: "Tailwind CSS" },
  { label: "Pg", name: "PostgreSQL" },
  { label: "Aws", name: "AWS" },
  { label: "Dk", name: "Docker" },
  { label: "Git", name: "GitHub" },
];

function SkillPill({ name, accent }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-sm font-medium text-slate-200">
      <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
      {name}
    </span>
  );
}

export default function SkillsPage() {
  const primaryStack = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "Go",
    "FastAPI",
    "Django",
    "React",
    "AstroJS",
    "Tailwind CSS",
    "PostgreSQL",
    "AWS",
    "Docker",
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <section className="py-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Expertise"
            title="Technical skills"
            description="Tools and foundations I use across software engineering, web development, data work, cloud, and core computer science."
          />
        </FadeIn>
      </section>

      <section className="py-4">
        <FadeIn delay={50}>
          <GlowCard>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Primary stack
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {primaryStack.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlowCard>
        </FadeIn>
      </section>

      <section className="py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            const accent = accentStyles[category.color] || accentStyles.emerald;

            return (
              <FadeIn key={category.id} delay={index * 40}>
                <GlowCard className="h-full">
                  <div className="mb-1 flex items-center gap-3 border-b border-white/5 pb-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent.bg} ring-1 ${accent.ring}`}
                    >
                      <Icon size={18} className={accent.icon} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <SkillPill key={skill} name={skill} accent={accent} />
                    ))}
                  </div>
                </GlowCard>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="pb-8">
        <FadeIn delay={100}>
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] py-5">
            <p className="px-6 text-xs font-medium uppercase tracking-wider text-slate-500">
              Tech stack
            </p>
            <div className="mt-4 flex overflow-hidden">
              <div className="tech-logo-track flex min-w-max items-center gap-4 pr-4">
                {[...techStackLogos, ...techStackLogos].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex min-w-32 items-center gap-3 rounded-xl border border-white/5 bg-slate-950/60 px-4 py-3"
                    aria-hidden={index >= techStackLogos.length}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-300 ring-1 ring-emerald-500/20">
                      {tech.label}
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
