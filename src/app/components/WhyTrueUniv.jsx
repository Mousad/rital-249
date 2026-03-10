import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WhyTrueUniv() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 7;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === end) clearInterval(timer);
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-2 bg-[#f2f9f5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        
      
       

        {/* الصورة */}
        <div className="flex flex-col items-center  relative">
        {/* الصورة */}
         <img
           src="https://trueuniv.com/wp-content/uploads/2025/05/about-thumb-2.png"
          className="w-72 rounded-xl shadow-lg"
          />

             {/* العداد تحت الصورة */}
            <div className="-mt-8 bg-[#f2f9f5] px-6 py-4 rounded-xl text-center w-40 shadow-lg">
        <h3 className="text-4xl font-bold text-[#154734]">
          {count}+
            </h3>
           <p className="text-gray-600">
           سنوات الخبرة
           </p>
           </div>
            </div>
  <div className="flex justify-start gap-4 mt-8">

          <Link
            to="/about"
            className="bg-[#154734] text-white px-6 py-3 rounded-full"
          >
            اقرأ المزيد
          </Link>

          <a
            href="#contact"
            className="border border-[#154734] text-[#154734] px-6 py-3 rounded-full"
          >
            تواصل معنا
          </a>

        </div>
      </div>
    </section>
  );
}