// -----------------------------------------------------------------------------
// The Misty Copeland Foundation — site content
// Edit copy, giving amounts, campaign progress and links here in one place.
// -----------------------------------------------------------------------------

export const SITE = {
  name: "The Misty Copeland Foundation",
  shortName: "MCF",
  tagline: "In a just world, everyone can experience the beauty and power of dance.",
  description:
    "The Misty Copeland Foundation makes ballet more diverse, equitable and accessible — providing opportunities for children in under-resourced communities to engage their bodies, hearts and minds through dance.",
  url: "https://www.mistycopelandfoundation.org",
};

export const SOCIALS = {
  instagram: "https://www.instagram.com/mistycopelandfdn",
  instagramHandle: "@mistycopelandfdn",
  facebook: "https://www.facebook.com/profile.php?id=100095322892478",
};

export const CONTACT = {
  address: "The Interchurch Center, 475 Riverside Drive, Suite 456, New York, NY 10115",
  email: "info@mistycopelandfoundation.org",
  phone: "(212) 817-2350",
  phoneHref: "tel:+12128172350",
};

// The Foundation's live donation platform (NeonCRM).
export const DONATE_URL = "https://mistycopelandfoundation.app.neoncrm.com/forms/donate";

export const NAV = [
  { label: "About", href: "/#mission" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/#impact" },
  { label: "Leadership", href: "/leadership" },
  { label: "Support", href: "/donate" },
];

// ---------------------------------------------------------------------------
// Impact figures — placeholders marked with `provisional`.
// TODO(client): confirm real numbers before launch.
// ---------------------------------------------------------------------------
export const STATS: { value: string; label: string; provisional?: boolean }[] = [
  { value: "2021", label: "Founded by Misty Copeland" },
  { value: "1,000+", label: "Children & families reached", provisional: true },
  { value: "3", label: "Signature programs" },
  { value: "$1M", label: "Celebrating Misty campaign goal" },
];

// ---------------------------------------------------------------------------
// Celebrating Misty — the flagship $1M campaign (Sept 2025 – Sept 2026)
// TODO(client): update `raised` with the real running total.
// ---------------------------------------------------------------------------
export const CAMPAIGN = {
  name: "The Celebrating Misty Campaign",
  goal: 1_000_000,
  raised: 680_000, // provisional — update with live total
  window: "September 2025 – September 2026",
  deadlineLabel: "September 2026",
  blurb:
    "A one-year, $1 million initiative honoring Misty Copeland's historic farewell from American Ballet Theatre — and fueling the next generation of dancers she is dedicating her life to.",
};

// ---------------------------------------------------------------------------
// Programs — each themed in its own brand accent color (page 6 palette)
// ---------------------------------------------------------------------------
export type Program = {
  slug: string;
  name: string;
  kicker: string;
  color: string;
  colorName: string;
  image: string;
  tagline: string;
  summary: string;
  detail: string;
  pillars: { title: string; text: string }[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "be-bold",
    name: "BE BOLD",
    kicker: "Ages 8–10 · Our flagship",
    color: "#8651ED",
    colorName: "purple",
    image: "/gallery/g12.jpg",
    tagline: "Where a lifetime of dance begins.",
    summary:
      "Our flagship program brings free, high-quality ballet instruction to children in under-resourced communities — engaging their bodies, hearts and minds through the joy of dance.",
    detail:
      "Delivered in partnership with schools and community organizations, BE BOLD introduces young people to ballet in a nurturing, affirming environment led by professional teaching artists who reflect the students they serve.",
    pillars: [
      { title: "Free, always", text: "High-quality ballet instruction at no cost to families, delivered right in their own communities." },
      { title: "Representation matters", text: "Taught by professional artists who reflect the children they serve — so every student sees themselves in ballet." },
      { title: "Body, heart & mind", text: "More than steps: BE BOLD builds confidence, discipline and joy that reach far beyond the studio." },
    ],
  },
  {
    slug: "next-steps",
    name: "BE BOLD: Next Steps",
    kicker: "Continuing dancers",
    color: "#2525A5",
    colorName: "indigo",
    image: "/gallery/g6.jpg",
    tagline: "The door stays open.",
    summary:
      "A pathway for students ready to go further — continued training, mentorship and performance opportunities for dancers who want to grow.",
    detail:
      "Next Steps deepens technique and artistry while surrounding students with mentors and role models, keeping the door to ballet open long after a first plié.",
    pillars: [
      { title: "Deeper training", text: "More advanced instruction for students ready to grow their technique and artistry." },
      { title: "Mentorship", text: "Role models who guide young dancers as they discover how far they can go." },
      { title: "The stage", text: "Performance opportunities that turn practice into pride." },
    ],
  },
  {
    slug: "be-bolder",
    name: "BE BOLDER",
    kicker: "Across generations",
    color: "#D92C23",
    colorName: "red",
    image: "/gallery/g20.jpg",
    tagline: "Dance has no age limit.",
    summary:
      "Ballet is for every body and every age. BE BOLDER expands the joy and wellness of dance to older adults across our communities.",
    detail:
      "Created in partnership with community elders, BE BOLDER celebrates lifelong movement — proving that the beauty and power of dance belongs to us at every stage of life.",
    pillars: [
      { title: "For every generation", text: "Bringing the joy and wellness of ballet to older adults across our communities." },
      { title: "Movement as medicine", text: "Dance supports balance, strength, memory and connection at every stage of life." },
      { title: "Community", text: "Created with community elders — the beauty and power of dance belongs to us all." },
    ],
  },
  {
    slug: "teaching-artists",
    name: "Teaching Artists",
    kicker: "Our educators",
    color: "#EEC65E",
    colorName: "gold",
    image: "/gallery/g13.jpg",
    tagline: "The heart of the Foundation.",
    summary:
      "Professional dancers and educators who bring expertise, warmth and representation into every classroom.",
    detail:
      "Our teaching artists are the heart of the Foundation — mentors who show every child that the world of ballet has a place for them.",
    pillars: [
      { title: "Professional artists", text: "Working dancers and educators who bring real expertise into every classroom." },
      { title: "Warmth & care", text: "Mentors who create nurturing, affirming spaces where children thrive." },
      { title: "Representation", text: "Educators who show every student that ballet has a place for them." },
    ],
  },
];

export const getProgram = (slug: string) => PROGRAMS.find((p) => p.slug === slug);

// ---------------------------------------------------------------------------
// Giving circles (exact tiers from the Foundation)
// ---------------------------------------------------------------------------
export const GIVING_TIERS = [
  {
    name: "Friend of MCF",
    amounts: [50, 150, 500],
    blurb: "Open the door to dance for a child taking their very first class.",
  },
  {
    name: "Advocate Circle",
    amounts: [1500, 3000, 4500],
    blurb: "Sustain a classroom of young dancers through a full season of BE BOLD.",
  },
  {
    name: "Community Circle",
    amounts: [5000, 7000],
    blurb: "Bring a teaching artist and full programming to a new community partner.",
  },
  {
    name: "Impact Circle",
    amounts: [10000, 25000],
    blurb: "Shape the future of the Foundation and the children it serves for years to come.",
    featured: true,
  },
];

// "Where your gift goes" — dollars into outcomes
export const GIFT_IMPACT = [
  { amount: "$50", outcome: "A pair of first ballet shoes for a young dancer" },
  { amount: "$150", outcome: "A month of classes for a child in BE BOLD" },
  { amount: "$500", outcome: "A full semester of ballet for a student" },
  { amount: "$1,500", outcome: "A season of programming for an entire classroom" },
];

// ---------------------------------------------------------------------------
// People — matched to photos in /public/team
// ---------------------------------------------------------------------------
export type Person = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

export const FOUNDER: Person = {
  slug: "misty",
  name: "Misty Copeland",
  role: "President & Founder",
  photo: "/team/misty.jpg",
  bio: "The first African-American female principal dancer at American Ballet Theatre and a transformational figure in ballet. A champion of change, Misty is the author of the bestselling memoirs Life in Motion and The Wind at My Back, and of children's books including Black Ballerinas, Bunheads and Firebird.",
};

export const STAFF: Person[] = [
  {
    slug: "caryn",
    name: "Caryn Campbell",
    role: "Executive Director",
    photo: "/team/caryn.jpg",
    bio: "Caryn joins MCF from Alvin Ailey American Dance Theater, where she served as Director of Patron Engagement since 2014. She previously served as Director of Development at Storefront Academy of Harlem, raising $5 million annually, and began her career in film with Paramount Pictures and Spike Lee's 40 Acres and a Mule Filmworks. She holds a BFA from Southern Methodist University.",
  },
  {
    slug: "kira",
    name: "Kira Rai Daniel",
    role: "Development & Operations Manager",
    photo: "/team/kira.jpg",
    bio: "Kira comes to the Foundation with a strong background in both performance and arts administration. Inspired by limited early dance access, she interned with American Ballet Theatre and most recently served as General Manager/Producer for kNoname Artist. She holds a BFA in Modern Dance from Texas Christian University and an MA in Arts Administration from Teachers College, Columbia University.",
  },
  {
    slug: "amanda",
    name: "Amanda Lindamood",
    role: "Senior Programs Manager",
    photo: "/team/amanda.jpg",
    bio: "Amanda began with the Foundation as a Teaching Artist in 2023 and is now Senior Programs Manager. She holds an MA in Dance Education from NYU Steinhardt and is ABT Certified through Level 7 & Partnering, having taught at the Jacqueline Kennedy Onassis School and Steps on Broadway.",
  },
  {
    slug: "marley",
    name: "Marley Poku-Kankam",
    role: "Programs Coordinator",
    photo: "/team/marley.jpg",
    bio: "Raised in Charlotte, North Carolina, Marley grew up performing at Charlotte Ballet Academy. A 2023 graduate of the Ailey/Fordham BFA program, she has worked with the Vail Dance Festival and Hope Boykin's HB Arts Collective before joining the Foundation.",
  },
];

export const BOARD: Person[] = [
  FOUNDER,
  {
    slug: "valentino",
    name: "Valentino Carlotti",
    role: "Partner & Executive, Brown Brothers Harriman",
    photo: "/team/valentino.jpg",
  },
  {
    slug: "susan",
    name: "Susan Fales-Hill",
    role: "Author, Television Producer & Arts Advocate",
    photo: "/team/susan.jpg",
  },
  {
    slug: "derek",
    name: "Derek Jean-Baptiste",
    role: "Head of Engineering & Architecture, JPMorgan Chase & Co.",
    photo: "/team/derek.jpg",
  },
  {
    slug: "ann",
    name: "Ann Hicks",
    role: "Psychotherapist",
    photo: "/team/ann.jpg",
  },
  {
    slug: "nyssa",
    name: "Nyssa Lee",
    role: "Associate General Counsel, Hudson Heights IPA / Bronx United IPA",
    photo: "/team/nyssa.jpg",
  },
  {
    slug: "benis",
    name: "Benis Reffkin",
    role: "Executive Coach",
    photo: "/team/benis.jpg",
  },
  {
    slug: "ruti",
    name: "Ruti Smithline",
    role: "Partner, Morrison & Foerster",
    photo: "/team/ruti.jpg",
  },
];

// Gallery images (Instagram-style feed). 20 files in /public/gallery.
export const GALLERY = Array.from({ length: 20 }, (_, i) => `/gallery/g${i + 1}.jpg`);
