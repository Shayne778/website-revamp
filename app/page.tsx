const services = [
  ["Screen Repair & Renovation", "Rescreening and structural updates for lanais, enclosures, and entries."],
  ["Pool & Patio Enclosures", "Custom enclosure improvements designed for comfort and long-term durability."],
  ["Hurricane Shutters & Panels", "Storm-prep options for homeowners looking to protect outdoor openings."],
  ["Front Entries & Screen Doors", "Entryway screening options including sliding and custom-fit door solutions."],
  ["Florida Rooms & Lanais", "Upgrade usable outdoor living space with enclosure and screen system options."],
  ["Insulated Roof Systems", "Roof and shade additions to improve comfort in Southwest Florida conditions."],
];

const areas = ["Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "Sanibel", "Pine Island", "Lee County", "Collier County"];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-3 z-20 mb-8 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-cyan-300">Private concept mockup</p>
              <p className="font-semibold">The Screen Doctor of Lee County, Inc.</p>
            </div>
            <a href="#quote" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">Request Free Estimate</a>
          </div>
        </header>

        <section className="grid gap-8 rounded-3xl border border-cyan-300/20 bg-slate-900/60 p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-medium text-cyan-200">Serving Southwest Florida homeowners</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">Screen Repair, Pool Enclosures, and Storm Protection for Southwest Florida Homes</h1>
            <p className="mt-4 text-slate-300">The Screen Doctor of Lee County helps homeowners in Fort Myers, Cape Coral, Bonita Springs, Estero, and nearby communities repair, enclose, and protect outdoor living spaces.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#quote" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Request a Free Estimate</a>
              <a href="tel:2394827502" className="rounded-xl border border-white/20 px-5 py-3 font-semibold">Call 239-482-7502</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Pool Enclosure Photo Placeholder','Lanai Project Placeholder','Storm Shutter Placeholder','Front Entry Placeholder'].map((item)=> (
              <div key={item} className="aspect-[4/3] rounded-2xl border border-white/15 bg-slate-800 p-3 text-xs text-slate-300">{item}</div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div><p className="text-cyan-200">Serving homeowners since</p><p className="font-semibold">1995*</p></div>
          <div><p className="text-cyan-200">Licensed Contractor</p><p className="font-semibold">CBC1252537</p></div>
          <div><p className="text-cyan-200">Locally Owned</p><p className="font-semibold">Eric & Mindy Peterson</p></div>
          <div><p className="text-cyan-200">Recognition Listed</p><p className="font-semibold">Angi Super Service Awards</p></div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Core Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <h3 className="font-semibold text-cyan-100">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold">Trust & Reputation</h2>
            <p className="mt-2 text-sm text-slate-300">This concept uses publicly visible trust signals from the current website and prospect notes. Exact wording can be finalized with owner confirmation.</p>
          </div>
          <ul className="grid gap-3 text-sm text-slate-200 lg:col-span-2 sm:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-slate-800/70 p-4">Florida State Certified Building Contractor license listed on current website.</li>
            <li className="rounded-xl border border-white/10 bg-slate-800/70 p-4">General liability and workers compensation coverage references present on current website.</li>
            <li className="rounded-xl border border-white/10 bg-slate-800/70 p-4">Multiple service categories and project photos currently published.</li>
            <li className="rounded-xl border border-white/10 bg-slate-800/70 p-4">A+ BBB rating is mentioned in prospect research (non-accredited listing noted).</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Project Gallery Preview</h2>
          <p className="mt-2 text-sm text-slate-300">Placeholder blocks for existing project photos from the current website.</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl border border-white/10 bg-slate-800/70 p-2 text-xs text-slate-400">Project photo {i + 1}</div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-bold">Service Areas</h2>
          <p className="mt-2 text-sm text-slate-300">Serving Southwest Florida communities listed in current business materials.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {areas.map((a) => <span key={a} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">{a}</span>)}
          </div>
        </section>

        <section id="quote" className="mt-12 rounded-2xl border border-cyan-400/30 bg-slate-900/70 p-6">
          <h2 className="text-2xl font-bold">Request a Quote</h2>
          <p className="mt-2 text-sm text-slate-300">Form layout concept for lead capture. Submission handling would be connected during production build.</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            {['Full Name','Phone','Email','Property City','Service Needed','Preferred Contact Method'].map((label)=> (
              <label key={label} className="text-sm">{label}<input className="mt-1 w-full rounded-lg border border-white/20 bg-slate-800 px-3 py-2" /></label>
            ))}
            <label className="text-sm sm:col-span-2">Project Details<textarea className="mt-1 min-h-28 w-full rounded-lg border border-white/20 bg-slate-800 px-3 py-2" /></label>
            <button className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 sm:col-span-2">Send Quote Request</button>
          </form>
          <p className="mt-3 text-xs text-slate-400">*Concept note: timing, service availability, and final claim language should be verified with the business owner.</p>
        </section>
      </div>
    </main>
  );
}
