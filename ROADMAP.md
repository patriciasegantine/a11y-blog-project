# Project Roadmap

_The No-Manual Life Blog_

This project evolves through deliberately structured engineering phases.  
Each phase focuses on strengthening a specific technical dimension, from accessibility foundations to scalable frontend
architecture.

---

## 🟢 Phase 1 — Accessibility-First Foundation

**Goal:** Establish a semantically robust and fully accessible foundation.

### Completed

- [x] Semantic HTML5 structure
- [x] Proper landmark regions (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- [x] Logical tab order and full keyboard navigation
- [x] Visible, high-contrast focus states
- [x] WCAG 2.1 AA compliance validation
- [x] Screen reader testing (NVDA, VoiceOver)
- [x] Skip links implementation
- [x] Accessible typography and spacing
- [x] Responsive, mobile-first layout
- [x] Lighthouse 100 (Accessibility)
- [x] Accessibility testing with Axe

---

## 🔵 Phase 2 — UX & Interaction Layer

**Goal:** Complete core user flows and interaction patterns before deepening data architecture.

### Planned / In Progress

- [ ] Accessibility introduction modal (project purpose and keyboard navigation)
- [ ] Dark / light theme support with consistent contrast and focus behaviour
- [x] FAQ refinements (accordion behaviour and focus handling)
- [ ] Focus management and keyboard trapping for modal dialogs
- [ ] Accessible contact form
- [ ] Form validation with accessible error messaging
- [ ] Success and error feedback states
- [ ] Posts listing page
- [ ] Search and filtering (category / tag)
- [ ] Empty and loading states with predictable UI behaviour

---

## 🟣 Phase 3 — Data Layer & Frontend Architecture

**Goal:** Separate concerns and prepare the system for scalable content management.

### Planned

- [ ] Data layer abstraction (separate mock data from UI)
- [ ] Clear post data model definition
- [ ] Service abstraction for data access
- [ ] Slug-based routing (SEO-first)
- [ ] Static generation strategy (SSG)
- [ ] Optional MDX or structured content source
- [ ] Structured data (JSON-LD)

---

## 🟡 Phase 4 — Performance & Engineering Quality

**Goal:** Maintain production-grade performance and observable frontend behaviour.

### Planned

- [ ] Performance budget definition
- [ ] Bundle size analysis
- [ ] Caching strategy refinement
- [ ] Prefetching optimisation
- [ ] Error boundary strategy review
- [ ] Web Vitals monitoring

---

## 🔴 Phase 5 — Progressive & Product-Level Enhancements (Optional)

Future explorations, only if they add meaningful value:

- [ ] Dark / light mode refinement
- [ ] Reduced motion support
- [ ] RSS feed
- [ ] PWA configuration
- [ ] User preference settings (font size, spacing)
- [ ] Accessible comment system
- [ ] Authentication layer
- [ ] Headless CMS integration
- [ ] Edge rendering exploration
- [ ] Observability & logging

---

## 📌 Engineering Philosophy

Accessibility is treated as a **foundational constraint**, not an enhancement.

Each phase is intentionally incremental, reinforcing:

- System thinking
- Inclusive design
- Performance discipline
- Scalable frontend architecture
- Measurable quality standards

This roadmap reflects a commitment to evolving the project with engineering intention rather than feature accumulation.
