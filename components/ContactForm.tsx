'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('https://formspree.io/f/xzdyobwy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="bg-brand-accent/10 border border-brand-accent/30 rounded-xl p-8 text-center">
        <p className="font-semibold text-brand-accent text-lg mb-2">Mensaje enviado</p>
        <p className="text-sm text-slate-600">Gracias, te respondemos pronto.</p>
        <button
          onClick={() => setSent(false)}
          className="text-xs text-slate-500 hover:text-slate-700 mt-4 underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-light disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        <Send size={15} />
        {loading ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
