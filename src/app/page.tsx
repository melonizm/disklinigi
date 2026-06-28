import Link from "next/link"
import { ArrowRight, Shield, Award, Clock, Phone, Mail, MapPin } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  const services = [
    { name: "İmplant Tedavisi", description: "Tek, kısmi veya total diş eksikliklerinde modern çözümler" },
    { name: "Zirkonyum Kaplama", description: "Yüksek estetik beklentileri için ideal çözüm" },
    { name: "Diş Beyazlatma", description: "Estetik ve parlak gülüşler için profesyonel tedavi" },
    { name: "Ortodonti", description: "Diş ve çene yapısı bozukluklarının tedavisi" },
    { name: "Kanal Tedavisi", description: "Diş sinir problemlerinin modern tedavi yöntemleri" },
    { name: "Pedodonti", description: "Çocuklar için özel ağız ve diş sağlığı hizmetleri" },
  ]

  const features = [
    { icon: Shield, title: "Modern Teknoloji", description: "En son teknoloji ile uluslararası standartlarda hizmet" },
    { icon: Award, title: "Uzman Kadro", description: "Eğitimli ve profesyonel doktorlarımız ile kaliteli tedavi" },
    { icon: Clock, title: "Kurumsal Deneyim", description: "1985'ten beri güvenilir sağlık hizmeti" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Sağlıklı Gülüşler İçin
                <span className="block text-blue-200">Modern Çözümler</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-xl">
                Uzman hekimlerimiz ve modern teknolojimizle ağız ve diş sağlığınız için en iyi hizmeti sunuyoruz
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Randevu Al
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/hizmetler"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Hizmetlerimiz
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center">
                <p className="text-white/60 text-center">Resim Alanı</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefon</p>
                <p className="font-semibold text-gray-900">0262 255 57 58</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">E-posta</p>
                <p className="font-semibold text-gray-900">info@dentaclinic.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Adres</p>
                <p className="font-semibold text-gray-900">Gebze, Kocaeli</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Size en iyi hizmeti sunmak için sürekli kendimizi geliştiriyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ağız ve diş sağlığınız için kapsamlı tedavi seçenekleri
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gray-50 p-8 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/hizmetler"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                <p className="text-gray-500">Resim Alanı</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hakkımızda
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                1985 yılından bu yana doktorlarımız ve tüm personellerimiz hastalarımızın memnuniyetini esas alır ve en yüksek hizmet kalitesi anlayışı ile hastalarımıza yardımcı olurlar.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                En son teknolojiyi takip ederek hastalarımızın ağız ve diş sağlığı konusunda tüm sorunlarına çözüm bulmayı, uluslararası standartlarda sunduğumuz sağlık hizmetleri ile her hastamızın kliniğimizden mutlu ve sağlıklı bir şekilde ayrılmasını hedefliyoruz.
              </p>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Daha Fazla Bilgi
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hemen Randevu Alın
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Sağlıklı gülüşler için ilk adımı atın
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
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
