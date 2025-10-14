#!/bin/bash

# Опционален setup за Git hooks с husky
# Пусни този скрипт за да добавиш pre-commit hooks

echo "🔧 Installing husky and lint-staged..."

npm install --save-dev husky lint-staged

echo "🎣 Setting up git hooks..."

npx husky init
echo "npm run lint:fix && npm run test" > .husky/pre-commit
chmod +x .husky/pre-commit

echo "✅ Git hooks setup complete!"
echo "Сега всеки commit ще минава през lint и test проверки."

