"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-teal-100 mb-6 border border-white/10">
              <MessageSquare className="w-4 h-4 mr-2" />
              Bizimle İletişime Geçin
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-montserrat)]">
              İletişim
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Bizimle iletişime geçin, size yardımcı olalım
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Bize Ulaşın</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-montserrat)]">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Telefon", lines: ["0262 255 57 58", "+90 532 767 79 29"] },
                  { icon: Mail, title: "E-posta", lines: ["info@dentaclinic.com"] },
                  { icon: MapPin, title: "Adres", lines: ["Hacıhalil mah. Atatürk cd. 53/A", "41400 Gebze/Kocaeli"] },
                  { icon: Clock, title: "Çalışma Saatleri", lines: ["Pazartesi - Cuma: 09:00 - 18:00", "Cumartesi: 09:00 - 14:00", "Pazar: Kapalı"] },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-teal-50/50 transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-teal-100 group-hover:to-teal-200 transition-all">
                      <item.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      {item.lines.map((line, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-48 lg:h-64 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Google Maps Entegrasyonu</p>
                    <p className="text-xs mt-1">Harita buraya eklenecek</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Form</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-montserrat)]">Mesaj Gönderin</h2>
              
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      placeholder="Adınızı ve soyadınızı girin"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      placeholder="Telefon numaranızı girin"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Konu seçin</option>
                      <option value="randevu">Randevu Talebi</option>
                      <option value="bilgi">Bilgi Alma</option>
                      <option value="sikayet">Şikayet / Öneri</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Mesajınızı yazın"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/25 btn-glow"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Mesaj Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
