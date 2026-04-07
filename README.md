

 
  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  


export default function StudyInEgypt() {
  const universities = [
    {
      city: "القاهرة",
      items: [
        "الطب: %75",
        "الصيدلة و الأسنان: %70",
        "الهندسات: %65",
        "الكليات النظرية: %55",
      ],
    },
    {
      city: "عين شمس",
      items: [
        "الطب: %75",
        "الصيدلة و الأسنان: %70",
        "الهندسات: %65",
        "الكليات النظرية: %55",
      ],
    },
    {
      city: "الإسكندرية",
      items: [
        "الطب: %75",
        "الصيدلة و الأسنان: %70",
        "الهندسات: %65",
        "الكليات النظرية: %55",
      ],
    },
    {
      city: "المنصورة",
      items: [
        "الطب: %75",
        "الصيدلة و الأسنان: %70",
        "الهندسات: %65",
        "الكليات النظرية: %55",
      ],
    },
    {
      city: "حلوان",
      items: [
        "الطب: %75",
        "الصيدلة و الأسنان: %70",
        "الهندسات: %65",
        "الكليات النظرية: %55",
      ],
    },
  ];

  return (
    <section className="bg-[#2e3f73] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* الجامعات */}
        <div className="space-y-8 w-full lg:w-1/2">
          {universities.map((uni, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold mb-2 text-[#c79a5b]">
                جامعة {uni.city}
              </h3>

              <ul className="text-sm text-gray-200 leading-7 list-disc pr-5">
                {uni.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* الدائرة */}
        <div className="relative flex items-center justify-center">

          {/* الدائرة الخارجية */}
          <div className="absolute w-[420px] h-[420px] border-2 border-[#c79a5b] rounded-full"></div>

          {/* النقاط */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#c79a5b] rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#c79a5b] rounded-full"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#c79a5b] rounded-full"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#c79a5b] rounded-full"></div>

          {/* الدائرة الداخلية */}
          <div className="w-72 h-72 bg-[#c79a5b] rounded-full flex items-center justify-center text-center z-10 shadow-xl">
            <h2 className="text-4xl font-bold leading-snug">
              الجامعات <br /> الكبرى
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
