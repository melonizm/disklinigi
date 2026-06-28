import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HekimlerPage() {
  const doctors = [
    {
      name: "Dt. Enis ARDALI",
      education: "Hacettepe Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Estetik Uygulamalar", "Kanal Tedavileri", "Protez Uygulamaları", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29",
      email: "info@dentaclinic.com"
    },
    {
      name: "Dt. Hande İlgin",
      education: "İstanbul Üniversitesi Diş Hekimliği Fakültesi - Marmara Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Koruyucu Diş Hekimliği Uygulamaları", "Diş ve Destek Doku Travmaları", "Engelli Çocuklarda Diş Tedavileri", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29",
      email: "info@dentaclinic.com"
    },
    {
      name: "Dt. Hasan Tosun",
      education: "Bolu Abant İzzet Baysal Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Diastemalı dişlerde kompozit rezinlerle doğal estetik", "İmplant destekli protez vakaları", "Apikal cerrahi ve retreatment", "Estetik Uygulamalar"],
      phone: "+90 532 767 79 29",
      email: "info@dentaclinic.com"
    },
    {
      name: "Dt. Mürşide Gültekin",
      education: "Samsun 19 Mayıs Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Estetik Uygulamalar", "Kanal Tedavileri", "Protez Uygulamaları", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29",
      email: "info@dentaclinic.com"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hekimlerimiz
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Uzman ve deneyimli kadromuzla hizmetinizdeyiz
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                    <p className="text-gray-500 text-sm text-center px-2">Doktor Fotoğrafı</p>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{doctor.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Eğitim</h4>
                    <p className="text-gray-600">{doctor.education}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Uzmanlık Alanları</h4>
                    <ul className="space-y-1">
                      {doctor.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                    <a href={`tel:${doctor.phone}`} className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      {doctor.phone}
                    </a>
                    <a href={`mailto:${doctor.email}`} className="flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Randevu Alın
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Uzman hekimlerimizle tanışmak ve tedavi planınızı oluşturmak için hemen randevu alın
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            İletişime Geçin
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
