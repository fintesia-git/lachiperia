import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b1e1e]">Nosotros</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#201711] sm:text-4xl">
            La Chipería: tradición y sabor libre de gluten
          </h2>
        </div>
        <p className="max-w-xl text-sm text-[#5b4b41] sm:text-base">
          Nacida hace más de 10 años en Tigre, Buenos Aires, La Chipería es un emprendimiento familiar que combina el auténtico sabor del norte argentino con la necesidad de opciones libres de gluten. Nuestra pasión por la panadería artesanal nos lleva a crear productos para compartir.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-black tracking-tight text-[#201711]">Nuestra historia</h3>
          <p className="text-base leading-7 text-[#5d4d45]">
            Fundada por una posadeña, La Chipería nació tras detectar la creciente necesidad de opciones para celíacos. Lo que empezó en la cocina de una casa con la tradicional chipa adaptada al mundo libre de gluten, creció hasta abrir un local comercial en 2016 y evolucionar hacia una panadería libre de gluten de catálogo extenso.
          </p>
          <h3 className="mt-6 text-2xl font-black tracking-tight text-[#201711]">Misión</h3>
          <p className="text-base leading-7 text-[#5d4d45]">
            Traer el auténtico sabor del norte argentino a las bocas de todos los consumidores del país, haciendo que la alimentación libre de gluten sea accesible y deliciosa para quienes eligen este estilo de vida.
          </p>
          <h3 className="mt-6 text-2xl font-black tracking-tight text-[#201711]">Visión</h3>
          <p className="text-base leading-7 text-[#5d4d45]">
            Consolidarse como el referente principal de panificación artesanal libre de gluten en el AMBA y expandir el alcance de la marca a nivel nacional, combinando la calidez de la receta casera con un estándar de calidad profesional.
          </p>
        </motion.div>

        {/* Location & Image */}
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
              className="h-[440px] w-full rounded-[24px] object-cover"
              src="/fotos/local_01.png"
              alt="Local de La Chipería"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-4 left-4 rounded-[22px] border border-[#e7dccd] bg-[#fffaf5]/95 p-4 shadow-[0_18px_35px_rgba(41,25,15,0.12)]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7b655a]">Nuestro local</p>
            <p className="mt-1 text-xl font-black text-[#201711]">Tigre, Buenos Aires</p>
            <p className="text-sm text-[#594a41]">Abierto de lunes a sábado</p>
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-12 grid gap-3 sm:grid-cols-3">
        {[
          ['2016', 'Abrimos nuestro local'],
          ['Sin TACC', 'Opciones libres de gluten'],
          ['Hecho', 'Con dedicación artesanal'],
        ].map(([value, label]) => (
          <div key={label} className="rounded-2xl border border-[#e7d6bf] bg-[#fffaf5]/70 p-5 text-center shadow-[0_12px_28px_rgba(55,38,28,0.04)]">
            <p className="text-3xl font-black text-[#9b1e1e]">{value}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#796457]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
