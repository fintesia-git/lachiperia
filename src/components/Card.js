import React from 'react'
import { motion } from 'framer-motion'

const values = [
  {
    title: 'Calidad intransigente',
    text: 'Ingredientes de primera selección sin atajos. Cada producto responde a un estándar de excelencia que garantiza sabor y seguridad.',
    accent: 'Primero lo esencial',
    tone: 'from-[#f3d9a7] to-[#f9f4ee]',
  },
  {
    title: 'Recorrido y Autenticidad',
    text: 'Raíces genuinas del norte argentino y más de una década de experiencia artesanal que se siente en cada bocado.',
    accent: 'Historia viva',
    tone: 'from-[#e7d9c7] to-[#faf8f4]',
  },
  {
    title: 'Compromiso humano',
    text: 'Una cercanía honesta y cálida con cada cliente, priorizando el bienestar y la confianza por sobre la frialdad corporativa.',
    accent: 'Trato cercano',
    tone: 'from-[#d9d7b0] to-[#f7f3ed]',
  },
]

const Card = () => {
  return (
    <section id="valores" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b1e1e]">Nuestros valores</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#201711] sm:text-4xl">
            Los pilares que guían cada preparación
          </h2>
        </div>
        <p className="max-w-xl text-sm text-[#5b4b41] sm:text-base">
          En La Chipería creemos que una buena chipa puede transformar la rutina. Por eso cada preparación busca calidez, autenticidad y ese toque de nostalgia.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {values.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`rounded-[30px] border border-[#e7d6bf] bg-gradient-to-br ${item.tone} p-6 shadow-[0_18px_40px_rgba(55,38,28,0.06)]`}
          >
            <div className="mb-5 inline-flex rounded-full bg-[#fffdf8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4a22]">
              {item.accent}
            </div>
            <h3 className="text-2xl font-black tracking-tight text-[#201711]">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-[#5d4d45]">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Card
