import Link from "next/link"
import Image from "@/components/ImageWithSkeleton"
import { ArrowRight, Shield, Award, Clock, Phone, Mail, MapPin, Star, Users, Heart, Stethoscope, Smile, Baby, Sparkles, Zap, Eye, Scissors, Pill } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  const services = [
    { slug: "implant-dis-tedavisi", name: "İmplant Tedavisi", description: "Tek, kısmi veya total diş eksikliklerinde modern çözümler", icon: Stethoscope, image: "/images/implantdistedavisi.png" },
    { slug: "zirkonyum-kaplama", name: "Zirkonyum Kaplama", description: "Yüksek estetik beklentileri için ideal çözüm", icon: Sparkles, image: "/images/zirkonyumkaplama.jpeg" },
    { slug: "dis-beyazlatma", name: "Diş Beyazlatma", description: "Estetik ve parlak gülüşler için profesyonel tedavi", icon: Zap, image: "/images/disbeyazlatma.png" },
    { slug: "ortodonti", name: "Ortodonti", description: "Diş ve çene yapısı bozukluklarının tedavisi", icon: Smile, image: "/images/ortodonti.jpg" },
    { slug: "kanal-tedavisi", name: "Kanal Tedavisi", description: "Diş sinir problemlerinin modern tedavi yöntemleri", icon: Eye, image: "/images/kanaltedavisi.webp" },
    { slug: "pedodonti", name: "Pedodonti", description: "Çocuklar için özel ağız ve diş sağlığı hizmetleri", icon: Baby, image: "/images/Pedodonti.png" },
  ]

  const features = [
    { icon: Shield, title: "Modern Teknoloji", description: "En son teknoloji ile uluslararası standartlarda hizmet" },
    { icon: Award, title: "Uzman Kadro", description: "Eğitimli ve profesyonel doktorlarımız ile kaliteli tedavi" },
    { icon: Clock, title: "Kurumsal Deneyim", description: "1985'ten beri güvenilir sağlık hizmeti" },
  ]

  const stats = [
    { number: "40+", label: "Yıllık Deneyim", suffix: "Yıl" },
    { number: "10.000+", label: "Mutlu Hasta", suffix: "" },
    { number: "4", label: "Uzman Hekim", suffix: "" },
    { number: "12+", label: "Tedavi Hizmeti", suffix: "" },
  ]

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      text: "İmplant tedavim süresince gösterdikleri özen ve profesyonellik gerçekten etkileyiciydi. Sonuçtan çok memnunum.",
      rating: 5,
      treatment: "İmplant Tedavisi"
    },
    {
      name: "Fatma Demir",
      text: "Çocuğumu çok rahat bir şekilde tedavi ettiler. Korkmadan gidiyor artık. Tüm ekibe teşekkürler!",
      rating: 5,
      treatment: "Pedodonti"
    },
    {
      name: "Mehmet Kaya",
      text: "Zirkonyum kaplamayla gülüşüm tamamen değişti. Çok doğal görünüyor, harika bir iş çıkardılar.",
      rating: 5,
      treatment: "Zirkonyum Kaplama"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* ═══════════════════════════════════════════
          Hero Section
          ═══════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circles */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Large decorative tooth icon */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-5">
            <svg width="500" height="500" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10c-12 0-20 8-22 20-1 8-3 15-8 22-3 5-5 12-4 18 2 10 8 20 16 22 4 1 8-1 10-5 2-4 4-8 8-8s6 4 8 8c2 4 6 6 10 5 8-2 14-12 16-22 1-6-1-13-4-18-5-7-7-14-8-22C70 18 62 10 50 10z"/>
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-teal-100 mb-6 border border-white/10">
                <Sparkles className="w-4 h-4 mr-2 text-amber-400" />
                1985&apos;ten Beri Güvenilir Sağlık Hizmeti
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-montserrat)] leading-tight">
                Sağlıklı Gülüşler İçin
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-amber-200 mt-2">
                  Modern Çözümler
                </span>
              </h1>
              <p className="text-xl text-teal-100/90 mb-10 max-w-xl leading-relaxed">
                Uzman hekimlerimiz ve modern teknolojimizle ağız ve diş sağlığınız için en iyi hizmeti sunuyoruz
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="btn-glow inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 rounded-full font-bold hover:bg-teal-50 transition-all shadow-xl shadow-white/20 text-lg"
                >
                  Randevu Al
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/hizmetler"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all text-lg"
                >
                  Hizmetlerimiz
                </Link>
              </div>
            </div>

            {/* Right side decorative card */}
            <div className="hidden lg:block animate-fade-in-right">
              <div className="relative">
                {/* Main glass card */}
                <div className="glass-card rounded-3xl relative z-10 overflow-hidden shadow-2xl shadow-teal-900/50">
                  <Image src="/images/dentistvemusterisimutlu.jpg" alt="Mutlu Hasta ve Diş Hekimi" fill className="object-cover opacity-30 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-teal-900/40 backdrop-blur-sm"></div>
                  
                  <div className="relative z-10 p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Stethoscope, label: "İmplant", slug: "implant-dis-tedavisi", color: "from-teal-400 to-teal-600" },
                        { icon: Sparkles, label: "Estetik", slug: "estetik-dis-hekimligi", color: "from-amber-400 to-amber-600" },
                        { icon: Smile, label: "Ortodonti", slug: "ortodonti", color: "from-teal-300 to-teal-500" },
                        { icon: Heart, label: "Bakım", slug: "genel-dis-bakimi", color: "from-rose-400 to-rose-600" },
                      ].map((item, i) => (
                        <Link href={`/hizmetler/${item.slug}`} key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center hover:bg-white/30 transition-all cursor-pointer group block shadow-lg">
                          <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                            <item.icon className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-white font-semibold text-sm drop-shadow-md">{item.label}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-white font-medium text-sm drop-shadow-md">12+ Tedavi Hizmeti</p>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-900 rounded-2xl px-4 py-2 font-bold text-sm shadow-xl animate-float z-20 flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-900" /> 4.9/5 Puan
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-teal-700 rounded-2xl px-4 py-2 font-bold text-sm shadow-xl animate-float-delayed z-20 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" /> 10.000+ Hasta
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Contact Info Bar
          ═══════════════════════════════════════════ */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Phone, label: "Telefon", value: "0262 255 57 58", href: "tel:+902622555758" },
              { icon: Mail, label: "E-posta", value: "info@dentaclinic.com", href: "mailto:info@dentaclinic.com" },
              { icon: MapPin, label: "Adres", value: "Gebze, Kocaeli", href: undefined },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-teal-50/50 transition-colors group">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center group-hover:from-teal-100 group-hover:to-teal-200 transition-all shadow-sm">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-semibold text-gray-900 hover:text-teal-600 transition-colors">{item.value}</a>
                  ) : (
                    <p className="font-semibold text-gray-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Features Section
          ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Neden Biz?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)]">
              Neden <span className="gradient-text">Bizi Seçmelisiniz?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Size en iyi hizmeti sunmak için sürekli kendimizi geliştiriyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-teal-100">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-500 shadow-sm">
                  <feature.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-montserrat)]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Services Section
          ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Hizmetlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)]">
              Kapsamlı <span className="gradient-text">Tedavi Seçenekleri</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ağız ve diş sağlığınız için en güncel tedavi yöntemlerini uyguluyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link href={`/hizmetler/${service.slug}`} key={index} className="service-card block bg-white rounded-2xl border border-gray-100 group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Service image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors font-[family-name:var(--font-montserrat)]">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{service.description}</p>
                  <span className="inline-flex items-center text-teal-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    Detaylı Bilgi <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/hizmetler"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/25 btn-glow"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Statistics Section
          ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">
              Rakamlarla DentaClinic
            </h2>
            <p className="text-teal-200 text-lg max-w-2xl mx-auto">
              Yıllardır süregelen güven ve kalite
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all border border-white/10">
                  <span className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-montserrat)]">
                    {stat.number}
                  </span>
                </div>
                <p className="text-teal-100 font-medium text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          About Preview Section
          ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Clinic image placeholder */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/10 h-[500px]">
                <Image src="/images/klinikfoto1.jpg" alt="Klinik Fotoğrafı" fill className="object-cover" />
              </div>
            </div>
            <div>
              <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Hakkımızda</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-montserrat)]">
                Güvenilir Sağlık <span className="gradient-text">Ortağınız</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                1985 yılından bu yana doktorlarımız ve tüm personellerimiz hastalarımızın memnuniyetini esas alır ve en yüksek hizmet kalitesi anlayışı ile hastalarımıza yardımcı olurlar.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                En son teknolojiyi takip ederek hastalarımızın ağız ve diş sağlığı konusunda tüm sorunlarına çözüm bulmayı, uluslararası standartlarda sunduğumuz sağlık hizmetleri ile her hastamızın kliniğimizden mutlu ve sağlıklı bir şekilde ayrılmasını hedefliyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/25 btn-glow text-sm"
                >
                  Daha Fazla Bilgi
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/hekimler"
                  className="inline-flex items-center px-6 py-3 border-2 border-teal-200 text-teal-700 rounded-full font-semibold hover:bg-teal-50 transition-all text-sm"
                >
                  Hekimlerimiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Testimonials Section
          ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Hasta Yorumları</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)]">
              Hastalarımız <span className="gradient-text">Ne Diyor?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Binlerce mutlu hastamızın deneyimlerinden bazıları
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 hover:border-teal-100 group">
                <div className="quote-mark">&ldquo;</div>
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                        <p className="text-teal-600 text-xs font-medium">{testimonial.treatment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA Section
          ═══════════════════════════════════════════ */}
      <section className="relative py-20 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-teal-100 mb-6 border border-white/10">
            <Phone className="w-4 h-4 mr-2" />
            +90 262 255 57 58
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">
            Hemen Randevu Alın
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Sağlıklı gülüşler için ilk adımı atın. Uzman kadromuz sizi bekliyor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="btn-glow inline-flex items-center justify-center px-10 py-4 bg-white text-teal-700 rounded-full font-bold hover:bg-teal-50 transition-all shadow-xl shadow-white/20 text-lg"
            >
              İletişime Geçin
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+902622555758"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
