import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="inicio" className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[36px] border border-[#e7d0b1] bg-[linear-gradient(120deg,#fffaf6_0%,#f8ede3_42%,#e9c176_100%)] shadow-[0_32px_100px_rgba(88,54,32,0.16)]"
      >
        <div className="pointer-events-none absolute -right-8 top-10 select-none font-serif text-[13rem] font-bold leading-none text-[#9b1e1e]/[0.05] sm:text-[18rem]">
          C
        </div>
        <div className="absolute -left-10 top-16 h-60 w-60 rounded-full bg-[#9b1e1e]/20 blur-3xl animate-float" />
        <div className="absolute right-0 top-8 h-72 w-72 rounded-full bg-[#d8a64b]/20 blur-3xl animate-float-delayed" />
        <div className="absolute -bottom-12 left-1/3 h-64 w-64 rounded-full bg-[#698667]/20 blur-3xl animate-float" />

        <div className="relative grid items-center gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-14">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center rounded-full border border-[#d9b271] bg-[#fffdfb]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#7a2f26]"
            >
              100% libre de gluten · tradición + sabor
            </motion.div>

            <div className="space-y-4">
              <h1 className="max-w-xl text-5xl font-black leading-[0.88] tracking-[-0.07em] text-[#201711] sm:text-6xl lg:text-8xl">
                Chipa, cariño y <span className="text-[#9b1e1e]">sabor</span> en cada bocado.
              </h1>
              <p className="max-w-lg text-base leading-7 text-[#5a4639] sm:text-lg">
                Buenos momentos se sienten mejor con algo recién horneado: tradición, ingredientes de calidad y ese toque casero que hace que cada detalle cuente.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#catalogo"
                className="inline-flex items-center justify-center rounded-full bg-[#9b1e1e] px-6 py-3.5 text-sm font-bold text-[#fffaf5] shadow-lg shadow-[#9b1e1e]/20 transition hover:bg-[#7f1717]"
              >
                Ver catálogo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#nosotros"
                className="inline-flex items-center justify-center rounded-full border border-[#c79d77] bg-[#fffaf5]/75 px-6 py-3.5 text-sm font-bold text-[#3a2a22] transition hover:bg-[#fffaf5]"
              >
                Conocenos
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-6 pt-2 text-sm text-[#53453d]">
              <div>
                <p className="text-2xl font-black text-[#201711]">+20.000</p>
                <span>chipas disfrutadas</span>
              </div>
              <div>
                <p className="text-2xl font-black text-[#201711]">100%</p>
                <span>artesanal</span>
              </div>
              <div>
                <p className="text-2xl font-black text-[#201711]">4.9/5</p>
                <span>de nuestros clientes</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-8 top-10 h-36 w-36 rounded-full bg-[#f6cf90]/60 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-[#8a9a62]/25 blur-3xl" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white/55 p-3 shadow-[0_32px_90px_rgba(59,38,27,0.14)] backdrop-blur-sm"
            >
              <img
                className="h-[440px] w-full rounded-[24px] bg-[#fffaf5] p-10 object-contain sm:h-[520px] sm:p-16"
                src="/logo.svg"
                alt="Logo oficial de La Chipería"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 left-4 rounded-[22px] border border-[#e7dccd] bg-[#fffaf5]/95 p-4 shadow-[0_18px_35px_rgba(41,25,15,0.12)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7b655a]">Nuestra identidad</p>
              <p className="mt-1 text-xl font-black text-[#201711]">La Chipería</p>
              <p className="text-sm text-[#594a41]">Panificados libres de gluten</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero