import { useReveal } from '../hooks/useReveal'

const activities = [
  {
    title: 'Lecturate',
    desc: 'Structured short talks that build clarity, confidence, and time discipline.',
    accent: 'from-saffron/30 to-transparent',
  },
  {
    title: 'Group Discussion',
    desc: 'Balanced participation, listening, and leadership under observation.',
    accent: 'from-white/20 to-transparent',
  },
  {
    title: 'Mock Interview',
    desc: 'One-on-one sessions mirroring the personal interview environment.',
    accent: 'from-india-green/30 to-transparent',
  },
  {
    title: 'Individual Obstacles',
    desc: 'Physical tasks that test planning, courage, and determination.',
    accent: 'from-olive/40 to-transparent',
  },
  {
    title: 'Progressive Group Task',
    desc: 'Team obstacles that reveal cooperation, resource use, and initiative.',
    accent: 'from-amber-500/20 to-transparent',
  },
  {
    title: 'Group Planning Exercise',
    desc: 'Map-based problems to assess reasoning, delegation, and group synergy.',
    accent: 'from-sky-500/20 to-transparent',
  },
]

export default function TrainingGallery() {
  const [ref, visible] = useReveal()

  return (
    <section id="training" className="py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${visible ? 'reveal reveal-visible' : 'reveal'}`}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              Training <span className="text-saffron">Activities</span>
            </h2>
            <p className="mt-4 max-w-xl text-slate-400">
              Hands-on practice across the SSB landscape — so the board room feels familiar, not
              intimidating.
            </p>
          </div>
          <p className="max-w-md text-sm italic text-slate-500">
            “Prepare hard today to command tomorrow.”
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <img
            src="/images/brochure-training.png"
            alt="Illustrations of SSB training activities at Veer SSB Academy"
            className="w-full object-cover object-top"
          />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <div
              key={a.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-military-800/50 transition hover:border-white/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${a.accent} opacity-60 transition group-hover:opacity-100`}
                aria-hidden
              />
              <div className="relative p-6">
                <h3 className="font-display text-xl font-bold text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
