import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import servImage from "../pilden/serv.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Footer } from "../components/Footer";

const requirements = [
  { title: "اسم الطالب رباعي" },
  { title: " اسم المدرسة" },
  { title: "العام الدراسي" },
  { title: "رقم الجلوس" },
  { title: " نوع الشهادة" },
  { title: "اسم الوالدة" },
  { title: "النسبة" },
  { title: "جواز السفر", desc: "الالتزام بتقديم كافة المستندات المطلوبة (أو التي ستطلب لاحقًا) والتوقيع على إقرار التقدم من الطالب وولي الأمر." }
];

const requirement = [
  { title: " اسم الطالب رباعي " },
  { title: " اسم المدرسة" },
  { title: "اسم الوالدة" },
  { title: "الولاية" },
  { title: "المجموع" },
  { title: "  رقم الجلوس (إن وجد)" },
  { title: "  صورة شخصية" },
  { title: " الرقم الوطني", desc: "الالتزام بتقديم كافة المستندات المطلوبة (أو التي ستطلب لاحقًا) والتوقيع على إقرار التقدم من الطالب وولي الأمر." }
];

// بيانات المقالات (Post List)
const posts = [
  {
    title: "تخصصات المنحة ",
    category: "مصر",
    date: "27 فبراير، 2026",
    excerpt: "تعرف في الجدول التالي على أهم تخصصات منحة الحكومة المصرية الشاملة التي قمنا بسحبها من الموقع الرسمي للمنحة المصرية. تقدم الحكومة…",
    img: "https://studyshoot.com/wp-content/uploads/2024/01/3-6.jpg",
    link: "https://studyshoot.com/_/%d8%aa%d8%ae%d8%b5%d8%b5%d8%a7%d8%aa-%d9%85%d9%86%d8%ad%d8%a9-%d8%a7%d9%84%d8%ad%d9%83%d9%88%d9%85%d8%a9-%d8%a7%d9%84%d8%aa%d8%b1%d9%83%d9%8a%d8%a9/"
  },
  {
    title: "العطل الرسمية في تركيا",
    category: "تركيا",
    date: "27 فبراير، 2026",
    excerpt: "عدد العطل الرسمية في تركيا 12 عطلة على مدار السنة منها 6 عطل أعياد مختلفة اثنان منهن أعياد…",
    img: "https://studyshoot.com/wp-content/uploads/2024/05/2-25.jpg",
    link: "https://studyshoot.com/_/%d8%a7%d9%84%d8%b9%d8%b7%d9%84-%d8%a7%d9%84%d8%b1%d8%b3%d9%85%d9%8a%d8%a9-%d9%81%d9%8a-%d8%aa%d8%b1%d9%83%d9%8a%d8%a7/"
  },

];

export default function CertificateServices() {
  return (
    <div className="min-h-screen bg-[#f2f9f5]">
      {/* <div className="sticky top-[60px] z-50 px-4 py-2">
        <Link
          to="/"
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md text-[#154734] hover:text-[#0f2d1f]"
        >
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div> */}

      {/* ===== Hero Section الأصلي ===== */}
      <div className="relative h-80 w-full">
        <img
          src="https://egyaid.mohesr.gov.eg/assets/img/%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA.JPG"
          alt="certificate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">استخراج وتجهيز الشهادات</h1>
          <p className="text-lg text-gray-200">
            نساعدك في تجهيز جميع أوراقك الدراسية للتقديم على الجامعات
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-[#154734] mb-6 text-center">خدمات تجهيز الشهادات</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            نقدم في ريتال للخدمات التعليمية خدمة استخراج وتجهيز الشهادات
            الدراسية بشكل احترافي، حيث نقوم بمساعدتك في تجهيز جميع الأوراق
            المطلوبة للتقديم على الجامعات داخل وخارج تركيا بطريقة سهلة وسريعة.
          </p>
        </div>
      </section>

      {/* ===== استخراج شهادات ثانوي ===== */}
      <section className="container mx-auto px-4 py-1">
        <h2 className="text-2xl font-semibold text-center mb-12">استخراج شهادات</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-5/12 flex justify-center order-1 md:order-1">
            <img src={servImage} alt="شروط المنحة" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
          </div>

          <div className="md:w-7/12 order-2 md:order-2 space-y-6 pl-2">
            <h2 className="text-2xl font-semibold text-center mb-12">شروط استخراج شهادات ثانوي</h2>
            <ul className="relative border-r-2 border-gray-300 mr-4">
              {requirements.map((req, idx) => (
                <li key={idx} className="mb-8 mr-4 relative">
                  <h5 className="font-bold mb-1">{req.title}</h5>
                  <p className="text-gray-600">{req.desc}</p>
                  <span className="absolute -right-6 top-0 w-3 h-3 bg-[#154734] rounded-full"></span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
              <a
                href="https://wa.me/+201117740555"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition gap-2"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== استخراج شهادة ثامن ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-7/12 order-2 md:order-2 space-y-6 pl-2">
            <h2 className="text-2xl font-semibold text-center mb-12">متطلبات استخراج شهادة ثامن</h2>
            <ul className="relative border-r-2 border-gray-300 mr-4">
              {requirement.map((req, idx) => (
                <li key={idx} className="mb-8 mr-4 relative">
                  <h5 className="font-bold mb-1">{req.title}</h5>
                  <p className="text-gray-600">{req.desc}</p>
                  <span className="absolute -right-6 top-0 w-3 h-3 bg-[#154734] rounded-full"></span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
              <a
                href="https://wa.me/+201117740555"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition gap-2"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Hero شبيه Elementor ===== */}
      {/* <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-xl p-8">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#154734]">CERTIFICATE ATTESTATIONS SERVICES</h2>
            <p className="text-gray-700 text-justify">
              If you are planning to go abroad for higher education, employment, business or migration we can take care of your certificate attestation formalities.
            </p>
            <p className="text-gray-700 text-justify">
              We provide certificate attestation services for Bahrain, Kuwait, Oman, Qatar, and United Arab Emirates (UAE) from various departments like Notary, GAD, State Home Ministry, SDM, Human Resource Development Department (HRD), Ministry of External Affairs (MEA), Embassy and Consulate for all kinds of certificate attestation requirements like business visit visa, employment visa, family visit visa, family resident visa, Driving License, etc.
            </p>
            <p className="text-gray-700 text-justify">
              HRD, MEA, Embassy, Consulate, GAD, RAC, Notary, Home Ministry, SDM, Foreign Ministry, Secretariat, Mantralaya, External Affairs, MOFA, Indian Embassy, Education Ministry, Health Ministry, Ministry of Justice, Chamber of Commerce, University / College / School / Institute Attestation from India or Abroad.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://egyaid.mohesr.gov.eg/assets/img/%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA.JPG"
              alt="Student submitting documents for certificate attestation to travel abroad"
              className="rounded-3xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/" className="text-blue-600 hover:underline text-lg">
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </section> */}

      {/* ===== قائمة المقالات (Post Grid) ===== */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#154734] mb-8 text-center">أحدث المقالات</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Link to={post.link} className="block">
                <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  <Link to={post.link}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======= زر واتساب عائم ======= */}
      <a
        href="https://wa.me/+201117740555"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-4 py-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition text-xl"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
            

    </div>
  );
}