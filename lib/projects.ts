// ─── Types ───────────────────────────────────────────────────────────────────

export type ProjectCategory = 'commercial' | 'hospitality' | 'residential';

export type Project = {
  id: number;
  name: string;
  category: ProjectCategory;
  type: string;
  year: string;
  location: string;
  image: string;
  description: string;
  gallery: string[];
};

export type CategoryMeta = {
  slug: ProjectCategory;
  label: string;
  headline: string;
  eyebrow: string;
  description: string;
  coverImage: string;
  numeral: string;
};

// ─── Category metadata ────────────────────────────────────────────────────────
// Used on the /projects landing page and each category hero.

export const projectCategories: CategoryMeta[] = [
  {
    slug: 'commercial',
    label: 'Commercial',
    headline: 'Commercial Projects',
    eyebrow: 'Sector 01',
    description:
      'Offices, retail stores, and corporate interiors built to high standards. Functional precision without compromise on material or craft.',
    coverImage: '/images/Projects-Commercial-DurresYachtMarina.jpg',
    numeral: '01',
  },
  {
    slug: 'hospitality',
    label: 'Hospitality',
    headline: 'Hospitality Projects',
    eyebrow: 'Sector 02',
    description:
      'Full hotel fit-outs and guest-experience interiors — from lobby to guest room, designed and manufactured entirely in Vlorë.',
    coverImage: '/images/ProjectsHotelLion.jpg',
    numeral: '02',
  },
  {
    slug: 'residential',
    label: 'Residential',
    headline: 'Residential Projects',
    eyebrow: 'Sector 03',
    description:
      'Bespoke private residences where every element is designed around the way the client lives — not a single off-the-shelf component.',
    coverImage: '/images/project-2.jpg',
    numeral: '03',
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  commercial: 'Commercial',
  hospitality: 'Hospitality',
  residential: 'Residential',
};

// ─── Projects ─────────────────────────────────────────────────────────────────
// Structure is ready for Supabase / admin dashboard.
// Each project maps to a category slug and can carry any additional fields.

export const projects: Project[] = [
  // ── Hospitality ──────────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Hotel Radream',
    category: 'hospitality',
    type: 'Hospitality — Full Interior',
    year: '2023',
    location: 'Vlorë, Albania',
    image: '/images/ProjectsHotelRadream.jpg',
    description:
      'A full interior furniture programme for Hotel Radream, covering guest rooms, corridors, lobby, and dining areas. The brief called for warm, natural materials balanced with clean contemporary lines — delivered from our Vlorë facility from first sketch to final installation.',
    gallery: [
      '/images/ProjectsHotelRadream.jpg',
      '/images/ProjectsHotelRadream2.jpg',
      '/images/ProjectsHotelRadream3.jpg',
      '/images/ProjectsHotelRadream4.jpg',
      '/images/ProjectsHotelRadream5.jpg',
      '/images/ProjectsHotelRadream6.jpg',
    ],
  },
  {
    id: 2,
    name: 'Lion Gate Hotel',
    category: 'hospitality',
    type: 'Hospitality — Full Fit-Out',
    year: '2024',
    location: 'Vlorë, Albania',
    image: '/images/ProjectsHotelLion.jpg',
    description:
      "A complete interior fit-out for Lion Gate Hotel, encompassing custom bedroom furniture, wardrobes, reception pieces, and common-area joinery. Every element was designed and manufactured in-house to the client's exact specification — no off-the-shelf components, no compromise.",
    gallery: [
      '/images/ProjectsHotelLion.jpg',
      '/images/ProjectsHotelLion2.jpg',
      '/images/ProjectsHotelLion3.jpg',
      '/images/ProjectsHotelLion4.jpg',
      '/images/ProjectsHotelLion5.jpg',
      '/images/ProjectsHotelLion6.jpg',
      '/images/ProjectsHotelLion7.jpg',
      '/images/ProjectsHotelLion8.jpg',
      '/images/ProjectsHotelLion10.jpg',
      '/images/ProjectsHotelLion11.jpg',
    ],
  },
  {
    id: 3,
    name: 'Hotel Vale',
    category: 'hospitality',
    type: 'Hospitality — Bedroom & Wardrobe',
    year: '2024',
    location: 'Sarandë, Albania',
    image: '/images/ProjectsHotelVale.jpg',
    description:
      'Custom bedroom furniture and fitted wardrobe systems for Hotel Vale. Designed to maximise every square metre while maintaining a refined, contemporary aesthetic throughout each room — a balance of function and quiet luxury.',
    gallery: [
      '/images/ProjectsHotelVale.jpg',
      '/images/ProjectsHotelVale2.jpg',
      '/images/ProjectsHotelVale3.jpg',
      '/images/ProjectsHotelVale4.jpg',
    ],
  },
  {
    id: 4,
    name: 'Mercure Hotel',
    category: 'hospitality',
    type: 'Hospitality — Full Fit-Out',
    year: '2024',
    location: 'Tirana, Albania',
    image: '/images/MercureHotel.jpg',
    description:
      'A full furniture fit-out for Mercure Hotel Tirana — guest rooms, suites, and public-area joinery designed and manufactured entirely in-house. A project that demanded both volume and precision, delivered on schedule without concession to quality.',
    gallery: [
      '/images/MercureHotel.jpg',
      '/images/MercureHotel2.jpg',
      '/images/MercureHotel3.jpg',
      '/images/MercureHotel4.jpg',
      '/images/MercureHotel5.jpg',
      '/images/MercureHotelProject2.jpg',
      '/images/MercureHotelProject3.jpg',
      '/images/MercureHotelProject4.jpg',
    ],
  },

  // ── Commercial ───────────────────────────────────────────────────────────
  {
    id: 5,
    name: 'Yacht Marina Durrës',
    category: 'commercial',
    type: 'Commercial — Full Fit-Out',
    year: '2024',
    location: 'Durrës, Albania',
    image: '/images/Projects-Commercial-DurresYachtMarina.jpg',
    description:
      'A complete furniture fit-out for the Yacht Marina Durrës facility — reception, lounge, and dining areas crafted to complement the waterfront setting. Clean lines, durable materials, and a refined maritime character throughout.',
    gallery: [
      '/images/Projects-Commercial-DurresYachtMarina.jpg',
      '/images/Projects-Commercial-DurresYachtMarina2.jpg',
      '/images/Projects-Commercial-DurresYachtMarina3.jpg',
      '/images/Projects-Commercial-DurresYachtMarina4.jpg',
      '/images/Projects-Commercial-DurresYachtMarina5.jpg',
      '/images/Projects-Commercial-DurresYachtMarina6.jpg',
    ],
  },
  {
    id: 6,
    name: 'HSCS Studio',
    category: 'commercial',
    type: 'Commercial — Studio Fit-Out',
    year: '2024',
    location: 'Albania',
    image: '/images/HSCStudioProject.jpg',
    description:
      'A bespoke studio fit-out for HSCS — custom joinery, storage, and workspace furniture designed around the specific demands of a professional creative environment. Every piece built to specification, nothing off the shelf.',
    gallery: [
      '/images/HSCStudioProject.jpg',
      '/images/HSCStudioProject2.jpg',
      '/images/HSCStudioProject3.jpg',
      '/images/HSCStudioProject5.jpg',
      '/images/HSCStudioProject6.jpg',
      '/images/HSCStudioProject7.jpg',
      '/images/HSCStudioProject8.jpg',
      '/images/HSCStudioProject9.jpg',
      '/images/HSCStudioProject10.jpg',
    ],
  },
  {
    id: 7,
    name: 'Tartine Et Chocolat',
    category: 'commercial',
    type: 'Commercial — Retail Fit-Out',
    year: '2023',
    location: 'Albania',
    image: '/images/Projects-Commercial-TartineEtChocolat.jpg',
    description:
      'Custom retail furniture and display joinery for Tartine Et Chocolat — a project that required both precision craftsmanship and an acute sensitivity to brand aesthetic. Warm timber tones and refined detailing throughout.',
    gallery: [
      '/images/Projects-Commercial-TartineEtChocolat.jpg',
      '/images/Projects-Commercial-TartineEtChocolat2.jpg',
      '/images/Projects-Commercial-TartineEtChocolat3.jpg',
      '/images/Projects-Commercial-TartineEtChocolat4.jpg',
      '/images/Projects-Commercial-TartineEtChocolat5.jpg',
    ],
  },

  // ── Residential ───────────────────────────────────────────────────────────
  {
    id: 8,
    name: 'Private Residences',
    category: 'residential',
    type: 'Residential — Bespoke Interiors',
    year: '2024',
    location: 'Albania',
    image: '/images/craftsmanship.jpg',
    description:
      'A selection of private residential commissions — kitchens, living spaces, wardrobes, and bespoke joinery designed around the lives of the people who inhabit them. Each piece made to measure, each home treated as singular.',
    gallery: [
      '/images/Projects-Residential .jpg',
      '/images/Projects-Residential2.jpg',
      '/images/Projects-Residential3.jpg',
      '/images/Projects-Residential4.jpg',
      '/images/Projects-Residential5.jpg',
      '/images/Projects-Residential6.jpg',
      '/images/Projects-Residential7.jpg',
      '/images/Projects-Residential8.jpg',
      '/images/Projects-Residential9.jpg',
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getProject(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
