import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Dumbbell,
  HeartPulse,
  Users,
  Trophy,
  Clock,
  ShieldCheck,
  Flame,
  Target,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Navigation,
  Instagram,
  Facebook,
  ArrowRight,
  Award,
  Zap,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iron Fitness Kanchrapara — Premium Gym & Personal Training | 3 Months ₹2499" },
      {
        name: "description",
        content:
          "Kanchrapara's highest-rated gym (4.9★). Strength, cardio, personal training in Bagmore. Limited offer: 3 months membership for just ₹2499.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "9932740091";
const ALT_PHONE = "9875681898";
const WHATSAPP_MSG = encodeURIComponent("Hi, I'm interested in joining Iron Fitness!");
const WA_LINK = `https://wa.me/91${PHONE}?text=${WHATSAPP_MSG}`;
const MAPS_LINK = "https://maps.app.goo.gl/KyeU95WY5suGb7gg6";
const FB_LINK = "https://www.facebook.com/profile.php?id=100091845533830";

function Index() {
  useReveal();
  return (
    <div className="bg-background text-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <HowItWorks />
        <Stats />
        <WhyUs />
        <Transformations />
        <Reviews />
        <Team />
        <Trust />
        <OfferBanner />
        <Gallery />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWA />
      <MobileBar />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-md bg-gradient-gold flex items-center justify-center shadow-soft">
            <Dumbbell className="h-5 w-5 text-ink" strokeWidth={2.5} />
          </div>
          <div className="leading-none">
            <div className="font-serif text-lg md:text-xl font-bold tracking-tight">Iron Fitness</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-ink-soft mt-0.5">Kanchrapara</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Results", "#transformations"],
            ["Reviews", "#reviews"],
            ["Offer", "#offer"],
            ["Visit", "#location"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-ink-soft hover:text-ink transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-ink text-background px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gold hover:text-ink transition-all"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={`tel:+91${PHONE}`}
          className="md:hidden h-10 w-10 rounded-full bg-ink text-background flex items-center justify-center"
          aria-label="Call"
        >
          <Phone className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-28 md:pt-32 pb-20 bg-gradient-hero overflow-hidden">
      {/* Floating neon orbs */}
      <div className="orb orb-pink float-slow h-[420px] w-[420px] -top-20 -left-20" />
      <div className="orb orb-cyan float-mid h-[360px] w-[360px] top-40 -right-24" />
      <div className="orb orb-violet float-slow h-[300px] w-[300px] bottom-10 left-1/3 opacity-40" />
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="absolute inset-0 grain opacity-70 pointer-events-none" />

      {/* Floating offer sticker */}
      <div className="absolute top-24 md:top-28 right-5 md:right-10 z-10 reveal">
        <div className="sticker bg-gold text-background rounded-xl px-4 py-2.5 flex items-center gap-2">
          <Flame className="h-4 w-4" />
          <span className="font-serif text-sm tracking-wider">3 MOS · ₹2499</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="reveal flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink-soft mb-8">
          <span className="gold-divider" />
          <span className="text-glow-pink">Kanchrapara · Bagmore · Est.</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] neon-cyan" />
        </div>

        <h1 className="reveal font-serif font-normal leading-[0.9] tracking-tight text-[clamp(3rem,9vw,8.5rem)] max-w-6xl">
          <span className="block text-foreground text-glow-pink">TRAIN LIKE</span>
          <span className="block gum-gradient">YOU MEAN IT.</span>
        </h1>

        <p className="reveal mt-10 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed">
          Kanchrapara's loudest, brightest, hardest-hitting gym. Heavy iron, neon nights,
          a community that grinds — minutes from Bagmore. <span className="text-foreground font-semibold">No vibes from this planet.</span>
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gradient-gold text-background px-8 py-4 rounded-full font-serif tracking-wider shadow-elegant hover:scale-[1.03] transition-transform glitch-hover"
          >
            CLAIM ₹2499 OFFER
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-foreground/80 text-foreground px-8 py-4 rounded-full font-serif tracking-wider hover:bg-foreground hover:text-background transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            WHATSAPP US
          </a>
        </div>

        {/* Trust row */}
        <div className="reveal mt-16 md:mt-24 flex flex-wrap gap-x-12 gap-y-6 items-end">
          <TrustBlock
            top={
              <div className="flex items-center gap-1">
                <span className="font-serif text-4xl md:text-5xl text-glow-pink">4.9</span>
                <Star className="h-5 w-5 fill-gold text-gold" />
              </div>
            }
            label="Google Rating"
          />
          <TrustBlock top={<span className="font-serif text-4xl md:text-5xl text-glow-cyan">500+</span>} label="Active Members" />
          <TrustBlock
            top={
              <div className="flex items-center gap-1.5">
                <Clock className="h-5 w-5 text-gold" />
                <span className="font-serif text-4xl md:text-5xl">6–10</span>
              </div>
            }
            label="Open every day"
          />
        </div>
      </div>
    </section>
  );
}

