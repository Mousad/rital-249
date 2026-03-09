// src/data/universities.ts
export interface University {
  id: string;
  name: string;
  city: string;
  image: string;
  logo: string;
  views: number;
  description?: string;
}

export const universities: University[] = [
  {
    id: "1",
    name: "جامعة إسطنبول",
    city: "تركيا - إسطنبول",
    image:
      "https://images.unsplash.com/photo-1622016579436-14c1844c99ec?auto=format&fit=crop&w=400&q=80",
    logo:
      "https://upload.wikimedia.org/wikipedia/tr/thumb/f/f5/Istanbul_University_logo.svg/1200px-Istanbul_University_logo.svg.png",
    views: 12345,
    description:
      "جامعة إسطنبول هي واحدة من أقدم الجامعات في تركيا، تقدم برامج بكالوريوس وماجستير في مجالات متنوعة.",
  },
  {
    id: "2",
    name: "جامعة أنقرة",
    city: "تركيا - أنقرة",
    image:
      "https://images.unsplash.com/photo-1704748082614-8163a88e56b8?auto=format&fit=crop&w=400&q=80",
    logo:
      "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Ankara_University_logo.svg/1200px-Ankara_University_logo.svg.png",
    views: 23685,
    description:
      "جامعة أنقرة تقدم برامج تعليمية متقدمة وتتميز بمستوى أكاديمي عالمي، مع برامج متنوعة للطلاب الدوليين.",
  },
  {
    id: "3",
    name: "جامعة بوغازيتشي",
    city: "تركيا - إسطنبول",
    image:
      "https://images.unsplash.com/photo-1690060806285-67f27a66ac94?auto=format&fit=crop&w=400&q=80",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Bogazici_University_logo.svg/1200px-Bogazici_University_logo.svg.png",
    views: 15890,
    description:
      "جامعة بوغازيتشي معروفة ببرامجها القوية في العلوم والهندسة، وتقدم تعليم باللغة الإنجليزية.",
  },
];