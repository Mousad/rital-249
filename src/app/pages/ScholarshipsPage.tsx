import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Footer } from "../components/Footer";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const majors = [
    {
      title: "الطب البشري",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الطب.png.webp",
      link: "https://wa.me/+201002337674",
    },
    {
      title: "الهندسة",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الهندسة.png.webp",
    },
    {
      title: "طب الأسنان",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/طب-الاسنان.png.webp",
      link: "https://wa.me/+201002337674",
    },
    {
      title: "الأمن السيبراني",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الامن-السيبراني.png.webp",
    },
    {
      title: "الصيدلة",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الصيدلة.png.webp",
      link: "https://wa.me/+201002337674",
    },
    {
      title: "القانون",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/القانون.png.webp",
      link: "https://wa.me/+201002337674",
    },
    {
      title: "إدارة الأعمال",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/ادراة-الاعمال.png.webp",
      link: "https://wa.me/+201002337674",
    },
    {
      title: "علوم الحاسب",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/علوم-الحاسب.png.webp",
    },
    {
      title: "التمريض",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/التمريض.png.webp",
      link: "https://wa.me/+201002337674",
    },
   
    
    {
      title: "الذكاء الاصطناعي",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الذكاء-الاصطناعي.png.webp",
    },
  ];
const requirements = [
  { title: "الاسم رباعي" },
  { title: "اسم المدرسة" },
  { title: "العام الدراسي" },
  { title: "النسبة" },
  { title: "رقم الجلوس" },
  { title: "نوع الشهادة" },
  { title: "جواز السفر" },
  {
    title: "المستندات المطلوبة",
  }
];

const faqs = [
  { question: "كيف يمكنني بدء التقديم   ", answer: "يمكنك البدء بتسجيل حساب على منصة ريتال واتباع خطوات التقديم الخاصة بالمنحة التي ترغب بها." },
  { question: "كم تستغرق عملية المعادلة؟", answer: "عادة تستغرق عملية المعادلة من أسبوعين إلى أربعة أسابيع حسب نوع الشهادة والجامعة." },
  { question: "هل تقدمون مساعدة في  على منح ", answer: "نعم، نقدم استشارات كاملة ومتابعة للمنح الدراسية لتسهيل عملية التقديم على الطلاب." },
  { question: "ما هي رسوم الخدمات التي تقدمونها؟", answer: "الرسوم تختلف حسب نوع الخدمة، ويمكنك التواصل مع فريقنا لمعرفة التفاصيل الدقيقة." }
];

