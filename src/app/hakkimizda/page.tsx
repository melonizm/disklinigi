import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, Users, Heart, Target } from "lucide-react"
import Link from "next/link"
import Image from "@/components/ImageWithSkeleton"

import { getImages } from "@/lib/getImages"

export default async function HakkimizdaPage() {
  const dbImages = await getImages();
  const doctors = [
    {
      name: "Dt. Enis ARDALI",
      education: "Hacettepe Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Estetik Uygulamalar", "Kanal Tedavileri", "Protez Uygulamaları", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29",
      initials: "EA",
      gradient: "from-teal-500 to-teal-700"
    },
    {
      name: "Dt. Hande İlgin",
      education: "İstanbul Üniversitesi Diş Hekimliği Fakültesi - Marmara Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Koruyucu Diş Hekimliği Uygulamaları", "Diş ve Destek Doku Travmaları", "Engelli Çocuklarda Diş Tedavileri", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29",
      initials: "Hİ",
      gradient: "from-sky-500 to-sky-700"
    },
    {
      name: "Dt. Hasan Tosun",
      education: "Bolu Abant İzzet Baysal Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Diastemalı dişlerde kompozit rezinlerle doğal estetik", "İmplant destekli protez vakaları", "Apikal cerrahi ve retreatment", "Estetik Uygulamalar"],
      phone: "+90 532 767 79 29",
      initials: "HT",
      gradient: "from-indigo-500 to-indigo-700"
    },
    {
      name: "Dt. Mürşide Gültekin",
      education: "Samsun 19 Mayıs Üniversitesi Diş Hekimliği Fakültesi",
      specialties: ["Estetik Uygulamalar", "Kanal Tedavileri", "Protez Uygulamaları", "Restoratif Kompozit"],
      phone: "+90 532 767 79 29",
      initials: "MG",
      gradient: "from-emerald-500 to-emerald-700"
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
              <Heart className="w-4 h-4 mr-2" />
              1985&apos;ten Beri Hizmetinizdeyiz
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-montserrat)]">
              Hakkımızda
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              1985&apos;ten beri ağız ve diş sağlığınız için hizmet ediyoruz
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              {/* Clinic image placeholder */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/10 h-64 lg:h-96">
                <Image src={dbImages.klinikbeklemeodasi} alt="Klinik Bekleme Odası" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className="object-cover" />
              </div>
            </div>
            <div>
              <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Biz Kimiz?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-montserrat)]">
                Güvenilir Sağlık <span className="gradient-text">Ortağınız</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                1985 yılından bu yana doktorlarımız ve tüm personellerimiz hastalarımızın memnuniyetini esas alır ve en yüksek hizmet kalitesi anlayışı ile hastalarımıza yardımcı olurlar.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bize geriye kalan, tedavi yöntemlerimizi günden güne geliştirerek alanımızda öncü bir sağlık kuruluşu olmaktır. En son teknolojiyi takip ederek hastalarımızın ağız ve diş sağlığı konusunda tüm sorunlarına çözüm bulmayı, uluslararası standartlarda sunduğumuz sağlık hizmetleri ile her hastamızın kliniğimizden mutlu ve sağlıklı bir şekilde ayrılmasını hedefliyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sürekli kendini geliştiren uzman kadromuz ile, gereken tüm uygulama ve tedavileri şeffaflık ve dürüstlük ilkemiz eşliğinde gerçekleştiriyoruz. Eğitimli ve profesyonel doktorlarımız ile huzurlu bir tedavi süreci oluşturarak hastalarımızın memnuniyetini ön planda tutuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Değerlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)]">
              Temel <span className="gradient-text">İlkelerimiz</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-teal-100 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-500 shadow-sm">
                  <value.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-montserrat)]">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Ekibimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)]">
              <span className="gradient-text">Hekimlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uzman ve deneyimli kadromuzla hizmetinizdeyiz
            </p>
          </div>
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
                <div className="p-6">
                  <p className="text-teal-600 text-sm mb-4">{doctor.education}</p>
                  <div className="border-t pt-4">
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
                  <div className="mt-6 text-center">
                    <a href={`tel:${doctor.phone}`} className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/20">
                      {doctor.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/hekimler"
              className="inline-flex items-center px-8 py-3 border-2 border-teal-200 text-teal-700 rounded-full font-semibold hover:bg-teal-50 transition-all text-sm"
            >
              Tüm Hekimlerimizi Görün
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
