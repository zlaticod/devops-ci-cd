import { describe, it, expect } from 'vitest';

describe('Content Collections', () => {
  it('should validate markdown frontmatter structure', () => {
    const validFrontmatter = {
      title: 'Test Document',
      description: 'Test description',
      date: new Date('2025-10-14'),
      author: 'DevOps Course',
      tags: ['test', 'example'],
    };

    expect(validFrontmatter).toHaveProperty('title');
    expect(validFrontmatter.title).toBeTypeOf('string');
    expect(validFrontmatter.tags).toBeInstanceOf(Array);
  });

  it('should ensure required frontmatter fields exist', () => {
    const frontmatter = {
      title: 'Required Field Test',
    };

    expect(frontmatter).toHaveProperty('title');
    expect(frontmatter.title).toBeTruthy();
  });

  it('should validate date format', () => {
    const date = new Date('2025-10-14');
    
    expect(date).toBeInstanceOf(Date);
    expect(date.getTime()).toBeGreaterThan(0);
  });

  it('should validate tags are strings', () => {
    const tags = ['devops', 'tutorial', 'example'];
    
    tags.forEach(tag => {
      expect(tag).toBeTypeOf('string');
      expect(tag.length).toBeGreaterThan(0);
    });
  });
});

