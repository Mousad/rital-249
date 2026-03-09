import { Mail, Phone, MapPin, ArrowLeft, Heart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const footerLinks = {
  "روابط سريعة": [
    { label: "الصفحة الرئيسية", href: "#home" },
    { label: "عن المنصة", href: "#about" },
    { label: "البرامج والتخصصات", href: "#programs" },
    { label: "شهادات الطلاب", href: "#testimonials" },
    { label: "أخبار ومقالات", href: "#blog" },
    { label: "تواصل معنا", href: "#contact" },
  ],

};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1f4e" }}>
      {/* Newsletter Banner */}
      

      {/* Main Footer */}
      <div className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-1 mb-5">
                
                              <p
                className="font-black text-xl text-white"
                
              >
                Rital
              </p>
              </div>
               <div className="flex items-center gap-4 justify-center py-6 text-2xl">

  <a href="https://www.facebook.com/Rital.office?mibextid=JRoKGi" target="_blank" className="text-[#f2f9f5]">
    <FontAwesomeIcon icon={faFacebook} />
  </a>

  <a href="https://www.instagram.com/rital_office/" target="_blank" className="text-[#f2f9f5]">
    <FontAwesomeIcon icon={faInstagram} />
  </a>

  <a href="https://youtube.com" target="_blank" className="text-[#f2f9f5]">
    <FontAwesomeIcon icon={faYoutube} />
  </a>

  <a href="https://x.com" target="_blank" className="text-[#f2f9f5]">
    <FontAwesomeIcon icon={faXTwitter} />
  </a>

</div>

              {/* <p className="text-blue-200 leading-relaxed mb-7 max-w-sm">
                منصتك الموثوقة للوصول إلى أفضل الجامعات التركية والعالمية. نساعدك في تحقيق
                حلمك التعليمي بخدمة متكاملة من الاستشارة حتى الوصول.
              </p> */}

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { icon: Phone, text: "⁦+20 10 31160279⁩" },
                  { icon: Mail, text: "Ritaloffice22@gmail.com" },
                  { icon: MapPin, text: " مصر القاهرة    الدقي " },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 text-[#f2f9f5] text-sm">
                      <Icon size={16} className="text-[#f2f9f5] flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>

              
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-black mb-5 text-lg relative">
                  {title}
                  <div className="w-8 h-0.5 rounded-full mt-2" style={{ backgroundColor: "#fff" }} />
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-blue-300 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                      >
                        <ArrowLeft
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 flex-shrink-0"
                        />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-20 px-4 text-center"
        style={{ backgroundColor: "#0a1f4e", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-sm flex items-center gap-2">
            <span>© 2025 منصة رتال التعليمية. جميع الحقوق محفوظة.</span>
          </p>
         
          <div className="flex gap-5 -text-sm text-blue-300">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-white transition-colors">devol</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
