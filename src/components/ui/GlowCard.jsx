import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function GlowCard({
  children,
  className = "",
  to,
  href,
  external = false,
}) {
  const baseClass = `card-glow glass rounded-2xl border border-white/8 p-6 ${className}`;

  if (to) {
    return (
      <Link to={to} className={`block ${baseClass}`}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`block ${baseClass}`}
      >
        {children}
      </a>
    );
  }

  return <div className={baseClass}>{children}</div>;
}

export function TechBadge({ children, variant = "default" }) {
  const variants = {
    default: "bg-white/5 text-slate-300 border-white/10",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    blue: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    violet: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

export function ActionButton({
  href,
  icon: Icon,
  label,
  variant = "primary",
  disabled = false,
}) {
  const variants = {
    primary:
      "bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25",
    secondary:
      "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white",
    ghost: "bg-transparent text-slate-400 border-transparent hover:text-white",
  };

  if (disabled) {
    return (
      <span
        className={`inline-flex cursor-not-allowed items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium opacity-40 ${variants.secondary}`}
      >
        {Icon && <Icon size={16} />}
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-300 ${variants[variant]}`}
    >
      {Icon && <Icon size={16} />}
      {label}
      <ArrowUpRight size={14} className="opacity-60" />
    </a>
  );
}
