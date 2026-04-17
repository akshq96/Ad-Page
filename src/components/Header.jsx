import { useState } from 'react'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Features', href: '#features' },
  { label: 'Training', href: '#training' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Enquire', href: '#enquiry' },
]
const whatsappHref =
  'https://wa.me/918083734704?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Veer%20SSB%20Training%20Academy.'

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-military-900/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={close}
          className="group flex items-center gap-2 text-left"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-saffron via-white/20 to-india-green text-sm font-display font-bold text-military-900 shadow-lg ring-1 ring-white/20">
            VS
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-wide text-white sm:text-base">
            Veer SSB
            <span className="hidden font-body text-xs font-normal normal-case tracking-normal text-slate-400 sm:block">
              Training Academy
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-gradient-to-r from-saffron to-amber-600 px-5 py-2.5 text-sm font-semibold text-military-900 shadow-lg shadow-saffron/20 transition hover:brightness-110 md:inline-flex"
        >
          Enquire Now
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-military-900 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-2 rounded-full bg-gradient-to-r from-saffron to-amber-600 px-4 py-3 text-center font-semibold text-military-900"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
