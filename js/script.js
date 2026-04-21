/* ================================================
   WARUNG BANJAR NEGARA UK — Main JavaScript
   Indonesian Food & Spices for UK Market
   With Shopping Cart & Category Filter
   ================================================ */

// ============ Category Definitions ============
const categories = [
  { id: "all", name: "Semua", icon: "🏪" },
  { id: "bumbu", name: "Bumbu & Rempah", icon: "🌶️" },
  { id: "sambal", name: "Sambal", icon: "🔥" },
  { id: "mie", name: "Mie & Pasta", icon: "🍜" },
  { id: "saus", name: "Saus & Kecap", icon: "🫙" },
  { id: "snack", name: "Snack & Kerupuk", icon: "🍘" },
  { id: "minuman", name: "Minuman", icon: "☕" },
  { id: "makanan", name: "Makanan Siap Saji", icon: "🍲" },
  { id: "rokok", name: "Rokok & Tembakau", icon: "🚬" },
  { id: "sayuran", name: "Sayuran Segar", icon: "🥬" },
  { id: "obat", name: "Obat & Jamu", icon: "💊" }
];

// ============ Product Data ============
const products = [
  {
    id: 1,
    name: "Bumbu Rendang Padang",
    price: 8.99,
    oldPrice: 12.99,
    image: "images/rendang.png",
    rating: 5,
    reviews: 234,
    category: "bumbu",
    description: "Authentic Padang-style rendang spice paste made from premium Indonesian spices. Create the world's most delicious curry — voted #1 dish globally by CNN.",
    features: [
      "100% natural Indonesian spices",
      "No artificial preservatives",
      "Authentic Minangkabau recipe",
      "Makes 4-6 servings per packet",
      "Halal certified"
    ],
    sizes: ["150g", "300g", "500g"],
    variants: ["Original", "Extra Spicy", "Mild"],
    stock: 8,
    bestseller: true,
    discount: 30
  },
  {
    id: 2,
    name: "Sambal Matah Bali",
    price: 6.99,
    oldPrice: 9.99,
    image: "images/sambal.png",
    rating: 5,
    reviews: 189,
    category: "sambal",
    description: "Fresh Balinese raw sambal made with lemongrass, shallots, chilli, and fragrant coconut oil. Perfect condiment for grilled meats, seafood, and rice dishes.",
    features: [
      "Traditional Balinese recipe",
      "Fresh, vibrant flavours",
      "Handcrafted in small batches",
      "No cooking required — ready to serve",
      "Vegan friendly"
    ],
    sizes: ["200g", "350g"],
    variants: ["Classic", "Extra Hot"],
    stock: 12,
    bestseller: true,
    discount: 30
  },
  {
    id: 3,
    name: "Indomie Mi Goreng 5-Pack",
    price: 4.49,
    oldPrice: 5.99,
    image: "images/indomie.png",
    rating: 5,
    reviews: 567,
    category: "mie",
    description: "Indonesia's iconic instant fried noodles loved by millions worldwide. Signature sweet soy sauce, chilli, and fried onion flavour that's simply irresistible.",
    features: [
      "Indonesia's #1 instant noodle brand",
      "Unique sweet & savoury flavour",
      "Ready in just 3 minutes",
      "5 individually wrapped packets",
      "Vegetarian option available"
    ],
    sizes: ["5-Pack", "10-Pack", "20-Pack (Box)"],
    variants: ["Original", "Hot & Spicy", "BBQ Chicken", "Rendang"],
    stock: 45,
    bestseller: true,
    discount: 25
  },
  {
    id: 4,
    name: "Kecap Manis Premium",
    price: 5.49,
    oldPrice: 7.99,
    image: "images/kecap.png",
    rating: 4,
    reviews: 312,
    category: "saus",
    description: "Authentic Indonesian sweet soy sauce brewed with palm sugar and a blend of aromatic spices. Essential for nasi goreng, satay, and countless Indonesian dishes.",
    features: [
      "Brewed with natural palm sugar",
      "Rich, complex flavour profile",
      "Essential Indonesian condiment",
      "Glass bottle for freshness",
      "No artificial sweeteners"
    ],
    sizes: ["275ml", "600ml"],
    variants: ["Classic Sweet", "Spicy"],
    stock: 22,
    bestseller: true,
    discount: 30
  },
  {
    id: 5,
    name: "Bumbu Nasi Goreng",
    price: 3.99,
    oldPrice: 5.49,
    image: "images/nasigoreng.png",
    rating: 4,
    reviews: 198,
    category: "bumbu",
    description: "Ready-to-use Indonesian fried rice seasoning paste. Just stir-fry with rice, vegetables, and your choice of protein for authentic nasi goreng in minutes.",
    features: [
      "Authentic street food flavour",
      "Ready in under 10 minutes",
      "Perfect for beginners",
      "3 sachets per pack",
      "Gluten-free"
    ],
    sizes: ["3-Pack", "6-Pack", "12-Pack"],
    variants: ["Classic", "Kampung Style", "Seafood"],
    stock: 30,
    discount: 27
  },
  {
    id: 6,
    name: "Kerupuk Udang Sidoarjo",
    price: 4.99,
    oldPrice: 6.99,
    image: "images/kerupuk.png",
    rating: 4,
    reviews: 156,
    category: "snack",
    description: "Premium prawn crackers from Sidoarjo, East Java. Crispy, light, and full of authentic prawn flavour. Perfect as a side dish or snack.",
    features: [
      "Made with real prawns",
      "Light & crispy texture",
      "Traditional Sidoarjo recipe",
      "Ready to fry or microwave",
      "Family-size pack"
    ],
    sizes: ["200g", "500g"],
    variants: ["Original", "Spicy"],
    stock: 18,
    discount: 28
  },
  {
    id: 7,
    name: "Bumbu Soto Ayam",
    price: 4.49,
    oldPrice: 6.49,
    image: "images/soto.png",
    rating: 5,
    reviews: 143,
    category: "bumbu",
    description: "Traditional Indonesian chicken soup seasoning with aromatic turmeric, lemongrass, and galangal. Create a warming bowl of authentic soto ayam at home.",
    features: [
      "Rich turmeric-based broth",
      "Aromatic herb blend",
      "Comforting & nourishing",
      "Serves 4-6 people",
      "No MSG added"
    ],
    sizes: ["150g", "300g"],
    variants: ["Soto Ayam", "Soto Betawi"],
    stock: 15,
    discount: 30
  },
  {
    id: 8,
    name: "Keripik Tempe Premium",
    price: 5.99,
    oldPrice: 7.99,
    image: "images/tempe.png",
    rating: 4,
    reviews: 127,
    category: "snack",
    description: "Crispy tempeh chips seasoned with authentic Indonesian spices. A healthy, protein-rich snack made from fermented soybeans — Indonesia's superfood.",
    features: [
      "High in plant protein",
      "Naturally fermented soybeans",
      "Crispy & addictive",
      "Vegan & gluten-free",
      "Lightly seasoned"
    ],
    sizes: ["150g", "250g"],
    variants: ["Original", "BBQ", "Spicy Chilli"],
    stock: 20,
    discount: 25
  },
  {
    id: 9,
    name: "Bumbu Gulai Curry Paste",
    price: 7.49,
    oldPrice: 9.99,
    image: "images/gulai.png",
    rating: 5,
    reviews: 98,
    category: "bumbu",
    description: "Rich and fragrant Sumatran-style curry paste for authentic gulai. Perfect with lamb, chicken, jackfruit, or fish. Just add coconut milk and simmer.",
    features: [
      "Authentic Sumatran recipe",
      "Complex spice blend",
      "Pairs perfectly with coconut milk",
      "Versatile — meat or vegetable curry",
      "Small-batch production"
    ],
    sizes: ["200g", "400g"],
    variants: ["Classic", "Aceh Style"],
    stock: 10,
    discount: 25
  },
  {
    id: 10,
    name: "Kopi Toraja Premium",
    price: 14.99,
    oldPrice: 19.99,
    image: "images/coffee.png",
    rating: 5,
    reviews: 203,
    category: "minuman",
    description: "Single-origin Arabica coffee beans from the highlands of Toraja, South Sulawesi. Full-bodied with notes of dark chocolate, spice, and a smooth finish.",
    features: [
      "Single-origin Arabica beans",
      "Grown at 1,500m altitude",
      "Medium-dark roast",
      "Full-bodied, low acidity",
      "Ethically sourced from local farmers"
    ],
    sizes: ["250g", "500g", "1kg"],
    variants: ["Whole Bean", "Ground", "Drip Bags (10-Pack)"],
    stock: 14,
    discount: 25
  },
  {
    id: 11,
    name: "Sambal Oelek Chilli Paste",
    price: 4.99,
    oldPrice: 6.99,
    image: "images/sambal.png",
    rating: 4,
    reviews: 276,
    category: "sambal",
    description: "Classic Indonesian chilli paste made from freshly ground red chillies. A versatile condiment that adds heat and depth to any dish.",
    features: [
      "Pure ground chilli",
      "Versatile heat source",
      "Perfect for cooking or as a dip",
      "No artificial colours",
      "Chunky, authentic texture"
    ],
    sizes: ["250g", "500g"],
    variants: ["Classic Red", "Green Chilli"],
    stock: 25,
    discount: 28
  },
  {
    id: 12,
    name: "Rempeyek Kacang",
    price: 5.49,
    oldPrice: 7.49,
    image: "images/kerupuk.png",
    rating: 4,
    reviews: 89,
    category: "snack",
    description: "Traditional Indonesian peanut crackers — thin, crispy, and loaded with roasted peanuts. A beloved snack across Indonesia, perfect with any meal.",
    features: [
      "Loaded with crunchy peanuts",
      "Paper-thin & crispy",
      "Traditional Javanese recipe",
      "Great as a snack or side dish",
      "Hand-made in small batches"
    ],
    sizes: ["150g", "300g"],
    variants: ["Peanut", "Anchovy"],
    stock: 16,
    discount: 26
  },
  {
    id: 13,
    name: "Jengkol Semur Homemade",
    price: 9.99,
    oldPrice: 13.99,
    image: "images/jengkol.png",
    rating: 5,
    reviews: 87,
    category: "makanan",
    description: "Authentic homemade semur jengkol — slow-cooked jengkol beans in rich sweet soy sauce with aromatic spices. A beloved traditional Sundanese & Betawi delicacy, vacuum-sealed for freshness.",
    features: [
      "Homemade authentic recipe",
      "Slow-cooked for tender texture",
      "Vacuum-sealed for freshness",
      "Ready to heat & eat",
      "Halal certified"
    ],
    sizes: ["250g", "500g"],
    variants: ["Original", "Extra Pedas"],
    stock: 12,
    bestseller: false,
    discount: 28
  },
  // ===== ROKOK & TEMBAKAU =====
  {
    id: 14,
    name: "Gudang Garam Surya 16",
    price: 12.99,
    oldPrice: 15.99,
    image: "images/rokok-collection.jpg",
    rating: 5,
    reviews: 156,
    category: "rokok",
    description: "Indonesia's iconic kretek clove cigarette. Rich, full-bodied flavour with a distinctive clove aroma. Imported directly from Indonesia.",
    features: [
      "Authentic Indonesian kretek",
      "Premium clove blend",
      "Full-bodied flavour",
      "Imported from Indonesia",
      "16 cigarettes per pack"
    ],
    sizes: ["1 Pack", "1 Slop (10 Pack)"],
    variants: ["Surya 16", "Surya 12"],
    stock: 20,
    bestseller: false,
    discount: 18
  },
  {
    id: 15,
    name: "Sampoerna Avolution",
    price: 14.99,
    oldPrice: 18.99,
    image: "images/rokok-collection.jpg",
    rating: 5,
    reviews: 134,
    category: "rokok",
    description: "Premium machine-made kretek from Sampoerna with innovative capsule technology. Smooth, modern taste with a hint of menthol when you click the capsule.",
    features: [
      "Capsule technology",
      "Premium quality tobacco",
      "Smooth modern taste",
      "Sleek packaging",
      "Imported from Indonesia"
    ],
    sizes: ["1 Pack", "1 Slop (10 Pack)"],
    variants: ["Avolution"],
    stock: 15,
    bestseller: false,
    discount: 21
  },
  {
    id: 16,
    name: "LA Lights",
    price: 11.99,
    oldPrice: 14.99,
    image: "images/rokok-collection.jpg",
    rating: 4,
    reviews: 198,
    category: "rokok",
    description: "Popular Indonesian low-tar kretek cigarette. Light and smooth with a subtle clove flavour. One of Indonesia's best-selling brands.",
    features: [
      "Low tar kretek",
      "Light & smooth taste",
      "Subtle clove flavour",
      "Popular Indonesian brand",
      "20 cigarettes per pack"
    ],
    sizes: ["1 Pack", "1 Slop (10 Pack)"],
    variants: ["LA Lights", "LA Bold", "LA Menthol"],
    stock: 25,
    bestseller: false,
    discount: 20
  },
  {
    id: 17,
    name: "Esse Berry Pop",
    price: 13.99,
    oldPrice: 16.99,
    image: "images/rokok-collection.jpg",
    rating: 4,
    reviews: 112,
    category: "rokok",
    description: "Slim-style cigarette with a berry-flavoured capsule. Click the capsule for a burst of sweet berry flavour. Popular among young smokers in Indonesia.",
    features: [
      "Berry flavour capsule",
      "Slim design",
      "Sweet berry burst",
      "Premium Korean-Indonesian brand",
      "20 cigarettes per pack"
    ],
    sizes: ["1 Pack", "1 Slop (10 Pack)"],
    variants: ["Berry Pop", "Change"],
    stock: 18,
    bestseller: false,
    discount: 17
  },
  {
    id: 18,
    name: "Dunhill Filter 16",
    price: 13.49,
    oldPrice: 16.49,
    image: "images/rokok-collection.jpg",
    rating: 4,
    reviews: 95,
    category: "rokok",
    description: "Premium international cigarette brand popular in Indonesia. Smooth, refined tobacco flavour with consistent quality.",
    features: [
      "Premium tobacco blend",
      "Smooth refined taste",
      "International quality",
      "16 cigarettes per pack",
      "Imported from Indonesia"
    ],
    sizes: ["1 Pack", "1 Slop (10 Pack)"],
    variants: ["Filter 16", "Mild"],
    stock: 14,
    bestseller: false,
    discount: 18
  },
  // ===== SNACK TAMBAHAN =====
  {
    id: 19,
    name: "Sukro Kacang Original",
    price: 3.99,
    oldPrice: 5.49,
    image: "images/snack-shelf.png",
    rating: 5,
    reviews: 231,
    category: "snack",
    description: "Indonesia's favourite coated peanuts — crunchy, savoury, and highly addictive! Perfect snack for any occasion. A must-have from every Indonesian warung.",
    features: [
      "Crunchy coated peanuts",
      "Savoury & addictive",
      "Popular Indonesian brand",
      "Great party snack",
      "Halal certified"
    ],
    sizes: ["150g", "250g"],
    variants: ["Original", "Spicy Balado", "Cheese"],
    stock: 30,
    bestseller: false,
    discount: 27
  },
  {
    id: 20,
    name: "Kusuka Keripik Singkong",
    price: 3.49,
    oldPrice: 4.99,
    image: "images/snack-shelf.png",
    rating: 4,
    reviews: 167,
    category: "snack",
    description: "Premium cassava chips with a satisfying crunch. Thinly sliced and perfectly fried. A classic Indonesian snack that pairs perfectly with sambal or on its own.",
    features: [
      "Thin & crispy cassava chips",
      "Traditional recipe",
      "Multiple flavour options",
      "No artificial preservatives",
      "Great value pack"
    ],
    sizes: ["150g", "250g"],
    variants: ["Original", "Balado", "BBQ"],
    stock: 22,
    bestseller: false,
    discount: 30
  },
  {
    id: 21,
    name: "Tic Tac Snack Mix",
    price: 2.99,
    oldPrice: 3.99,
    image: "images/pantry-snacks.jpg",
    rating: 4,
    reviews: 189,
    category: "snack",
    description: "Popular Indonesian snack mix with a variety of crunchy textures and savoury flavours. Perfect for snacking while watching TV or as a party treat.",
    features: [
      "Variety of textures",
      "Savoury snack mix",
      "Family-size pack",
      "Popular across Indonesia",
      "Great value"
    ],
    sizes: ["100g", "200g"],
    variants: ["Regular", "Spicy"],
    stock: 35,
    bestseller: false,
    discount: 25
  },
  {
    id: 22,
    name: "Super Bubur Instan",
    price: 1.99,
    oldPrice: 2.99,
    image: "images/snack-shelf.png",
    rating: 4,
    reviews: 143,
    category: "makanan",
    description: "Instant Indonesian rice porridge — comforting, warm, and ready in minutes. Just add hot water for a quick meal. Popular breakfast choice across Indonesia.",
    features: [
      "Ready in 3 minutes",
      "Just add hot water",
      "Comforting breakfast",
      "Rich seasoning included",
      "Halal certified"
    ],
    sizes: ["1 Pack", "5-Pack", "12-Pack"],
    variants: ["Ayam (Chicken)", "Original"],
    stock: 40,
    bestseller: false,
    discount: 33
  },
  {
    id: 23,
    name: "Yupi Gummy Candy",
    price: 2.49,
    oldPrice: 3.49,
    image: "images/pantry-snacks.jpg",
    rating: 4,
    reviews: 76,
    category: "snack",
    description: "Colorful and fruity gummy candies from Indonesia. Fun shapes and delicious fruit flavours that kids and adults love. Soft, chewy, and sweet.",
    features: [
      "Assorted fruit flavours",
      "Fun shapes for kids",
      "Soft & chewy texture",
      "Halal certified",
      "Great as a treat"
    ],
    sizes: ["120g", "250g"],
    variants: ["Assorted Fruit", "Sour Gummy"],
    stock: 28,
    bestseller: false,
    discount: 28
  },
  // ===== OBAT & JAMU =====
  {
    id: 24,
    name: "Antangin JRG Herbal",
    price: 4.99,
    oldPrice: 6.99,
    image: "images/pantry-obat.jpg",
    rating: 5,
    reviews: 245,
    category: "obat",
    description: "Traditional Indonesian herbal remedy for cold & flu relief. Contains jahe (ginger), royal jelly, and ginseng. Warms the body and boosts immunity naturally.",
    features: [
      "Natural herbal remedy",
      "Ginger, royal jelly & ginseng",
      "Cold & flu relief",
      "Warms the body",
      "Box of 12 sachets"
    ],
    sizes: ["12 Sachets", "24 Sachets"],
    variants: ["Syrup", "Tablet"],
    stock: 20,
    bestseller: false,
    discount: 28
  },
  {
    id: 25,
    name: "FreshCare Roll On",
    price: 3.99,
    oldPrice: 5.49,
    image: "images/pantry-obat.jpg",
    rating: 5,
    reviews: 312,
    category: "obat",
    description: "Indonesia's favourite aromatherapy roll-on oil. Provides instant relief from headaches, motion sickness, and muscle soreness. Compact and easy to carry.",
    features: [
      "Instant headache relief",
      "Compact roll-on design",
      "Natural essential oils",
      "Multi-purpose use",
      "Refreshing aroma"
    ],
    sizes: ["5.9ml", "10ml"],
    variants: ["Strong", "Citrus", "Lavender", "Green Tea"],
    stock: 25,
    bestseller: false,
    discount: 27
  },
  {
    id: 26,
    name: "Tolak Angin Herbal",
    price: 5.99,
    oldPrice: 7.99,
    image: "images/pantry-obat.jpg",
    rating: 5,
    reviews: 278,
    category: "obat",
    description: "Famous Indonesian herbal supplement for masuk angin (bloating/wind). Contains honey, mint, cloves, and traditional jamu ingredients. A medicine cabinet essential.",
    features: [
      "Traditional jamu formula",
      "Relieves bloating & wind",
      "Honey & herbal blend",
      "Individual sachets",
      "Trusted for generations"
    ],
    sizes: ["Box of 12", "Box of 24"],
    variants: ["Cair (Liquid)", "Flu"],
    stock: 18,
    bestseller: false,
    discount: 25
  },
  {
    id: 27,
    name: "Komix Herbal Syrup",
    price: 3.49,
    oldPrice: 4.99,
    image: "images/pantry-obat.jpg",
    rating: 4,
    reviews: 156,
    category: "obat",
    description: "Popular Indonesian cough and cold syrup in convenient single-dose sachets. Fast-acting formula for cough, sore throat, and cold symptoms.",
    features: [
      "Fast-acting cough relief",
      "Convenient sachets",
      "Herbal-based formula",
      "For cough & sore throat",
      "Box of 10 sachets"
    ],
    sizes: ["Box of 10", "Box of 20"],
    variants: ["Jahe (Ginger)", "Mint"],
    stock: 22,
    bestseller: false,
    discount: 30
  },
  {
    id: 28,
    name: "Kopiko Coffee Candy",
    price: 2.99,
    oldPrice: 3.99,
    image: "images/pantry-obat.jpg",
    rating: 5,
    reviews: 345,
    category: "snack",
    description: "Real coffee extract candy from Indonesia — the world's #1 coffee candy! Rich, authentic coffee flavour in every piece. Perfect for a quick coffee fix on the go.",
    features: [
      "Made with real coffee extract",
      "World's #1 coffee candy",
      "Rich authentic flavour",
      "Great coffee substitute",
      "Individually wrapped"
    ],
    sizes: ["120g", "250g"],
    variants: ["Cappuccino", "Coffee Shot"],
    stock: 35,
    bestseller: false,
    discount: 25
  },
  // ===== SAYURAN SEGAR =====
  {
    id: 29,
    name: "Petai Segar (Stink Beans)",
    price: 6.99,
    oldPrice: 9.99,
    image: "images/sayuran-segar.jpg",
    rating: 5,
    reviews: 167,
    category: "sayuran",
    description: "Fresh petai (stink beans) — a beloved ingredient in Sundanese and Malay cuisine. Perfect for sambal petai, nasi goreng petai, or eaten with fried rice.",
    features: [
      "Fresh from supplier",
      "Vacuum-packed for freshness",
      "Rich in nutrients",
      "Essential for sambal petai",
      "Limited seasonal stock"
    ],
    sizes: ["200g", "500g"],
    variants: ["Fresh"],
    stock: 8,
    bestseller: false,
    discount: 30
  },
  {
    id: 30,
    name: "Kangkung Segar (Water Spinach)",
    price: 3.99,
    oldPrice: 5.49,
    image: "images/sayuran-segar.jpg",
    rating: 5,
    reviews: 198,
    category: "sayuran",
    description: "Fresh kangkung (water spinach) — the classic Indonesian vegetable. Perfect for cah kangkung, plecing kangkung, or tumis kangkung terasi. Fresh and crunchy.",
    features: [
      "Fresh & crunchy",
      "Classic Indonesian vegetable",
      "Perfect for stir-fry",
      "Rich in iron & vitamins",
      "Packed fresh daily"
    ],
    sizes: ["1 Bundle", "3 Bundles"],
    variants: ["Fresh"],
    stock: 10,
    bestseller: false,
    discount: 27
  },
  {
    id: 31,
    name: "Bayam Segar (Spinach)",
    price: 3.49,
    oldPrice: 4.99,
    image: "images/sayuran-segar.jpg",
    rating: 4,
    reviews: 134,
    category: "sayuran",
    description: "Fresh Indonesian bayam (spinach) — tender leaves perfect for sayur bayam, tumis bayam, or added to soups. Nutritious and delicious, a staple in Indonesian cooking.",
    features: [
      "Tender fresh leaves",
      "Rich in iron",
      "Staple Indonesian vegetable",
      "Perfect for soups & stir-fry",
      "Packed fresh"
    ],
    sizes: ["1 Bundle", "3 Bundles"],
    variants: ["Bayam Hijau", "Bayam Merah"],
    stock: 10,
    bestseller: false,
    discount: 30
  }
];

