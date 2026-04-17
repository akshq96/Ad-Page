import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="border-b border-white/10 bg-military-800/40 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${visible ? 'reveal reveal-visible' : 'reveal'}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            About <span className="text-gradient-tricolor">Veer SSB</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Veer SSB Training Academy is a defence coaching institute focused on{' '}
            <strong className="font-semibold text-white">SSB interview preparation</strong> for
            aspirants targeting commissioned officer entries across the Indian Armed Forces.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Mentorship',
              body: 'Guidance from retired Army officers who bring field-tested insight into psychology, GTO, and the officer-like qualities board expects.',
            },
            {
              title: 'Holistic prep',
              body: 'Structured online and offline training — from lecturette and group discussion to realistic simulations aligned with current SSB trends.',
            },
            {
              title: 'Location',
              body: 'Near Agri-Market Yard, Zeromile, NH-27, Muzaffarpur, Bihar — accessible for serious aspirants across the region.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-military-900/60 p-6 shadow-lg transition hover:border-saffron/40 hover:shadow-saffron/5"
            >
              <h3 className="font-display text-xl font-semibold text-gold">{card.title}</h3>
              <p className="mt-3 text-slate-400">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
