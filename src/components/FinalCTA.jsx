import { useReveal } from '../hooks/useReveal'
const whatsappHref =
  'https://wa.me/918083734704?text=Hi%2C%20I%20would%20like%20to%20reserve%20a%20seat%20at%20Veer%20SSB%20Training%20Academy.'

export default function FinalCTA() {
  const [ref, visible] = useReveal()

  return (
    <section className="py-12 sm:py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${visible ? 'reveal reveal-visible' : 'reveal'}`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-military-800 via-military-700 to-military-800 px-6 py-12 text-center shadow-2xl sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
            }}
            aria-hidden
          />
          <div className="relative">
            <p className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
              Join Early — <span className="text-saffron">Limited Seats</span> in Each Batch
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Mentorship by retired Army officers · Realistic simulation · Small batches for
              individual attention.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Reserve on WhatsApp
              </a>
              <a
                href="#enquiry"
                className="inline-flex rounded-full border border-saffron/50 bg-saffron/15 px-8 py-3.5 text-base font-semibold text-saffron transition hover:bg-saffron/25"
              >
                Fill Enquiry Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