// ============ Config ============
const WHATSAPP_NUMBER = "447403131833";

// ============ Cart State ============
let cart = JSON.parse(localStorage.getItem('wbn_cart') || '[]');
let activeCategory = 'all';

// ============ Utility Functions ============
function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += i < rating ? '★' : '☆';
  }
  return stars;
}

function formatPrice(price) {
  return `£${price.toFixed(2)}`;
}

function buildWhatsAppLink(product, variant = null, size = null, qty = 1) {
  let message = `Hello, I would like to order:\n\n`;
  message += `Product: ${product.name}\n`;
  if (variant) message += `Variant: ${variant}\n`;
  if (size) message += `Size: ${size}\n`;
  message += `Quantity: ${qty}\n`;
  message += `Price: ${formatPrice(product.price * qty)}\n\n`;
  message += `Please confirm availability. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ============ Toast Notification ============
function showToast(message) {
  const toast = document.getElementById('cart-toast');
  toast.textContent = `✅ ${message}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============ Cart Functions ============
function saveCart() {
  localStorage.setItem('wbn_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (totalItems > 0) {
    badge.style.display = 'flex';
    badge.textContent = totalItems;
  } else {
    badge.style.display = 'none';
  }
}

function addToCart(productId, variant = null, size = null, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const v = variant || product.variants[0];
  const s = size || product.sizes[0];

  // Check if item with same variant+size already in cart
  const existingIndex = cart.findIndex(
    item => item.productId === productId && item.variant === v && item.size === s
  );

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      productId: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      variant: v,
      size: s,
      qty: qty
    });
  }

  saveCart();
  showToast(`${product.name} added to cart!`);
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function updateCartItemQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty < 1) {
    removeFromCart(index);
    return;
  }
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  drawer.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
  if (drawer.classList.contains('active')) {
    renderCart();
  }
}

