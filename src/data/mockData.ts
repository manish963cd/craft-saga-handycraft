export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  district: string;
  craft: string;
  artisan: string;
  description: string;
  giTag?: boolean;
}

export interface Craft {
  id: string;
  name: string;
  origin: string;
  description: string;
  image: string;
  districts: string[];
  process: string;
  materials: string[];
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  artisan: string;
  district: string;
  craft: string;
  readTime: string;
  date: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Banarasi Silk Saree",
    price: 15000,
    image: "/placeholder.svg",
    district: "Varanasi",
    craft: "Silk Weaving",
    artisan: "Ramesh Kumar",
    description: "Exquisite handwoven Banarasi silk saree with intricate gold zari work.",
    giTag: true
  },
  {
    id: "2", 
    name: "Chikankari Kurta",
    price: 3500,
    image: "/placeholder.svg",
    district: "Lucknow",
    craft: "Chikankari",
    artisan: "Fatima Begum",
    description: "Traditional white cotton kurta with delicate hand-embroidered chikankari work."
  },
  {
    id: "3",
    name: "Moradabad Brass Pot",
    price: 2500,
    image: "/placeholder.svg", 
    district: "Moradabad",
    craft: "Brass Work",
    artisan: "Shahid Ali",
    description: "Handcrafted brass water pot with traditional engravings."
  },
  {
    id: "4",
    name: "Azamgarh Black Pottery",
    price: 1200,
    image: "/placeholder.svg",
    district: "Azamgarh", 
    craft: "Black Pottery",
    artisan: "Gopal Singh",
    description: "Unique black pottery vase made using traditional techniques."
  },
  {
    id: "5",
    name: "Firozabad Glass Bangles",
    price: 800,
    image: "/placeholder.svg",
    district: "Firozabad",
    craft: "Glass Work", 
    artisan: "Sunita Devi",
    description: "Colorful handmade glass bangles from the glass city of India."
  },
  {
    id: "6",
    name: "Mirzapur Carpet",
    price: 25000,
    image: "/placeholder.svg",
    district: "Mirzapur",
    craft: "Carpet Weaving",
    artisan: "Abdul Rahman",
    description: "Hand-knotted wool carpet with traditional Persian designs.",
    giTag: true
  }
];

export const mockCrafts: Craft[] = [
  {
    id: "1",
    name: "Chikankari",
    origin: "Lucknow",
    description: "Traditional embroidery style from Lucknow, known for its delicate white threadwork on fine muslin cloth.",
    image: "/placeholder.svg",
    districts: ["Lucknow", "Kanpur", "Bareilly"],
    process: "Hand embroidery using white thread on cotton fabric",
    materials: ["Cotton", "Muslin", "White thread"]
  },
  {
    id: "2", 
    name: "Banarasi Silk",
    origin: "Varanasi",
    description: "Luxurious silk weaving tradition famous for its gold and silver brocade work.",
    image: "/placeholder.svg",
    districts: ["Varanasi", "Mirzapur"],
    process: "Handloom weaving with silk and metallic threads",
    materials: ["Silk", "Gold thread", "Silver thread"]
  },
  {
    id: "3",
    name: "Brass Work",
    origin: "Moradabad", 
    description: "Metal handicrafts including decorative items, utensils, and artifacts.",
    image: "/placeholder.svg",
    districts: ["Moradabad", "Aligarh"],
    process: "Casting, engraving, and polishing of brass items",
    materials: ["Brass", "Copper", "Bronze"]
  }
];

export const mockStories: Story[] = [
  {
    id: "1",
    title: "The Golden Threads of Fatima",
    excerpt: "How a young embroiderer from Lucknow is keeping the ancient art of Chikankari alive in modern times.",
    image: "/placeholder.svg",
    artisan: "Fatima Begum",
    district: "Lucknow",
    craft: "Chikankari",
    readTime: "5 min read",
    date: "2024-01-15"
  },
  {
    id: "2",
    title: "The Brass Symphony of Moradabad",
    excerpt: "Three generations of metalworkers share their passion for creating musical instruments and decorative art.",
    image: "/placeholder.svg", 
    artisan: "Shahid Ali",
    district: "Moradabad",
    craft: "Brass Work",
    readTime: "7 min read",
    date: "2024-01-10"
  },
  {
    id: "3",
    title: "Weaving Dreams in Varanasi",
    excerpt: "Inside the narrow lanes where master weavers create the world's most coveted silk sarees.",
    image: "/placeholder.svg",
    artisan: "Ramesh Kumar", 
    district: "Varanasi",
    craft: "Silk Weaving",
    readTime: "6 min read",
    date: "2024-01-08"
  }
];