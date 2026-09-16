// All content below is placeholder copy and placeholder imagery (Unsplash),
// meant to be swapped for real restaurant content, photography and copy.
// The menu itself (src/lib/data.ts MENU export) reflects the real, current menu.

export const SITE = {
  name: "The Eye Lounge",
  shortName: "The Eye Lounge",
  tagline: "Great cocktails, good food, late nights in Kigali.",
  description:
    "The Eye Lounge is a bar in Kigali serving handcrafted cocktails and food at the bar, open late into the night.",
  phone: "+250 796 710 366",
  email: "hello@theeyelounge.rw",
  address: {
    line1: "607 KG 601 St",
    line2: "Kigali, Rwanda",
  },
  hours: [
    { day: "Monday – Thursday", time: "4:00 PM – 12:00 AM" },
    { day: "Friday – Saturday", time: "4:00 PM – 1:00 AM" },
    { day: "Sunday", time: "4:00 PM – 11:00 PM" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "X", href: "https://x.com" },
  ],
  mapEmbedSrc:
    "https://www.google.com/maps?q=607+KG+601+St+Kigali+Rwanda&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
] as const;

export type MenuItem = {
  name: string;
  description?: string;
  note?: string;
  price?: string;
  priceLabel?: string;
  price2?: string;
  price2Label?: string;
  tag?: string;
};

export type MenuSubsection = {
  title?: string;
  note?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  title: string;
  group: "Food" | "Coffee & Soft Drinks" | "Bar";
  intro?: string;
  sections: MenuSubsection[];
};

