import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { data } from '../data/data.js'

const categoryLabels = {
  all: 'Todos',
  chipa: 'Chipas',
  mbeju: 'Mbeju',
  dulces: 'Dulces',
  bebidas: 'Bebidas',
}

const Food = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredFoods = useMemo(() => {
    return data.filter((item) => {
      return selectedCategory === 'all' || item.category === selectedCategory
    })
  }, [selectedCategory])

  const filterButtons = [
    { label: 'Todos', value: 'all' },
    { label: 'Chipas', value: 'chipa' },
    { label: 'Mbeju', value: 'mbeju' },
    { label: 'Dulces', value: 'dulces' },
    { label: 'Bebidas', value: 'bebidas' },
  ]

  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7a8a5d]">Nuestro catálogo</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#201711] sm:text-4xl">
            Lo más pedido para compartir y disfrutar.
          </h2>
        </div>
        <p className="max-w-xl text-sm text-[#5b4b41] sm:text-base">
          Una selección pensada para el desayuno, la merienda y esos momentos de sabor puro con identidad argentina.
        </p>
      </div>

      <div className="mb-8 rounded-[28px] border border-[#e4d5b5] bg-[#fffaf5]/80 p-4 shadow-[0_18px_35px_rgba(74,53,32,0.05)] backdrop-blur-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-[#554239]">Filtrar por categoría</p>
            <div className="flex flex-wrap gap-2">
              {filterButtons.map((button) => (
                <button
                  key={button.value}
                  onClick={() => setSelectedCategory(button.value)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    selectedCategory === button.value
                      ? 'border-[#2b1d18] bg-[#2b1d18] text-[#fef7f2] shadow-md'
                      : 'border-[#d7cab9] bg-white text-[#58473e] hover:border-[#baa07b] hover:text-[#2b1d18]'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {filteredFoods.map((item, index) => (
            <motion.article
              layout
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group overflow-hidden rounded-[28px] border border-[#eadbc3] bg-[#fffdfb] shadow-[0_18px_40px_rgba(38,25,18,0.05)]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div className="space-y-3 p-4">
                <p className="font-bold text-[#201711]">{item.name}</p>
                <p className="text-sm text-[#6a5349]">{categoryLabels[item.category]}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Food