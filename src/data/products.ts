export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subCategory?: string;
  rating: number;
  stock: number;
  discount?: number;
  ingredients?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  weight: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Ratlami Sev 100 gm',
    description: 'Traditional Ratlami style sev with authentic spices',
    price: 60,
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Sev',
    subCategory: 'Spicy',
    rating: 4.5,
    stock: 50,
    discount: 5,
    ingredients: ['Gram Flour', 'Spices', 'Salt', 'Oil'],
    nutritionalInfo: {
      calories: 520,
      protein: 12,
      carbs: 70,
      fat: 25
    },
    weight: '100g'
  },
  {
    id: '2',
    name: 'Banana Chips Spicy',
    description: 'Crispy and spicy banana chips',
    price: 150,
    image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Chips',
    subCategory: 'Spicy',
    rating: 4.7,
    stock: 30,
    discount: 10,
    ingredients: ['Banana', 'Spices', 'Oil'],
    nutritionalInfo: {
      calories: 550,
      protein: 3,
      carbs: 65,
      fat: 30
    },
    weight: '100g'
  },
  {
    id: '3',
    name: 'Tikhi Dal 100 gm',
    description: 'Spicy and crunchy dal snacks',
    price: 60,
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Spicy',
    rating: 4.4,
    stock: 40,
    discount: 5,
    ingredients: ['Split Gram', 'Spices', 'Salt', 'Oil'],
    nutritionalInfo: {
      calories: 510,
      protein: 15,
      carbs: 60,
      fat: 22
    },
    weight: '100g'
  },
  {
    id: '4',
    name: 'Tamatar Gathiya 100 gm',
    description: 'Tomato flavored gathiya snacks',
    price: 60,
    image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Savory',
    rating: 4.3,
    stock: 35,
    discount: 5,
    ingredients: ['Semolina', 'Tomato', 'Spices', 'Oil'],
    nutritionalInfo: {
      calories: 500,
      protein: 10,
      carbs: 68,
      fat: 24
    },
    weight: '100g'
  },
  {
    id: '5',
    name: 'Chatpate Boondi 100 gm',
    description: 'Savory and tangy boondi snacks',
    price: 60,
    image: 'https://images.unsplash.com/photo-1603569283847-aa6f0c79a3ad?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Savory',
    rating: 4.5,
    stock: 30,
    discount: 5,
    ingredients: ['Gram Flour', 'Spices', 'Tamarind', 'Salt'],
    nutritionalInfo: {
      calories: 490,
      protein: 12,
      carbs: 65,
      fat: 20
    },
    weight: '100g'
  },
  {
    id: '6',
    name: 'Lassan Sev 100 gm',
    description: 'Garlic flavored crispy sev',
    price: 60,
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Sev',
    subCategory: 'Savory',
    rating: 4.6,
    stock: 40,
    discount: 5,
    ingredients: ['Gram Flour', 'Garlic', 'Spices', 'Oil'],
    nutritionalInfo: {
      calories: 520,
      protein: 12,
      carbs: 70,
      fat: 25
    },
    weight: '100g'
  },
  {
    id: '7',
    name: 'Tasty Nuts 100 gm',
    description: 'Mixed nuts with special seasoning',
    price: 60,
    image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Nuts',
    subCategory: 'Savory',
    rating: 4.4,
    stock: 35,
    discount: 5,
    ingredients: ['Mixed Nuts', 'Spices', 'Salt', 'Oil'],
    nutritionalInfo: {
      calories: 600,
      protein: 18,
      carbs: 20,
      fat: 55
    },
    weight: '100g'
  },
  {
    id: '8',
    name: 'Fiki Papdi 100 gm',
    description: 'Crispy and light papdi snacks',
    price: 60,
    image: 'https://images.unsplash.com/photo-1603569283847-aa6f0c79a3ad?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Crispy',
    rating: 4.3,
    stock: 40,
    discount: 5,
    ingredients: ['Wheat Flour', 'Oil', 'Salt', 'Spices'],
    nutritionalInfo: {
      calories: 480,
      protein: 8,
      carbs: 65,
      fat: 22
    },
    weight: '100g'
  },
  {
    id: '9',
    name: 'Tikhi Papdi 100 gm',
    description: 'Spicy and tangy papdi snacks',
    price: 60,
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Spicy',
    rating: 4.2,
    stock: 35,
    discount: 5,
    ingredients: ['Wheat Flour', 'Spices', 'Tamarind', 'Salt'],
    nutritionalInfo: {
      calories: 470,
      protein: 7,
      carbs: 62,
      fat: 20
    },
    weight: '100g'
  },
  {
    id: '10',
    name: 'Khatta Meetha',
    description: 'Perfect blend of sweet and sour flavors',
    price: 65,
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Sweet-Sour',
    rating: 4.5,
    stock: 30,
    discount: 8,
    ingredients: ['Peanuts', 'Jaggery', 'Tamarind', 'Spices'],
    nutritionalInfo: {
      calories: 495,
      protein: 14,
      carbs: 55,
      fat: 24
    },
    weight: '100g'
  },
  {
    id: '11',
    name: 'Jeera Chiwda',
    description: 'Crispy flattened rice with cumin flavor',
    price: 55,
    image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Savory',
    rating: 4.4,
    stock: 45,
    discount: 6,
    ingredients: ['Poha', 'Cumin', 'Turmeric', 'Salt'],
    nutritionalInfo: {
      calories: 420,
      protein: 8,
      carbs: 78,
      fat: 10
    },
    weight: '100g'
  },
  {
    id: '12',
    name: 'Masala Peanuts',
    description: 'Roasted peanuts with special masala blend',
    price: 70,
    image: 'https://images.unsplash.com/photo-1603569283847-aa6f0c79a3ad?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Nuts',
    subCategory: 'Spicy',
    rating: 4.6,
    stock: 40,
    discount: 10,
    ingredients: ['Peanuts', 'Salt', 'Turmeric', 'Chili Powder'],
    nutritionalInfo: {
      calories: 620,
      protein: 26,
      carbs: 16,
      fat: 50
    },
    weight: '100g'
  },
  {
    id: '13',
    name: 'Dry Fruit Mix',
    description: 'Assorted dry fruits and nuts mix',
    price: 250,
    image: 'https://images.unsplash.com/photo-1603569283847-aa6f0c79a3ad?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Nuts',
    subCategory: 'Healthy',
    rating: 4.8,
    stock: 25,
    discount: 15,
    ingredients: ['Almonds', 'Cashews', 'Raisins', 'Pistachios'],
    nutritionalInfo: {
      calories: 580,
      protein: 18,
      carbs: 30,
      fat: 45
    },
    weight: '100g'
  },
  {
    id: '14',
    name: 'Makhana',
    description: 'Roasted fox nuts with salt and spices',
    price: 180,
    image: 'https://images.unsplash.com/photo-1603569283847-aa6f0c79a3ad?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Healthy',
    rating: 4.3,
    stock: 30,
    discount: 10,
    ingredients: ['Fox Nuts', 'Salt', 'Turmeric', 'Spices'],
    nutritionalInfo: {
      calories: 350,
      protein: 12,
      carbs: 70,
      fat: 8
    },
    weight: '100g'
  },
  {
    id: '15',
    name: 'Mixture',
    description: 'Traditional mixture of various namkeens',
    price: 80,
    image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Combo',
    rating: 4.4,
    stock: 40,
    discount: 5,
    ingredients: ['Various Namkeens', 'Spices', 'Oil', 'Salt'],
    nutritionalInfo: {
      calories: 500,
      protein: 12,
      carbs: 60,
      fat: 22
    },
    weight: '100g'
  },
  {
    id: '16',
    name: 'Chana Sutta',
    description: 'Roasted Bengal gram with spices',
    price: 75,
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Savory',
    rating: 4.2,
    stock: 35,
    discount: 6,
    ingredients: ['Bengal Gram', 'Salt', 'Turmeric', 'Chili'],
    nutritionalInfo: {
      calories: 520,
      protein: 20,
      carbs: 50,
      fat: 25
    },
    weight: '100g'
  },
  {
    id: '17',
    name: 'Papad',
    description: 'Thin and crispy traditional papad',
    price: 40,
    image: 'https://images.unsplash.com/photo-1603569283847-aa6f0c79a3ad?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Crispy',
    rating: 4.1,
    stock: 50,
    discount: 5,
    ingredients: ['Urad Dal', 'Salt', 'Spices', 'Oil'],
    nutritionalInfo: {
      calories: 400,
      protein: 15,
      carbs: 60,
      fat: 15
    },
    weight: '50g'
  },
  {
    id: '18',
    name: 'Chirote',
    description: 'Crispy layered flatbread snacks',
    price: 60,
    image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Crispy',
    rating: 4.3,
    stock: 35,
    discount: 5,
    ingredients: ['Maida', 'Oil', 'Salt', 'Spices'],
    nutritionalInfo: {
      calories: 480,
      protein: 8,
      carbs: 65,
      fat: 20
    },
    weight: '100g'
  },
  {
    id: '19',
    name: 'Sukhdi',
    description: 'Traditional sweet made with wheat and jaggery',
    price: 120,
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Sweets',
    subCategory: 'Traditional',
    rating: 4.5,
    stock: 25,
    discount: 12,
    ingredients: ['Wheat', 'Jaggery', 'Ghee', 'Nuts'],
    nutritionalInfo: {
      calories: 400,
      protein: 8,
      carbs: 65,
      fat: 15
    },
    weight: '100g'
  },
  {
    id: '20',
    name: 'Khara Ladoo',
    description: 'Savory ladoo made with urad dal',
    price: 180,
    image: 'https://images.unsplash.com/photo-1603569283847-aa6f0c79a3ad?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Traditional',
    rating: 4.6,
    stock: 20,
    discount: 10,
    ingredients: ['Urad Dal', 'Ghee', 'Spices', 'Salt'],
    nutritionalInfo: {
      calories: 420,
      protein: 18,
      carbs: 45,
      fat: 20
    },
    weight: '100g'
  },
  {
    id: '21',
    name: 'Coconut Burfi',
    description: 'Delicious coconut based sweet',
    price: 160,
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Sweets',
    subCategory: 'Coconut',
    rating: 4.7,
    stock: 20,
    discount: 10,
    ingredients: ['Coconut', 'Sugar', 'Milk', 'Cardamom'],
    nutritionalInfo: {
      calories: 350,
      protein: 6,
      carbs: 60,
      fat: 12
    },
    weight: '100g'
  },
  {
    id: '22',
    name: 'Gujarati Namkeen Combo',
    description: 'Assorted traditional Gujarati snacks',
    price: 280,
    image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Gifts',
    subCategory: 'Combo',
    rating: 4.8,
    stock: 15,
    discount: 18,
    ingredients: ['Traditional Gujarati Snacks', 'Premium Packaging'],
    nutritionalInfo: {
      calories: 1200,
      protein: 40,
      carbs: 150,
      fat: 80
    },
    weight: '500g'
  },
  {
    id: '23',
    name: 'Gujarati Thali Mix',
    description: 'Complete mix of various traditional snacks',
    price: 200,
    image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Combo',
    rating: 4.5,
    stock: 25,
    discount: 12,
    ingredients: ['Various Traditional Snacks', 'Spices', 'Oil'],
    nutritionalInfo: {
      calories: 550,
      protein: 15,
      carbs: 65,
      fat: 25
    },
    weight: '200g'
  },
  {
    id: '24',
    name: 'Khari',
    description: 'Traditional savory cookie with nuts',
    price: 220,
    image: 'https://images.unsplash.com/photo-1603569283847-aa6f0c79a3ad?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Namkeen',
    subCategory: 'Baked',
    rating: 4.6,
    stock: 20,
    discount: 15,
    ingredients: ['Maida', 'Ghee', 'Nuts', 'Salt'],
    nutritionalInfo: {
      calories: 450,
      protein: 10,
      carbs: 55,
      fat: 25
    },
    weight: '200g'
  },
  {
    id: '25',
    name: 'Imli Chutney',
    description: 'Authentic tamarind chutney with spices',
    price: 60,
    image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=400&h=300&q=80',
    category: 'Ready to Eat',
    subCategory: 'Condiments',
    rating: 4.5,
    stock: 40,
    discount: 5,
    ingredients: ['Tamarind', 'Jaggery', 'Spices', 'Mint'],
    nutritionalInfo: {
      calories: 120,
      protein: 1,
      carbs: 28,
      fat: 0.5
    },
    weight: '100ml'
  },
];