import React from 'react'
import Card from './components/Card'
import Category from './components/Category'
import Food from './components/Food'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,131,78,0.14),_transparent_30%),linear-gradient(180deg,#f8f1e7_0%,#f5ede5_100%)] text-stone-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Food />
        <Card />
        <Category />
      </main>
    </div>
  )
}

export default App