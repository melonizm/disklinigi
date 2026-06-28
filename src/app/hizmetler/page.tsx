import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HizmetlerPage() {
  const services = [
    {
      name: "İmplant Diş Tedavisi",
      description: "İmplant tedavisi tek, kısmi veya total diş eksikliklerinde hastaya uygulanan modern bir tedavi yöntemidir. Doğal diş görünümü ve fonksiyonu sağlar.",
      details: ["Tek diş eksiklikleri", "Kısmi diş eksiklikleri", "Total diş eksiklikleri", "All-on-4 implant"]
    },
    {
      name: "Zirkonyum Kaplama",
      description: "Zirkonyum kaplama, yüksek estetik beklentileri olan bireyler için ideal bir çözüm sunar. Doğal diş görünümü ile uzun ömürlüdür.",
      details: ["Metal içermez", "Alerjik reaksiyon yapmaz", "Yüksek dayanıklılık", "Doğal görünüm"]
    },
    {
      name: "Diş Beyazlatma",
      description: "Estetik bir ihtiyaç olan diş beyazlatma işleminde, renk diş yapısına ve rengine göre 4-5 ton açıklık sağlanmaktadır.",
      details: ["Ofis içi beyazlatma", "Ev tipi beyazlatma", "Kombine tedavi", "Uzun süreli etki"]
    },
    {
      name: "Diş Eti Tedavisi",
      description: "Beslenme, vitamin eksikliği, yetersiz diş bakımı gibi sebepler ortaya çıkan diş eti hastalığının modern tedavi yöntemleri.",
      details: ["Diş taşı temizliği", "Diş eti çekilmesi", "Diş eti grafting", "Lazer tedavi"]
    },
    {
      name: "Estetik Diş Hekimliği",
      description: "Çene, ağız ve diş yapısına göre hastalarda gülümsemelerini güzelleştirecek estetik çalışma yöntemidir.",
      details: ["Gülüş tasarımı", "Laminate veneer", "Bonding", "Diş eti estetiği"]
    },
    {
      name: "Ağız, Diş ve Çene Cerrahisi",
      description: "Ağız ve çene yapısı dahilinde bulunan dişler, dil, yanak, çene kemiği gibi tüm kısımların tedavi alanıdır.",
      details: ["Gömülü diş çekimi", "Çene cerrahisi", "İmplant cerrahisi", "Kist tümör cerrahisi"]
    },
    {
      name: "Ortodonti",
      description: "Ortodontik tedaviler diş, çene ve ağız yapısına ait bozuklukların tedavi edilmesi için uygulanmaktadır.",
      details: ["Metal braket", "Şeffaf plak", "Lingual ortodonti", "Yetişkin ortodontisi"]
    },
    {
      name: "Protezler",
      description: "Diş kaybı ve ağız içi dokuların zarar görmesi gibi ağız sağlığını etkileyen durumlarda başvurulan tedavi yöntemidir.",
      details: ["Hareketli protez", "Sabit protez", "Implant destekli protez", "Tam protez"]
    },
    {
      name: "Kanal Tedavisi",
      description: "Diş sinirlerinde meydana gelen problemlerin ve çevre dokulardaki hasarların düzeltilmesini kapsamaktadır.",
      details: ["Tek seansta kanal", "Mikroskop destekli", "Rotary sistem", "Re-tedavi"]
    },
    {
      name: "Pedodonti",
      description: "Bebek ve çocukların ağız, diş ve çene gelişimleri en ince detaylarına kadar takip edilmektedir.",
      details: ["Flor uygulaması", "Fissür örtücü", "Erken ortodontik müdahale", "Sedasyonlu tedavi"]
    },
    {
      name: "Genel Diş Bakımı",
      description: "Komple ağız ve diş bakımı, yalnızca diş taşı temizliğini değil, genel bir ağız ve diş temizliğini kapsamaktadır.",
      details: ["Diş taşı temizliği", "Polishing", "Flossing", "Ağız bakımı eğitimi"]
    },
    {
      name: "Ağız Kokusu",
      description: "Ağız kokusu genellikle beslenme sonrasında ve sabah uyandığımızda karşılaştığımız bir durumdur.",
      details: ["Ağız kuruluğu tedavisi", "Diş eti hastalıkları", "Dil temizliği", "Beslenme düzeni"]
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
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ağız ve diş sağlığınız için kapsamlı tedavi seçenekleri
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Size Yardımcı Olalım
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Herhangi bir hizmetimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin
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
