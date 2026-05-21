import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { AppContext } from './context/AppContext'
import { T } from './i18n/translations'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TemplatesSection } from './components/TemplatesSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

import { CartPage } from './pages/CartPage'

function HomePage() {
  return (
    <>
      <Hero />
      <TemplatesSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem('ec-lang') || 'es'
  )

  const [theme, setTheme] = useState(
    () => localStorage.getItem('ec-theme') || 'dark'
  )

  const isDark = theme === 'dark'

  useEffect(() => {
    localStorage.setItem('ec-lang', lang)
  }, [lang])

  useEffect(() => {
    localStorage.setItem('ec-theme', theme)
  }, [theme])

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        theme,
        setTheme,
        t: T[lang],
        isDark
      }}
    >
      <div
        style={{
          minHeight: '100vh',
          background: isDark ? '#070709' : '#f8f7ff',
          color: isDark ? '#f0eeff' : '#0a0814',
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

// import Hero from './components/Hero'

// export default function App() {
//   return (
//     <div>
//       <Hero />
//     </div>
//   )
// }