import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react"
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"

export default function Footer({ dbImages }: { dbImages?: Record<string, string> }) {
  const services = [
    { name: "İmplant Tedavisi", href: "/hizmetler" },
    { name: "Zirkonyum Kaplama", href: "/hizmetler" },
    { name: "Diş Beyazlatma", href: "/hizmetler" },
    { name: "Ortodonti", href: "/hizmetler" },
    { name: "Kanal Tedavisi", href: "/hizmetler" },
    { name: "Estetik Diş Hekimliği", href: "/hizmetler" },
  ]

  return (
    <footer className="relative bg-gray-900 text-white">


      {/* Newsletter / CTA Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)]">
                Sağlıklı gülüşler için ilk adımı atın
              </h3>
              <p className="text-teal-100 text-sm mt-1">
                Uzman kadromuz sizi bekliyor. Hemen randevu alın.
              </p>
            </div>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-8 py-3 bg-white text-teal-700 rounded-full font-semibold hover:bg-teal-50 transition-colors shadow-lg group"
            >
              Randevu Al
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-[family-name:var(--font-montserrat)]">
                  {dbImages?.isletmeAdi ? (
                    <>{dbImages.isletmeAdi.substring(0, 5)}<span className="text-teal-400">{dbImages.isletmeAdi.substring(5)}</span></>
                  ) : (
                    <>Denta<span className="text-teal-400">Clinic</span></>
                  )}
                </span>
                <span className="text-[10px] text-gray-500 -mt-0.5 tracking-widest uppercase">Ağız ve Diş Sağlığı</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Modern teknoloji ve uzman kadromuzla ağız ve diş sağlığınız için en iyi hizmeti sunuyoruz. 1985'ten beri güvenilir sağlık hizmeti.
            </p>
            <div className="flex items-center space-x-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors group">
                <FaInstagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors group">
                <FaFacebookF className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors group">
                <FaYoutube className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-[family-name:var(--font-montserrat)]">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "Hizmetlerimiz", href: "/hizmetler" },
                { name: "Hekimlerimiz", href: "/hekimler" },
                { name: "İletişim", href: "/iletisim" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mr-3 group-hover:bg-teal-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-[family-name:var(--font-montserrat)]">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mr-3 group-hover:bg-teal-400 transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-[family-name:var(--font-montserrat)]">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-teal-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Telefon</p>
                  <a href={`tel:${dbImages?.telefon?.replace(/\s+/g, '') || "+902622555758"}`} className="text-gray-400 text-sm hover:text-teal-400 transition-colors">{dbImages?.telefon || "0262 255 57 58"}</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-teal-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">E-posta</p>
                  <a href={`mailto:${dbImages?.eposta || "info@dentaclinic.com"}`} className="text-gray-400 text-sm hover:text-teal-400 transition-colors">{dbImages?.eposta || "info@dentaclinic.com"}</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-teal-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Adres</p>
                  <p className="text-gray-400 text-sm">{dbImages?.adres || "Hacıhalil mah. Atatürk cd. 53/A, Gebze/Kocaeli"}</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-teal-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Çalışma Saatleri</p>
                  <p className="text-gray-400 text-sm">Pzt - Cmt: 09:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {dbImages?.isletmeAdi || "DentaClinic"}. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link href="/hakkimizda" className="hover:text-teal-400 transition-colors">Gizlilik Politikası</Link>
              <Link href="/iletisim" className="hover:text-teal-400 transition-colors">Kullanım Şartları</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