export const MENU: MenuCategory[] = [
  // ---------- Food ----------
  {
    id: "amuse-bouches",
    title: "Amuse-Bouches",
    group: "Food",
    sections: [
      {
        items: [
          {
            name: "Fried Sambaza with Aioli Sauce",
            description:
              "Crispy fried Sambaza fish from Lake Kivu, served with a zesty, homemade aioli sauce. Perfectly golden and irresistibly flavorful.",
            price: "RWF 5,500",
          },
        ],
      },
      {
        title: "Wood Board of Cold Cuts",
        note: "Cheese and sausages served with Dijon mustard.",
        items: [
          { name: "Cheddar Cheese", price: "RWF 8,000" },
          { name: "Gouda Cheese", price: "RWF 5,500" },
        ],
      },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    group: "Food",
    sections: [
      {
        title: "Hot Starters",
        items: [
          {
            name: "Fish Soup",
            description:
              "A delightful medley of fresh fish, vibrant vegetables, and aromatic herbs served with bread.",
            price: "RWF 5,500",
          },
          {
            name: "Mushroom Soup",
            description:
              "A warm bowl of soup, deliciously creamy with tender bites of mushroom served with bread.",
            price: "RWF 4,500",
          },
          {
            name: "Vegetable Soup",
            description:
              "A comforting blend of fresh seasonal vegetables simmered in a flavorful broth served with bread.",
            price: "RWF 4,500",
          },
          {
            name: "Butternut Squash Soup",
            description:
              "Roasted squash, aromatic spices, and a touch of cream served with bread.",
            price: "RWF 4,000",
          },
          {
            name: "Chicken Soup",
            description:
              "A cherished recipe featuring juicy chicken and a hearty vegetable mix served with bread.",
            price: "RWF 5,000",
          },
        ],
      },
      {
        title: "Cold Starters",
        items: [
          {
            name: "Seasonal Salad",
            description:
              "Fresh, locally sourced vegetables and fruits with a tantalizing dressing that highlights their natural sweetness and crispness.",
            price: "RWF 6,000",
          },
          {
            name: "Caesar Salad",
            description:
              "A timeless classic — crisp lettuce, savory cheese, crunchy garlic croutons, and our signature Caesar dressing.",
            price: "RWF 6,000",
          },
          {
            name: "Chef's Salad",
            description:
              "Ham, ripe avocado, zesty olives, fresh mozzarella, and crunchy vegetables on crisp greens, served with a vinaigrette.",
            price: "RWF 6,500",
          },
        ],
      },
    ],
  },
  {
    id: "chicken",
    title: "Chicken",
    group: "Food",
    sections: [
      {
        items: [
          {
            name: "Grilled Chicken Leg",
            description:
              "Tender chicken leg marinated with a secret blend of spices and char-grilled to smoky perfection.",
            price: "RWF 9,000",
          },
          {
            name: "Chicken Curry",
            description:
              "Succulent chicken simmered in a rich, aromatic and flavorful curry sauce.",
            price: "RWF 8,500",
          },
          {
            name: "Chicken Cordon Bleu",
            description:
              "Tender chicken breast filled with cheese and ham, lightly breaded and fried until golden brown.",
            price: "RWF 12,000",
          },
          {
            name: "Chicken Stew",
            description:
              "Tender chicken simmered with hearty vegetables in a rich, flavorful broth — a comforting classic.",
            price: "RWF 9,000",
          },
        ],
      },
    ],
  },
  {
    id: "fish",
    title: "Fish",
    group: "Food",
    sections: [
      {
        items: [
          {
            name: "Pan-Seared Tilapia Fillet",
            description:
              "A buttery tilapia fillet pan-seared to perfection — a crispy exterior and a tender, flaky interior.",
            price: "RWF 15,000",
          },
          {
            name: "Fish Florentine",
            description:
              "Tender, flaky tilapia fillet on a bed of sautéed spinach in a creamy sauce.",
            price: "RWF 12,000",
          },
        ],
      },
    ],
  },
  {
    id: "beef",
    title: "Beef",
    group: "Food",
    sections: [
      {
        items: [
          {
            name: "Tomahawk Steak",
            description:
              "A bone-in rib-eye, grilled to perfection — a carnivorous delight that leaves you craving more.",
            note: "More than 800 g",
            price: "RWF 16,000",
          },
          {
            name: "Filet Mignon",
            description:
              "A tender, succulent cut of premium beef, perfectly seasoned and seared, with peppercorn sauce.",
            price: "RWF 13,000",
          },
          {
            name: "Stir-Fried Beef",
            description:
              "Thinly sliced, tender beef with vibrant stir-fried vegetables and an aromatic blend of savory sauces and spices.",
            price: "RWF 10,000",
          },
          {
            name: "Beef Stew",
            description:
              "Tender chunks of beef slow-cooked with hearty vegetables in a rich, savory broth. Comfort food at its finest.",
            price: "RWF 9,500",
          },
          {
            name: "Beef Sliders",
            description:
              "Miniature burgers crafted with premium ground beef, soft mini buns, melted cheese, lettuce, tomatoes, and caramelized onions.",
            price: "RWF 5,000",
          },
        ],
      },
      {
        title: "Choice of One Sauce",
        note: "No additional cost — Red wine · Mushroom · Provençal · Mustard with peppercorn · Tartar · Chimichurri",
        items: [],
      },
    ],
  },
  {
    id: "pork",
    title: "Pork",
    group: "Food",
    sections: [
      {
        items: [
          {
            name: "Roasted Pork Ribs",
            description:
              "A succulent rack of pork ribs, expertly seasoned with a delectable blend of spices and slow-roasted to perfection.",
            price: "RWF 12,000",
          },
          {
            name: "Pork Stir-Fry",
            description:
              "Succulent pork stir-fried with vibrant vegetables — a delicious meal packed with flavor.",
            price: "RWF 10,000",
          },
        ],
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    group: "Food",
    sections: [
      {
        items: [
          {
            name: "Creamy Chicken Pasta",
            description:
              "Tender pieces of fried chicken with al dente penne pasta in a luscious, velvety cream sauce.",
            price: "RWF 9,000",
          },
          {
            name: "Pesto Pasta",
            description:
              "Perfectly cooked pasta twirled with vibrant green pesto — a blend of fresh basil, nuts, garlic, and cheese.",
            price: "RWF 7,000",
          },
          {
            name: "Carbonara Pasta",
            description:
              "Classic Italian pasta with a creamy sauce, crispy bacon, and a touch of cheese. Rich, savory, and indulgent.",
            price: "RWF 9,500",
          },
          {
            name: "Spaghetti & Meatballs",
            description:
              "Classic spaghetti topped with homemade pork-and-beef meatballs and rich marinara sauce.",
            price: "RWF 8,500",
          },
        ],
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    group: "Food",
    sections: [
      {
        items: [
          { name: "French Fries", price: "RWF 2,000" },
          { name: "Potato Wedges", price: "RWF 2,500" },
          { name: "Pomme Nature", description: "Boiled potatoes.", price: "RWF 2,000" },
          { name: "Mashed Potatoes", price: "RWF 2,500" },
          { name: "Fried Plantain (Imizuzu)", price: "RWF 3,500" },
          { name: "Green Banana", description: "Fried or grilled.", price: "RWF 2,000" },
          { name: "Fried Rice", price: "RWF 2,500" },
          { name: "Vegetable Rice", price: "RWF 2,500" },
          { name: "Ugali", description: "Cornmeal or cassava.", price: "RWF 2,000" },
          { name: "Isombe", description: "Cassava leaves.", price: "RWF 2,500" },
          { name: "Creamy Spinach", price: "RWF 2,000" },
          { name: "Mixed Vegetables", price: "RWF 2,000" },
          { name: "Sukuma Wiki", description: "Collard greens.", price: "RWF 1,500" },
          { name: "Simple Salad", price: "RWF 2,000" },
          { name: "Kachumbari", description: "Served with an avocado.", price: "RWF 2,000" },
        ],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    group: "Food",
    sections: [
      {
        items: [
          { name: "Ice Cream", note: "One scoop.", price: "RWF 1,500" },
          { name: "Waffles & Ice Cream", price: "RWF 5,000" },
          { name: "Crêpes au Chocolat", price: "RWF 2,500" },
          { name: "Fruit Salad", price: "RWF 7,000" },
          { name: "Fruit Platter", price: "RWF 7,500" },
        ],
      },
    ],
  },
  {
    id: "small-bites",
    title: "Small Bites",
    group: "Food",
    sections: [
      {
        items: [
          { name: "Meatballs", note: "4 pieces.", price: "RWF 3,500" },
          { name: "Chicken Lollipops", note: "4 pieces.", price: "RWF 5,000" },
          { name: "Chicken Wings", note: "4 pieces.", price: "RWF 4,500" },
        ],
      },
      {
        title: "Skewers",
        note: "3 mini skewers",
        items: [
          { name: "Beef", price: "RWF 5,000" },
          { name: "Chicken", price: "RWF 4,500" },
          { name: "Fish", price: "RWF 6,000" },
          { name: "Sausages", price: "RWF 3,500" },
        ],
      },
    ],
  },
  {
    id: "group-menu",
    title: "Group Menu",
    group: "Food",
    sections: [
      {
        items: [
          {
            name: "Oven-Roasted Chicken (Whole)",
            description: "Golden, tender, and packed with flavor — perfect for sharing.",
            price: "RWF 17,000",
          },
          {
            name: "Full Pilau Platter with Chicken",
            description: "Large serving of pilau with pieces of chicken.",
            price: "RWF 25,000",
          },
          {
            name: "Half Pilau Platter with Chicken",
            description: "Medium serving of pilau with pieces of chicken.",
            price: "RWF 17,000",
          },
          {
            name: "Beef Pilau Platter",
            description: "Large serving of pilau with pieces of tender beef.",
            price: "RWF 20,000",
          },
          {
            name: "Carnivore Platter",
            description: "Wings, sausages, chicken skewers, beef, and fish fingers.",
            price: "RWF 25,000",
          },
          {
            name: "Roasted Beef Ribs",
            description:
              "A succulent and juicy rack of beef ribs, expertly seasoned and slow-roasted to perfection.",
            price: "RWF 15,500",
          },
        ],
      },
    ],
  },
  {
    id: "kids-menu",
    title: "Kids Menu",
    group: "Food",
    sections: [
      {
        items: [
          { name: "Chicken Nuggets with Chips", price: "RWF 6,500" },
          { name: "Fish and Chips", price: "RWF 7,500" },
          { name: "Kids Beef Spaghetti", price: "RWF 5,500" },
          { name: "Hot Dogs and Chips", price: "RWF 7,000" },
        ],
      },
    ],
  },

  // ---------- Coffee & Soft Drinks ----------
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    group: "Coffee & Soft Drinks",
    sections: [
      {
        items: [
          { name: "African Coffee", price: "RWF 3,000" },
          { name: "Americano", price: "RWF 2,500" },
          { name: "Black Coffee", price: "RWF 2,500" },
          { name: "Cappuccino", price: "RWF 3,000" },
          { name: "Espresso", price: "RWF 1,500" },
          { name: "Hot Chocolate", price: "RWF 3,500" },
          { name: "Latte", price: "RWF 3,500" },
          { name: "Macchiato", price: "RWF 3,000" },
          { name: "Mocha", price: "RWF 3,000" },
          { name: "Vanilla Latte", price: "RWF 3,500" },
        ],
      },
    ],
  },
  {
    id: "hot-tea",
    title: "Hot Tea",
    group: "Coffee & Soft Drinks",
    sections: [
      {
        items: [
          { name: "African Tea", price: "RWF 3,500" },
          { name: "Black Tea", price: "RWF 2,000" },
          { name: "Hot Milk", price: "RWF 3,000" },
          { name: "Spiced Tea", price: "RWF 3,000" },
          { name: "Green Tea", price: "RWF 2,500" },
          { name: "Hibiscus Tea", price: "RWF 2,500" },
        ],
      },
    ],
  },
  {
    id: "iced-drinks",
    title: "Iced Drinks",
    group: "Coffee & Soft Drinks",
    sections: [
      {
        items: [
          { name: "Iced Americano", price: "RWF 3,000" },
          { name: "Iced Cappuccino", price: "RWF 3,500" },
          { name: "Iced Chocolate", price: "RWF 3,000" },
          { name: "Iced Vanilla Latte", price: "RWF 4,000" },
          { name: "Iced Mocha", price: "RWF 3,000" },
          { name: "Iced Tea", price: "RWF 3,500" },
          { name: "Cocktail", price: "RWF 5,500" },
        ],
      },
    ],
  },
  {
    id: "fresh-juice",
    title: "Fresh Juice",
    group: "Coffee & Soft Drinks",
    sections: [
      {
        items: [
          { name: "Mango", price: "RWF 5,500" },
          { name: "Passion", price: "RWF 5,000" },
          { name: "Pineapple", price: "RWF 4,500" },
          { name: "Tree Tomato", price: "RWF 5,000" },
          { name: "Orange Juice", price: "RWF 7,000" },
          { name: "Cocktail", price: "RWF 5,000" },
        ],
      },
    ],
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    group: "Coffee & Soft Drinks",
    sections: [
      {
        items: [
          { name: "Butterscotch", price: "RWF 5,000" },
          { name: "Chocolate", price: "RWF 5,000" },
          { name: "Strawberry", price: "RWF 5,000" },
          { name: "Vanilla", price: "RWF 5,000" },
        ],
      },
    ],
  },
  {
    id: "soft-drinks",
    title: "Soft Drinks",
    group: "Coffee & Soft Drinks",
    sections: [
      {
        items: [
          { name: "Mineral Water", price: "RWF 1,000" },
          { name: "Sparkling Water", price: "RWF 1,500" },
          { name: "Soda", price: "RWF 1,500" },
          { name: "Panache", price: "RWF 1,500" },
          { name: "Red Bull", price: "RWF 4,000" },
        ],
      },
    ],
  },

  // ---------- Bar ----------
  {
    id: "beers-ciders",
    title: "Beers & Ciders",
    group: "Bar",
    sections: [
      {
        items: [
          { name: "Local Beers", price: "RWF 2,000" },
          { name: "Heineken 0.0", price: "RWF 2,500" },
          { name: "Bavaria 0.0", price: "RWF 3,000" },
          { name: "Guinness", price: "RWF 2,500" },
          { name: "Leffe", price: "RWF 5,000" },
          { name: "Carlsberg", price: "RWF 4,000" },
          { name: "Tusker Malt", price: "RWF 2,500" },
          { name: "Tusker Lite Cannette", price: "RWF 3,000" },
          { name: "Tusker Lite", price: "RWF 3,000" },
          { name: "Tusker Lager", price: "RWF 2,500" },
          { name: "Smirnoff Ice", price: "RWF 2,500" },
          { name: "Guarana", price: "RWF 3,500" },
          { name: "Savana", price: "RWF 5,000" },
        ],
      },
    ],
  },
  {
    id: "whiskies",
    title: "Whiskies",
    group: "Bar",
    intro: "Bottle and shot pricing.",
    sections: [
      {
        title: "Single Malts",
        items: [
          { name: "Glenfiddich 12 yrs", price: "RWF 180,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
          { name: "Glenfiddich 15 yrs", price: "RWF 230,000", priceLabel: "Bottle", price2: "RWF 10,000", price2Label: "Shot" },
          { name: "Glenfiddich 18 yrs", price: "RWF 250,000", priceLabel: "Bottle", price2: "RWF 12,000", price2Label: "Shot" },
          { name: "Glenlivet 12 yrs", price: "RWF 160,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
          { name: "Glenlivet 15 yrs", price: "RWF 220,000", priceLabel: "Bottle", price2: "RWF 10,000", price2Label: "Shot" },
          { name: "Glenmorangie 10 yrs", price: "RWF 160,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
          { name: "Glenmorangie 18 yrs", price: "RWF 500,000", priceLabel: "Bottle", note: "Bottle only" },
        ],
      },
      {
        title: "Blended Scotch",
        items: [
          { name: "Ballantine", price: "RWF 55,000", priceLabel: "Bottle", price2: "RWF 4,000", price2Label: "Shot" },
          { name: "Chivas Regal 12 yrs", price: "RWF 90,000", priceLabel: "Bottle", price2: "RWF 6,000", price2Label: "Shot" },
          { name: "Chivas Regal 18 yrs", price: "RWF 200,000", priceLabel: "Bottle", price2: "RWF 10,000", price2Label: "Shot" },
          { name: "JW Red Label", price: "RWF 45,000", priceLabel: "Bottle", price2: "RWF 3,500", price2Label: "Shot" },
          { name: "JW Black Label", price: "RWF 95,000", priceLabel: "Bottle", price2: "RWF 6,000", price2Label: "Shot" },
          { name: "JW Double Black", price: "RWF 150,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
          { name: "Grant's", price: "RWF 50,000", priceLabel: "Bottle", price2: "RWF 3,500", price2Label: "Shot" },
        ],
      },
      {
        title: "Other Whiskies",
        items: [
          { name: "Jack Daniels", price: "RWF 90,000", priceLabel: "Bottle", price2: "RWF 6,000", price2Label: "Shot" },
          { name: "Jack Daniels Honey", price: "RWF 95,000", priceLabel: "Bottle", price2: "RWF 6,000", price2Label: "Shot" },
          { name: "Jameson 1L", price: "RWF 65,000", priceLabel: "Bottle", price2: "RWF 4,500", price2Label: "Shot" },
          { name: "Jameson Black Barrel", price: "RWF 90,000", priceLabel: "Bottle", price2: "RWF 6,000", price2Label: "Shot" },
        ],
      },
    ],
  },
  {
    id: "vodka",
    title: "Vodka",
    group: "Bar",
    intro: "Bottle and shot pricing.",
    sections: [
      {
        items: [
          { name: "Absolut Vodka", price: "RWF 60,000", priceLabel: "Bottle", price2: "RWF 4,000", price2Label: "Shot" },
          { name: "Absolut Citron", price: "RWF 60,000", priceLabel: "Bottle", price2: "RWF 4,000", price2Label: "Shot" },
          { name: "Absolut Raspberry", price: "RWF 60,000", priceLabel: "Bottle", price2: "RWF 4,000", price2Label: "Shot" },
          { name: "Smirnoff Vodka", price: "RWF 35,000", priceLabel: "Bottle", price2: "RWF 3,500", price2Label: "Shot" },
          { name: "Skyy Vodka", price: "RWF 50,000", priceLabel: "Bottle", price2: "RWF 3,500", price2Label: "Shot" },
          { name: "Grey Goose", price: "RWF 150,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
          { name: "Belvedere", price: "RWF 150,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
          { name: "Cîroc", price: "RWF 160,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
        ],
      },
    ],
  },
  {
    id: "gin",
    title: "Gin",
    group: "Bar",
    intro: "Bottle and shot pricing.",
    sections: [
      {
        items: [
          { name: "Beefeater", price: "RWF 60,000", priceLabel: "Bottle", price2: "RWF 4,000", price2Label: "Shot" },
          { name: "Beefeater Pink", price: "RWF 55,000", priceLabel: "Bottle", price2: "RWF 4,000", price2Label: "Shot" },
          { name: "Gordon's", price: "RWF 60,000", priceLabel: "Bottle", price2: "RWF 4,000", price2Label: "Shot" },
          { name: "Bombay Sapphire", price: "RWF 90,000", priceLabel: "Bottle", price2: "RWF 6,000", price2Label: "Shot" },
          { name: "Gilbey's", price: "RWF 30,000", priceLabel: "Bottle", price2: "RWF 3,000", price2Label: "Shot" },
          { name: "Hendrick's", price: "RWF 180,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
          { name: "Bulldog", price: "RWF 80,000", priceLabel: "Bottle", price2: "RWF 5,000", price2Label: "Shot" },
        ],
      },
    ],
  },
  {
    id: "cognac",
    title: "Cognac",
    group: "Bar",
    intro: "Bottle and shot pricing.",
    sections: [
      {
        items: [
          { name: "Hennessy V.S.", price: "RWF 200,000", priceLabel: "Bottle", price2: "RWF 9,000", price2Label: "Shot" },
          { name: "Hennessy V.S.O.P", price: "RWF 250,000", priceLabel: "Bottle", price2: "RWF 12,000", price2Label: "Shot" },
          { name: "Martell V.S.", price: "RWF 160,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
          { name: "Martell V.S.O.P", price: "RWF 210,000", priceLabel: "Bottle", price2: "RWF 10,000", price2Label: "Shot" },
          { name: "Rémy Martin V.S.O.P", price: "RWF 240,000", priceLabel: "Bottle", price2: "RWF 10,000", price2Label: "Shot" },
          { name: "Courvoisier V.S.", price: "RWF 160,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
          { name: "Courvoisier V.S.O.P", price: "RWF 200,000", priceLabel: "Bottle", price2: "RWF 10,000", price2Label: "Shot" },
        ],
      },
    ],
  },
  {
    id: "rum",
    title: "Rum",
    group: "Bar",
    intro: "Bottle and shot pricing.",
    sections: [
      {
        items: [
          { name: "Bacardi", price: "RWF 60,000", priceLabel: "Bottle", price2: "RWF 4,000", price2Label: "Shot" },
          { name: "Captain Morgan", price: "RWF 60,000", priceLabel: "Bottle", price2: "RWF 4,000", price2Label: "Shot" },
          { name: "Malibu", price: "RWF 70,000", priceLabel: "Bottle", price2: "RWF 12,000", price2Label: "Glass" },
        ],
      },
    ],
  },
  {
    id: "tequila",
    title: "Tequila",
    group: "Bar",
    intro: "Bottle and shot pricing.",
    sections: [
      {
        items: [
          { name: "Camino Silver", price: "RWF 55,000", priceLabel: "Bottle", price2: "RWF 4,000", price2Label: "Shot" },
          { name: "Olmeca Silver", price: "RWF 70,000", priceLabel: "Bottle", price2: "RWF 5,000", price2Label: "Shot" },
          { name: "Olmeca Gold", price: "RWF 70,000", priceLabel: "Bottle", price2: "RWF 5,000", price2Label: "Shot" },
          { name: "Olmeca Chocolate", price: "RWF 65,000", priceLabel: "Bottle", price2: "RWF 5,000", price2Label: "Shot" },
          { name: "Patrón", price: "RWF 180,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Shot" },
          { name: "Jose Cuervo Silver", price: "RWF 80,000", priceLabel: "Bottle", price2: "RWF 6,000", price2Label: "Shot" },
          { name: "Jose Cuervo Gold", price: "RWF 75,000", priceLabel: "Bottle", price2: "RWF 6,000", price2Label: "Shot" },
        ],
      },
    ],
  },
  {
    id: "liqueurs",
    title: "Liqueurs",
    group: "Bar",
    intro: "Bottle and glass/shot pricing.",
    sections: [
      {
        items: [
          { name: "Amarula", price: "RWF 70,000", priceLabel: "Bottle", price2: "RWF 12,000", price2Label: "Glass" },
          { name: "Cointreau", price: "RWF 95,000", priceLabel: "Bottle", price2: "RWF 5,000", price2Label: "Shot" },
          { name: "Jägermeister", price: "RWF 100,000", priceLabel: "Bottle", price2: "RWF 4,500", price2Label: "Shot" },
          { name: "Baileys", price: "RWF 80,000", priceLabel: "Bottle", price2: "RWF 12,000", price2Label: "Glass" },
          { name: "Martini Bianco", price: "RWF 55,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Glass" },
          { name: "Martini Rosa", price: "RWF 55,000", priceLabel: "Bottle", price2: "RWF 8,000", price2Label: "Glass" },
        ],
      },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    group: "Bar",
    sections: [
      {
        title: "Alcoholic",
        items: [
          { name: "Classic Martini", description: "Gin or vodka, dry vermouth, olive garnish.", price: "RWF 8,000" },
          { name: "Mojito", description: "White rum, fresh mint leaves, lime juice, sugar, soda water.", price: "RWF 8,000" },
          { name: "Margarita", description: "Tequila, lime juice, triple sec, salt rim.", price: "RWF 8,000" },
          { name: "Negroni", description: "Gin, Campari, sweet vermouth, orange twist.", price: "RWF 8,000" },
          { name: "Piña Colada", description: "White rum, coconut cream, pineapple juice, pineapple garnish.", price: "RWF 8,000" },
          { name: "Aperol Spritz", description: "Aperol, Prosecco, soda water, orange slice.", price: "RWF 10,000" },
          { name: "Long Island Iced Tea", description: "Vodka, gin, rum, tequila, triple sec, lemon juice, topped with cola.", price: "RWF 10,000" },
          { name: "Sex on the Beach", description: "Vodka, peach schnapps, orange juice, cranberry juice.", price: "RWF 8,000" },
          { name: "Espresso Martini", description: "Vodka, coffee liqueur, fresh espresso, simple syrup.", price: "RWF 8,000" },
          { name: "Daiquiri", description: "Classic, Orange or Strawberry — white rum, lime juice, simple syrup.", price: "RWF 8,000" },
          { name: "Cosmopolitan", description: "Vodka, triple sec, cranberry juice, lime juice.", price: "RWF 8,000" },
        ],
      },
      {
        title: "Non-Alcoholic",
        items: [
          { name: "Virgin Mojito", description: "Classic, Strawberry or Passion — fresh mint leaves, lemon juice, sugar, soda water.", price: "RWF 5,000" },
          { name: "Tropical Fizz", description: "Pineapple juice, orange juice, grenadine, soda water.", price: "RWF 5,000" },
          { name: "Ginger Lemonade", description: "Fresh ginger juice, lemon juice, honey, soda water.", price: "RWF 5,000" },
        ],
      },
    ],
  },
  {
    id: "shooters",
    title: "Shooters",
    group: "Bar",
    sections: [
      {
        items: [
          { name: "Jägerbomb", description: "Jägermeister & Red Bull.", price: "RWF 7,000" },
          { name: "B-52", description: "Kahlúa, Amarula & Cointreau.", price: "RWF 6,000" },
          { name: "Deep Ocean", description: "Blue Curaçao, vodka, Malibu.", price: "RWF 5,000" },
          { name: "Hemorrhage Brain", description: "Schnapps, Amarula, blue Curaçao & grenadine.", price: "RWF 5,000" },
          { name: "Bob Marley", description: "Zappa, rum, mango juice.", price: "RWF 5,000" },
        ],
      },
    ],
  },
];

export const FEATURED_ITEMS = [
  {
    name: "Tomahawk Steak",
    description: "A bone-in rib-eye, grilled to perfection — more than 800g",
    price: "RWF 16,000",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Pan-Seared Tilapia Fillet",
    description: "Crispy exterior, tender and flaky interior, buttery finish",
    price: "RWF 15,000",
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Espresso Martini",
    description: "Vodka, coffee liqueur, fresh espresso, simple syrup",
    price: "RWF 8,000",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Fried Sambaza with Aioli Sauce",
    description: "Crispy fried Sambaza fish from Lake Kivu, zesty homemade aioli",
    price: "RWF 5,500",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1400&auto=format&fit=crop",
    alt: "Moody bar interior with warm pendant lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop",
    alt: "Bartender pouring a cocktail behind the bar",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1400&auto=format&fit=crop",
    alt: "Close up of a garnished cocktail on the bar top",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
    alt: "Restaurant dining room with candlelight",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
    alt: "Table set for fine dining service",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop",
    alt: "Warm restaurant interior with wood detailing",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop",
    alt: "Bar counter with rows of spirit bottles",
  },
  {
    src: "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=1400&auto=format&fit=crop",
    alt: "Plated dish with garnish on dark tableware",
  },
  {
    src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1400&auto=format&fit=crop",
    alt: "Cocktail with smoke rising from the glass",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Every dish feels considered. The Espresso Martini alone is worth the trip.",
    author: "Kigali Eats",
  },
  {
    quote:
      "One of the most confident new openings this city has seen in years — moody, warm, and exact.",
    author: "Rwanda Living Magazine",
  },
  {
    quote: "The Eye Lounge doesn't just pour drinks, it sets a mood and holds it all night.",
    author: "The Kigali Table",
  },
] as const;

export const PRESS = [
  "Best New Bar — Kigali, 2024",
  "Editor's Pick — Rwanda Living Magazine",
  "Top 10 Cocktail Programs in East Africa",
  "Diners' Choice Award",
] as const;

export const TEAM = [
  {
    name: "Eric Mugisha",
    role: "Head Chef",
    bio: "A decade behind the grill across Kigali kitchens, Eric builds the bar menu around local ingredients and bold, shareable flavor.",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Aline Uwase",
    role: "Bar Director",
    bio: "Aline's cocktail program is built on Rwandan spirits, house-made syrups, and a decade spent behind bars across East Africa.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Patrick Habimana",
    role: "General Manager",
    bio: "Patrick leads the floor with the same precision the bar brings to every pour — warm, exacting hospitality, every night.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
] as const;

export const ABOUT_STORY = {
  eyebrow: "Our Story",
  heading: "Great cocktails, good company, late into the night.",
  paragraphs: [
    "The Eye Lounge opened its doors in Kigali with a simple idea: build a room where the pours are generous, the music is right, and nothing is rushed.",
    "Every cocktail on the list is handcrafted at the bar, built around Rwandan spirits, local fruit and house-made syrups — with food to match, served right where you're sitting.",
    "We're not trying to be everything. We're trying to be the room you come back to — for a second round, a late dinner, or a table full of people you love.",
  ],
  image:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
} as const;
