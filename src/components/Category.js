import React from 'react'

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
    label: 'Instagram',
    value: '@lachiperia',
    text: 'Seguinos para ver novedades y productos.',
  },
]

const FORM_ENDPOINT = 'https://formspree.io/f/xjvnedqp'

const Category = () => {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
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
                href="https://wa.me/5491123456789?text=Hola%20La%20Chiper%C3%ADa%2C%20quiero%20hacer%20un%20pedido"
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
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram La Chipería"
                  className="h-6 w-6 object-contain"
                />
              </a>
            </div>

            <form action={FORM_ENDPOINT} method="POST" className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-[#f0e4d8]">
                  <span className="mb-2 block">Nombre</span>
                  <input
                    type="text"
                    name="name"
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

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#f5d9ab] px-5 py-3 text-sm font-bold text-[#201711] transition hover:bg-[#f9e3bb]"
              >
                Enviar consulta
              </button>
            </form>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d1b89d]">{item.label}</p>
                <p className="mt-3 text-xl font-black text-[#fef7f2]">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#e9d7c9]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category