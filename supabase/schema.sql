-- ============================================================
-- The M Concept — Supabase Schema
-- Run this in: Supabase Dashboard → SQL Editor → New query
-- ============================================================


-- ── 1. Projects table ────────────────────────────────────────

CREATE TABLE projects (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  category    TEXT NOT NULL CHECK (category IN ('commercial', 'hospitality', 'residential')),
  type        TEXT,
  year        TEXT,
  location    TEXT,
  description TEXT,
  cover_image TEXT,
  gallery     TEXT[] DEFAULT '{}',
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-update updated_at on every edit
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ── 2. Products table ─────────────────────────────────────────

CREATE TABLE products (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  category    TEXT NOT NULL CHECK (category IN ('kitchens', 'bathrooms', 'bedroom-wardrobes', 'living-room', 'others')),
  description TEXT,
  images      TEXT[] DEFAULT '{}',
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ── 3. Row-Level Security ─────────────────────────────────────

-- Enable RLS on both tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public can read everything (website fetches data)
CREATE POLICY "Public read projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public read products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users (admins) can write
CREATE POLICY "Authenticated insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated delete products"
  ON products FOR DELETE
  TO authenticated
  USING (true);


-- ── 4. Storage buckets ────────────────────────────────────────
-- Run these separately after creating the buckets manually in
-- Supabase → Storage → New bucket (set both to Public)

-- After creating bucket "projects":
CREATE POLICY "Public read project images"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'projects');

CREATE POLICY "Authenticated upload project images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'projects');

CREATE POLICY "Authenticated delete project images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'projects');

-- After creating bucket "spaces":
CREATE POLICY "Public read space images"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'spaces');

CREATE POLICY "Authenticated upload space images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'spaces');

CREATE POLICY "Authenticated delete space images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'spaces');
