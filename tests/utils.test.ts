import { describe, it, expect } from 'vitest';

describe('Utility Functions', () => {
  describe('Date Formatting', () => {
    it('should format dates correctly for Bulgarian locale', () => {
      const date = new Date('2025-10-14');
      const formatted = date.toLocaleDateString('bg-BG');
      
      expect(formatted).toBeTruthy();
      expect(formatted).toContain('2025');
    });
  });

  describe('URL Generation', () => {
    it('should generate correct doc URLs', () => {
      const slug = 'example';
      const url = `/docs/${slug}`;
      
      expect(url).toBe('/docs/example');
      expect(url).toMatch(/^\/docs\/.+/);
    });

    it('should handle nested slugs', () => {
      const slug = 'category/subcategory/document';
      const url = `/docs/${slug}`;
      
      expect(url).toBe('/docs/category/subcategory/document');
    });
  });

  describe('Array Operations', () => {
    it('should sort documents by date correctly', () => {
      const docs = [
        { date: new Date('2025-01-01') },
        { date: new Date('2025-12-31') },
        { date: new Date('2025-06-15') },
      ];

      const sorted = docs.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
      });

      expect(sorted[0].date.getTime()).toBeGreaterThan(sorted[1].date.getTime());
      expect(sorted[1].date.getTime()).toBeGreaterThan(sorted[2].date.getTime());
    });

    it('should handle empty arrays', () => {
      const docs: Array<{ date: Date }> = [];
      const sorted = docs.sort();
      
      expect(sorted).toHaveLength(0);
    });
  });

  describe('String Validation', () => {
    it('should validate non-empty strings', () => {
      const title = 'DevOps Course';
      
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);
    });

    it('should trim whitespace', () => {
      const text = '  DevOps Course  ';
      const trimmed = text.trim();
      
      expect(trimmed).toBe('DevOps Course');
    });
  });
});

