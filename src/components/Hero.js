import React from 'react'
import { motion } from 'framer-motion'

const mapDirectUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.0077359832096!2d-58.638404230366575!3d-34.40055939831424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca7722f531ff9%3A0x5831fd582578828e!2sLa%20Chiperia!5e0!3m2!1sen!2sar!4v1788795049269!5m2!1sen!2sar";

const Hero = () => {
  return (
    <section id="inicio" className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[36px] border border-[#e7d0b1] bg-[linear-gradient(120deg,#fffaf6_0%,#f8ede3_42%,#e9c176_100%)] shadow-[0_32px_100px_rgba(88,54,32,0.16)]"
      >
        <div className="pointer-events-none absolute -right-8 top-10 select-none text-[13rem] font-black leading-none text-[#9b1e1e]/[0.05] sm:text-[18rem]">
          C
        </div>
        <div className="absolute -left-10 top-16 h-60 w-60 rounded-full bg-[#9b1e1e]/20 blur-3xl" />
        <div className="absolute right-0 top-8 h-72 w-72 rounded-full bg-[#d8a64b]/20 blur-3xl" />
        <div className="absolute -bottom-12 left-1/3 h-64 w-64 rounded-full bg-[#698667]/20 blur-3xl" />

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
              <h1
                style={{ fontFamily: '"Arial Rounded MT Bold", "Arial Rounded", system-ui, sans-serif' }}
                className="max-w-xl text-5xl font-black leading-[0.92] text-[#201711] sm:text-6xl lg:text-7xl"
              >
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
                <p className="text-2xl font-black text-[#201711]">+60.000</p>
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

            <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white/70 p-3 shadow-[0_32px_90px_rgba(59,38,27,0.18)] backdrop-blur-md">
              {/* App Bar Header */}
              <div className="mb-2 flex items-center justify-between rounded-t-[20px] bg-[#fffaf5] px-4 py-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="flex h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="flex h-3 w-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-xs font-bold uppercase tracking-wider text-[#796457]">
                    Google Maps
                  </span>
                </div>
                <span className="rounded-full bg-[#e8dacb] px-3 py-0.5 text-[10px] font-semibold text-[#5a483e]">
                  📍 Encontranos acá
                </span>
              </div>

              {/* Interactive Google Map Frame */}
              <div className="relative h-[380px] w-full overflow-hidden rounded-[22px] border border-[#e2d5c3] sm:h-[440px]">
                <iframe
                  title="Ubicación de La Chipería en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.0077359832096!2d-58.638404230366575!3d-34.40055939831424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca7722f531ff9%3A0x5831fd582578828e!2sLa%20Chiperia!5e0!3m2!1sen!2sar!4v1788795049269!5m2!1sen!2sar"
                  className="h-full w-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
            </div>

            {/* Location Info Card Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 left-4 right-4 flex items-center justify-between rounded-[22px] border border-[#e7dccd] bg-[#fffaf5]/95 p-4 shadow-[0_18px_35px_rgba(41,25,15,0.14)] backdrop-blur-sm sm:left-6 sm:right-auto sm:min-w-[280px]"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9b1e1e]">📍 Vení a visitarnos</p>
                <p className="mt-0.5 text-lg font-black text-[#201711]">La Chipería</p>
                <p className="text-xs text-[#594a41]">Tigre, Buenos Aires</p>
              </div>
              <a
                href={mapDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-3 rounded-full bg-[#9b1e1e] px-4 py-2 text-xs font-bold text-white shadow-md transition hover:bg-[#7f1717]"
              >
                Cómo llegar
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    
    </section>
  )
}

export default Hero