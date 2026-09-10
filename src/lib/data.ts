// All content below is placeholder copy and placeholder imagery (Unsplash),
// meant to be swapped for real restaurant content, photography and copy.

export const SITE = {
  name: "Cincinati",
  shortName: "Cincinati",
  tagline: "A modern bar & kitchen for slow evenings.",
  description:
    "Cincinati is a moody, upscale bar and restaurant in Kigali serving handcrafted cocktails and a seasonal, fire-driven menu.",
  phone: "+250 788 123 456",
  email: "hello@cincinati.rw",
  address: {
    line1: "KG 9 Ave, Kimihurura",
    line2: "Kigali, Rwanda",
  },
  hours: [
    { day: "Monday – Thursday", time: "5:00 PM – 11:00 PM" },
    { day: "Friday – Saturday", time: "5:00 PM – 1:00 AM" },
    { day: "Sunday", time: "4:00 PM – 10:00 PM" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "X", href: "https://x.com" },
  ],
  mapEmbedSrc:
    "https://www.google.com/maps?q=Kimihurura+Kigali+Rwanda&output=embed",
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
  description: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  intro: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "cocktails",
    title: "Cocktails",
    intro: "Barrel-aged classics and originals built around whiskey, amaro and smoke.",
    items: [
      {
        name: "Smoked Old Fashioned",
        description: "Bourbon, demerara, orange oils, applewood smoke",
        price: "RWF 12,000",
        tag: "Signature",
      },
      {
        name: "Midnight Negroni",
        description: "Navy-strength gin, campari, blue-basil vermouth",
        price: "RWF 10,000",
      },
      {
        name: "Espresso & Oak",
        description: "Aged rum, cold brew, cacao bitters, orange peel",
        price: "RWF 11,000",
        tag: "Signature",
      },
      {
        name: "Leather & Honey",
        description: "Mezcal, honey, smoked salt, grapefruit",
        price: "RWF 11,000",
      },
      {
        name: "Cinder Sour",
        description: "Rye whiskey, blackberry, lemon, egg white",
        price: "RWF 10,000",
      },
      {
        name: "The Ember",
        description: "Barrel-rested manhattan, cherry bitters, torched rosemary",
        price: "RWF 13,000",
        tag: "Signature",
      },
    ],
  },
  {
    id: "food",
    title: "Food",
    intro: "A fire-driven kitchen menu built for sharing, late into the night.",
    items: [
      {
        name: "Charred Octopus",
        description: "White bean purée, chorizo oil, pickled fennel",
        price: "RWF 16,000",
      },
      {
        name: "Oak-Fired Steak Frites",
        description: "8oz flat iron, café de Paris butter, hand-cut fries",
        price: "RWF 24,000",
        tag: "Signature",
      },
      {
        name: "Burnt Honey Carrots",
        description: "Whipped goat cheese, dukkah, mint",
        price: "RWF 9,000",
      },
      {
        name: "Duck Confit Flatbread",
        description: "Fig jam, gruyère, charred scallion",
        price: "RWF 14,000",
      },
      {
        name: "Smoked Short Rib",
        description: "Bone marrow gravy, root vegetable mash",
        price: "RWF 22,000",
        tag: "Signature",
      },
      {
        name: "Cast Iron Cornbread",
        description: "Brown butter, whiskey honey",
        price: "RWF 6,000",
      },
    ],
  },
  {
    id: "wine-spirits",
    title: "Wine & Spirits",
    intro: "A cellar of old-world wines and a whiskey list built over a decade.",
    items: [
      {
        name: "Barolo, Piedmont",
        description: "Bold, tannic, notes of dried cherry and tobacco — glass / bottle",
        price: "RWF 13,000 / 58,000",
      },
      {
        name: "Willamette Pinot Noir",
        description: "Silky, red fruit forward — glass / bottle",
        price: "RWF 11,000 / 45,000",
      },
      {
        name: "Single Barrel Rye",
        description: "House-selected cask, 112 proof",
        price: "RWF 15,000",
        tag: "Signature",
      },
      {
        name: "18-Year Islay Scotch",
        description: "Peat smoke, sea salt, dark honey",
        price: "RWF 23,000",
      },
      {
        name: "Cabernet Sauvignon, Napa",
        description: "Structured, blackcurrant, cedar — glass / bottle",
        price: "RWF 12,000 / 52,000",
      },
      {
        name: "Reserve Añejo Tequila",
        description: "Aged 3 years, vanilla and oak",
        price: "RWF 16,000",
      },
    ],
  },
];

export const FEATURED_ITEMS = [
  {
    name: "Smoked Old Fashioned",
    description: "Bourbon, demerara, orange oils, applewood smoke",
    price: "RWF 12,000",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Oak-Fired Steak Frites",
    description: "8oz flat iron, café de Paris butter, hand-cut fries",
    price: "RWF 24,000",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Charred Octopus",
    description: "White bean purée, chorizo oil, pickled fennel",
    price: "RWF 16,000",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "The Ember",
    description: "Barrel-rested manhattan, cherry bitters, torched rosemary",
    price: "RWF 13,000",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop",
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
      "Every dish feels considered. The Smoked Old Fashioned alone is worth the reservation.",
    author: "Kigali Eats",
  },
  {
    quote:
      "One of the most confident new openings this city has seen in years — moody, warm, and exact.",
    author: "Rwanda Living Magazine",
  },
  {
    quote: "Cincinati doesn't just serve food, it sets a mood and holds it all night.",
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
    name: "Marcus Doyle",
    role: "Executive Chef",
    bio: "Fifteen years behind the line across coastal kitchens, Marcus builds every plate around the fire and the season.",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Elena Ruiz",
    role: "Bar Director",
    bio: "Elena's cocktail program is built on barrel-aging, house bitters, and a decade spent behind bars in New Orleans and Chicago.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "James Whitfield",
    role: "General Manager",
    bio: "James leads the floor with the same precision the kitchen brings to the pass — quiet, warm, exacting hospitality.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
] as const;

export const ABOUT_STORY = {
  eyebrow: "Our Story",
  heading: "Built on fire, wood and patience.",
  paragraphs: [
    "Cincinati opened in 2019 in the heart of Kigali with a simple idea: build a room where the fire is visible, the pours are generous, and nothing is rushed.",
    "Every plate leaving the kitchen passes over live oak and applewood. Every cocktail on the list has been barrel-rested, stirred, or built from house-made bitters and syrups.",
    "We're not trying to be everything. We're trying to be the room you come back to — for a second round, a slow dinner, or a table full of people you love.",
  ],
  image:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
} as const;
