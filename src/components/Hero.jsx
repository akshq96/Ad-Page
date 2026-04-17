import { useReveal } from '../hooks/useReveal'

const heroImage =
  'https://images.unsplash.com/photo-1595590424283-b8f1784279f8?auto=format&fit=crop&w=2000&q=80'
const whatsappHref =
  'https://wa.me/918083734704?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Veer%20SSB%20Training%20Academy.'

export default function Hero() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/10"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-military-900/90 via-military-900/85 to-military-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-saffron/20 via-transparent to-transparent" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-28 ${visible ? 'reveal reveal-visible' : 'reveal'}`}
      >
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-saffron">
            Specialized SSB coaching
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Dare to be an <span className="text-gold">Officer</span>.
            <br />
            Prepare to be the Best!
          </h1>
          <p className="mx-auto text-base font-semibold uppercase tracking-widest text-saffron/95 lg:mx-0">
            Join Early Online Orientation Session
          </p>
          <p className="mx-auto max-w-xl text-lg text-slate-300 lg:mx-0">
            Interactive guidance from mentors who understand what it takes to wear the uniform.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-saffron to-amber-600 px-8 py-4 text-base font-bold text-military-900 shadow-xl shadow-saffron/25 transition hover:scale-[1.02] hover:brightness-110 sm:w-auto"
            >
              Enquire Now
            </a>
            <a
              href="#enquiry"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Fill Enquiry Form
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-slate-400 lg:justify-start">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-india-green" />
              Muzaffarpur, Bihar
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-saffron" />
              Retired Army mentors
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md flex-1 lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-military-800/50 shadow-2xl ring-1 ring-white/10">
            <img
              src="/images/brochure-hero.png"
              alt="Veer SSB Training Academy brochure"
              className="w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-military-900 via-military-900/60 to-transparent p-6 pt-20">
              <p className="text-center font-display text-sm font-semibold uppercase tracking-wider text-white">
                Commissioned Officers — Your journey starts here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
