import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useReveal } from '../hooks/useReveal'

const initial = { name: '', email: '', phone: '', message: '' }

function validate(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const phone = values.phone.trim().replace(/\s/g, '')
  const message = values.message.trim()

  if (name.length < 2) errors.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.'
  const digits = phone.replace(/^\+91/, '').replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 12) {
    errors.phone = 'Enter a valid phone number (10 digits, optional +91).'
  }
  if (message.length < 10) errors.message = 'Please share a brief message (at least 10 characters).'

  return errors
}

export default function EnquiryForm() {
  const [ref, visible] = useReveal()
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState(null)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setFeedback(null)

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')

    const templateParams = {
      from_name: values.name.trim(),
      reply_to: values.email.trim(),
      user_email: values.email.trim(),
      user_phone: values.phone.trim(),
      message: values.message.trim(),
    }

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams,  publicKey )
      } else {
        await new Promise((r) => setTimeout(r, 600))
        console.info(
          '[Veer SSB] EmailJS env vars missing. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY for live email.',
        )
      }

      setStatus('idle')
      setFeedback({
        type: 'success',
        text:
          serviceId && templateId && publicKey
            ? 'Thank you! Your enquiry has been sent. We will contact you shortly.'
            : 'Thank you! Your details are valid. (Demo mode: configure EmailJS in Vercel env to send real emails.)',
      })
      setValues(initial)
    } catch (err) {
      console.error(err)
      setStatus('idle')
      setFeedback({
        type: 'error',
        text: 'Something went wrong sending your message. Please call us or email directly.',
      })
    }
  }

  return (
    <section id="enquiry" className="border-t border-white/10 bg-military-800/50 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${visible ? 'reveal reveal-visible' : 'reveal'}`}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              Enquire <span className="text-gold">Now</span>
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Join early online orientation (interactive) session. Share your details — our team
              will get back to you.
            </p>
            <p className="mt-3 inline-flex rounded-full border border-india-green/35 bg-india-green/10 px-4 py-1.5 text-sm font-semibold text-emerald-200">
              NCC slots available now — enquire to reserve your spot.
            </p>

            <ul className="mt-10 space-y-5 text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-saffron">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Phone
                  </p>
                  <a href="tel:+918083734704" className="block font-medium text-white hover:text-saffron">
                    +91 80837 34704
                  </a>
                  <a href="tel:+916287553813" className="block font-medium text-white hover:text-saffron">
                    +91 62875 53813
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-india-green">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:veerssbacademy@gmail.com"
                    className="font-medium text-white hover:text-saffron"
                  >
                    veerssbacademy@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Address
                  </p>
                  <p className="font-medium text-white">
                    Near Agri-Market Yard, Zeromile, NH-27, Muzaffarpur, Bihar
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-military-900/80 p-6 shadow-2xl sm:p-8">
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={onChange}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-military-800/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none ring-saffron/50 transition focus:border-saffron/50 focus:ring-2"
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={onChange}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-military-800/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none ring-saffron/50 transition focus:border-saffron/50 focus:ring-2"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={onChange}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-military-800/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none ring-saffron/50 transition focus:border-saffron/50 focus:ring-2"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={onChange}
                  className="mt-1.5 w-full resize-y rounded-xl border border-white/15 bg-military-800/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none ring-saffron/50 transition focus:border-saffron/50 focus:ring-2"
                  placeholder="Course interested in, NCC slot/spot requirement, preferred batch, etc."
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              {feedback && (
                <div
                  role="status"
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    feedback.type === 'success'
                      ? 'border border-india-green/40 bg-india-green/15 text-emerald-200'
                      : 'border border-red-500/40 bg-red-500/10 text-red-200'
                  }`}
                >
                  {feedback.text}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-full bg-gradient-to-r from-saffron to-amber-600 py-4 text-base font-bold text-military-900 shadow-lg shadow-saffron/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