function renderCart() {
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  const countLabel = document.getElementById('cart-count-label');
  const totalEl = document.getElementById('cart-total');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  countLabel.textContent = `(${totalItems} item${totalItems !== 1 ? 's' : ''})`;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p class="font-semibold text-gray-500 mb-2">Your cart is empty</p>
        <p class="text-sm">Browse our products and add items to your cart</p>
        <button onclick="toggleCart(); document.getElementById('shop').scrollIntoView({behavior:'smooth'})" class="btn-primary mt-4 text-sm !py-2 !px-5">
          Browse Products
        </button>
      </div>
    `;
    footer.style.display = 'none';
    return;
  }

  let total = 0;
  body.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">${item.size} • ${item.variant}</div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">${formatPrice(itemTotal)}</span>
            <div class="cart-item-qty">
              <button onclick="updateCartItemQty(${index}, -1)">−</button>
              <span>${item.qty}</span>
              <button onclick="updateCartItemQty(${index}, 1)">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Remove">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </div>
    `;
  }).join('');

  totalEl.textContent = formatPrice(total);
  footer.style.display = 'block';
  updateCartBadge();
}

function checkoutCart() {
  if (cart.length === 0) return;

  let message = `Hello, I would like to order the following items:\n\n`;
  let total = 0;

  cart.forEach((item, i) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    message += `${i + 1}. ${item.name}\n`;
    message += `   Size: ${item.size}\n`;
    message += `   Variant: ${item.variant}\n`;
    message += `   Qty: ${item.qty} × ${formatPrice(item.price)} = ${formatPrice(itemTotal)}\n\n`;
  });

  message += `——————————————\n`;
  message += `Total: ${formatPrice(total)}\n`;
  message += `Total Items: ${cart.reduce((s, i) => s + i.qty, 0)}\n\n`;
  message += `Please confirm availability and delivery details. Thank you!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ============ Category Filter ============
function renderCategoryFilter() {
  const container = document.getElementById('category-filter');
  if (!container) return;

  container.innerHTML = categories.map(cat => {
    const count = cat.id === 'all'
      ? products.length
      : products.filter(p => p.category === cat.id).length;

    if (count === 0 && cat.id !== 'all') return '';

    return `
      <button class="category-tab ${cat.id === activeCategory ? 'active' : ''}"
              onclick="filterByCategory('${cat.id}')"
              data-category="${cat.id}">
        ${cat.icon} ${cat.name}
        <span class="cat-count">${count}</span>
      </button>
    `;
  }).join('');
}

function filterByCategory(categoryId) {
  activeCategory = categoryId;

  // Update active state on tabs
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === categoryId);
  });

  renderCatalogue();
}

// ============ Render Best Sellers ============
function renderBestSellers() {
  const container = document.getElementById('bestsellers-grid');
  if (!container) return;

  const bestSellers = products.filter(p => p.bestseller);

  container.innerHTML = bestSellers.map((product, index) => `
    <div class="product-card reveal reveal-delay-${index + 1}">
      <div class="product-img-wrap relative">
        ${product.discount ? `<span class="discount-badge">-${product.discount}%</span>` : ''}
        <span class="bestseller-badge">Best Seller</span>
        <img src="${product.image}" alt="${product.name}" class="w-full aspect-square object-cover" loading="lazy">
        <div class="overlay-actions">
          <button onclick="openModal(${product.id})" class="btn-primary text-sm !py-2 !px-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            View Details
          </button>
        </div>
      </div>
      <div class="p-5">
        <div class="flex items-center gap-2 mb-2">
          <span class="stars text-sm">${generateStars(product.rating)}</span>
          <span class="text-xs text-gray-400">(${product.reviews})</span>
        </div>
        <h3 class="font-bold text-lg mb-1 text-gray-900">${product.name}</h3>
        <p class="text-sm text-gray-500 mb-3 line-clamp-2">${product.description}</p>
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xl font-bold text-gray-900">${formatPrice(product.price)}</span>
          <span class="text-sm text-gray-400 line-through">${formatPrice(product.oldPrice)}</span>
        </div>
        ${product.stock <= 10 ? `<p class="stock-warning mb-3">Only ${product.stock} left in stock!</p>` : ''}
        <div class="flex gap-2">
          <button onclick="addToCart(${product.id})" class="btn-add-cart flex-1 justify-center">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
            Add to Cart
          </button>
          <a href="${buildWhatsAppLink(product)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp flex-1 justify-center text-sm !py-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Buy Now
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// ============ Render Product Catalogue ============
function renderCatalogue() {
  const container = document.getElementById('catalogue-grid');
  if (!container) return;

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-products">
        <div class="no-products-icon">🔍</div>
        <p class="font-semibold text-gray-500 mb-1">No products found</p>
        <p class="text-sm">Try selecting a different category</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((product, index) => `
    <div class="product-card reveal reveal-delay-${(index % 4) + 1}">
      <div class="product-img-wrap relative">
        ${product.discount ? `<span class="discount-badge">-${product.discount}%</span>` : ''}
        ${product.bestseller ? `<span class="bestseller-badge">Popular</span>` : ''}
        <img src="${product.image}" alt="${product.name}" class="w-full aspect-square object-cover" loading="lazy">
        <div class="overlay-actions">
          <button onclick="openModal(${product.id})" class="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
            Quick View
          </button>
          <button onclick="addToCart(${product.id})" class="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700 transition-colors">
            + Add to Cart
          </button>
        </div>
      </div>
      <div class="p-4">
        <div class="flex items-center gap-2 mb-1">
          <span class="stars text-xs">${generateStars(product.rating)}</span>
          <span class="text-xs text-gray-400">(${product.reviews})</span>
        </div>
        <h3 class="font-semibold text-sm mb-2 text-gray-900 truncate">${product.name}</h3>
        <div class="flex items-center gap-2 mb-3">
          <span class="text-lg font-bold text-gray-900">${formatPrice(product.price)}</span>
          <span class="text-xs text-gray-400 line-through">${formatPrice(product.oldPrice)}</span>
        </div>
        ${product.stock <= 15 ? `<p class="stock-warning mb-2 text-xs">Only ${product.stock} left!</p>` : ''}
        <button onclick="addToCart(${product.id})" class="btn-add-cart w-full justify-center text-xs !py-2">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');

  // Re-trigger scroll reveal for new elements
  requestAnimationFrame(() => initScrollReveal());
}

// ============ Product Modal ============
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-modal');
  const content = document.getElementById('modal-product-content');

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
      <!-- Product Image -->
      <div class="bg-gray-50 p-8 md:p-12 flex items-center justify-center">
        <img src="${product.image}" alt="${product.name}" class="w-full max-w-sm rounded-xl" id="modal-product-image">
      </div>

      <!-- Product Details -->
      <div class="p-6 md:p-8 lg:p-10">
        <div class="flex items-center gap-2 mb-3">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="text-sm text-gray-500">(${product.reviews} reviews)</span>
        </div>

        <h2 class="font-display text-2xl md:text-3xl font-bold mb-2">${product.name}</h2>

        <div class="flex items-center gap-3 mb-4">
          <span class="text-3xl font-bold">${formatPrice(product.price)}</span>
          <span class="text-lg text-gray-400 line-through">${formatPrice(product.oldPrice)}</span>
          <span class="bg-red-100 text-red-600 text-sm font-bold px-3 py-1 rounded-full">Save ${product.discount}%</span>
        </div>

        ${product.stock <= 15 ? `
          <div class="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-5">
            <p class="text-amber-700 font-semibold text-sm">🔥 Hurry! Only ${product.stock} items left in stock</p>
          </div>
        ` : ''}

        <p class="text-gray-600 leading-relaxed mb-6">${product.description}</p>

        <!-- Features -->
        <div class="mb-6">
          <h4 class="font-semibold text-sm text-gray-900 mb-3 uppercase tracking-wider">Key Features</h4>
          <ul class="space-y-2">
            ${product.features.map(f => `
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                ${f}
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Size Selector -->
        <div class="mb-5">
          <h4 class="font-semibold text-sm text-gray-900 mb-3 uppercase tracking-wider">Size</h4>
          <div class="flex flex-wrap gap-2" id="modal-sizes">
            ${product.sizes.map((size, i) => `
              <button class="option-btn ${i === 0 ? 'selected' : ''}" onclick="selectOption(this, 'modal-sizes')" data-value="${size}">${size}</button>
            `).join('')}
          </div>
        </div>

        <!-- Variant Selector -->
        <div class="mb-5">
          <h4 class="font-semibold text-sm text-gray-900 mb-3 uppercase tracking-wider">Variant</h4>
          <div class="flex flex-wrap gap-2" id="modal-variants">
            ${product.variants.map((v, i) => `
              <button class="option-btn ${i === 0 ? 'selected' : ''}" onclick="selectOption(this, 'modal-variants')" data-value="${v}">${v}</button>
            `).join('')}
          </div>
        </div>

        <!-- Quantity -->
        <div class="mb-6">
          <h4 class="font-semibold text-sm text-gray-900 mb-3 uppercase tracking-wider">Quantity</h4>
          <div class="flex items-center gap-3">
            <button class="qty-btn" onclick="changeQty(-1)">−</button>
            <input type="number" id="modal-qty" class="qty-input" value="1" min="1" max="99">
            <button class="qty-btn" onclick="changeQty(1)">+</button>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-3">
          <button onclick="addToCartFromModal(${product.id})" class="btn-add-cart flex-1 justify-center !py-3 !text-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
            Add to Cart
          </button>
          <button onclick="buyViaWhatsApp(${product.id})" class="btn-whatsapp flex-1 justify-center">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Buy Now
          </button>
        </div>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I have a question about: ${product.name}`)}" target="_blank" rel="noopener noreferrer" class="btn-outline w-full justify-center mt-3 text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Ask a Question
        </a>
      </div>
    </div>
  `;

  modal.dataset.productId = productId;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function addToCartFromModal(productId) {
  const sizeEl = document.querySelector('#modal-sizes .option-btn.selected');
  const variantEl = document.querySelector('#modal-variants .option-btn.selected');
  const qty = parseInt(document.getElementById('modal-qty').value) || 1;

  const size = sizeEl ? sizeEl.dataset.value : null;
  const variant = variantEl ? variantEl.dataset.value : null;

  addToCart(productId, variant, size, qty);
  closeModal();
  setTimeout(() => toggleCart(), 300);
}

function closeModal() {
  const modal = document.getElementById('product-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function selectOption(btn, containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function changeQty(delta) {
  const input = document.getElementById('modal-qty');
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(99, val + delta));
  input.value = val;
}

function buyViaWhatsApp(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const sizeEl = document.querySelector('#modal-sizes .option-btn.selected');
  const variantEl = document.querySelector('#modal-variants .option-btn.selected');
  const qty = parseInt(document.getElementById('modal-qty').value) || 1;

  const size = sizeEl ? sizeEl.dataset.value : product.sizes[0];
  const variant = variantEl ? variantEl.dataset.value : product.variants[0];

  const link = buildWhatsAppLink(product, variant, size, qty);
  window.open(link, '_blank');
}

// ============ FAQ Accordion ============
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}

// ============ Mobile Menu ============
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');

  function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu());
  });
}

// ============ Sticky Navbar ============
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ============ Scroll Reveal ============
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
}

// ============ Countdown Timer ============
function initCountdown() {
  const now = new Date();
  const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

  function updateTimer() {
    const diff = endTime - new Date();
    if (diff <= 0) {
      endTime.setDate(endTime.getDate() + 1);
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');

    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// ============ Smooth Scroll ============
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ============ Modal Events ============
function initModalEvents() {
  const modal = document.getElementById('product-modal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      const drawer = document.getElementById('cart-drawer');
      if (drawer.classList.contains('active')) toggleCart();
    }
  });
}

// ============ Counter Animation ============
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const target = parseInt(entry.target.dataset.count);
        const suffix = entry.target.dataset.suffix || '';
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = Math.floor(current).toLocaleString() + suffix;
        }, 20);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ============ Initialize Everything ============
document.addEventListener('DOMContentLoaded', () => {
  renderBestSellers();
  renderCategoryFilter();
  renderCatalogue();
  initFAQ();
  initMobileMenu();
  initNavbar();
  initSmoothScroll();
  initModalEvents();
  initCountdown();
  updateCartBadge();

  requestAnimationFrame(() => {
    initScrollReveal();
    initCounterAnimation();
  });
});
