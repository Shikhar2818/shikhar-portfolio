import { Link } from "react-router-dom";
import { Code2, Link2, Mail } from "lucide-react";
import { personal, socialLinks } from "../../data/portfolio";

const iconMap = { Linkedin: Link2, Mail, Github: Code2 };

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">{personal.name}</p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} · Built with React & Tailwind
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.slice(0, 2).map((link) => {
            const Icon = iconMap[link.icon] || Mail;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-400 transition-all duration-300 hover:text-emerald-400 card-glow"
                aria-label={link.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <Link
          to="/contact"
          className="text-xs text-slate-500 transition-colors hover:text-emerald-400"
        >
          shikharverma2311@gmail.com
        </Link>
      </div>
    </footer>
  );
}
