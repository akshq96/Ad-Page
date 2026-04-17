import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const faqs = [
  {
    q: 'Do you offer online classes?',
    a: 'Yes. We run online cum offline classes, including an intensive online pre-SSB phase before you attend in person.',
  },
  {
    q: 'Who conducts the training?',
    a: 'Sessions are mentored by retired Army officers with deep experience in SSB procedures and officer-like qualities.',
  },
  {
    q: 'Is hostel accommodation available?',
    a: 'Yes. We provide hostel facility with separate arrangements for boys and girls, along with hygienic food.',
  },
  {
    q: 'How do I join the orientation?',
    a: 'Use the enquiry form or call/WhatsApp us. We will guide you to the next interactive online orientation session.',
  },
]

export default function FAQ() {
  const [ref, visible] = useReveal()
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="border-t border-white/10 bg-military-800/30 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 ${visible ? 'reveal reveal-visible' : 'reveal'}`}
      >
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Frequently Asked <span className="text-saffron">Questions</span>
          </h2>
        </div>

        <ul className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q} className="rounded-2xl border border-white/10 bg-military-900/60">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white transition hover:bg-white/5"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-saffron transition ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 px-5 py-4 text-slate-400">{item.a}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
