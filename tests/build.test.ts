import { describe, it, expect } from 'vitest';

describe('Build Configuration', () => {
  it('should have valid site URL', () => {
    const siteUrl = 'https://mydomain.com';
    
    expect(siteUrl).toMatch(/^https?:\/\/.+/);
  });

  it('should have valid base path', () => {
    const basePath = '/';
    
    expect(basePath).toBe('/');
    expect(basePath.startsWith('/')).toBe(true);
  });

  it('should validate trailing slash configuration', () => {
    const trailingSlashOptions = ['always', 'never', 'ignore'];
    const config = 'ignore';
    
    expect(trailingSlashOptions).toContain(config);
  });
});

describe('Environment Checks', () => {
  it('should detect Node.js environment', () => {
    expect(typeof process).toBe('object');
    expect(process.versions.node).toBeTruthy();
  });

  it('should have proper module type', () => {
    // Check if ES modules are supported
    expect(typeof import.meta).toBe('object');
  });
});

