export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  district: string;
  craft: string;
  artisan: string;
  description: string;
  longDescription: string;
  material: string;
  dimensions: string;
  weight: string;
  giTag?: boolean;
  artisanInfo: {
    name: string;
    experience: string;
    specialty: string;
    image: string;
    bio: string;
  };
  relatedStoryId?: string;
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    district: "Varanasi",
    craft: "Silk Weaving",
    artisan: "Ramesh Kumar",
    description: "Exquisite handwoven Banarasi silk saree with intricate gold zari work.",
    longDescription: "This magnificent Banarasi silk saree represents the pinnacle of Indian textile artistry. Handwoven using traditional techniques passed down through generations, each saree takes approximately 15-20 days to complete. The intricate gold zari work features traditional motifs inspired by Mughal art, including paisleys, florals, and geometric patterns. The rich silk fabric drapes beautifully and the lustrous finish makes it perfect for special occasions and celebrations.",
    material: "Pure Silk with Gold Zari",
    dimensions: "6.5 meters length, 1.2 meters width",
    weight: "800 grams",
    giTag: true,
    artisanInfo: {
      name: "Ramesh Kumar",
      experience: "25 years",
      specialty: "Banarasi Silk Weaving",
      image: "/placeholder.svg",
      bio: "Master weaver from Varanasi with 25 years of experience in creating exquisite Banarasi silk sarees. Son of a renowned weaver, Ramesh has dedicated his life to preserving this ancient art form."
    },
    relatedStoryId: "3"
  },
  {
    id: "2", 
    name: "Chikankari Kurta",
    price: 3500,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    district: "Lucknow",
    craft: "Chikankari",
    artisan: "Fatima Begum",
    description: "Traditional white cotton kurta with delicate hand-embroidered chikankari work.",
    longDescription: "This elegant chikankari kurta showcases the refined embroidery tradition of Lucknow. Each piece is meticulously hand-embroidered using traditional white thread on premium cotton fabric. The intricate patterns include shadow work, French knots, and delicate mesh patterns that create a stunning visual texture. Perfect for both casual and formal wear.",
    material: "Premium Cotton with Cotton Thread",
    dimensions: "Size M: Chest 40 inches, Length 42 inches",
    weight: "300 grams",
    artisanInfo: {
      name: "Fatima Begum",
      experience: "18 years",
      specialty: "Chikankari Embroidery",
      image: "/placeholder.svg",
      bio: "Expert chikankari artisan from Lucknow, known for her delicate hand embroidery work. Fatima has trained over 50 women in this traditional craft."
    },
    relatedStoryId: "1"
  },
  {
    id: "3",
    name: "Moradabad Brass Pot",
    price: 2500,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    district: "Moradabad",
    craft: "Brass Work",
    artisan: "Shahid Ali",
    description: "Handcrafted brass water pot with traditional engravings.",
    longDescription: "This beautiful brass water pot represents the finest tradition of Moradabad metalwork. Hand-hammered from pure brass and featuring intricate engraved patterns, this pot is both functional and decorative. The traditional designs are inspired by Mughal and Persian art, making each piece a unique work of art.",
    material: "Pure Brass",
    dimensions: "Height: 12 inches, Diameter: 8 inches",
    weight: "1.2 kg",
    artisanInfo: {
      name: "Shahid Ali",
      experience: "22 years",
      specialty: "Brass Metalwork",
      image: "/placeholder.svg",
      bio: "Third-generation brass artisan from Moradabad, specializing in traditional engraving and hammering techniques. His family has been creating brass artifacts for over 60 years."
    },
    relatedStoryId: "2"
  },
  {
    id: "4",
    name: "Azamgarh Black Pottery",
    price: 1200,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    district: "Azamgarh", 
    craft: "Black Pottery",
    artisan: "Gopal Singh",
    description: "Unique black pottery vase made using traditional techniques.",
    longDescription: "This striking black pottery vase showcases the unique ceramic tradition of Azamgarh. Created using special clay and fired in traditional kilns, the distinctive black finish is achieved through a special smoking process. Each piece is hand-shaped and features subtle textural patterns.",
    material: "Special Black Clay",
    dimensions: "Height: 10 inches, Width: 6 inches",
    weight: "800 grams",
    artisanInfo: {
      name: "Gopal Singh",
      experience: "15 years",
      specialty: "Black Pottery",
      image: "/placeholder.svg",
      bio: "Skilled potter from Azamgarh, known for his expertise in creating distinctive black pottery using traditional smoking techniques."
    }
  },
  {
    id: "5",
    name: "Firozabad Glass Bangles",
    price: 800,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    district: "Firozabad",
    craft: "Glass Work", 
    artisan: "Sunita Devi",
    description: "Colorful handmade glass bangles from the glass city of India.",
    longDescription: "These vibrant glass bangles are handcrafted in Firozabad, known as the 'Glass City of India'. Each bangle is carefully shaped and colored using traditional glass-blowing techniques. The set includes multiple colors and patterns, perfect for traditional Indian attire.",
    material: "Colored Glass",
    dimensions: "Standard size set (2.2 to 2.8 inches diameter)",
    weight: "150 grams (set of 12)",
    artisanInfo: {
      name: "Sunita Devi",
      experience: "12 years",
      specialty: "Glass Bangle Making",
      image: "/placeholder.svg",
      bio: "Expert glass artisan from Firozabad, specializing in creating colorful glass bangles and decorative items using traditional furnace techniques."
    }
  },
  {
    id: "6",
    name: "Mirzapur Carpet",
    price: 25000,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    district: "Mirzapur",
    craft: "Carpet Weaving",
    artisan: "Abdul Rahman",
    description: "Hand-knotted wool carpet with traditional Persian designs.",
    longDescription: "This luxurious hand-knotted carpet from Mirzapur features intricate Persian-inspired patterns and is woven using the finest wool. Each carpet takes several months to complete and contains thousands of individually tied knots. The rich colors and detailed motifs make it a perfect centerpiece for any room.",
    material: "Pure Wool with Silk Highlights",
    dimensions: "6 feet x 9 feet",
    weight: "8 kg",
    giTag: true,
    artisanInfo: {
      name: "Abdul Rahman",
      experience: "30 years",
      specialty: "Hand-knotted Carpet Weaving",
      image: "/placeholder.svg",
      bio: "Master carpet weaver from Mirzapur with three decades of experience in creating hand-knotted carpets. His work is renowned for its intricate patterns and superior quality."
    }
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

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  trackingNumber?: string;
  estimatedDelivery?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
  artisan: string;
}

