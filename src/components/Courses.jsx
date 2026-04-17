import { useReveal } from '../hooks/useReveal'

const courses = [
  {
    name: 'NDA',
    tag: 'Men & Women',
    eligibility: 'Age 16½–19½ yrs · 12th (Army) / PCM (Air Force)',
    duration: 'Jan & Jul entries · 3 yrs at NDA + 1 yr at training academies',
  },
  {
    name: '10+2 TES Entry',
    tag: 'Technical',
    eligibility: 'Age 16½–19½ yrs · 10+2 PCM (60%+) & JEE Mains appeared',
    duration: 'Jan & Jul · Phase I: 3 yrs · Phase II: 1 yr',
  },
  {
    name: 'CDS / OTA Entry',
    tag: 'IMA & SSC (NT)',
    eligibility: 'Graduate · IMA (DE) 19–24 yrs · SSC(NT) OTA 19–25 yrs',
    duration: 'IMA: Jan & Jul, 1½ yr · SSC(NT): Apr & Oct, 49 weeks',
  },
  {
    name: 'NCC Special Entry',
    tag: 'OTA Chennai',
    eligibility: 'Age 19–25 yrs · Graduate with 50% & min NCC “B” grade',
    duration: 'Apr & Oct · 49 weeks at OTA',
  },
  {
    name: 'SSC Tech / JAG Entry',
    tag: 'Men & Women · OTA',
    eligibility:
      'Tech: BE/B.Tech (notified streams), 20–27 yrs · JAG: LLB 55%, 21–27 yrs',
    duration: 'Tech: Jan & Jul, 1 year · JAG: Apr & Oct, 49 weeks',
  },
]

export default function Courses() {
  const [ref, visible] = useReveal()

  return (
    <section id="courses" className="py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${visible ? 'reveal reveal-visible' : 'reveal'}`}
      >
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Courses & <span className="text-india-green">Entries</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Commissioned officer pathways we prepare you for. Details may vary; always refer to{' '}
            <a
              href="https://www.joinindianarmy.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-saffron underline-offset-2 hover:underline"
            >
              joinindianarmy.nic.in
            </a>{' '}
            for official notifications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <article
              key={c.name}
              className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-military-800/80 to-military-900/90 p-6 shadow-xl transition hover:-translate-y-1 hover:border-saffron/30 hover:shadow-2xl"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-2xl font-bold text-white">{c.name}</h3>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-saffron">
                  {c.tag}
                </span>
              </div>
              <dl className="mt-4 flex flex-1 flex-col gap-3 text-sm">
                <div>
                  <dt className="font-semibold text-slate-500">Eligibility</dt>
                  <dd className="mt-1 text-slate-300">{c.eligibility}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">Commencement / Duration</dt>
                  <dd className="mt-1 text-slate-300">{c.duration}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
