import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "../../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 ${
          scrolled ? "glass-strong rounded-2xl py-3 shadow-lg shadow-black/20" : ""
        }`}
      >
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
            <span className="font-mono text-sm font-bold text-emerald-400">
              SV
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">{personal.name}</p>
            <p className="text-xs text-slate-500">Portfolio</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/8 ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-xl bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/25 md:inline-flex"
        >
          Get in Touch
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-3 overflow-hidden rounded-2xl glass-strong shadow-2xl shadow-black/40 md:hidden"
          >
            <ul className="flex flex-col p-2">
              {navLinks.map((link, i) => {
                const active = location.pathname === link.path;
                return (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-emerald-500/10 text-emerald-300"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
              <li className="mt-1 border-t border-white/5 pt-1">
                <Link
                  to="/contact"
                  className="block rounded-xl bg-emerald-500/15 px-4 py-3 text-center text-sm font-medium text-emerald-300"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