export const mockOrders: Order[] = [
  {
    id: "ord-001",
    orderNumber: "ODOP-2024-001",
    date: "2024-01-20T10:30:00Z",
    status: "delivered",
    total: 18500,
    items: [
      {
        productId: "1",
        productName: "Banarasi Silk Saree",
        productImage: "/placeholder.svg",
        quantity: 1,
        price: 15000,
        artisan: "Ramesh Kumar"
      },
      {
        productId: "2",
        productName: "Chikankari Kurta",
        productImage: "/placeholder.svg", 
        quantity: 1,
        price: 3500,
        artisan: "Fatima Begum"
      }
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Heritage Lane",
      city: "Delhi",
      state: "Delhi",
      pincode: "110001"
    },
    trackingNumber: "TR123456789",
    estimatedDelivery: "2024-01-25"
  },
  {
    id: "ord-002",
    orderNumber: "ODOP-2024-002",
    date: "2024-01-25T14:15:00Z",
    status: "shipped",
    total: 2500,
    items: [
      {
        productId: "3",
        productName: "Moradabad Brass Pot",
        productImage: "/placeholder.svg",
        quantity: 1,
        price: 2500,
        artisan: "Shahid Ali"
      }
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Heritage Lane",
      city: "Delhi",
      state: "Delhi", 
      pincode: "110001"
    },
    trackingNumber: "TR987654321",
    estimatedDelivery: "2024-01-30"
  },
  {
    id: "ord-003",
    orderNumber: "ODOP-2024-003",
    date: "2024-01-28T09:45:00Z",
    status: "processing",
    total: 1200,
    items: [
      {
        productId: "4",
        productName: "Azamgarh Black Pottery",
        productImage: "/placeholder.svg",
        quantity: 1,
        price: 1200,
        artisan: "Gopal Singh"
      }
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Heritage Lane",
      city: "Delhi",
      state: "Delhi",
      pincode: "110001"
    },
    estimatedDelivery: "2024-02-05"
  }
];

export const mockWishlist: Product[] = [
  mockProducts[4], // Firozabad Glass Bangles
  mockProducts[5]  // Mirzapur Carpet
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