const servicePillars = [
  "Screen Enclosures",
  "Pool Cages",
  "Elite Rooms",
  "Pergolas",
  "Gutters",
  "Railings & Staircases",
  "Retractable Screens",
  "Repairs & Service",
];

const serviceCards = [
  {
    title: "Enclosures & Pool Cages",
    body: "Custom and upgraded aluminum enclosure systems for residential and commercial properties in Southwest Florida.",
  },
  {
    title: "Elite Rooms, Patios & Carports",
    body: "Outdoor structures that extend usable space while keeping a clean, modern exterior profile.",
  },
  {
    title: "Gutters & Water Control",
    body: "Seamless, structural, and guard options to support drainage and protect foundations and hardscapes.",
  },
  {
    title: "Railings, Screens & Safety",
    body: "Exterior rail and screen options including pool-focused safety solutions and custom configurations.",
  },
];

const serviceArea = [
  "Fort Myers",
  "Cape Coral",
  "Bonita Springs",
  "Naples",
  "Punta Gorda",
  "Port Charlotte",
  "Sarasota",
  "Venice",
  "North Port",
  "Estero",
  "Sanibel Island",
  "Lehigh Acres",
];

const reelSlides = [
  "Enclosure Build",
  "Wide-View Screen",
  "Service Crew",
  "Pergola Install",
  "Gutter Detail",
  "Railing Upgrade",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p>(239) 919-6779 • License# CBC1263175</p>
          <p>Private concept mockup inspired by acecfl.com design direction</p>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm text-cyan-300">The Screen Doctor Concept</p>
            <p className="text-lg font-semibold">Residential • Commercial • Industrial</p>
          </div>
          <a href="#quote" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">
            Contact Us
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="inline-block rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-wide text-cyan-100">
              Southwest Florida Exterior Specialists
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Modern Outdoor Structures,
              <span className="text-cyan-300"> Built for Florida Living</span>
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              Concept homepage direction based on the visual tone of Ace Screen Repair & More: bold hero messaging, high-contrast sections,
              and strong service-first layout.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#quote" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950">Request Free Inspection</a>
              <a href="tel:2394827502" className="rounded-full border border-white/25 px-6 py-3 font-semibold">Call 239-482-7502</a>
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/15 bg-slate-900/70 p-4">
            <p className="mb-3 text-xs uppercase tracking-wider text-cyan-200">Featured Project Reel</p>
            <div className="reel-mask rounded-2xl border border-white/10 bg-slate-950/80 p-3">
              <div className="reel-track">
                {[...reelSlides, ...reelSlides].map((slide, index) => (
                  <article key={`${slide}-${index}`} className="reel-card">
                    <div className="mb-3 aspect-video rounded-xl bg-gradient-to-br from-cyan-400/30 to-blue-700/30" />
                    <h3 className="text-sm font-semibold">{slide}</h3>
                    <p className="mt-1 text-xs text-slate-300">Video/photo placeholder tile</p>
                  </article>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">Rolling media strip concept to mirror the motion-heavy homepage feel you liked.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h2 className="font-semibold text-cyan-100">{card.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Trust & Credentials</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Content below reflects publicly visible trust signals from the reference site style and should be finalized with business owner verification.
          </p>
          <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-xl border border-white/10 bg-slate-950/70 p-4">Licensed & insured language prominently displayed.</li>
            <li className="rounded-xl border border-white/10 bg-slate-950/70 p-4">Free on-site estimate messaging used as key CTA.</li>
            <li className="rounded-xl border border-white/10 bg-slate-950/70 p-4">Broad service menu for enclosure-related exterior work.</li>
            <li className="rounded-xl border border-white/10 bg-slate-950/70 p-4">Residential, commercial, and industrial positioning.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Service Areas</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {serviceArea.map((city) => (
            <span key={city} className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
              {city}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-300/30 bg-slate-900 p-6 sm:p-8" id="quote">
          <h2 className="text-2xl font-bold">Request a Quote</h2>
          <p className="mt-2 text-sm text-slate-300">Concept form layout for conversion-focused homepage flow.</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            {['Full Name', 'Phone', 'Email', 'Project Location'].map((label) => (
              <label key={label} className="text-sm">
                {label}
                <input className="mt-1 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" />
              </label>
            ))}
            <label className="text-sm sm:col-span-2">
              Service Type
              <select className="mt-1 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2">
                <option>Choose a service</option>
                {servicePillars.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </label>
            <label className="text-sm sm:col-span-2">
              Project Details
              <textarea className="mt-1 min-h-28 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" />
            </label>
            <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 sm:col-span-2">Send Request</button>
          </form>
        </div>
      </section>
    </main>
  );
}
