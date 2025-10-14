---
title: "CI/CD Setup"
description: "Автоматизация на тестване и deployment с GitHub Actions"
date: 2025-10-14
author: "DevOps Course"
tags: ["ci-cd", "github-actions", "automation", "devops"]
---

# CI/CD Pipeline Setup

Този проект използва **GitHub Actions** за автоматизация на тестване и deployment.

## 🔄 Какво се случва автоматично?

### При всеки Push или Pull Request:

1. **🔎 Type Checking** - Проверка на TypeScript типове с Astro
2. **🧪 Testing** - Пускане на всички unit тестове с Vitest
3. **🏗️ Build** - Компилиране и валидация на проекта
4. **✅ Validate** - Финална проверка преди deployment

### При Push към `main` branch:

1. Пускат се **всички горни проверки**
2. При успех - **deployment към GitHub Pages**

## 📋 Workflows

### CI Pipeline (`.github/workflows/ci.yml`)

```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]
```

**Jobs:**
- `typecheck` - TypeScript проверка с Astro
- `test` - Vitest unit тестове
- `build` - Astro build и валидация
- `validate` - Финална проверка преди deploy

### Deploy Pipeline (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
```

**Steps:**
1. Checkout на кода
2. Setup на Node.js 20
3. Инсталиране на dependencies
4. Пускане на validation (`npm run validate`)
5. Build на проекта
6. Deploy към GitHub Pages

## 🛠️ Локално тестване

Преди да push-неш промени, пусни validation локално:

```bash
# Пълна валидация (всички проверки)
npm run validate

# Или поотделно:
npm run typecheck     # TypeScript проверка
npm run test          # Vitest тестове
npm run build         # Astro build
```

## 🚀 Setup за GitHub Pages

1. Отиди в **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Push към `main` branch
4. Сайтът ще се deploy автоматично на `https://<username>.github.io/<repo>/`

## 📊 Badge-ове

Добави тези badge-ове в README:

```markdown
![CI/CD](https://github.com/<username>/<repo>/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/<username>/<repo>/actions/workflows/deploy.yml/badge.svg)
```

## 🎯 Best Practices

1. ✅ **Никога не skip-вай CI checks**
2. ✅ **Fix-вай всички проблеми преди merge**
3. ✅ **Review GitHub Actions logs при грешки**
4. ✅ **Добавяй тестове за нова функционалност**
5. ✅ **Използвай Pull Requests за code review**

## 📝 Допълнителни команди

```bash
# Watch mode за тестове (по време на разработка)
npm run test:watch

# UI за тестове (интерактивен режим)
npm run test:ui

# Code coverage report
npm run test:coverage

# Dev сървър за локална разработка
npm run dev

# Preview на build-натия сайт
npm run preview
```

## 🔐 Secrets & Environment Variables

За deployment с env variables, добави ги в:
**Settings** → **Secrets and variables** → **Actions**

```yaml
- name: Use secret
  run: echo "${{ secrets.MY_SECRET }}"
  env:
    MY_SECRET: ${{ secrets.MY_SECRET }}
```

## 📚 Полезни ресурси

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vitest Documentation](https://vitest.dev/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Astro Deployment](https://docs.astro.build/en/guides/deploy/)

---

**Бележка:** Този setup е готов за production use! 🎉

