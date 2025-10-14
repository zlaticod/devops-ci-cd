# 🧪 Testing Strategy

## Какво тестваме?

### 1. Content Validation
- Frontmatter структура
- Задължителни полета
- Date формати
- Tags валидация

### 2. Utility Functions
- Date форматиране
- URL generation
- Сортиране на документи
- String операции

### 3. Build Configuration
- Site URL валидация
- Base path проверки
- Trailing slash settings
- Environment checks

## Testing Pyramid

```
        /\
       /  \
      / E2E \          (Бъдеща работа)
     /______\
    /        \
   /Integration\       (Astro content collections)
  /____________\
 /              \
/  Unit Tests    \     (Текущ focus)
/________________\
```

## Coverage Goals

- **Target:** 80%+ code coverage
- **Current:** Run `npm run test:coverage` за да видиш

## Continuous Testing

```bash
# Development mode - auto re-run
npm run test:watch

# UI mode - interactive
npm run test:ui

# CI mode - single run
npm run test
```

## Adding New Tests

1. Create `*.test.ts` file in `tests/` directory
2. Import test utilities:
   ```typescript
   import { describe, it, expect } from 'vitest';
   ```
3. Write descriptive test cases
4. Run tests locally before committing
5. CI will automatically run tests on push

## Best Practices

✅ **DO:**
- Write tests for new features
- Use descriptive test names
- Test edge cases
- Keep tests fast
- Mock external dependencies

❌ **DON'T:**
- Skip tests in CI
- Write tests that depend on each other
- Test implementation details
- Ignore failing tests

## Example Test

```typescript
import { describe, it, expect } from 'vitest';

describe('Feature Name', () => {
  it('should behave correctly', () => {
    const result = myFunction('input');
    expect(result).toBe('expected');
  });

  it('should handle edge cases', () => {
    expect(() => myFunction(null)).toThrow();
  });
});
```

## Integration with CI/CD

Tests are automatically run in GitHub Actions:

1. **On every push** to main/develop
2. **On every pull request**
3. **Before deployment** to production

Failed tests = ❌ Blocked merge/deployment

## Performance

- Tests should run in < 10 seconds
- Use `it.skip()` for slow tests during development
- Optimize with proper setup/teardown

## Resources

- [Vitest Docs](https://vitest.dev/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [Test-Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)

