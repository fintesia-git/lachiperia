import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8d9c9] bg-[#f7f1ea]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" onClick={() => setIsOpen(false)} className="flex items-center gap-3" aria-label="La Chipería inicio">
          <img
            src="/logo.svg"
            alt="La Chipería"
            className="h-12 w-12 rounded-full object-cover shadow-[0_10px_20px_rgba(155,30,30,0.2)]"
          />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9b1e1e]">Panadería artesanal</p>
            <p className="text-xl font-black tracking-tight text-[#201711] sm:text-2xl">La Chipería</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#58473e] md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-[#201711]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-[#9b1e1e] px-4 py-2 text-sm font-semibold text-[#fef7f2] transition hover:bg-[#7f1717]"
          >
            Pedí ahora
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dfcdbd] text-[#3a2a22] md:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-[#e8d9c9] px-4 py-3 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#58473e] hover:bg-[#fffaf5]"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  )
}

export default Navbar