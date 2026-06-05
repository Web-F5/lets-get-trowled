"use client";

import { useState } from "react";
import { CLIENT, SERVICES } from "@/lib/data";
import CommunitySection from "@/components/ui/CommunitySection";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const id = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mwvjewly";
    try {
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); (e.target as HTMLFormElement).reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <>
      <section className="bg-brand-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
            Free Quote
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Request a Quote
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote. We service Seymour and all of Central Victoria.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-sand">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* ── Contact details ──────────────────────────────── */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">Get in Touch</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <PhoneIcon />, label: "Phone",
                  content: <a href={`tel:${CLIENT.phoneRaw}`} className="text-xl font-bold text-brand-accent hover:text-brand-accent-hover transition-colors">{CLIENT.phone}</a>,
                },
                {
                  icon: <ClockIcon />, label: "Business Hours",
                  content: (
                    <ul className="text-sm text-brand-charcoal/70 space-y-0.5">
                      <li>Mon–Fri: 7:00am–3:00pm (on site)</li>
                      <li>Mon–Fri: 8:00am–4:00pm (office)</li>
                      <li>Weekends: By appointment only</li>
                    </ul>
                  ),
                },
                {
                  icon: <PinIcon />, label: "Service Area",
                  content: <p className="text-sm text-brand-charcoal/70">Based in Seymour VIC 3660. Servicing within 130 km.</p>,
                },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-dark flex items-center justify-center flex-shrink-0">
                    {row.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark mb-1">{row.label}</p>
                    {row.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Form ─────────────────────────────────────────── */}
          <div id="contactform" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h2>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-brand-dark">Message sent!</p>
                <p className="text-brand-charcoal/60">We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="name" required
                      className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-brand-sand/30 text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">Phone</label>
                    <input type="tel" name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-brand-sand/30 text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input type="email" name="email" required
                    className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-brand-sand/30 text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1.5">Service</label>
                  <select name="service"
                    className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-brand-sand/30 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow"
                  >
                    <option value="">— Select a service —</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                    <option value="Other">Other / Not sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea name="message" required rows={5} placeholder="Describe your project or repair…"
                    className="w-full px-4 py-3 rounded-xl border border-brand-sand bg-brand-sand/30 text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none transition-shadow"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600 font-medium">Something went wrong — please try again or call us directly.</p>
                )}

                <button type="submit" disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-brand-charcoal font-bold text-lg transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CommunitySection />
    </>
  );
}

function PhoneIcon() {
  return <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
}
function MailIcon() {
  return <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}
function ClockIcon() {
  return <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function PinIcon() {
  return <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}
