import { useReveal } from '../hooks/useReveal'

const features = [
  'Online Cum Offline Classes',
  '3 Months Pre-SSB Training',
  'Mock Interviews & GTO Tasks',
  'GTO Task Available in 5000 sq. ft area',
  'Public Speaking & Group Discussion',
  'Updated SSB Trends',
  'Realistic SSB Simulation',
  'Special Batches (NCC & Tech Entry)',
  'Hostel Facility (Boys & Girls)',
  'Small Batch Size (Individual Attention)',
]

export default function Features() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="features"
      className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-military-800/30 to-military-900 py-16 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-saffron/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-india-green/10 blur-3xl"
        aria-hidden
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${visible ? 'reveal reveal-visible' : 'reveal'}`}
      >
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Salient <span className="text-gold">Features</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Everything we build into your preparation — discipline, realism, and individual focus.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((text) => {
            const isPriority = text.includes('NCC') || text.includes('GTO')

            return (
              <li
                key={text}
                className={`flex items-start gap-3 rounded-xl px-4 py-4 transition ${isPriority
                  ? 'border border-saffron/50 bg-gradient-to-r from-saffron/15 to-india-green/10 shadow-lg shadow-saffron/10 hover:border-saffron/80'
                  : 'border border-white/10 bg-military-900/70 hover:border-india-green/40 hover:bg-military-800/50'
                  }`}
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isPriority ? 'bg-saffron/20 text-saffron' : 'bg-india-green/20 text-india-green'
                    }`}
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className={`text-left font-medium ${isPriority ? 'text-white' : 'text-slate-200'}`}>
                  {text}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
