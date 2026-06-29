import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "@/components/ImageWithSkeleton"
import { ArrowLeft, CheckCircle2, Stethoscope, Sparkles, Zap, Scissors, Smile, Baby, Eye, Pill, Shield, Heart } from "lucide-react"

// Centralized services data for the dynamic page
const servicesData = [
  {
    slug: "implant-dis-tedavisi",
    name: "İmplant Diş Tedavisi",
    description: "İmplant tedavisi tek, kısmi veya total diş eksikliklerinde hastaya uygulanan modern bir tedavi yöntemidir. Doğal diş görünümü ve fonksiyonu sağlar.",
    details: ["Tek diş eksiklikleri", "Kısmi diş eksiklikleri", "Total diş eksiklikleri", "All-on-4 implant"],
    longDescription: "İmplant, eksik olan dişlerin fonksiyon ve estetiğini tekrar sağlamak amacıyla çene kemiğine yerleştirilen ve genellikle titanyumdan yapılan yapay diş kökleridir. Doğal dişe en yakın alternatiftir ve geleneksel köprü ve protezlere göre daha iyi konuşma ve çiğneme fonksiyonu sağlar. Kliniğimizde uygulanan implant tedavileri, yüksek kaliteli materyallerle uzman hekimlerimiz tarafından özenle gerçekleştirilmektedir.",
    icon: Stethoscope,
    color: "from-teal-500 to-teal-600",
    image: "/images/implantdistedavisi.png"
  },
  {
    slug: "zirkonyum-kaplama",
    name: "Zirkonyum Kaplama",
    description: "Zirkonyum kaplama, yüksek estetik beklentileri olan bireyler için ideal bir çözüm sunar. Doğal diş görünümü ile uzun ömürlüdür.",
    details: ["Metal içermez", "Alerjik reaksiyon yapmaz", "Yüksek dayanıklılık", "Doğal görünüm"],
    longDescription: "Zirkonyum diş kaplaması, beyaz renkli bir alaşım olan zirkonyum elementinin kullanıldığı metal desteksiz bir kaplama türüdür. Işık geçirgenliğinin yüksek olması sayesinde doğal dişlere en yakın estetik görünümü sağlar. Diş etiyle mükemmel uyum gösterir ve metal destekli porselenlerde görülen diş eti kenarındaki morarma zirkonyum kaplamalarda oluşmaz.",
    icon: Sparkles,
    color: "from-amber-500 to-amber-600",
    image: "/images/zirkonyumkaplama.jpeg"
  },
  {
    slug: "dis-beyazlatma",
    name: "Diş Beyazlatma",
    description: "Estetik bir ihtiyaç olan diş beyazlatma işleminde, renk diş yapısına ve rengine göre 4-5 ton açıklık sağlanmaktadır.",
    details: ["Ofis içi beyazlatma", "Ev tipi beyazlatma", "Kombine tedavi", "Uzun süreli etki"],
    longDescription: "Diş beyazlatma (Bleaching), dişlerin yapısında (mine ve dentin tabakasında) oluşan renklenmeleri giderme işlemidir. Kliniğimizde uygulanan profesyonel diş beyazlatma yöntemleri ile dişlerinizin rengi güvenli bir şekilde birkaç ton açılabilir. İşlem, dişin yapısına zarar vermeden tamamen güvenli materyallerle gerçekleştirilir.",
    icon: Zap,
    color: "from-sky-500 to-sky-600",
    image: "/images/disbeyazlatma.png"
  },
  {
    slug: "dis-eti-tedavisi",
    name: "Diş Eti Tedavisi",
    description: "Beslenme, vitamin eksikliği, yetersiz diş bakımı gibi sebepler ortaya çıkan diş eti hastalığının modern tedavi yöntemleri.",
    details: ["Diş taşı temizliği", "Diş eti çekilmesi", "Diş eti grafting", "Lazer tedavi"],
    longDescription: "Periodontoloji, dişleri çevreleyen dokuların ve diş etlerinin sağlığıyla ilgilenen uzmanlık dalıdır. Sağlıklı diş eti açık pembe renkli ve portakal kabuğu görünümündedir. Diş eti kanaması, ağız kokusu, dişlerde sallanma gibi belirtiler diş eti hastalığının habercisi olabilir. Erken teşhis ve düzenli diş taşı temizliği ile diş eti hastalıklarının önüne geçilebilir.",
    icon: Heart,
    color: "from-rose-500 to-rose-600",
    image: "/images/disetitedavisi.webp"
  },
  {
    slug: "estetik-dis-hekimligi",
    name: "Estetik Diş Hekimliği",
    description: "Çene, ağız ve diş yapısına göre hastalarda gülümsemelerini güzelleştirecek estetik çalışma yöntemidir.",
    details: ["Gülüş tasarımı", "Laminate veneer", "Bonding", "Diş eti estetiği"],
    longDescription: "Estetik diş hekimliği, kişinin ağız ve diş yapısını yüz hatlarıyla uyumlu hale getirerek en ideal gülüşü tasarlamayı amaçlar. Hollywood smile, laminate veneer (yaprak porselen), bonding uygulamaları ve pembe estetik (diş eti estetiği) gibi çeşitli yöntemler kullanılarak hastalarımızın hayal ettikleri sağlıklı ve güzel gülüşe kavuşmaları sağlanır.",
    icon: Smile,
    color: "from-purple-500 to-purple-600",
    image: "/images/Estetik-Dis-Hekimligi1.jpg"
  },
  {
    slug: "agiz-dis-ve-cene-cerrahisi",
    name: "Ağız, Diş ve Çene Cerrahisi",
    description: "Ağız ve çene yapısı dahilinde bulunan dişler, dil, yanak, çene kemiği gibi tüm kısımların tedavi alanıdır.",
    details: ["Gömülü diş çekimi", "Çene cerrahisi", "İmplant cerrahisi", "Kist tümör cerrahisi"],
    longDescription: "Ağız, diş ve çene cerrahisi; ağız içerisindeki tüm yumuşak dokuların (dil, yanak, dudak, tükürük bezleri vb.) ve sert dokuların (dişler, çene kemikleri) her türlü rahatsızlığının teşhis ve cerrahi tedavisi ile ilgilenen bölümdür. 20 yaş dişlerinin çekimi, kist operasyonları ve çene eklemi tedavileri uzman çene cerrahlarımız tarafından yapılmaktadır.",
    icon: Scissors,
    color: "from-teal-600 to-teal-700",
    image: "/images/agizdiscenecerrah.png"
  },
  {
    slug: "ortodonti",
    name: "Ortodonti",
    description: "Ortodontik tedaviler diş, çene ve ağız yapısına ait bozuklukların tedavi edilmesi için uygulanmaktadır.",
    details: ["Metal braket", "Şeffaf plak", "Lingual ortodonti", "Yetişkin ortodontisi"],
    longDescription: "Ortodonti, uyumsuz ve çapraşık dişlerin ve çene yüz anomalilerinin teşhis ve tedavisiyle ilgilenen uzmanlık dalıdır. Sadece estetik değil, aynı zamanda iyi bir çiğneme fonksiyonu ve ağız hijyeni için de önemlidir. Geleneksel tel tedavilerinin yanı sıra, günümüzde görünmez şeffaf plaklar (Invisalign) ile de konforlu ve estetik ortodontik tedaviler mümkündür.",
    icon: Shield,
    color: "from-indigo-500 to-indigo-600",
    image: "/images/ortodonti.jpg"
  },
  {
    slug: "protezler",
    name: "Protezler",
    description: "Diş kaybı ve ağız içi dokuların zarar görmesi gibi ağız sağlığını etkileyen durumlarda başvurulan tedavi yöntemidir.",
    details: ["Hareketli protez", "Sabit protez", "Implant destekli protez", "Tam protez"],
    longDescription: "Protetik diş tedavisi, kaybedilen dişlerin ve ağız içi çevre dokuların fonksiyon, fonasyon (konuşma) ve estetiğini hastaya yeniden kazandırmayı amaçlayan branştır. Sabit protezler (kuron-köprü), hareketli protezler (tam ve bölümlü protezler) ve implant üstü protezler kliniğimizde hastanın ihtiyacına göre kişiye özel olarak tasarlanıp uygulanmaktadır.",
    icon: Pill,
    color: "from-emerald-500 to-emerald-600",
    image: "/images/protezdis.webp"
  },
  {
    slug: "kanal-tedavisi",
    name: "Kanal Tedavisi",
    description: "Diş sinirlerinde meydana gelen problemlerin ve çevre dokulardaki hasarların düzeltilmesini kapsamaktadır.",
    details: ["Tek seansta kanal", "Mikroskop destekli", "Rotary sistem", "Re-tedavi"],
    longDescription: "Endodonti (Kanal Tedavisi), dişin merkezinde bulunan pulpa dokusunun (sinir, kan ve lenf damarlarını içeren doku) hastalıkları ve tedavisi ile ilgilenir. Dişteki enfekte veya ölü pulpa dokusu temizlenerek, kök kanalları şekillendirilir ve sızdırmaz bir şekilde doldurulur. Modern teknoloji ve anestezi yöntemleri sayesinde kanal tedavisi ağrısız ve konforlu bir işlemdir.",
    icon: Eye,
    color: "from-orange-500 to-orange-600",
    image: "/images/kanaltedavisi.webp"
  },
  {
    slug: "pedodonti",
    name: "Pedodonti",
    description: "Bebek ve çocukların ağız, diş ve çene gelişimleri en ince detaylarına kadar takip edilmektedir.",
    details: ["Flor uygulaması", "Fissür örtücü", "Erken ortodontik müdahale", "Sedasyonlu tedavi"],
    longDescription: "Pedodonti (Çocuk Diş Hekimliği), 0-14 yaş grubu çocukların süt ve daimi dişlerinin sağlıklı olarak korunmasını ve oluşan hastalıkların tedavisini üstlenen bölümdür. Çocukların diş hekimi korkusu oluşmadan, oyun ortamında ve sevgiyle tedavilerini gerçekleştirmek temel amacımızdır. Koruyucu uygulamalarla (flor ve fissür örtücü) çürük oluşumu engellenir.",
    icon: Baby,
    color: "from-pink-500 to-pink-600",
    image: "/images/Pedodonti.png"
  },
  {
    slug: "genel-dis-bakimi",
    name: "Genel Diş Bakımı",
    description: "Komple ağız ve diş bakımı, yalnızca diş taşı temizliğini değil, genel bir ağız ve diş temizliğini kapsamaktadır.",
    details: ["Diş taşı temizliği", "Polishing", "Flossing", "Ağız bakımı eğitimi"],
    longDescription: "Genel diş bakımı ve rutin kontroller, ağız sağlığını korumanın en önemli adımıdır. 6 ayda bir yapılan diş taşı temizliği (detertraj) ve cila (polishing) işlemleri ile diş yüzeyindeki lekeler ve plaklar uzaklaştırılır. Erken teşhis edilen çürükler ilerlemeden tedavi edilir ve hastaya doğru ağız bakım eğitimi verilir.",
    icon: Sparkles,
    color: "from-cyan-500 to-cyan-600",
    image: "/images/geneldisbakim.webp"
  },
  {
    slug: "agiz-kokusu",
    name: "Ağız Kokusu",
    description: "Ağız kokusu genellikle beslenme sonrasında ve sabah uyandığımızda karşılaştığımız bir durumdur.",
    details: ["Ağız kuruluğu tedavisi", "Diş eti hastalıkları", "Dil temizliği", "Beslenme düzeni"],
    longDescription: "Ağız kokusu (Halitozis), bireylerin sosyal yaşamını olumsuz etkileyen önemli bir problemdir. Çoğunlukla ağız içi kaynaklı (çürük dişler, diş eti hastalıkları, yetersiz ağız hijyeni, gömülü yirmilik yaş dişleri) olsa da bazen sistemik hastalıkların da habercisi olabilir. Kliniğimizde ağız kokusunun nedeni tespit edilerek nedene yönelik tedavi planlaması yapılır.",
    icon: Zap,
    color: "from-lime-500 to-lime-600",
    image: "/images/agizkokusugiderme.jpg"
  },
]

