export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="gradient-mesh absolute inset-0" />
      <div className="grid-pattern absolute inset-0 opacity-40" />
      <div className="bg-orb bg-orb-emerald absolute -left-32 top-1/4 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-orb bg-orb-blue absolute -right-32 top-1/3 h-80 w-80 rounded-full blur-3xl" />
      <div className="bg-orb bg-orb-violet absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
    </div>
  );
}

export function HeroOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-orb absolute left-[15%] top-[20%] h-16 w-16 rounded-full border border-white/5 bg-white/[0.02]" />
      <div className="hero-orb absolute left-[35%] top-[35%] h-24 w-24 rounded-full border border-white/5 bg-white/[0.02]" style={{ animationDelay: "-2s" }} />
      <div className="hero-orb absolute left-[55%] top-[25%] h-20 w-20 rounded-full border border-white/5 bg-white/[0.02]" style={{ animationDelay: "-4s" }} />
    </div>
  );
}
