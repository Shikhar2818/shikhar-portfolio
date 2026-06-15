import {
  Brain,
  Cloud,
  Code2,
  Globe,
  Layers,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { FadeIn } from "../components/ui/PageTransition";
import GlowCard from "../components/ui/GlowCard";
import { skillCategories } from "../data/portfolio";

const iconMap = { Code2, Layers, Brain, Globe, Cloud };

const tierFromLevel = (level) => {
  if (level >= 88) return { label: "Advanced", tone: "text-emerald-400" };
  if (level >= 80) return { label: "Proficient", tone: "text-blue-400" };
  if (level >= 72) return { label: "Intermediate", tone: "text-slate-400" };
  return { label: "Familiar", tone: "text-slate-500" };
};

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

function SkillRow({ name, level, accent }) {
  const tier = tierFromLevel(level);
  const filledDots = Math.ceil(level / 25);

  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 py-3 last:border-0">
      <span className="text-sm text-slate-200">{name}</span>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-1 sm:flex">
          {[1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className={`h-1.5 w-1.5 rounded-full ${
                dot <= filledDots ? accent.dot : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <span className={`min-w-[5.5rem] text-right text-xs font-medium ${tier.tone}`}>
          {tier.label}
        </span>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const primaryStack = [
    "Python",
    "Java",
    "C++",
    "FastAPI",
    "Machine Learning",
    "PostgreSQL",
    "AWS",
    "System Design",
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <section className="py-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Expertise"
            title="Technical skills"
            description="Core competencies across software engineering, AI/ML, backend systems, and cloud infrastructure."
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
            const accent = accentStyles[category.color];

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
                        {category.skills.length} competencies
                      </p>
                    </div>
                  </div>

                  <div className="mt-1">
                    {category.skills.map((skill) => (
                      <SkillRow
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        accent={accent}
                      />
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
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <span>Proficiency key</span>
              <div className="flex flex-wrap gap-4">
                <span className="text-emerald-400">Advanced — production-ready</span>
                <span className="text-blue-400">Proficient — strong working knowledge</span>
                <span className="text-slate-400">Intermediate — actively developing</span>
                <span className="text-slate-500">Familiar — foundational exposure</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
