import React from 'react'

const navItems = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8d9c9] bg-[#f7f1ea]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="La Chipería inicio">
          <img
            src="/logo.svg"
            alt="La Chipería"
            className="h-12 w-12 rounded-full object-cover shadow-[0_10px_20px_rgba(155,30,30,0.2)]"
          />
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#7A6C4E]">Panadería artesanal</p>
            <h1 className="text-xl font-black tracking-tight text-[#201711] sm:text-2xl">La Chipería</h1>
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
        </div>
      </div>
    </header>
  )
}

export default Navbar