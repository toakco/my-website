'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const schema = z.object({
  email: z.string().email('Valid email required'),
  firstName: z.string().min(1, 'First name required'),
})

type FormData = z.infer<typeof schema>

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    // TODO: connect to email provider (Mailchimp, ConvertKit, etc.)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        className="text-center py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-8 h-8 border border-campfire flex items-center justify-center mx-auto mb-4">
          <span className="text-campfire text-sm">✓</span>
        </div>
        <p className="font-display text-2xl text-parchment mb-2">You&#39;re in.</p>
        <p className="font-body text-sm text-fog/50">First issue comes when there&#39;s something worth saying.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-mono text-xs tracking-[0.15em] uppercase text-fog/40 mb-1.5">
          First name
        </label>
        <input
          {...register('firstName')}
          placeholder="Jane"
          className={cn(
            'w-full bg-forest/40 border px-4 py-3 font-body text-sm text-parchment placeholder:text-fog/20 focus:outline-none focus:border-campfire transition-colors duration-300',
            errors.firstName ? 'border-campfire/60' : 'border-fog/15'
          )}
        />
        {errors.firstName && (
          <p className="mt-1 font-body text-xs text-campfire">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label className="block font-mono text-xs tracking-[0.15em] uppercase text-fog/40 mb-1.5">
          Email address
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="jane@example.com"
          className={cn(
            'w-full bg-forest/40 border px-4 py-3 font-body text-sm text-parchment placeholder:text-fog/20 focus:outline-none focus:border-campfire transition-colors duration-300',
            errors.email ? 'border-campfire/60' : 'border-fog/15'
          )}
        />
        {errors.email && (
          <p className="mt-1 font-body text-xs text-campfire">{errors.email.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        className={cn(
          'w-full py-3.5 font-body text-sm tracking-widest uppercase transition-all duration-300 mt-2',
          loading
            ? 'bg-campfire/40 text-pure/50 cursor-not-allowed'
            : 'bg-campfire text-pure hover:bg-campfire/90'
        )}
        whileTap={loading ? {} : { scale: 0.98 }}
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </motion.button>
    </form>
  )
}
