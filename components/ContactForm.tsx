import React, { useState } from 'react'

export default function ContactForm({ onSubmit }: { onSubmit?: () => void }) {

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setStatus('sending')
      try {
        // Airtable API integration
        const AIRTABLE_API_KEY = 'patfyM4QW6TjodkBr.30d072ab403debbe02600bae095075c45a188db9bb7c2b6c9fdbe2fba2c85d02'
        const AIRTABLE_BASE_ID = 'appsKGBVTyDkKeyG1'
        const AIRTABLE_TABLE_NAME = 'contact'

        const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fields: {
              Name: form.name,
              Email: form.email,
              Message: form.message
            }
          })
        })

        if (res.ok) {
          setStatus('sent')
          setForm({ name: '', email: '', message: '' })
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    }
  return (
    <form
          className="w-full max-w-md bg-neutral rounded-lg shadow-lg p-6 flex flex-col gap-4 border border-neutral"
          onSubmit={handleSubmit}
        >
          <label className="text-primary font-medium">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 rounded border border-neutral focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          <label className="text-primary font-medium">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 rounded border border-neutral focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          <label className="text-primary font-medium">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-1 w-full px-3 py-2 rounded border border-neutral focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          <button
            type="submit"
            className="bg-highlight text-accent2 px-6 py-2 rounded font-semibold shadow disabled:opacity-50"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && (
            <div className="text-primary font-medium mt-2">Thank you! Your message has been sent.</div>
          )}
          {status === 'error' && (
            <div className="text-red-600 font-medium mt-2">Something went wrong. Please try again.</div>
          )}
        </form>
  )
}
