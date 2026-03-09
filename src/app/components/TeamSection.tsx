import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import mostfImage from '../pilden/mostf.jpg';

const team = [
  {
    name: 'ابوبكر حامد',
    position: 'المدير التنفيذي',
     image: 'https://rital-sd.com/lovable-uploads/2a50366d-fb48-4569-b182-edeae4c0c0e6.png',
    isOwner: true,
  },
  {
    name: 'مصطفي باريس',
    position: 'المستشار التعليمي',
    image: mostfImage,
  },
  {
    name: 'مريم',
    position: 'منسق قبولات',
    image: 'https://i.pinimg.com/736x/51/cb/39/51cb394deaf0b8976dcff76361ba872b.jpg',
  },
  {
    name: 'هديل عثمان ',
    position: 'مسؤولة خدمة عملاء',
    image: 'https://i.pinimg.com/736x/fb/ba/ab/fbbaab0deba2338629ec4e7db65b15bc.jpg',
  },
  {
    name: 'الاء منزر',
    position: 'مستشار منح دراسية',
    image: 'https://i.pinimg.com/736x/67/f7/a3/67f7a3df69ad06a19afcbc19716a3cf5.jpg',
  },
  {
    name: 'سماح احمد',
    position: 'تسويق ',
    image: 'https://i.pinimg.com/1200x/ae/59/0d/ae590d66406ef09ddbeb228354c8e268.jpg',
  },
];

export function TeamSection() {
  return (
    <section className="py-20 px-4 bg-white" id="team">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            فريق العمل
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            فريق من الخبراء المتخصصين المكرسين لضمان نجاح رحلتك التعليمية
          </p>
        </div>

        {/* Owner */}
       <div className="max-w-md mx-auto mb-12">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="rounded-2xl overflow-hidden shadow-2xl"
  >
    {/* الصورة مع شكل مقوس من فوق */}
    <div className="overflow-hidden">
      <ImageWithFallback
        src={team[0].image}
        alt={team[0].name}
        className="w-full h-96 object-cover rounded-t-3xl" // rounded-t-3xl يخلق تقوس من فوق
        style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}
      />
    </div>

    {/* معلومات العضو */}
    <div className="p-6 text-center bg-gradient-to-b from-blue-900 to-blue-700 text-white rounded-b-2xl">
      <h3 className="text-2xl font-bold mb-2">{team[0].name}</h3>
      <p className="text-blue-100 text-lg">{team[0].position}</p>
    </div>
  </motion.div>
</div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 gap-6 justify-items-center">
    {/* الأعضاء 2-5 */}
    {team.slice(1, 5).map((member, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow w-40"
      >
        <ImageWithFallback
          src={member.image}
          alt={member.name}
          className="w-22 h-30 mx-auto mt-4 object-cover rounded-full"
        />
        <div className="p-4 text-center">
          <h4 className="font-bold text-blue-900 mb-1">{member.name}</h4>
          <p className="text-gray-600 text-sm">{member.position}</p>
        </div>
      </motion.div>
    ))}

    {/* العضو السادس في الوسط */}
    <div className="col-span-2 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow w-40"
      >
        <ImageWithFallback
          src={team[5]?.image || ''}
          alt={team[5]?.name || 'Member 6'}
          className="w-22 h-32 mx-auto mt-4 object-cover rounded-full"
        />
        <div className="p-4 text-center">
          <h4 className="font-bold text-blue-900 mb-1">{team[5]?.name}</h4>
          <p className="text-gray-600 text-sm">{team[5]?.position}</p>
        </div>
      </motion.div>
    </div>
        </div>
      </div>
    </section>
  );
}