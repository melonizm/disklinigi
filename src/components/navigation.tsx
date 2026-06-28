"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetlerimiz", href: "/hizmetler" },
    { name: "Hekimlerimiz", href: "/hekimler" },
    { name: "İletişim", href: "/iletisim" },
  ]

  return (
    <>
      {/* Topbar */}
      <div className="topbar-gradient text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hacıhalil mah. Atatürk cd. 53/A, 41400 Gebze/Kocaeli</span>
            </span>
            <a href="tel:+902622555758" className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              <span>+90 262 255 57 58</span>
            </a>
            <a href="mailto:info@dentaclinic.com" className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              <span>info@dentaclinic.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'navbar-glass shadow-lg shadow-teal-900/5' : 'bg-white shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-shadow">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-800 font-[family-name:var(--font-montserrat)] tracking-tight">
                  Denta<span className="text-teal-600">Clinic</span>
                </span>
                <span className="text-[10px] text-gray-400 -mt-1 tracking-widest uppercase">Ağız ve Diş Sağlığı</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium text-sm group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+902622555758" className="flex items-center text-gray-600 hover:text-teal-600 transition-colors text-sm">
                <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center mr-2 group-hover:bg-teal-100 transition-colors">
                  <Phone className="w-4 h-4 text-teal-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 leading-none">Bizi Arayın</span>
                  <span className="font-semibold text-gray-800 text-sm">0262 255 57 58</span>
                </div>
              </a>
              <Link
                href="/iletisim"
                className="btn-glow inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold text-sm hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/25"
              >
                Randevu Al
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-teal-50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-60" />

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="bg-white border-t px-4 py-4 space-y-1 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t mt-3 space-y-3">
              <a href="tel:+902622555758" className="flex items-center text-teal-600 py-2 px-4">
                <Phone className="w-4 h-4 mr-3" />
                <span className="font-medium">0262 255 57 58</span>
              </a>
              <Link
                href="/iletisim"
                className="block text-center py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Randevu Al
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
