import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mcwwyvtmsoaxzgvdtvye.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jd3d5dnRtc29heHpndmR0dnllIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTc4NDY3NywiZXhwIjoyMDk1MzYwNjc3fQ.Zn8ZBA6FUkT1v_AbdOT4bUg8y-z5EQPJF7g2VHtkLKc';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const projects = [
  {
    name: 'Hotel Radream',
    category: 'hospitality',
    type: 'Hospitality — Full Interior',
    year: '2023',
    location: 'Vlorë, Albania',
    description: 'A full interior furniture programme for Hotel Radream, covering guest rooms, corridors, lobby, and dining areas. The brief called for warm, natural materials balanced with clean contemporary lines — delivered from our Vlorë facility from first sketch to final installation.',
    cover_image: '/images/ProjectsHotelRadream.jpg',
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
    name: 'Lion Gate Hotel',
    category: 'hospitality',
    type: 'Hospitality — Full Fit-Out',
    year: '2024',
    location: 'Vlorë, Albania',
    description: "A complete interior fit-out for Lion Gate Hotel, encompassing custom bedroom furniture, wardrobes, reception pieces, and common-area joinery. Every element was designed and manufactured in-house to the client's exact specification — no off-the-shelf components, no compromise.",
    cover_image: '/images/ProjectsHotelLion.jpg',
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
    name: 'Hotel Vale',
    category: 'hospitality',
    type: 'Hospitality — Bedroom & Wardrobe',
    year: '2024',
    location: 'Sarandë, Albania',
    description: 'Custom bedroom furniture and fitted wardrobe systems for Hotel Vale. Designed to maximise every square metre while maintaining a refined, contemporary aesthetic throughout each room — a balance of function and quiet luxury.',
    cover_image: '/images/ProjectsHotelVale.jpg',
    gallery: [
      '/images/ProjectsHotelVale.jpg',
      '/images/ProjectsHotelVale2.jpg',
      '/images/ProjectsHotelVale3.jpg',
      '/images/ProjectsHotelVale4.jpg',
    ],
  },
  {
    name: 'Mercure Hotel',
    category: 'hospitality',
    type: 'Hospitality — Full Fit-Out',
    year: '2024',
    location: 'Tirana, Albania',
    description: 'A full furniture fit-out for Mercure Hotel Tirana — guest rooms, suites, and public-area joinery designed and manufactured entirely in-house. A project that demanded both volume and precision, delivered on schedule without concession to quality.',
    cover_image: '/images/MercureHotel2.jpg',
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
  {
    name: "Diora's Hotel",
    category: 'hospitality',
    type: 'Hospitality — Full Fit-Out',
    year: '2024',
    location: 'Albania',
    description: "A complete furniture fit-out for Diora's Hotel — guest rooms, corridors, and common areas furnished with bespoke pieces manufactured entirely in-house. Each element crafted to meet the hotel's standard of comfort and refined hospitality.",
    cover_image: '/images/DiorasHotelProject.jpg',
    gallery: [
      '/images/DiorasHotelProject.jpg',
      '/images/DiorasHotelProject2.jpg',
      '/images/DiorasHotelProject3.jpg',
      '/images/DiorasHotelProject4.jpg',
      '/images/DiorasHotelProject5.jpg',
      '/images/DiorasHotelProject6.jpg',
      '/images/DiorasHotelProject7.jpg',
      '/images/DiorasHotelProject8.jpg',
      '/images/DiorasHotelProject9.jpg',
      '/images/DiorasHotelProject10.jpg',
      '/images/DiorasHotelProject11.jpg',
    ],
  },
  {
    name: 'Yacht Marina Durrës',
    category: 'commercial',
    type: 'Commercial — Full Fit-Out',
    year: '2024',
    location: 'Durrës, Albania',
    description: 'A complete furniture fit-out for the Yacht Marina Durrës facility — reception, lounge, and dining areas crafted to complement the waterfront setting. Clean lines, durable materials, and a refined maritime character throughout.',
    cover_image: '/images/Projects-Commercial-DurresYachtMarina.jpg',
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
    name: 'HSCS Studio',
    category: 'commercial',
    type: 'Commercial — Studio Fit-Out',
    year: '2024',
    location: 'Albania',
    description: 'A bespoke studio fit-out for HSCS — custom joinery, storage, and workspace furniture designed around the specific demands of a professional creative environment. Every piece built to specification, nothing off the shelf.',
    cover_image: '/images/HSCStudioProject.jpg',
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
    name: 'Tartine Et Chocolat',
    category: 'commercial',
    type: 'Commercial — Retail Fit-Out',
    year: '2023',
    location: 'Albania',
    description: 'Custom retail furniture and display joinery for Tartine Et Chocolat — a project that required both precision craftsmanship and an acute sensitivity to brand aesthetic. Warm timber tones and refined detailing throughout.',
    cover_image: '/images/Projects-Commercial-TartineEtChocolat.jpg',
    gallery: [
      '/images/Projects-Commercial-TartineEtChocolat.jpg',
      '/images/Projects-Commercial-TartineEtChocolat2.jpg',
      '/images/Projects-Commercial-TartineEtChocolat3.jpg',
      '/images/Projects-Commercial-TartineEtChocolat4.jpg',
      '/images/Projects-Commercial-TartineEtChocolat5.jpg',
    ],
  },
  {
    name: 'Marina Bay',
    category: 'commercial',
    type: 'Commercial — Full Fit-Out',
    year: '2024',
    location: 'Albania',
    description: 'A complete furniture fit-out for Marina Bay — reception, lounge, and dining areas crafted to complement the waterfront setting. Clean lines, durable materials, and a refined coastal character throughout.',
    cover_image: '/images/MarinaBayProject.jpg',
    gallery: [
      '/images/MarinaBayProject.jpg',
      '/images/MarinaBayProject2.jpg',
      '/images/MarinaBayProject3.jpg',
      '/images/MarinaBayProject4.jpg',
      '/images/MarinaBayProject5.jpg',
    ],
  },
  {
    name: 'Private Residences',
    category: 'residential',
    type: 'Residential — Bespoke Interiors',
    year: '2024',
    location: 'Albania',
    description: 'A selection of private residential commissions — kitchens, living spaces, wardrobes, and bespoke joinery designed around the lives of the people who inhabit them. Each piece made to measure, each home treated as singular.',
    cover_image: '/images/craftsmanship.jpg',
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

console.log(`Migrating ${projects.length} projects to Supabase...`);

const { data, error } = await supabase.from('projects').insert(projects).select('id, name');

if (error) {
  console.error('Migration failed:', error.message);
  process.exit(1);
}

console.log('Migration successful! Inserted projects:');
data.forEach((p) => console.log(` ✓ ${p.name} (${p.id})`));
