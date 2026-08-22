export const business = {
  name: "Sterlingone Hospitality",
  tagline: "Rooms & Stays on the Islamabad motorway",

address: {
  line1: "Plot # N-5, St # 27",
  line2: "New Block C Ext, Shalimar Town",
  city: "Islamabad",
  country: "Pakistan",
  mapQuery: "JV34+QJG Islamabad, Pakistan",
},

  // 3. PHONE / WHATSAPP — placeholders, confirm real numbers
  phone: {
    display: "0339-1105147",
    href: "+923391105147", // digits only, no spaces, for tel:/wa.me links
  },
  whatsapp: {
    display: "+92339-1105147",
    href: "+923391105147", // digits only, no leading +, for wa.me links
  },
  email: "info@sterling.net",

  hours: "Open 24 hours, every day of the week",

  // 5. YEARS IN SERVICE — placeholder, confirm founding year
  yearsInService: 15,
  foundedYearLabel: "15 Years", // shown in stats strip

  // 4. ROOMS — placeholders, confirm real room count + pricing
  stats: [
    { value: "15+", label: "Years on the motorway" },
    { value: "24/7", label: "Front Desk, Always Open" },
    { value: "30+", label: "Rooms Ready Nightly" },
    { value: "10k+", label: "Guests Hosted" },
  ],
};

export type RoomType = {
  slug: string;
  name: string;
  bestFor: string;
  description: string;
  priceFrom: string; // placeholder pricing — confirm real rates
  priceUnit: string;
  amenities: string[];
  image: string;
};

// 4. ROOM PRICING — placeholders, confirm real nightly rates
export const rooms: RoomType[] = [
  {
    slug: "standard",
    name: "Standard Room",
    bestFor: "Solo travelers or a quick overnight stay",
    description:
      "A single or double bed, attached bathroom, and everything needed for a comfortable, no-fuss night on the road.",
    priceFrom: "PKR 3,500",
    priceUnit: "/ night",
    amenities: ["Fan/AC", "Attached Bathroom", "Wi-Fi", "Clean Linens", "Nearby Parking"],
    image: "/images/1.png",
  },
  {
    slug: "family",
    name: "Family Room",
    bestFor: "Families or small groups traveling together",
    description:
      "Extra space and additional bedding, designed to comfortably host 3\u20134 guests without feeling cramped.",
    priceFrom: "PKR 6,000",
    priceUnit: "/ night",
    amenities: ["Fan/AC", "Attached Bathroom", "Wi-Fi", "Clean Linens", "Nearby Parking"],
    image: "/images/2.png",
  },
  {
    slug: "deluxe",
    name: "Deluxe Room",
    bestFor: "Guests who want extra comfort",
    description:
      "Our most spacious option, with upgraded furnishings and amenities for a higher standard of stay.",
    priceFrom: "PKR 8,500",
    priceUnit: "/ night",
    amenities: ["Fan/AC", "Attached Bathroom", "Wi-Fi", "Clean Linens", "Nearby Parking"],
    image: "/images/3.png",
  },
];

export const generalAmenities = [
  "24-hour front desk and check-in — arrive any time, day or night",
  "On-site parking, including space for larger transport vehicles",
  "Daily housekeeping and fresh linens",
  "Security staff present on the property at all times",
  "Nearby food and dining options for guests",
];

export const testimonials = [
  {
    quote:
      "We stopped here on the way to Karachi. Clean room, honest price, and the staff didn't mind that we arrived past midnight.",
    name: "Featured Guest",
    detail: "en route from Lahore",
  },
  {
    quote:
      "My family has stayed here twice now. It feels the same every time — and that consistency is exactly why we come back.",
    name: "Featured Guest",
    detail: "returning visitor",
  },
];

export const whyChooseUs = [
  {
    title: "Starling hospitality on This Road",
    text: "A history built one satisfied guest at a time, not overnight marketing.",
    icon: "route",
  },
  {
    title: "Always Open, Always Ready",
    text: "motorway travel doesn't run on a schedule, and neither do we.",
    icon: "clock",
  },
  {
    title: "Straightforward Pricing",
    text: "The price you're quoted is the price you pay. No surprises at checkout.",
    icon: "tag",
  },
  {
    title: "Room for Every Traveler",
    text: "Solo drivers, families, and groups are all welcome and accommodated.",
    icon: "users",
  },
  {
    title: "A Genuinely Secure Stay",
    text: "On-site staff and a gated, well-lit property, day and night.",
    icon: "shield",
  },
  {
    title: "Easy to Find, Easy to Reach",
    text: "Directly on the Islamabad motorway, with no confusing detours after a long drive.",
    icon: "signpost",
  },
];

export const whatSetsUsApart = [
  {
    title: "Family-Run, Not Corporate",
    text: "Every decision is made by people personally invested in each guest's experience, not a distant head office.",
  },
  {
    title: "Deep Local Knowledge",
    text: "Starling's presence on this stretch of motorway means genuine familiarity with the area, the routes, and the people who travel them.",
  },
  {
    title: "Consistency You Can Rely On",
    text: "Long-standing guests and transport companies return specifically because the standard hasn't slipped in Starling's history.",
  },
  {
    title: "True Accessibility",
    text: "Direct motorway frontage means guests find us easily, without side streets or late-night confusion.",
  },
];
