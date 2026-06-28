import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, Users, Heart, Target } from "lucide-react"

export default function HakkimizdaPage() {
  const doctors = [
    {
      name: "Dt. Enis ARDALI",
      education: "Hacettepe Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Estetik Uygulamalar", "Kanal Tedavileri", "Protez Uygulamaları", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29"
    },
    {
      name: "Dt. Hande İlgin",
      education: "İstanbul Üniversitesi Diş Hekimliği Fakültesi - Marmara Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Koruyucu Diş Hekimliği Uygulamaları", "Diş ve Destek Doku Travmaları", "Engelli Çocuklarda Diş Tedavileri", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29"
    },
    {
      name: "Dt. Hasan Tosun",
      education: "Bolu Abant İzzet Baysal Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Diastemalı dişlerde kompozit rezinlerle doğal estetik", "İmplant destekli protez vakaları", "Apikal cerrahi ve retreatment", "Estetik Uygulamalar"],
      phone: "+90 532 767 79 29"
    },
    {
      name: "Dt. Mürşide Gültekin",
      education: "Samsun 19 Mayıs Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Estetik Uygulamalar", "Kanal Tedavileri", "Protez Uygulamaları", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29"
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Hasta Odaklı Yaklaşım",
      description: "Her hastamızın bireysel ihtiyaçlarını önemsiyor, kişiselleştirilmiş tedavi planları hazırlıyoruz."
    },
    {
      icon: Award,
      title: "Kalite ve Güven",
      description: "Uluslararası standartlarda hizmet kalitesi ve şeffaf tedavi süreçleri ile güven sağlıyoruz."
    },
    {
      icon: Users,
      title: "Uzman Kadro",
      description: "Sürekli kendini geliştiren uzman kadromuzla en güncel tedavi yöntemlerini uyguluyoruz."
    },
    {
      icon: Target,
      title: "Misyonumuz",
      description: "Her hastamızın kliniğimizden mutlu ve sağlıklı bir şekilde ayrılmasını hedefliyoruz."
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
              Hakkımızda
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              1985'ten beri ağız ve diş sağlığınız için hizmet ediyoruz
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Biz Kimiz?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                1985 yılından bu yana doktorlarımız ve tüm personellerimiz hastalarımızın memnuniyetini esas alır ve en yüksek hizmet kalitesi anlayışı ile hastalarımıza yardımcı olurlar.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Bize geriye kalan, tedavi yöntemlerimizi günden güne geliştirerek alanımızda öncü bir sağlık kuruluşu olmaktır. En son teknolojiyi takip ederek hastalarımızın ağız ve diş sağlığı konusunda tüm sorunlarına çözüm bulmayı, uluslararası standartlarda sunduğumuz sağlık hizmetleri ile her hastamızın kliniğimizden mutlu ve sağlıklı bir şekilde ayrılmasını hedefliyoruz.
              </p>
              <p className="text-lg text-gray-600">
                Sürekli kendini geliştiren uzman kadromuz ile, gereken tüm uygulama ve tedavileri şeffaflık ve dürüstlük ilkemiz eşliğinde gerçekleştiriyoruz. Eğitimli ve profesyonel doktorlarımız ile huzurlu bir tedavi süreci oluşturarak hastalarımızın memnuniyetini ön planda tutuyoruz.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Değerlerimiz</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hekimlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uzman ve deneyimli kadromuzla hizmetinizdeyiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto overflow-hidden">
                  <p className="text-gray-500 text-xs text-center px-2">Doktor Fotoğrafı</p>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">{doctor.name}</h3>
                <p className="text-blue-600 text-center mb-4">{doctor.education}</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Uzmanlık Alanları:</h4>
                  <ul className="space-y-2">
                    {doctor.specialties.map((specialty, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-center">
                  <a href={`tel:${doctor.phone}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    {doctor.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
