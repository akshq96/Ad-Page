import { useReveal } from '../hooks/useReveal'

const items = [
  {
    quote:
      'The mock interviews and GTO practice mirrored the real board. Mentors pushed us without breaking confidence.',
    name: 'Aspirant',
    role: 'NDA Entry',
  },
  {
    quote:
      'Small batch size meant real individual attention. The pre-SSB online phase set a strong foundation.',
    name: 'Aspirant',
    role: 'SSC Tech',
  },
  {
    quote:
      'Disciplined environment, clear feedback, and updated trends — exactly what serious defence aspirants need.',
    name: 'Parent',
    role: 'Muzaffarpur',
  },
]

export default function Testimonials() {
  const [ref, visible] = useReveal()

  return (
    <section id="testimonials" className="border-t border-white/10 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${visible ? 'reveal reveal-visible' : 'reveal'}`}
      >
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Voices from the <span className="text-india-green">Academy</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            What aspirants and families value about our preparation ecosystem.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-2xl border border-white/10 bg-military-800/40 p-6 transition hover:border-white/20"
            >
              <p className="flex-1 text-slate-300">“{t.quote}”</p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-white">{t.name}</span>
                  <span className="mt-0.5 block text-sm text-slate-500">{t.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
