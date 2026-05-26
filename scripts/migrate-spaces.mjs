import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mcwwyvtmsoaxzgvdtvye.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jd3d5dnRtc29heHpndmR0dnllIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTc4NDY3NywiZXhwIjoyMDk1MzYwNjc3fQ.Zn8ZBA6FUkT1v_AbdOT4bUg8y-z5EQPJF7g2VHtkLKc';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const spaces = [
  {
    name: 'Living Room',
    category: 'living-room',
    description: 'Custom living room furniture and shelving — designed and manufactured in Vlorë, Albania.',
    images: [
      '/images/Projects-Residential7.jpg',
    ],
  },
  {
    name: 'Bedroom & Wardrobes',
    category: 'bedroom-wardrobes',
    description: 'Custom bedroom furniture and built-in wardrobes — designed and manufactured in Vlorë, Albania.',
    images: [
      '/images/ProductsWardrobe.jpg',
      '/images/ProductsWardrobe2.jpg',
      '/images/ProductsWardrobe3.jpg',
      '/images/ProductsWardrobe4.jpg',
      '/images/ProductsWardrobe5.jpg',
      '/images/ProductsWardrobe6.jpg',
      '/images/ProductsWardrobe7.jpg',
      '/images/ProductsWardrobe8.jpg',
      '/images/ProductsLibrary.jpg',
      '/images/ProductsLibrary2.jpg',
      '/images/ProductsLibrary3.jpg',
      '/images/Projects-Residential2.jpg',
      '/images/wardrobes.jpg',
      '/images/wardrobes2.jpg',
      '/images/wardrobes3.jpg',
      '/images/wardrobes4.jpg',
      '/images/wardrobes5.jpg',
      '/images/wardrobes6.jpg',
      '/images/wardrobes7.jpg',
      '/images/wardrobes8.jpg',
      '/images/wardrobes9.jpg',
      '/images/wardrobes10.jpg',
      '/images/bedroom.jpg',
      '/images/bedroom2.jpg',
      '/images/bedroom3.jpg',
      '/images/bedroom4.jpg',
    ],
  },
  {
    name: 'Kitchen & Dining',
    category: 'kitchens',
    description: 'Custom kitchen cabinetry and dining furniture — designed and manufactured in Vlorë, Albania.',
    images: [
      '/images/ProductsKitchen.jpg',
      '/images/ProductsKitchen2.jpg',
      '/images/ProductsKitchen3.jpg',
      '/images/ProductsKitchen4.jpg',
      '/images/ProductsKitchen5.jpg',
      '/images/ProductsKitchen6.jpg',
      '/images/ProductsKitchen7.jpg',
      '/images/ProductsKitchen8.jpg',
      '/images/ProductsKitchen9.jpg',
      '/images/ProductsKitchen10.jpg',
      '/images/ProductsKitchen11.jpg',
      '/images/kitchens.jpg',
      '/images/kitchens2.jpg',
      '/images/kitchens3.jpg',
      '/images/kitchens4.jpg',
      '/images/kitchens5.jpg',
      '/images/kitchens6.jpg',
      '/images/kitchens7.jpg',
      '/images/kitchens8.jpg',
      '/images/kitchens9.jpg',
      '/images/kitchens10.jpg',
      '/images/kitchens11.jpg',
      '/images/kitchens12.jpg',
      '/images/kitchens13.jpg',
      '/images/kitchens14.jpg',
      '/images/kitchens16.jpg',
      '/images/kitchens18.jpg',
      '/images/kitchens20.jpg',
      '/images/kitchens21.jpg',
      '/images/kitchens22.jpg',
    ],
  },
  {
    name: 'Bathroom',
    category: 'bathrooms',
    description: 'Custom bathroom vanities and fitted storage — designed and manufactured in Vlorë, Albania.',
    images: [
      '/images/bathrooms.jpg',
      '/images/bathrooms2.jpg',
      '/images/bathrooms3.jpg',
      '/images/bathrooms4.jpg',
      '/images/bathrooms5.jpg',
    ],
  },
];

console.log(`Migrating ${spaces.length} spaces to Supabase...`);

const { data, error } = await supabase.from('products').insert(spaces).select('id, name');

if (error) {
  console.error('Migration failed:', error.message);
  process.exit(1);
}

console.log('Migration successful! Inserted spaces:');
data.forEach((s) => console.log(` ✓ ${s.name} (${s.id})`));