function TrustBlock({ top, label }: { top: React.ReactNode; label: string }) {
  return (
    <div>
      {top}
      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-soft">{label}</div>
    </div>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Personal Training",
    "Strength & Conditioning",
    "Cardio Zone",
    "Weight Loss",
    "Muscle Building",
    "Kanchrapara · Bagmore",
    "₹2499 / 3 Months",
    "500+ Members",
    "Certified Coaches",
    "Open 6 AM – 10 PM",
  ];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border bg-cream py-5 overflow-hidden">
      <div className="marquee whitespace-nowrap">
        {row.map((it, i) => (
          <span key={i} className="flex items-center font-serif text-2xl md:text-4xl text-foreground/90 px-8 tracking-wider">
            {it}
            <span className="ml-8 h-2 w-2 rounded-full bg-[var(--accent)] neon-cyan" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        <div className="md:col-span-5 reveal">
          <SectionLabel num="01" label="About Iron Fitness" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-[1.05] mt-6">
            A serious gym
            <br />
            for serious <span className="italic text-gold-deep">people.</span>
          </h2>
        </div>
        <div className="md:col-span-7 reveal space-y-5 text-lg text-ink-soft leading-relaxed">
          <p>
            Iron Fitness was built in Kanchrapara for one reason: locals deserved a gym that didn't cut
            corners. We invested in proper plate-loaded equipment, free weights, and the kind of cardio
            machines you'd expect in a city studio — and we put it all opposite Central Bank in Bagmore so
            getting here is the easy part.
          </p>
          <p>
            Today, with a 4.9-star Google rating and 500+ members from Kanchrapara, Halisahar, Naihati and
            beyond, we're proud to be the place where transformations actually happen — for absolute
            beginners, returning lifters, and everyone in between.
          </p>
          <div className="pt-4 flex flex-wrap gap-6 text-sm font-medium text-ink">
            <Badge icon={<Award className="h-4 w-4 text-gold-deep" />} text="Certified trainers" />
            <Badge icon={<ShieldCheck className="h-4 w-4 text-gold-deep" />} text="Hygienic & A/C" />
            <Badge icon={<Sparkles className="h-4 w-4 text-gold-deep" />} text="Premium equipment" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-soft">
      <span className="font-serif text-gold-deep text-base font-semibold">{num}</span>
      <span className="gold-divider" />
      <span>{label}</span>
    </div>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      {icon}
      {text}
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: Dumbbell, name: "Strength Training", desc: "Plate-loaded machines, racks, dumbbells up to heavy — everything you need to build real muscle." },
    { icon: Users, name: "Personal Training", desc: "1-on-1 coaching with structured plans, form correction, and weekly progress checks." },
    { icon: HeartPulse, name: "Cardio & Fat Loss", desc: "Treadmills, cross-trainers and cycles plus guided fat-loss protocols that actually work." },
    { icon: Flame, name: "Weight Loss Programs", desc: "Custom 8 & 12-week transformation plans combining training, recovery and diet guidance." },
    { icon: Target, name: "Muscle Gain Plans", desc: "Hypertrophy-focused programming for skinny-to-fit and intermediate lifters." },
    { icon: Trophy, name: "Beginner Onboarding", desc: "Brand new to the gym? We start you with a full walkthrough and a 4-week starter plan." },
  ];
  return (
    <section id="services" className="py-24 md:py-32 px-5 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-2xl">
          <SectionLabel num="02" label="What we offer" />
          <h2 className="font-serif text-4xl md:text-6xl font-bold mt-6 leading-[1.05]">
            Everything you need.
            <br />
            <span className="italic text-gold-deep">Nothing you don't.</span>
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="reveal bg-background p-8 md:p-10 hover:bg-gold-soft/40 transition-colors group"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-gold-soft flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <s.icon className="h-5 w-5 text-gold-deep group-hover:text-ink" strokeWidth={2} />
              </div>
              <div className="font-serif text-2xl font-semibold mb-2">{s.name}</div>
              <p className="text-ink-soft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Call or WhatsApp", desc: "Reach out on WhatsApp. We'll answer your questions and book a free walkthrough — no pressure." },
    { n: "02", title: "Visit the gym", desc: "Drop by Bagmore. Tour the floor, meet the coaches, see the equipment for yourself." },
    { n: "03", title: "Start training", desc: "Activate your ₹2499 plan and start the same day. Your transformation begins now." },
  ];
  return (
    <section className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-2xl">
          <SectionLabel num="03" label="How it works" />
          <h2 className="font-serif text-4xl md:text-6xl font-bold mt-6 leading-[1.05]">
            Three steps. <span className="italic text-gold-deep">That's it.</span>
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative p-8 md:p-10 rounded-2xl bg-cream border border-border"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-serif text-7xl md:text-8xl font-bold text-gold/40 leading-none">{s.n}</div>
              <div className="mt-6 font-serif text-2xl font-semibold">{s.title}</div>
              <p className="mt-3 text-ink-soft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const stats = [
    { n: "4.9★", label: "Google Rating" },
    { n: "500+", label: "Happy Members" },
    { n: "98%", label: "Satisfaction" },
    { n: "16 hrs", label: "Open Daily" },
  ];
  return (
    <section className="py-20 md:py-24 px-5 md:px-8 bg-ink text-background">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="reveal text-center md:text-left">
            <div className="font-serif text-5xl md:text-6xl font-bold text-gold">{s.n}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-background/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { icon: Trophy, title: "Highest-rated in Kanchrapara", desc: "4.9 stars on Google — earned from members who actually train here, not paid reviews." },
    { icon: Sparkles, title: "Equipment that doesn't compromise", desc: "Plate-loaded stations, Olympic bars, premium dumbbells — maintained, hygienic, ready when you are." },
    { icon: Users, title: "Coaches who notice you", desc: "Our trainers learn your goal, your routine and your name. You're not a number on a register here." },
    { icon: Zap, title: "Results in your first 30 days", desc: "Beginners feel the difference inside a month — strength, energy, sleep, confidence. Promise." },
  ];
  return (
    <section className="py-24 md:py-32 px-5 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-2xl">
          <SectionLabel num="04" label="Why members stay" />
          <h2 className="font-serif text-4xl md:text-6xl font-bold mt-6 leading-[1.05]">
            We don't compete on price.
            <br />
            We compete on <span className="italic text-gold-deep">results.</span>
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal flex gap-5 p-8 bg-background rounded-2xl border border-border shadow-card hover:-translate-y-1 transition-transform"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                <it.icon className="h-5 w-5 text-ink" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">{it.title}</h3>
                <p className="text-ink-soft leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRANSFORMATIONS ---------------- */
function Transformations() {
  const list = [
    { name: "Rohit", initials: "RS", goal: "Lost 14 kg in 12 weeks", stat: "−14 kg", quote: "I'd tried twice before and quit. The coaches at Iron Fitness made it stick." },
    { name: "Priyanka", initials: "PD", goal: "Toned & strong post-pregnancy", stat: "−9 kg", quote: "They built a plan around my schedule. I feel like myself again — stronger, actually." },
    { name: "Aniket", initials: "AK", goal: "Skinny to lean muscle", stat: "+8 kg", quote: "Gained real muscle for the first time. The structured program made all the difference." },
    { name: "Soumitra", initials: "SB", goal: "Reversed BP & lost belly fat", stat: "−11 kg", quote: "At 42, I finally have my health back. Best decision I made for my family." },
  ];
  return (
    <section id="transformations" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-2xl">
          <SectionLabel num="05" label="Real members. Real results." />
          <h2 className="font-serif text-4xl md:text-6xl font-bold mt-6 leading-[1.05]">
            Transformations
            <br />
            <span className="italic text-gold-deep">earned in this gym.</span>
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((m, i) => (
            <div
              key={m.name}
              className="reveal rounded-2xl overflow-hidden border border-border bg-background shadow-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="grid grid-cols-2 h-44">
                <div className="bg-muted flex flex-col items-center justify-center text-ink-soft">
                  <div className="text-[10px] uppercase tracking-[0.2em]">Before</div>
                  <div className="font-serif text-3xl font-bold mt-1 opacity-60">{m.initials}</div>
                </div>
                <div className="bg-gradient-gold flex flex-col items-center justify-center text-ink">
                  <div className="text-[10px] uppercase tracking-[0.2em]">After</div>
                  <div className="font-serif text-3xl font-bold mt-1">{m.initials}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="font-serif text-3xl font-bold text-gold-deep">{m.stat}</div>
                <div className="mt-1 font-medium">{m.name} · {m.goal}</div>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed italic">"{m.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
function Reviews() {
  const reviews = [
    { name: "Subhajit Roy", text: "Best gym in Kanchrapara hands down. Equipment is properly maintained and the trainers actually know what they're doing.", stars: 5 },
    { name: "Tanmoy Das", text: "Joined 6 months ago and the change is unreal. Worth every rupee and more. The atmosphere keeps you coming back.", stars: 5 },
    { name: "Riya Sen", text: "As a girl I was nervous to start, but the coaches here made me feel comfortable from day one. Highly recommend.", stars: 5 },
    { name: "Indrajit Pal", text: "Clean, well-ventilated, never overcrowded even at peak hours. Iron Fitness sets the bar for gyms in Bagmore.", stars: 5 },
    { name: "Suman Ghosh", text: "₹2499 for 3 months is a steal for this quality. I drive in from Halisahar and it's still worth it.", stars: 5 },
    { name: "Anwesha Dutta", text: "Lost 8 kgs in 4 months following their plan. The personal training is genuinely personal here.", stars: 5 },
  ];
  return (
    <section id="reviews" className="py-24 md:py-32 px-5 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel num="06" label="Google Reviews" />
            <h2 className="font-serif text-4xl md:text-6xl font-bold mt-6 leading-[1.05]">
              Loved by locals.
              <br />
              <span className="italic text-gold-deep">Verified by Google.</span>
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="font-serif text-3xl font-bold mt-1">4.9 / 5.0</div>
              <div className="text-xs uppercase tracking-[0.18em] text-ink-soft">Based on Google Reviews</div>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-background px-5 py-3 rounded-full text-sm font-medium hover:bg-gold hover:text-ink transition-colors"
            >
              See on Google
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="reveal p-7 bg-background border border-border rounded-2xl shadow-card"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(r.stars)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-ink leading-relaxed">"{r.text}"</p>
              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gold-soft text-gold-deep flex items-center justify-center font-semibold text-sm">
                    {r.name.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div className="font-medium text-sm">{r.name}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-ink-soft">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold-deep" />
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */
function Team() {
  const team = [
    { name: "Suvankar", role: "Head Coach & Founder", bio: "Decade-long lifter. Builds plans for absolute beginners through competitive athletes." },
    { name: "Rajib", role: "Strength & Conditioning", bio: "Specializes in compound lifts, posture correction and progressive overload." },
    { name: "Mousumi", role: "Women's Coach", bio: "Female-focused programming — toning, strength, post-pregnancy recovery." },
    { name: "Arnab", role: "Cardio & Weight Loss", bio: "Designs sustainable fat-loss protocols. Big believer in showing up consistently." },
  ];
  return (
    <section className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-2xl">
          <SectionLabel num="07" label="Meet the team" />
          <h2 className="font-serif text-4xl md:text-6xl font-bold mt-6 leading-[1.05]">
            The people in <span className="italic text-gold-deep">your corner.</span>
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <div
              key={t.name}
              className="reveal p-8 rounded-2xl bg-cream border border-border text-center"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-gold flex items-center justify-center font-serif text-2xl font-bold text-ink shadow-soft">
                {t.name[0]}
              </div>
              <div className="mt-5 font-serif text-xl font-semibold">{t.name}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-gold-deep mt-1">{t.role}</div>
              <p className="mt-4 text-sm text-ink-soft leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BADGES ---------------- */
function Trust() {
  const items = [
    { icon: Award, label: "Certified Trainers" },
    { icon: ShieldCheck, label: "Hygiene Certified" },
    { icon: Star, label: "4.9★ Google Verified" },
    { icon: Trophy, label: "500+ Members" },
    { icon: Sparkles, label: "Premium Equipment" },
    { icon: Clock, label: "Open 7 days a week" },
  ];
  return (
    <section className="py-16 px-5 md:px-8 bg-cream border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map((it) => (
          <div key={it.label} className="reveal flex flex-col items-center text-center gap-2">
            <it.icon className="h-6 w-6 text-gold-deep" strokeWidth={1.8} />
            <div className="text-xs uppercase tracking-[0.18em] text-ink-soft">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- OFFER BANNER ---------------- */
function OfferBanner() {
  return (
    <section id="offer" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto reveal relative overflow-hidden rounded-3xl bg-ink text-background p-10 md:p-16 shadow-elegant">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-gold opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
        <div className="relative grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 bg-gold text-ink px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold">
              <Flame className="h-3.5 w-3.5" />
              Limited Offer · This Month Only
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mt-6 leading-[1.05]">
              3 months. <span className="italic text-gold">₹2499.</span>
              <br />
              That's it.
            </h2>
            <p className="mt-5 text-background/70 text-lg max-w-lg">
              Full access to the floor, all classes, all equipment. No hidden fees. No locked contracts.
              Just train.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-gold text-ink px-7 py-4 rounded-full font-semibold shadow-elegant"
              >
                <MessageCircle className="h-4 w-4" />
                Claim ₹2499 Offer
              </a>
              <a
                href={`tel:+91${PHONE}`}
                className="inline-flex items-center gap-2 border border-background/30 text-background px-7 py-4 rounded-full font-semibold hover:bg-background/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}

function Countdown() {
  const [t, setT] = useState({ d: 6, h: 12, m: 30, s: 0 });
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 7);
    target.setHours(0, 0, 0, 0);
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setT({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const cells: [string, number][] = [
    ["Days", t.d],
    ["Hours", t.h],
    ["Mins", t.m],
    ["Secs", t.s],
  ];
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-3">
      {cells.map(([label, val]) => (
        <div
          key={label}
          className="bg-background/5 backdrop-blur border border-background/10 rounded-xl p-3 md:p-5 text-center"
        >
          <div className="font-serif text-3xl md:text-5xl font-bold text-gold">
            {String(val).padStart(2, "0")}
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-background/60 mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const tiles = [
    { label: "Gym Floor", h: "h-72 md:h-96", grad: "from-gold-soft to-muted" },
    { label: "Cardio Zone", h: "h-72 md:h-72", grad: "from-muted to-gold-soft" },
    { label: "Free Weights", h: "h-72 md:h-72", grad: "from-cream to-gold-soft" },
    { label: "Personal Training Area", h: "h-72 md:h-96", grad: "from-gold-soft to-cream" },
    { label: "Strength Machines", h: "h-72 md:h-72", grad: "from-muted to-cream" },
    { label: "Reception & Lounge", h: "h-72 md:h-72", grad: "from-cream to-muted" },
  ];
  return (
    <section className="py-24 md:py-32 px-5 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-2xl">
          <SectionLabel num="08" label="Inside the gym" />
          <h2 className="font-serif text-4xl md:text-6xl font-bold mt-6 leading-[1.05]">
            A space designed
            <br />
            <span className="italic text-gold-deep">to make you train.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-4 md:gap-5">
          {tiles.map((t, i) => (
            <div
              key={t.label}
              className={`reveal relative ${t.h} rounded-2xl overflow-hidden bg-gradient-to-br ${t.grad} border border-border group`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-0 grain opacity-50" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">Iron Fitness</div>
                  <div className="font-serif text-2xl font-semibold text-ink mt-1">{t.label}</div>
                </div>
              </div>
              <Dumbbell className="absolute top-6 right-6 h-7 w-7 text-ink/20 group-hover:text-gold-deep transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const qs = [
    { q: "Is the ₹2499 for 3 months really a complete membership?", a: "Yes — full floor access, all equipment, all standard classes, no joining fee, no hidden charges. The price is exactly ₹2499 for 3 full months." },
    { q: "I'm a complete beginner. Will I feel out of place?", a: "Not at all. Around 40% of our members started here as absolute beginners. We give every new member a walkthrough and a starter plan so you know exactly what to do from day one." },
    { q: "Where exactly is Iron Fitness in Kanchrapara?", a: "We're in Bagmore, opposite Central Bank of India, Kanchrapara — easy to reach from anywhere in Kanchrapara, Halisahar, Naihati or Bizpur. Free parking available." },
    { q: "What are your gym hours?", a: "We're open from 6:00 AM to 10:00 PM, every day of the week. Train when it suits your schedule." },
    { q: "Do you have separate timings or trainers for women?", a: "Yes. We have a dedicated women's coach and ladies-friendly hours. Many of our members are women, and the environment is respectful and supportive." },
    { q: "Is personal training available, and how much extra is it?", a: "Yes — 1-on-1 personal training is available as an add-on. WhatsApp us for current PT package pricing; we keep it transparent and reasonable." },
    { q: "Can I get a free trial before joining?", a: "Drop in for a free walkthrough and try the equipment. We want you to be sure this is the right gym for you before you pay." },
    { q: "What payment options do you accept?", a: "Cash, UPI (GPay/PhonePe/Paytm), and bank transfer. No cards." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center max-w-2xl mx-auto">
          <SectionLabel num="09" label="FAQ" />
          <h2 className="font-serif text-4xl md:text-6xl font-bold mt-6 leading-[1.05]">
            Questions, <span className="italic text-gold-deep">answered.</span>
          </h2>
        </div>
        <div className="mt-14 space-y-3">
          {qs.map((item, i) => (
            <div key={i} className="reveal border border-border rounded-2xl overflow-hidden bg-background">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-base md:text-lg pr-4">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold-deep transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-ink-soft leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal mt-12 text-center">
          <p className="text-ink-soft mb-5">Still have questions? We answer within minutes on WhatsApp.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-background px-7 py-3.5 rounded-full font-semibold hover:bg-gold hover:text-ink transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  const areas = [
    "Kanchrapara",
    "Bagmore",
    "Halisahar",
    "Naihati",
    "Bizpur",
    "Kalyani",
    "Bansberia",
    "North 24 Parganas",
  ];
  return (
    <section id="location" className="py-24 md:py-32 px-5 md:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-2xl">
          <SectionLabel num="10" label="Visit us" />
          <h2 className="font-serif text-4xl md:text-6xl font-bold mt-6 leading-[1.05]">
            Find us in <span className="italic text-gold-deep">Bagmore.</span>
          </h2>
        </div>
        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 reveal rounded-2xl overflow-hidden border border-border shadow-card h-[420px] bg-background">
            <iframe
              title="Iron Fitness Kanchrapara location"
              src="https://www.google.com/maps?q=Iron+Fitness+Kanchrapara+Bagmore&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
          <div className="lg:col-span-2 reveal space-y-6">
            <InfoRow icon={MapPin} title="Address">
              Opposite Central Bank of India, Bagmore,
              <br />
              Kanchrapara, West Bengal 743145
            </InfoRow>
            <InfoRow icon={Clock} title="Hours">
              Monday – Sunday
              <br />
              6:00 AM – 10:00 PM
            </InfoRow>
            <InfoRow icon={Phone} title="Phone / WhatsApp">
              +91 {PHONE}
              <br />
              +91 {ALT_PHONE}
            </InfoRow>
            <InfoRow icon={Navigation} title="Parking">
              Free 2-wheeler & 4-wheeler parking right outside the gym.
            </InfoRow>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-background px-6 py-3.5 rounded-full font-semibold hover:bg-gold hover:text-ink transition-colors"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>
        <div className="reveal mt-12">
          <div className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-4">Proudly serving</div>
          <div className="flex flex-wrap gap-2">
            {areas.map((a) => (
              <span
                key={a}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm text-ink"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 h-11 w-11 rounded-xl bg-gold-soft flex items-center justify-center">
        <Icon className="h-5 w-5 text-gold-deep" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-ink-soft mb-1">{title}</div>
        <div className="text-ink leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-28 md:py-40 px-5 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto text-center reveal">
        <SectionLabel num="11" label="The first step" />
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mt-8 leading-[0.95]">
          Stop waiting
          <br />
          for <span className="italic text-gold-deep">Monday.</span>
        </h2>
        <p className="mt-8 max-w-xl mx-auto text-lg md:text-xl text-ink-soft">
          3 months for ₹2499. Doors open 6 AM tomorrow. Send one WhatsApp message and your seat is held.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-ink px-8 py-4 rounded-full font-semibold shadow-elegant text-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Message us now
          </a>
          <a
            href={`tel:+91${PHONE}`}
            className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-4 rounded-full font-semibold hover:bg-ink hover:text-background transition-colors text-lg"
          >
            <Phone className="h-5 w-5" />
            +91 {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-ink text-background pt-20 pb-8 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-gradient-gold flex items-center justify-center">
                <Dumbbell className="h-5 w-5 text-ink" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold">Iron Fitness</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-background/60 mt-0.5">
                  Kanchrapara · Bagmore
                </div>
              </div>
            </div>
            <p className="mt-6 text-background/70 max-w-md leading-relaxed">
              The strongest community in Kanchrapara. Train with intent. Built around real members,
              real results, and a 4.9-star promise.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={FB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`https://www.instagram.com/explore/search/keyword/?q=iron%20fitness%20kanchrapara`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-background/50 mb-5">Explore</div>
            <ul className="space-y-3 text-background/80">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Reviews", "#reviews"],
                ["Offer", "#offer"],
                ["Visit", "#location"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-gold transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-background/50 mb-5">Visit</div>
            <p className="text-background/80 leading-relaxed">
              Opposite Central Bank of India,
              <br />
              Bagmore, Kanchrapara, WB 743145
            </p>
            <p className="mt-4 text-background/80">Open daily · 6 AM – 10 PM</p>
            <p className="mt-2 text-background/80">+91 {PHONE}</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <div>© {new Date().getFullYear()} Iron Fitness Kanchrapara. All rights reserved.</div>
          <div>Website by Pixorra</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING WA ---------------- */
function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="pulse-ring fixed bottom-24 md:bottom-6 right-5 md:right-6 z-50 h-16 w-16 rounded-full flex items-center justify-center shadow-elegant transition-transform hover:scale-110"
      style={{ backgroundColor: "var(--whatsapp)", boxShadow: "0 0 0 4px oklch(0.13 0.04 320), 0 0 24px oklch(0.72 0.20 145 / 0.7), 0 0 60px oklch(0.72 0.20 145 / 0.4)" }}
    >
      <MessageCircle className="h-7 w-7 text-white" strokeWidth={2.4} />
    </a>
  );
}

/* ---------------- MOBILE STICKY BAR ---------------- */
function MobileBar() {
  const cell =
    "flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium";
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background border-t border-border shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.1)]">
      <div className="flex">
        <a href={`tel:+91${PHONE}`} className={`${cell} text-ink hover:text-gold-deep`}>
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cell} text-white`}
          style={{ backgroundColor: "var(--whatsapp)" }}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cell} text-ink hover:text-gold-deep`}
        >
          <Navigation className="h-4 w-4" />
          Directions
        </a>
      </div>
    </div>
  );
}