import { getImages } from "@/lib/getImages"

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const dbImages = await getImages()
  const keyMap: Record<string, string> = {
    "implant-dis-tedavisi": "implantdistedavi",
    "zirkonyum-kaplama": "zirkonyumkaplama",
    "dis-beyazlatma": "disbeyazlatma",
    "dis-eti-tedavisi": "disetitedavisi",
    "estetik-dis-hekimligi": "estetikdishekimligi",
    "agiz-dis-ve-cene-cerrahisi": "agizdisvecenecerrahisi",
    "ortodonti": "ortodonti",
    "protezler": "protezler",
    "kanal-tedavisi": "kanaltedavisi",
    "pedodonti": "pedodonti",
    "genel-dis-bakimi": "geneldisbakimi",
    "agiz-kokusu": "agizkokusu"
  };

  const dbKey = keyMap[slug];
  const imageSrc = (dbKey ? dbImages[dbKey] : null);

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${service.color} text-white py-24 overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/hizmetler" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Hizmetlere Dön
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shrink-0 shadow-2xl">
              <Icon className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">
                {service.name}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/10 order-2 lg:order-1 sticky top-32 h-[500px]">
              <Image 
                src={imageSrc} 
                alt={service.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Tedavi Hakkında</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-montserrat)]">
                {service.name} Nedir?
              </h2>
              <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
                <p>{service.longDescription}</p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-montserrat)]">Uygulama Aşamaları ve Kapsamı</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
                      <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-bold hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/25 btn-glow w-full sm:w-auto"
                >
                  Ücretsiz Randevu Alın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
