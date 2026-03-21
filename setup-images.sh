#!/bin/bash
# TOAKCO Website — Image Setup Script
# Copies photos from Branding/Photography into public/images/ for Next.js
# Run once: npm run setup:images
# Re-run anytime photos are updated in the source catalog

PHOTO_ROOT="../../Branding/Photography/By-Category"
PUBLIC="./public/images"

echo "Setting up TOAKCO website images..."

# Create target dirs
mkdir -p "$PUBLIC/nature"
mkdir -p "$PUBLIC/team"
mkdir -p "$PUBLIC/urban"
mkdir -p "$PUBLIC/abstract"
mkdir -p "$PUBLIC/studio"
mkdir -p "$PUBLIC/work"

# Copy nature photos (hero backgrounds, interlude sections)
echo "→ Copying nature photos..."
cp "$PHOTO_ROOT/Nature/Website/"* "$PUBLIC/nature/" 2>/dev/null || echo "  No nature/Website photos found"
cp "$PHOTO_ROOT/Nature/Social/"* "$PUBLIC/nature/" 2>/dev/null || true

# Copy team photos
echo "→ Copying team photos..."
cp "$PHOTO_ROOT/Team/Website/"* "$PUBLIC/team/" 2>/dev/null || echo "  No team/Website photos found"

# Copy urban photos
echo "→ Copying urban photos..."
cp "$PHOTO_ROOT/Urban/Website/"* "$PUBLIC/urban/" 2>/dev/null || true

# Copy abstract photos
echo "→ Copying abstract photos..."
cp "$PHOTO_ROOT/Abstract/Website/"* "$PUBLIC/abstract/" 2>/dev/null || true

# Copy studio BTS photos
echo "→ Copying studio BTS photos..."
cp "$PHOTO_ROOT/Studio-BTS/Website/"* "$PUBLIC/studio/" 2>/dev/null || true

# Create named symlinks for specific hero slots
# (Rename or symlink after reviewing which photos to use where)
echo ""
echo "Done. Photos copied to public/images/"
echo ""
echo "Next step: Review the photos in public/images/ and update these paths in code:"
echo "  - Hero bg:       /images/nature/hero-1.jpg  → rename your preferred hero shot"
echo "  - Interlude:     /images/nature/interlude-1.jpg"
echo "  - Newsletter:    /images/nature/newsletter-hero.jpg"
echo "  - Studio BTS:    /images/studio/studio-bts-1.jpg"
echo "  - Team photos:   /images/team/jack-lopez.jpg, max-sims.jpg, etc."
echo ""
echo "Tip: Use the PHOTO-CATALOG.md in Branding/Photography/ to find the best shots."