export function ScholarshipsPage() {
  const images = [
    "https://unitededucation.com/_next/image?url=img%2F%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D9%81%D9%8A%20%D8%AA%D8%B1%D9%83%D9%8A%D8%A7-12-12.webp&w=3840&q=20",
    "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/601442546_18073139900595483_3293298498374753313_n.webp?_nc_cat=111&ig_cache_key=Mzc4ODEyNTU2NzgxMjYzMjU4Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=r1lLiswYkpsQ7kNvwGUt1yj&_nc_oc=AdmfY-GtGJWUGy_WPdx-W7NCP8XdPsdQmK6POtuWi-9fHEGtL8cFujPgdLEEoFTWFM0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai19-7.fna&_nc_gid=EmVbRN3Zlzjr4gVcwcxeHQ&_nc_ss=8&oh=00_AfwYZAs1oaeQ6tE9fGXL7Xp74ibUKzoEHuVnYmNYWlLTxQ&oe=69AFE848"
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  return (
    <section id="ScholarshipsPage bg-[#f2f9f5">
      <div className="min-h-screen relative">

        {/* ======= سهم العودة ======= */}
        {/* <div className="sticky top-[60px] z-50 px-4 py-2">
          <Link
            to="/"
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md text-[#154734] hover:text-[#0f2d1f]"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div> */}

        {/* ======= الخلفية المتغيرة ======= */}
        <div
          className="w-full h-80 md:h-96 bg-cover bg-center relative flex items-center justify-center transition-all duration-1000"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <h1 className="relative text-white text-3xl md:text-5xl font-bold text-center z-10">
            فرصتك الذهبية مع Rital
          </h1>
        </div>

         <section className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-semibold mb-8 text-[#154734] text-center">
    لماذا تختار Rital؟
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* البطاقة 1 */}
    <div className="bg-[#f2f9f5] p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <div className="text-4xl mb-4">🎓</div>
      <h3 className="font-semibold text-[#154734] text-lg mb-2">
        منح دراسية متنوعة
      </h3>
      <p className="text-gray-600 text-sm">
        Rital توفر لك أفضل المنح لتبدأ مستقبلك الأكاديمي بثقة وراحة.
      </p>
    </div>

    {/* البطاقة 2 */}
    <div className="bg-[#f2f9f5] p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <div className="text-4xl mb-4">💼</div>
      <h3 className="font-semibold text-[#154734] text-lg mb-2">
        تخصصات شاملة
      </h3>
      <p className="text-gray-600 text-sm">
        تغطي التخصصات جميع مجالات الطب، الهندسة، الحاسبات، الفنون، والزراعة.
      </p>
    </div>

    {/* البطاقة 3 */}
    <div className="bg-[#f2f9f5] p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <div className="text-4xl mb-4">🌍</div>
      <h3 className="font-semibold text-[#154734] text-lg mb-2">
        دعم كامل
      </h3>
      <p className="text-gray-600 text-sm">
        فريقنا المتخصص سيرافقك لتضمن الحصول على أفضل الفرص التعليمية.
      </p>
    </div>
  </div>
</section>
        <section className="py-8 bg-white">

      <div className="container mx-auto px-4">

        {/* العنوان */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
           أفضل التخصصات
        </h2>

        {/* الكروت */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {majors.map((major, index) => (
            <a
              key={index}
              href={major.link || "#"}
              className="bg-white border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >

              <img
                src={major.img}
                alt={major.title}
                className="w-20 h-20 object-contain mb-4"
              />

              <h3 className="font-bold text-lg mb-1">
                {major.title}
              </h3>

              <p className="text-green-600 font-semibold">
                سجل الآن
              </p>

            </a>
          ))}

        </div>

      </div>

    </section>

       

<div className="container mx-auto px-4 py-16 space-y-16">
          <div className="layout-sec-video">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-1/2">
                <img
                  src="https://unitededucation.com/_next/image?url=_next/static/media/howToStudyVedio.8b5bec73.png&w=1920&q=75"
                  alt="video thumbnail"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              <div className="content w-full md:w-1/2 text-right">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  لماذا Rital هي خيارك الأفضل؟
                </h2>
                <p className="text-gray-700 mb-2">
                  Rital تجعل رحلتك الدراسية سهلة وممتعة من أول خطوة حتى التخرج.
                </p>
                <p className="text-gray-700">
                  فريقنا المتخصص سيرافقك لتضمن الحصول على أفضل الفرص التعليمية.
                </p>
              </div>
            </div>
          </div>
        </div>

       <section className="container mx-auto px-4 py-5">
  <h2 className="text-3xl font-semibold text-[#154734] text-center mb-12">
    خطوات التقديم السهلة مع Rital
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {requirements.map((req, idx) => (
      <div
        key={idx}
        className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition flex flex-col items-center text-center"
      >
        
        <h5 className="font-bold text-[#154734] mb-1 text-sm">{req.title}</h5>
        <p className="text-gray-600 text-xs">{req.desc}</p>
      </div>
    ))}
  </div>
</section>

       

        {/* باقي المحتوى */}
        <section className="py-12 bg-[#0e243c]">
  <div className="max-w-4xl mx-auto px-4">

    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center relative">
      {/* العلامة */}
      <span className="inline-block bg-[#0e243c] text-white text-sm md:text-base px-4 py-2 rounded-full font-semibold">
        آخر موعد للتسجيل: 2026.02.20
      </span>

      {/* النص الرئيسي */}
      <p className="mt-4 text-lg md:text-xl text-[#0e243c]">
        ابدأ بالتسجيل اليوم! عبر البوابة الرسمية للفرصة
      </p>

      {/* زر الإجراء */}
      <div className="mt-6">
        <a
          href="https://wa.me/+201002337674"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#154734] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#0e243c] transition"
        >
          تسجيل الدخول للتقديم
        </a>
      </div>
    </div>

  </div>
</section>

         {/* ======= الأسئلة الشائعة FAQ ======= */}
        <section className="py-20 relative overflow-hidden bg-[#f9f9fa]">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#154734] mb-4 tracking-tight">
                الأسئلة الشائعة
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
                إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#154734]/10 hover:border-[#154734]/20 transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left flex items-center justify-between"
                  >
                    <h3 className="text-lg font-bold text-[#154734]">{faq.question}</h3>
                    <svg
                      className={`w-5 h-5 text-[#154734] transition-transform duration-300 ${
                        openFAQ === idx ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {openFAQ === idx && (
                    <div className="mt-4 text-gray-700">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======= زر واتساب عائم ======= */}
        <a
          href="https://wa.me/+201002337674"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-4 py-5 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition text-xl"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

      </div>
            
      
    </section>
  );
}