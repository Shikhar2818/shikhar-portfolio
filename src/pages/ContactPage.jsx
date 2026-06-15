import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Link2,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/ui/PageTransition";
import GlowCard from "../components/ui/GlowCard";
import { personal, socialLinks } from "../data/portfolio";

const iconMap = { Linkedin: Link2, Mail, Award };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <section className="py-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect"
            description="Open to SDE and AI/ML internships, AI/ML and deep learning projects, and backend development opportunities. Reach out — I'd love to hear from you."
            align="center"
            className="mx-auto"
          />
        </FadeIn>
      </section>

      <section className="py-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.1}>
              <GlowCard>
                <h3 className="text-lg font-semibold text-white">
                  Contact details
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
                    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
                    { icon: MapPin, label: "Location", value: personal.location },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                        <item.icon size={16} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-slate-300 transition-colors hover:text-emerald-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-300">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <StaggerContainer className="mt-4 grid gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon] || Mail;
                  return (
                    <StaggerItem key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-glow glass flex items-center gap-4 rounded-2xl border border-white/8 p-4 transition-all duration-300"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                          <Icon size={18} className="text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            {link.name}
                          </p>
                          <p className="text-xs text-slate-500 truncate max-w-[200px]">
                            {link.url.replace(/^https?:\/\//, "")}
                          </p>
                        </div>
                      </a>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.15}>
              <GlowCard>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <CheckCircle2 size={48} className="text-emerald-400" />
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      Opening your email client
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Your message has been prepared. Send it from your email app
                      to complete the contact.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm text-emerald-400 hover:text-emerald-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-surface-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 sm:w-auto"
                    >
                      Send Message
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </button>
                  </form>
                )}
              </GlowCard>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
