import React, { useState } from 'react'
import { FiInstagram } from 'react-icons/fi'

const contactInfo = [
  {
    label: 'WhatsApp',
    value: 'Pedidos rápidos',
    text: 'Escribinos y te asesoramos en minutos.',
  },
  {
    label: 'Horario',
    value: 'Lun a Vie',
    text: 'De 10:00 a 18:00 hs. · Sábados 10:00 a 14:00 hs. · Domingos cerrados.',
  },
  {
    label: 'Retiro y entrega',
    value: 'Pick-up gratis',
    text: 'Delivery a convenir según cada pedido.',
  },
]

const Category = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const endpoint = process.env.NODE_ENV === 'development' && process.env.REACT_APP_FORM_ENDPOINT
      ? process.env.REACT_APP_FORM_ENDPOINT
      : '/api/contact'

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })

      const contentType = response.headers.get('content-type') || ''

      if (!response.ok || !contentType.includes('application/json')) {
        throw new Error('No se pudo enviar la consulta')
      }

      form.reset()
      setSubmissionStatus('Tu consulta fue enviada. Te vamos a responder pronto.')
    } catch (error) {
      setSubmissionStatus('No pudimos enviar la consulta. Probá de nuevo o escribinos por WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#7f1717_0%,#9b1e1e_32%,#1d1714_100%)] px-6 py-8 text-[#fef7f2] shadow-[0_30px_85px_rgba(39,27,23,0.22)] sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f0c072]">Contacto</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Pedinos lo que quieras para tu próxima reunión.
            </h2>
            <p className="mt-4 max-w-md text-base text-[#e8d9c9]">
              Desde una chipa para el desayuno hasta un brownie para compartir, estamos para ayudarte a hacer cada momento más rico.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5491171919908?text=Hola%2C%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#f0c072] px-5 py-3 text-sm font-bold text-[#201711] transition hover:bg-[#f7d49b]"
              >
                Pedí por WhatsApp
              </a>
              <a
                href="https://www.instagram.com/lachiperia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#7a655d] bg-transparent px-5 py-3 text-sm font-semibold text-[#fef7f2] transition hover:border-[#d7cab9]"
              >
                <FiInstagram aria-hidden="true" size={24} />
                <span className="sr-only">Abrir Instagram de La Chipería</span>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-[#f0e4d8]">
                  <span className="mb-2 block">Nombre</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="w-full rounded-2xl border border-[#7a655d] bg-[#fffaf5]/5 px-3 py-2.5 text-[#fffaf5] placeholder:text-[#d3bda8] outline-none ring-0 transition focus:border-[#f0bf7d]"
                    required
                  />
                </label>

                <label className="block text-sm text-[#f0e4d8]">
                  <span className="mb-2 block">Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="tuemail@mail.com"
                    className="w-full rounded-2xl border border-[#7a655d] bg-[#fffaf5]/5 px-3 py-2.5 text-[#fffaf5] placeholder:text-[#d3bda8] outline-none ring-0 transition focus:border-[#f0bf7d]"
                    required
                  />
                </label>
              </div>

              <label className="block text-sm text-[#f0e4d8]">
                <span className="mb-2 block">Mensaje</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Quiero hacer un pedido, consultar por una caja o conocer más productos..."
                  className="w-full rounded-2xl border border-[#7a655d] bg-[#fffaf5]/5 px-3 py-2.5 text-[#fffaf5] placeholder:text-[#d3bda8] outline-none ring-0 transition focus:border-[#f0bf7d]"
                  required
                />
              </label>

              <label className="flex items-start gap-3 text-sm text-[#f0e4d8]">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  value="accepted"
                  required
                  className="mt-1 h-4 w-4 accent-[#f0c072]"
                />
                <span>
                  Acepto que La Chipería use estos datos para responder mi consulta. Leí la{' '}
                  <a href="#privacidad" className="font-semibold underline underline-offset-2">política de privacidad</a>.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-[#f5d9ab] px-5 py-3 text-sm font-bold text-[#201711] transition hover:bg-[#f9e3bb]"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
              </button>
              {submissionStatus && (
                <p className="text-sm text-[#f5d9ab]" role="status" aria-live="polite">
                  {submissionStatus}
                </p>
              )}
            </form>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d1b89d]">{item.label}</p>
                <p className="mt-3 text-xl font-black text-[#fef7f2]">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#e9d7c9]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="pt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#8d7668]">
        +54 9 11 7191 9908 · CUIT 27203387216 · info@lachiperia.com
      </p> 
      <p className="mt-3 text-center text-sm text-[#7b655a]">
        Av. Agustin Garcia 6649, local 21
      </p>
      <nav aria-label="Información legal" className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[#7b655a]">
        <a href="#privacidad" className="underline underline-offset-2">Privacidad</a>
        <a href="#condiciones" className="underline underline-offset-2">Términos y condiciones</a>
        <a href="#cambios" className="underline underline-offset-2">Cambios y reclamos</a>
        <a href="#cookies" className="underline underline-offset-2">Cookies y terceros</a>
        <a href="#produccion" className="underline underline-offset-2">Producción</a>
        <a href="#fotografias" className="underline underline-offset-2">Fotografías</a>
        <a href="#faq" className="underline underline-offset-2">Preguntas frecuentes</a>
      </nav>
    </section>
  )
}

export default Category