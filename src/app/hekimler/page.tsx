import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Users, ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function HekimlerPage() {
  const doctors = [
    {
      name: "Dt. Enis ARDALI",
      education: "Hacettepe Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Estetik Uygulamalar", "Kanal Tedavileri", "Protez Uygulamaları", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29",
      email: "info@dentaclinic.com",
      initials: "EA",
      gradient: "from-teal-500 to-teal-700"
    },
    {
      name: "Dt. Hande İlgin",
      education: "İstanbul Üniversitesi Diş Hekimliği Fakültesi - Marmara Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Koruyucu Diş Hekimliği Uygulamaları", "Diş ve Destek Doku Travmaları", "Engelli Çocuklarda Diş Tedavileri", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29",
      email: "info@dentaclinic.com",
      initials: "Hİ",
      gradient: "from-sky-500 to-sky-700"
    },
    {
      name: "Dt. Hasan Tosun",
      education: "Bolu Abant İzzet Baysal Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Diastemalı dişlerde kompozit rezinlerle doğal estetik", "İmplant destekli protez vakaları", "Apikal cerrahi ve retreatment", "Estetik Uygulamalar"],
      phone: "+90 532 767 79 29",
      email: "info@dentaclinic.com",
      initials: "HT",
      gradient: "from-indigo-500 to-indigo-700"
    },
    {
      name: "Dt. Mürşide Gültekin",
      education: "Samsun 19 Mayıs Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Estetik Uygulamalar", "Kanal Tedavileri", "Protez Uygulamaları", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29",
      email: "info@dentaclinic.com",
      initials: "MG",
      gradient: "from-emerald-500 to-emerald-700"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 text-white py-24 overflow-hidden">
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
              <Users className="w-4 h-4 mr-2" />
              Uzman Kadromuz
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-montserrat)]">
              Hekimlerimiz
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Uzman ve deneyimli kadromuzla hizmetinizdeyiz
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group border border-gray-100 hover:border-teal-100">
                {/* Image Placeholder */}
                <div className="relative h-64 bg-gray-200 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-3 bg-gray-300 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-sm font-medium">Hekim Fotoğrafı</p>
                    </div>
                  </div>
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-montserrat)]">{doctor.name}</h3>
                    <p className="text-white/90 text-sm mt-1 font-medium">Diş Hekimi</p>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="p-6 space-y-5">
                  <div className="bg-teal-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wider font-[family-name:var(--font-montserrat)]">Eğitim</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{doctor.education}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider font-[family-name:var(--font-montserrat)]">Uzmanlık Alanları</h4>
                    <ul className="space-y-2">
                      {doctor.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3 shrink-0" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a href={`tel:${doctor.phone}`} className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all font-medium text-sm shadow-lg shadow-teal-500/20">
                      <Phone className="w-4 h-4 mr-2" />
                      {doctor.phone}
                    </a>
                    <a href={`mailto:${doctor.email}`} className="flex-1 flex items-center justify-center px-4 py-3 border-2 border-teal-200 text-teal-700 rounded-xl hover:bg-teal-50 transition-colors font-medium text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      İletişim
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">
            Randevu Alın
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Uzman hekimlerimizle tanışmak ve tedavi planınızı oluşturmak için hemen randevu alın
          </p>
          <Link
            href="/iletisim"
            className="btn-glow inline-flex items-center justify-center px-10 py-4 bg-white text-teal-700 rounded-full font-bold hover:bg-teal-50 transition-all shadow-xl shadow-white/20 text-lg"
          >
            İletişime Geçin
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
