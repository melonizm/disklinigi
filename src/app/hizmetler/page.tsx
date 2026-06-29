import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Stethoscope, Sparkles, Zap, Scissors, Smile, Baby, Eye, Pill, ArrowRight, Shield, Heart } from "lucide-react"
import Link from "next/link"
import Image from "@/components/ImageWithSkeleton"

export default function HizmetlerPage() {
  const services = [
    {
      slug: "implant-dis-tedavisi",
      name: "İmplant Diş Tedavisi",
      description: "İmplant tedavisi tek, kısmi veya total diş eksikliklerinde hastaya uygulanan modern bir tedavi yöntemidir. Doğal diş görünümü ve fonksiyonu sağlar.",
      details: ["Tek diş eksiklikleri", "Kısmi diş eksiklikleri", "Total diş eksiklikleri", "All-on-4 implant"],
      icon: Stethoscope,
      color: "from-teal-500 to-teal-600",
      image: "/images/implantdistedavisi.png"
    },
    {
      slug: "zirkonyum-kaplama",
      name: "Zirkonyum Kaplama",
      description: "Zirkonyum kaplama, yüksek estetik beklentileri olan bireyler için ideal bir çözüm sunar. Doğal diş görünümü ile uzun ömürlüdür.",
      details: ["Metal içermez", "Alerjik reaksiyon yapmaz", "Yüksek dayanıklılık", "Doğal görünüm"],
      icon: Sparkles,
      color: "from-amber-500 to-amber-600",
      image: "/images/zirkonyumkaplama.jpeg"
    },
    {
      slug: "dis-beyazlatma",
      name: "Diş Beyazlatma",
      description: "Estetik bir ihtiyaç olan diş beyazlatma işleminde, renk diş yapısına ve rengine göre 4-5 ton açıklık sağlanmaktadır.",
      details: ["Ofis içi beyazlatma", "Ev tipi beyazlatma", "Kombine tedavi", "Uzun süreli etki"],
      icon: Zap,
      color: "from-sky-500 to-sky-600",
      image: "/images/disbeyazlatma.png"
    },
    {
      slug: "dis-eti-tedavisi",
      name: "Diş Eti Tedavisi",
      description: "Beslenme, vitamin eksikliği, yetersiz diş bakımı gibi sebepler ortaya çıkan diş eti hastalığının modern tedavi yöntemleri.",
      details: ["Diş taşı temizliği", "Diş eti çekilmesi", "Diş eti grafting", "Lazer tedavi"],
      icon: Heart,
      color: "from-rose-500 to-rose-600",
      image: "/images/disetitedavisi.webp"
    },
    {
      slug: "estetik-dis-hekimligi",
      name: "Estetik Diş Hekimliği",
      description: "Çene, ağız ve diş yapısına göre hastalarda gülümsemelerini güzelleştirecek estetik çalışma yöntemidir.",
      details: ["Gülüş tasarımı", "Laminate veneer", "Bonding", "Diş eti estetiği"],
      icon: Smile,
      color: "from-purple-500 to-purple-600",
      image: "/images/Estetik-Dis-Hekimligi1.jpg"
    },
    {
      slug: "agiz-dis-ve-cene-cerrahisi",
      name: "Ağız, Diş ve Çene Cerrahisi",
      description: "Ağız ve çene yapısı dahilinde bulunan dişler, dil, yanak, çene kemiği gibi tüm kısımların tedavi alanıdır.",
      details: ["Gömülü diş çekimi", "Çene cerrahisi", "İmplant cerrahisi", "Kist tümör cerrahisi"],
      icon: Scissors,
      color: "from-teal-600 to-teal-700",
      image: "/images/agizdiscenecerrah.png"
    },
    {
      slug: "ortodonti",
      name: "Ortodonti",
      description: "Ortodontik tedaviler diş, çene ve ağız yapısına ait bozuklukların tedavi edilmesi için uygulanmaktadır.",
      details: ["Metal braket", "Şeffaf plak", "Lingual ortodonti", "Yetişkin ortodontisi"],
      icon: Shield,
      color: "from-indigo-500 to-indigo-600",
      image: "/images/ortodonti.jpg"
    },
    {
      slug: "protezler",
      name: "Protezler",
      description: "Diş kaybı ve ağız içi dokuların zarar görmesi gibi ağız sağlığını etkileyen durumlarda başvurulan tedavi yöntemidir.",
      details: ["Hareketli protez", "Sabit protez", "Implant destekli protez", "Tam protez"],
      icon: Pill,
      color: "from-emerald-500 to-emerald-600",
      image: "/images/protezdis.webp"
    },
    {
      slug: "kanal-tedavisi",
      name: "Kanal Tedavisi",
      description: "Diş sinirlerinde meydana gelen problemlerin ve çevre dokulardaki hasarların düzeltilmesini kapsamaktadır.",
      details: ["Tek seansta kanal", "Mikroskop destekli", "Rotary sistem", "Re-tedavi"],
      icon: Eye,
      color: "from-orange-500 to-orange-600",
      image: "/images/kanaltedavisi.webp"
    },
    {
      slug: "pedodonti",
      name: "Pedodonti",
      description: "Bebek ve çocukların ağız, diş ve çene gelişimleri en ince detaylarına kadar takip edilmektedir.",
      details: ["Flor uygulaması", "Fissür örtücü", "Erken ortodontik müdahale", "Sedasyonlu tedavi"],
      icon: Baby,
      color: "from-pink-500 to-pink-600",
      image: "/images/Pedodonti.png"
    },
    {
      slug: "genel-dis-bakimi",
      name: "Genel Diş Bakımı",
      description: "Komple ağız ve diş bakımı, yalnızca diş taşı temizliğini değil, genel bir ağız ve diş temizliğini kapsamaktadır.",
      details: ["Diş taşı temizliği", "Polishing", "Flossing", "Ağız bakımı eğitimi"],
      icon: Sparkles,
      color: "from-cyan-500 to-cyan-600",
      image: "/images/geneldisbakim.webp"
    },
    {
      slug: "agiz-kokusu",
      name: "Ağız Kokusu",
      description: "Ağız kokusu genellikle beslenme sonrasında ve sabah uyandığımızda karşılaştığımız bir durumdur.",
      details: ["Ağız kuruluğu tedavisi", "Diş eti hastalıkları", "Dil temizliği", "Beslenme düzeni"],
      icon: Zap,
      color: "from-lime-500 to-lime-600",
      image: "/images/agizkokusugiderme.jpg"
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
              <Stethoscope className="w-4 h-4 mr-2" />
              12+ Tedavi Hizmeti
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-montserrat)]">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Ağız ve diş sağlığınız için kapsamlı tedavi seçenekleri
            </p>
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}>
                    <service.icon className="w-12 h-12 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-montserrat)] group-hover:text-teal-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center text-teal-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    Detaylı Bilgi <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </Link>
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
            Size Yardımcı Olalım
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Herhangi bir hizmetimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin
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
