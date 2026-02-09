# The No-manual Life Blog – A11y Practice Project

![Blog preview](./public/assets/images/blog.png)

A modern Next.js blog built as a hands-on project to review, practice, and refine accessibility (a11y) skills. This
project demonstrates clean, semantic components, thoughtful colour contrast, keyboard navigation, and pragmatic ARIA
usage where appropriate. It serves as a practical, evolving reference for accessible frontend patterns and best
practices.

## 🎯 About

This project was created with a focus on **accessibility practices** as the primary learning objective. Rather than a
production-focused blog, it's a deliberate exercise in building inclusive digital experiences—exploring semantic HTML,
WCAG guidelines, assistive technology compatibility, and user-centered design principles.

The project explores:

- **Semantic HTML5** and proper document structure
- **WCAG 2.1 AA/AAA compliance** guidelines
- **Screen reader compatibility** (NVDA, JAWS, VoiceOver)
- **Keyboard navigation** patterns
- **User-centered design principles** with focus on cognitive accessibility
- **Progressive enhancement** and graceful degradation strategies
- **Performance optimization** for users on slow connections or limited devices

## ✨ Features

### Current Features ✅

- **Featured Article Section** – Hero-style featured news card with optimized imagery, engaging title, excerpt, and
  accessible CTA button
- **Dynamic Post Grid** – Responsive, reusable post cards rendered from structured data with consistent styling
- **Semantic HTML Architecture** – Proper use of `<article>`, `<section>`, `<nav>`, and landmark regions
- **Accessible Typography** – Readable font sizes, line heights, and spacing optimized for dyslexia and low vision
- **Responsive Design** – Mobile-first approach with fluid layouts that work on all screen sizes
- **Focus Management** – Visible, high-contrast focus indicators on all interactive elements
- **Optimized Images** – Next.js Image component with lazy loading and proper alt text
- **Type-Safe Development** – Full TypeScript implementation for maintainability and developer experience
- **Individual Post Pages** – Dynamic routing with SEO optimization and structured data

### Planned Features 🚧

- **🌓 Dark/Light Mode** – System preference detection with WCAG-compliant contrast
- **🔍 Search & Filtering** – Full-text search with category and tag filters
- **💬 Comments System** – Accessible comment threads with proper ARIA support
- **🌐 Internationalization** – Multi-language support with RTL layouts
- **📱 PWA Support** – Offline-first progressive web app
- **⚙️ User Preferences** – Customizable font size, spacing, and motion settings
- **🔐 Authentication** – Secure login with accessible forms
- **📰 RSS Feed** – Standard feed for readers and aggregators

## 🌐 Accessibility Practices

This project follows **WCAG 2.1 Level AA** guidelines and implements the four core principles:

**Perceivable** – High contrast ratios, descriptive alt text, scalable typography, and no color-only information

**Operable** – Full keyboard navigation, visible focus indicators, skip links, and no keyboard traps

**Understandable** – Clear language, consistent navigation, helpful error messages, and logical content flow

**Robust** – Semantic HTML, strategic ARIA usage, valid markup, and tested with screen readers (NVDA, JAWS, VoiceOver)

> 💡 This is a learning project focused on practicing and refining accessible web development patterns

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site. Edits to `src/app/page.tsx` and components will hot-reload automatically.

## Tech Stack

- **[Next.js](https://nextjs.org/)** (App Router) – React framework
- **[TypeScript](https://www.typescriptlang.org/)** – Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first styling
- **[@axe-core/react](https://www.npmjs.com/package/@axe-core/react)** – Accessibility testing
- **[FontAwesome](https://fontawesome.com/)** – Icon system
- **[Day.js](https://day.js.org/)** – Date formatting

## 📜 Scripts

| Command         | Description                                         |
|-----------------|-----------------------------------------------------|
| `npm run dev`   | Start development server at `http://localhost:3000` |
| `npm run build` | Create optimized production build                   |
| `npm run start` | Start production server                             |
| `npm run lint`  | Run ESLint for code quality and a11y checks         |

## 🗺️ Project Structure

MIT

---

<div align="center">

**Created by [Patricia Segantine](https://github.com/yourusername)**

*Building a more accessible web, one component at a time* 🌐

</div>
