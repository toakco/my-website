'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(20, 'Tell us a bit more — at least 20 characters'),
})

type FormData = z.infer<typeof schema>

const services = [
  'Brand Identity',
  'Campaign & Drop Work',
  'Content Creation',
  'Web & UI/UX',
  'Print & Digital Assets',
  'Not sure yet',
]

const budgets = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,500',
  '$7,500 – $15,000',
  '$15,000+',
  'Prefer to discuss',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    // TODO: connect to form handler (e.g., formspree, Notion, email)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        className="border border-fog/10 p-10 text-center"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-10 h-10 border border-campfire flex items-center justify-center mx-auto mb-6">
          <span className="text-campfire text-lg">✓</span>
        </div>
        <h3 className="font-display text-3xl text-parchment mb-3">Got it — thank you.</h3>
        <p className="font-body text-fog/60 leading-relaxed">
          We&#39;ll review your project and get back to you within 24 hours. Keep an eye on{' '}
          <span className="text-fog/80">{'{your email}'}</span>.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Your name" error={errors.name?.message}>
          <input
            {...register('name')}
            placeholder="Jane Smith"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email address" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            placeholder="jane@example.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      {/* Company */}
      <Field label="Company / Brand name" optional>
        <input
          {...register('company')}
          placeholder="Optional"
          className={inputClass(false)}
        />
      </Field>

      {/* Service */}
      <Field label="What do you need?" error={errors.service?.message}>
        <select {...register('service')} className={inputClass(!!errors.service)}>
          <option value="">Select a service...</option>
          {services.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      {/* Budget */}
      <Field label="Approximate budget" optional>
        <select {...register('budget')} className={inputClass(false)}>
          <option value="">Select a range...</option>
          {budgets.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </Field>

      {/* Message */}
      <Field label="Tell us about your project" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="What are you building? What does done look like? Any references or constraints we should know about?"
          className={cn(inputClass(!!errors.message), 'resize-none leading-relaxed')}
        />
      </Field>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={loading}
        className={cn(
          'w-full py-4 font-body text-sm tracking-widest uppercase transition-all duration-300',
          loading
            ? 'bg-campfire/40 text-pure/50 cursor-not-allowed'
            : 'bg-campfire text-pure hover:bg-campfire/90'
        )}
        whileTap={loading ? {} : { scale: 0.98 }}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <motion.span
              className="w-4 h-px bg-pure/50 block"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </motion.button>

      <p className="text-center font-body text-xs text-fog/30">
        We respond within 24 hours. Your info stays private.
      </p>
    </form>
  )
}

function Field({
  label,
  error,
  optional,
  children,
}: {
  label: string
  error?: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block font-mono text-xs tracking-[0.15em] uppercase text-fog/50 mb-2">
        {label}
        {optional && <span className="ml-2 text-fog/25 normal-case tracking-normal font-body">optional</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            className="mt-1.5 font-body text-xs text-campfire"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full bg-forest/30 border px-4 py-3 font-body text-sm text-parchment placeholder:text-fog/25 focus:outline-none focus:border-campfire transition-colors duration-300',
    hasError ? 'border-campfire/60' : 'border-fog/15'
  )
}
